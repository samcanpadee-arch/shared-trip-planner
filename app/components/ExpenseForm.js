'use client';

import { useEffect, useMemo, useState } from 'react';

const emptyForm = {
  description: '',
  amount: '',
  paidBySelect: '',
  paidByCustom: '',
  paidByText: '',
  splitAmong: [],
  splitEveryone: true
};

const normalizeUnique = (names = []) =>
  Array.from(
    new Map(
      names
        .filter(Boolean)
        .map((name) => String(name).trim())
        .filter(Boolean)
        .map((name) => [name.toLowerCase(), name])
    ).values()
  );

export default function ExpenseForm({ editingExpense, onSave, onCancelEdit, knownNames = [] }) {
  const [participants, setParticipants] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  const [hasResultsParticipants, setHasResultsParticipants] = useState(false);

  useEffect(() => {
    const loadParticipants = async () => {
      try {
        const response = await fetch('/api/results', { cache: 'no-store' });
        if (!response.ok) throw new Error('Failed results');
        const data = await response.json();
        const nextParticipants = normalizeUnique(data?.voterNames || []);
        setParticipants(nextParticipants);
        setHasResultsParticipants(nextParticipants.length > 0);
      } catch (fetchError) {
        console.error(fetchError);
        setParticipants([]);
        setHasResultsParticipants(false);
      }
    };

    loadParticipants();
  }, []);

  const fallbackMode = !hasResultsParticipants;

  const derivedParticipants = useMemo(() => {
    if (fallbackMode) return [];
    const extraOther = form.paidBySelect === 'other' ? form.paidByCustom.trim() : '';
    return normalizeUnique([...participants, extraOther]);
  }, [fallbackMode, participants, form.paidBySelect, form.paidByCustom]);

  useEffect(() => {
    if (fallbackMode) return;

    setForm((prev) => {
      if (!prev.splitAmong.length) {
        return { ...prev, splitAmong: derivedParticipants };
      }

      const valid = new Set(derivedParticipants.map((name) => name.toLowerCase()));
      const kept = prev.splitAmong.filter((name) => valid.has(name.toLowerCase()));
      return { ...prev, splitAmong: kept.length ? kept : derivedParticipants };
    });
  }, [fallbackMode, derivedParticipants]);

  useEffect(() => {
    if (!editingExpense) {
      setForm((prev) => ({
        ...emptyForm,
        splitAmong: fallbackMode ? [] : derivedParticipants
      }));
      return;
    }

    const editingPayer = editingExpense.paidBy || '';
    const participantMatch = participants.find((name) => name.toLowerCase() === editingPayer.toLowerCase());

    setForm({
      description: editingExpense.description || '',
      amount: String(editingExpense.amount ?? ''),
      paidBySelect: participantMatch ? participantMatch : 'other',
      paidByCustom: participantMatch ? '' : editingPayer,
      paidByText: editingPayer,
      splitAmong: editingExpense.splitAmong?.length ? editingExpense.splitAmong : derivedParticipants,
      splitEveryone: true
    });
  }, [editingExpense, participants, derivedParticipants, fallbackMode]);

  const toggleSplitMember = (name) => {
    setForm((prev) => ({
      ...prev,
      splitAmong: prev.splitAmong.includes(name)
        ? prev.splitAmong.filter((member) => member !== name)
        : [...prev.splitAmong, name]
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const paidBy = fallbackMode
      ? form.paidByText.trim()
      : form.paidBySelect === 'other'
        ? form.paidByCustom.trim()
        : form.paidBySelect;

    if (!paidBy) {
      setError('Please add who paid.');
      return;
    }

    let splitAmong = [];
    if (fallbackMode) {
      const everyonePool = normalizeUnique(knownNames);
      splitAmong = form.splitEveryone ? (everyonePool.length ? everyonePool : [paidBy]) : [paidBy];
    } else {
      splitAmong = form.splitAmong.length ? form.splitAmong : [paidBy];
    }

    try {
      await onSave({
        id: editingExpense?.id || undefined,
        description: form.description,
        amount: Number(form.amount),
        paidBy,
        splitType: 'equal',
        splitAmong
      });

      setForm({
        ...emptyForm,
        splitAmong: fallbackMode ? [] : derivedParticipants
      });
    } catch (saveError) {
      console.error(saveError);
      setError("Couldn't save that. Try again.");
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="expense-grid stacked-fields">
        <label>
          Description
          <input
            value={form.description}
            onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
            placeholder="Grocery run, cellar door, that round nobody agreed to"
            required
          />
        </label>
        <label>
          Amount (AUD)
          <input
            type="number"
            step="0.01"
            min="0"
            value={form.amount}
            onChange={(event) => setForm((prev) => ({ ...prev, amount: event.target.value }))}
            placeholder="120"
            required
          />
        </label>

        {fallbackMode ? (
          <label>
            Paid by
            <input
              value={form.paidByText}
              onChange={(event) => setForm((prev) => ({ ...prev, paidByText: event.target.value }))}
              placeholder="Name of whoever paid"
              required
            />
          </label>
        ) : (
          <>
            <label>
              Paid by
              <select
                value={form.paidBySelect}
                onChange={(event) => setForm((prev) => ({ ...prev, paidBySelect: event.target.value }))}
                required
              >
                <option value="" disabled>
                  Select a person
                </option>
                {participants.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </label>

            {form.paidBySelect === 'other' ? (
              <label>
                Other name
                <input
                  value={form.paidByCustom}
                  onChange={(event) => setForm((prev) => ({ ...prev, paidByCustom: event.target.value }))}
                  placeholder="Enter name"
                  required
                />
              </label>
            ) : null}
          </>
        )}
      </div>

      <div className="split-members split-among-block">
        <p className="section-label">Split among</p>

        {fallbackMode ? (
          <label className="split-fallback-toggle">
            <input
              type="checkbox"
              checked={form.splitEveryone}
              onChange={(event) => setForm((prev) => ({ ...prev, splitEveryone: event.target.checked }))}
            />
            Split among everyone
          </label>
        ) : (
          <div className="split-checkbox-list">
            {derivedParticipants.map((name) => (
              <label key={name}>
                <input
                  type="checkbox"
                  checked={form.splitAmong.includes(name)}
                  onChange={() => toggleSplitMember(name)}
                />
                {name}
              </label>
            ))}
          </div>
        )}
      </div>

      {error ? <p className="error-message">{error}</p> : null}

      <div className="split-toggle">
        <button type="submit" className="submit-btn">
          {editingExpense?.id ? 'Update expense' : 'Add expense'}
        </button>
        {editingExpense?.id ? (
          <button type="button" className="pill" onClick={onCancelEdit}>
            Cancel edit
          </button>
        ) : null}
      </div>
    </form>
  );
}
