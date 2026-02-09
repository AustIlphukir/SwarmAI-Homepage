"use client";

import { useEffect, useMemo, useState } from 'react';

type Persona = 'operator' | 'integrator' | 'defense' | 'other';
type Intent = 'talk' | 'access' | 'pilot';

function normalizeIntent(raw: string | null): Intent | null {
  if (!raw) return null;
  const v = raw.trim().toLowerCase();
  if (v === 'talk' || v === 'talk-to-an-engineer') return 'talk';
  if (v === 'request-access' || v === 'access') return 'access';
  if (v === 'pilot' || v === 'pilot-discussion') return 'pilot';
  return null;
}

export default function ContactPage() {
  const [persona, setPersona] = useState<Persona>('operator');
  const [intent, setIntent] = useState<Intent>('talk');
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [scenario, setScenario] = useState('');
  const [timeline, setTimeline] = useState('');
  const [constraints, setConstraints] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const params = new URLSearchParams(window.location.search);
      const intentParam = normalizeIntent(params.get('intent'));
      if (intentParam) setIntent(intentParam);
    } catch (_) {}
  }, []);

  const title = useMemo(() => {
    if (intent === 'access') return 'Request Access';
    if (intent === 'pilot') return 'Discuss a Pilot';
    return 'Talk to an Engineer';
  }, [intent]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          persona,
          intent,
          name,
          org,
          email,
          scenario,
          timeline,
          constraints,
          message,
        }),
      });

      if (!res.ok) {
        setSubmitError('Submission failed. Please try again.');
        return;
      }

      setSubmitted(true);
    } catch (_) {
      setSubmitError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thank you!</h1>
        <p className="text-textSecondary">
          Your message has been received. We will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center">{title}</h1>
      <p className="text-textSecondary mb-8 text-center">
        Share your scenario and constraints. We’ll respond with a concrete next step (pilot plan, integration surface, or
        access details).
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="persona">
              I am
            </label>
            <select
              id="persona"
              className="w-full px-4 py-2 rounded-md bg-background border border-card/50 focus:border-accent1 focus:ring-accent1 outline-none"
              value={persona}
              onChange={(e) => setPersona(e.target.value as Persona)}
              required
            >
              <option value="operator">Operator / security team</option>
              <option value="defense">Defense / military</option>
              <option value="integrator">Integrator / OEM</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="intent">
              Intent
            </label>
            <select
              id="intent"
              className="w-full px-4 py-2 rounded-md bg-background border border-card/50 focus:border-accent1 focus:ring-accent1 outline-none"
              value={intent}
              onChange={(e) => setIntent(e.target.value as Intent)}
              required
            >
              <option value="talk">Talk to an engineer</option>
              <option value="pilot">Discuss a pilot</option>
              <option value="access">Request access</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 rounded-md bg-background border border-card/50 focus:border-accent1 focus:ring-accent1 outline-none"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="org">
              Organization
            </label>
            <input
              id="org"
              type="text"
              className="w-full px-4 py-2 rounded-md bg-background border border-card/50 focus:border-accent1 focus:ring-accent1 outline-none"
              value={org}
              onChange={e => setOrg(e.target.value)}
              placeholder="Company / agency (optional)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 rounded-md bg-background border border-card/50 focus:border-accent1 focus:ring-accent1 outline-none"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="scenario">
              Scenario (optional)
            </label>
            <select
              id="scenario"
              className="w-full px-4 py-2 rounded-md bg-background border border-card/50 focus:border-accent1 focus:ring-accent1 outline-none"
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
            >
              <option value="">Select…</option>
              <option value="airports">Airports</option>
              <option value="energy">Energy &amp; utilities</option>
              <option value="prisons">Prisons</option>
              <option value="events">Major events</option>
              <option value="tactical-base">Tactical base</option>
              <option value="border-perimeter">Border / perimeter</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="timeline">
              Timeline (optional)
            </label>
            <select
              id="timeline"
              className="w-full px-4 py-2 rounded-md bg-background border border-card/50 focus:border-accent1 focus:ring-accent1 outline-none"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
            >
              <option value="">Select…</option>
              <option value="0-1m">0–1 months</option>
              <option value="1-3m">1–3 months</option>
              <option value="3-6m">3–6 months</option>
              <option value="6m+">6+ months</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="constraints">
            Constraints (optional)
          </label>
          <textarea
            id="constraints"
            className="w-full px-4 py-2 rounded-md bg-background border border-card/50 focus:border-accent1 focus:ring-accent1 outline-none h-28"
            value={constraints}
            onChange={e => setConstraints(e.target.value)}
            placeholder="Range, clutter environment, false-alarm tolerance, comms constraints, export formats, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 rounded-md bg-background border border-card/50 focus:border-accent1 focus:ring-accent1 outline-none h-32"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Anything else we should know?"
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-2 px-4 rounded-md bg-accent1 text-background hover:bg-accent1/80 transition-colors"
        >
          {submitting ? 'Sending…' : 'Send'}
        </button>

        {submitError && <p className="text-sm text-red-500 text-center">{submitError}</p>}

        <p className="text-xs text-textSecondary text-center">
          By submitting, you agree that we may contact you about this request. See our privacy policy for details.
        </p>
      </form>
    </div>
  );
}
