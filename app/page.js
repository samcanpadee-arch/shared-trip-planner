'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  accommodation,
  budgetOptions,
  costGuide,
  hardNoOptions,
  votingSections
} from './siteData';
import AccommodationCard from './components/AccommodationCard';
import CostGuideTable from './components/CostGuideTable';
import OptionCard from './components/OptionCard';
import ProgressCard from './components/ProgressCard';
import SectionHeader from './components/SectionHeader';

const initialForm = {
  name: '',
  travelNotes: '',
  hardConstraints: '',
  fridayNight: '',
  saturdayMorning: '',
  saturdayLunch: '',
  saturdayDrinks: '',
  saturdayNight: '',
  sundayRecovery: '',
  budgetComfort: '',
  hardNos: [],
  finalComments: ''
};

export default function HomePage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const requiredKeys = useMemo(
    () => ['name', 'fridayNight', 'saturdayMorning', 'saturdayLunch', 'saturdayDrinks', 'saturdayNight', 'sundayRecovery', 'budgetComfort'],
    []
  );

  const selectOption = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleHardNo = (value) => {
    setForm((prev) => ({
      ...prev,
      hardNos: prev.hardNos.includes(value) ? prev.hardNos.filter((item) => item !== value) : [...prev.hardNos, value]
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const missing = requiredKeys.filter((key) => !form[key]);
    if (missing.length > 0) {
      setError('Add your name and vote across each core section before submitting.');
      return;
    }

    const payload = {
      name: form.name,
      travelNotes: form.travelNotes,
      hardConstraints: form.hardConstraints,
      fridayNight: form.fridayNight,
      saturdayMorning: form.saturdayMorning,
      saturdayLunch: form.saturdayLunch,
      saturdayDrinks: form.saturdayDrinks,
      saturdayNight: form.saturdayNight,
      sundayRecovery: form.sundayRecovery,
      budgetComfort: form.budgetComfort,
      hardNos: form.hardNos,
      finalComments: form.finalComments,
      submittedAt: new Date().toISOString()
    };

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    setStatus('loading');
    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error('Submission failed');
        }
      } else {
        console.log('Mock submit payload:', payload);
      }

      setStatus('success');
      setForm(initialForm);
    } catch (submitError) {
      console.error(submitError);
      setStatus('idle');
      setError('Could not submit right now. Try again in a minute.');
    }
  };

  return (
    <main className="page-shell">
      <div className="main-nav">
        <h1>Vihan’s Yarra Valley Bucks</h1>
        <nav>
          <a href="#vote">Vote</a>
          <Link href="/itinerary">Itinerary</Link>
        </nav>
      </div>

      <div className="layout-grid">
        <div className="content-col">
          <section className="hero-block">
            <p className="section-label">Trip hub + voting</p>
            <h2>26–28 June 2026 · Yarra Glen</h2>
            <p>A very serious planning website for a deeply unserious weekend.</p>
            <blockquote>
              “Vote on the rough plan now… Built because planning manually is painful and procrastination is a powerful drug.”
            </blockquote>
          </section>

          <AccommodationCard accommodation={accommodation} />

          {status === 'success' ? (
            <section className="success-card">
              <h3>Votes submitted.</h3>
              <p>
                Legend. Once everyone has voted, the plan will get locked in and this site becomes the final itinerary
                hub.
              </p>
            </section>
          ) : null}

          <form id="vote" onSubmit={handleSubmit} className="vote-form">
            <section className="field-grid">
              <label>
                Name (identity for public shaming)
                <input value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="e.g. Dave" />
              </label>
              <label>
                Travel notes (who are you carpooling with?)
                <input
                  value={form.travelNotes}
                  onChange={(e) => setForm((prev) => ({ ...prev, travelNotes: e.target.value }))}
                  placeholder="Driving from Northcote..."
                />
              </label>
              <label>
                Hard constraints (allergies/anxieties)
                <input
                  value={form.hardConstraints}
                  onChange={(e) => setForm((prev) => ({ ...prev, hardConstraints: e.target.value }))}
                  placeholder="No mushrooms, terrified of goats"
                />
              </label>
            </section>

            {votingSections.map((section) => (
              <section key={section.key} className="vote-section">
                <SectionHeader label={section.icon} title={`${section.title}: ${section.subtitle}`} />
                <div className="options-grid">
                  {section.options.map((option) => (
                    <OptionCard
                      key={option.id}
                      option={option}
                      isSelected={form[section.key] === option.id}
                      onSelect={() => selectOption(section.key, option.id)}
                    />
                  ))}
                </div>
              </section>
            ))}

            <section className="vote-section">
              <SectionHeader title="Budget comfort" label="💸" subtitle="Pick your comfort zone" />
              <div className="pill-grid">
                {budgetOptions.map((option) => (
                  <button
                    type="button"
                    key={option.id}
                    className={`pill ${form.budgetComfort === option.id ? 'selected' : ''}`}
                    onClick={() => selectOption('budgetComfort', option.id)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </section>

            <section className="vote-section">
              <SectionHeader title="Hard no list" label="🚫" subtitle="Checkbox the things that are absolutely off limits" />
              <div className="pill-grid">
                {hardNoOptions.map((option) => (
                  <button
                    type="button"
                    key={option}
                    className={`pill ${form.hardNos.includes(option) ? 'selected danger' : ''}`}
                    onClick={() => toggleHardNo(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </section>

            <section className="vote-section">
              <SectionHeader title="Final comments" label="✍️" subtitle="Last notes before lock-in" />
              <textarea
                rows={4}
                value={form.finalComments}
                onChange={(e) => setForm((prev) => ({ ...prev, finalComments: e.target.value }))}
                placeholder="Anything else the group should know..."
              />
            </section>

            {error ? <p className="error-message">{error}</p> : null}

            <button type="submit" className="submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting...' : 'Submit votes'}
            </button>
          </form>

          <section className="vote-section">
            <SectionHeader label="Cost" title="Cost guide" subtitle="Indicative only. Not a checkout... Please do not invoice Sam." />
            <CostGuideTable rows={costGuide} />
          </section>
        </div>

        <div className="sticky-col">
          <ProgressCard form={form} />
        </div>
      </div>
    </main>
  );
}
