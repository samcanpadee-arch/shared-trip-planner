'use client';

import { useEffect, useState } from 'react';
import { accommodation, essentialsChecklist, itineraryTimeline, votingSections } from '../siteData';
import AccommodationCard from '../components/AccommodationCard';
import ExpenseForm from '../components/ExpenseForm';
import ItineraryTimeline from '../components/ItineraryTimeline';
import SectionHeader from '../components/SectionHeader';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

export default function ItineraryPage() {
  const [results, setResults] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [expensesLoading, setExpensesLoading] = useState(true);
  const [expenseError, setExpenseError] = useState('');

  const participantNames = Array.from(
    new Map(
      [...(results?.voterNames || []), ...expenses.flatMap((expense) => [expense.paidBy, ...(expense.splitAmong || [])])]
        .filter(Boolean)
        .map((name) => [name.trim().toLowerCase(), name.trim()])
    ).values()
  );

  const settlement = (() => {
    const ledger = {};
    for (const expense of expenses) {
      const splitMembers = expense.splitAmong?.length ? expense.splitAmong : [expense.paidBy];
      const share = expense.amount / splitMembers.length;

      ledger[expense.paidBy] = (ledger[expense.paidBy] || 0) + expense.amount;
      for (const person of splitMembers) {
        ledger[person] = (ledger[person] || 0) - share;
      }
    }

    const creditors = Object.entries(ledger)
      .filter(([, balance]) => balance > 0.009)
      .map(([name, amount]) => ({ name, amount }));
    const debtors = Object.entries(ledger)
      .filter(([, balance]) => balance < -0.009)
      .map(([name, amount]) => ({ name, amount: Math.abs(amount) }));

    const rows = [];
    let creditorIndex = 0;
    let debtorIndex = 0;

    while (creditorIndex < creditors.length && debtorIndex < debtors.length) {
      const creditor = creditors[creditorIndex];
      const debtor = debtors[debtorIndex];
      const amount = Math.min(creditor.amount, debtor.amount);

      rows.push({
        from: debtor.name,
        to: creditor.name,
        amount: Number(amount.toFixed(2))
      });

      creditor.amount -= amount;
      debtor.amount -= amount;

      if (creditor.amount < 0.01) creditorIndex += 1;
      if (debtor.amount < 0.01) debtorIndex += 1;
    }

    return rows;
  })();

  useEffect(() => {
    const loadResults = async () => {
      try {
        const response = await fetch('/api/results', { cache: 'no-store' });
        if (!response.ok) return;
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    const loadExpenses = async () => {
      setExpensesLoading(true);
      try {
        const response = await fetch('/api/expenses', { cache: 'no-store' });
        if (!response.ok) throw new Error('Could not load expenses');
        const data = await response.json();
        setExpenses(data.expenses || []);
      } catch (error) {
        console.error(error);
        setExpenseError("Couldn't save that. Try again.");
      } finally {
        setExpensesLoading(false);
      }
    };

    loadResults();
    loadExpenses();
  }, []);

  const saveExpense = async (payload) => {
    setExpenseError('');
    try {
      const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Expense save failed');
      const data = await response.json();

      setExpenses((prev) => {
        const withoutCurrent = prev.filter((item) => item.id !== data.expense.id);
        return [data.expense, ...withoutCurrent];
      });
      setEditingExpense(null);
    } catch (error) {
      console.error(error);
      setExpenseError("Couldn't save that. Try again.");
      throw error;
    }
  };

  const deleteExpense = async (id) => {
    if (!window.confirm('Delete this expense?')) return;

    try {
      const response = await fetch(`/api/expenses?id=${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Delete failed');
      setExpenses((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
      setExpenseError("Couldn't save that. Try again.");
    }
  };

  return (
    <main className="page-shell">
      <TopNav activeHref="/itinerary" />

      <section className="hero-block muted-bg">
        <p className="section-label">Work in progress</p>
        <h2>The weekend, in one place.</h2>
        <p>
          Once the votes are counted and things are confirmed, this is the link. Bookmark it now so you&apos;re not the one
          asking where the house is at 4pm on a Friday.
        </p>
      </section>

      <section className="itinerary-top-grid">
        <AccommodationCard accommodation={accommodation} />
        <aside className="essentials-card">
          <p className="section-label">The packing list</p>
          <h3>Bring this stuff</h3>
          <ul>
            {essentialsChecklist.map((item) => (
              <li key={item}>
                <span className="material-symbols-outlined">check_circle</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="fine-print">Future you will be grateful. Past you is already forgetting something.</p>
        </aside>
      </section>

      <section className="vote-section standings-card">
        <SectionHeader title="How the votes are looking" label="Live" icon="leaderboard" subtitle="Not live-live. Hit refresh to see the latest. Yes, you have to do it manually. It&apos;s a bucks trip not a Bloomberg terminal." />
        <div className="leaderboard-list">
          {votingSections.map((section) => {
            const sortedEntries = Object.entries(results?.tally?.[section.key] || {})
              .filter(([optionId]) => optionId !== 'other')
              .sort((a, b) => b[1] - a[1]);
            const totalVotes = sortedEntries.reduce((sum, [, count]) => sum + count, 0);
            const sectionSuggestions = results?.otherSuggestions?.[section.key] || [];

            return (
              <article key={section.key} className="leaderboard-category">
                <p className="section-label">{section.title}</p>
                {totalVotes || sectionSuggestions.length ? (
                  <>
                    {totalVotes ? (
                    <div className="leaderboard-options">
                      {sortedEntries.map(([optionId, count], index) => {
                        const optionLabel = section.options.find((option) => option.id === optionId)?.title || optionId;
                        const percentage = Math.round((count / totalVotes) * 100);
                        const isLeader = index === 0;

                        return (
                          <div key={optionId} className="leaderboard-option">
                            <div className="leaderboard-row">
                              <span>
                                {optionLabel}
                                {results?.finalResults?.[section.key] === optionId ? <span className="final-chip">Final</span> : null}
                              </span>
                              <small>
                                {count} {count === 1 ? 'vote' : 'votes'}
                              </small>
                            </div>
                            <div className="leaderboard-bar-track">
                              <div className={`leaderboard-bar ${isLeader ? 'leader' : ''}`} style={{ width: `${percentage}%` }} />
                            </div>
                            {isLeader ? <span className="leaderboard-rank">🏆</span> : null}
                          </div>
                        );
                      })}
                    </div>
                    ) : (
                      <p className="result-empty">No standard option votes yet.</p>
                    )}
                    {sectionSuggestions.length ? (
                      <div className="other-suggestions-list">
                        <p className="section-label">💡 Suggested by the group</p>
                        {sectionSuggestions.map((suggestion, index) => (
                          <p key={`${suggestion.name}-${suggestion.text}-${index}`} className="other-suggestion-item">
                            {suggestion.name}: "{suggestion.text}"
                          </p>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <p className="result-empty">Nobody has voted yet. Suspiciously quiet.</p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {results?.groupNotes?.length ? (
        <section className="vote-section standings-card">
          <SectionHeader title="From the group" label="Notes" icon="forum" subtitle="Suggestions, flags, and opinions nobody asked for but everyone submitted anyway." />
          <div className="group-notes-list">
            {results.groupNotes.map((item, index) => (
              <article key={`${item.name}-${index}`} className="group-note-item">
                <strong>{item.name}:</strong> <span>{item.note}</span>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="vote-section">
        <SectionHeader title="Weekend timeline" label="Timeline" icon="schedule" />
        <ItineraryTimeline timeline={itineraryTimeline} />
      </section>

      <section className="vote-section expenses-card">
        <SectionHeader
          title="Group expenses"
          label="Splitwise but worse"
          icon="receipt_long"
          subtitle="Who paid. Who owes. Sorted."
        />

        {expenseError ? <p className="error-message">{expenseError}</p> : null}

        <ExpenseForm
          editingExpense={editingExpense}
          onSave={saveExpense}
          onCancelEdit={() => setEditingExpense(null)}
          knownNames={participantNames}
        />

        <div className="expenses-layout">
          <article className="expense-list-card">
            <h3>Recent expenses</h3>
            {expensesLoading ? (
              <p>Loading...</p>
            ) : expenses.length ? (
              <ul className="expense-list">
                {expenses.map((expense) => {
                  const isEveryone = expense.splitAmong.length === participantNames.length;
                  const splitSummary = isEveryone ? 'Everyone' : `Split ${expense.splitAmong.length} ways`;

                  return (
                    <li key={expense.id}>
                      <div>
                        <p>{expense.description}</p>
                        <small>
                          {expense.paidBy} paid ${expense.amount.toFixed(2)} · {splitSummary}
                        </small>
                      </div>
                      <div className="expense-actions">
                        <button
                          type="button"
                          className="expense-action-btn"
                          title="Edit"
                          onClick={() => setEditingExpense(expense)}
                        >
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          type="button"
                          className="expense-action-btn danger"
                          title="Delete"
                          onClick={() => deleteExpense(expense.id)}
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No expenses yet. Enjoy it while it lasts.</p>
            )}
          </article>

          <article className="expense-list-card">
            <h3>Who owes who</h3>
            {settlement.length ? (
              <ul className="settlement-list">
                {settlement.map((row, index) => (
                  <li key={`${row.from}-${row.to}-${index}`}>
                    <strong>{row.from}</strong> owes <strong>{row.to}</strong> ${row.amount.toFixed(2)}
                  </li>
                ))}
              </ul>
            ) : expenses.length ? (
              <p>All settled up. Suspicious.</p>
            ) : (
              <p>Everyone&apos;s square. Either nothing&apos;s been spent or someone did the maths wrong.</p>
            )}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
