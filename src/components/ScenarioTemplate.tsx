import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Section from './Section';
import CtaStrip from './CtaStrip';

type DeploymentOption = {
  title: string;
  desc: string;
};

type PilotStep = {
  title: string;
  desc: string;
};

export default function ScenarioTemplate({
  category,
  title,
  subtitle,
  intro,
  constraints,
  deployment,
  outputs,
  pilot,
}: {
  category: string;
  title: string;
  subtitle: string;
  intro: string;
  constraints: string[];
  deployment: DeploymentOption[];
  outputs: string[];
  pilot: PilotStep[];
}) {
  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-accentCool/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent1/10 blur-3xl" />

      <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1922] via-[#111d28] to-[#0f151d] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">{category}</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-textPrimary sm:text-5xl">
          {title}
          <span className="text-accent1">_</span>
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-textSecondary">{subtitle}</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-textSecondary">{intro}</p>
      </section>

      <Section
        title="Threat and constraints"
        subtitle="What matters operationally in this scenario."
        wrapperClassName="pt-16"
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <ul className="grid gap-3 md:grid-cols-2 text-sm text-textSecondary">
            {constraints.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accentCool" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Recommended deployment" subtitle="A modular packaging strategy based on your environment.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deployment.map((d) => (
            <div key={d.title} className="rounded-2xl border border-white/10 bg-black/25 p-6">
              <p className="text-sm font-semibold text-textPrimary">{d.title}</p>
              <p className="mt-2 text-sm text-textSecondary">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Outputs and integration" subtitle="What your operators and systems receive.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-textPrimary">Track/event intelligence</p>
              <p className="mt-2 text-sm text-textSecondary">
                We export structured track/event data for alerts, dashboards, and C2/security stacks.
              </p>
              <div className="mt-3 rounded-lg border border-white/10 bg-background/40 p-4 font-mono text-xs text-textSecondary">
                {'{track_id, pos, vel, class, threat, conf, ts}'}
              </div>
              <p className="mt-2 text-xs text-textSecondary">
                Export formats are integration-driven (e.g. ASTERIX CAT062 / STANAG 5516 / STANAG 4586 as targets).
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-textPrimary">Operational outputs</p>
              <ul className="mt-3 space-y-2 text-sm text-textSecondary">
                {outputs.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accentCool" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Pilot plan" subtitle="A staged approach with measurable outcomes.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <ol className="grid gap-4 md:grid-cols-3">
            {pilot.map((step, idx) => (
              <li key={step.title} className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <p className="mt-2 text-sm font-semibold text-textPrimary">{step.title}</p>
                <p className="mt-2 text-sm text-textSecondary">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <CtaStrip
        kicker="Next step"
        title="Discuss this scenario with us"
        desc={
          <>
            We’ll propose a deployment form, integration outputs, and measurable success criteria for your environment.
          </>
        }
        primary={{ href: '/contact?intent=pilot-discussion', label: 'Discuss a pilot' }}
        secondary={{ href: '/contact?intent=talk-to-an-engineer', label: 'Talk to an engineer' }}
      />

      <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm">
        <Link
          href="/markets"
          className="rounded-lg border border-white/20 px-4 py-2 text-textPrimary transition-colors hover:border-accentCool/50 hover:text-accentCool"
        >
          Back to Scenarios
        </Link>
        <Link
          href="/contact?intent=talk-to-an-engineer"
          className="inline-flex items-center gap-2 rounded-lg border border-accent1/40 bg-accent1/10 px-4 py-2 text-accent1 transition-colors hover:bg-accent1/20"
        >
          Get in Touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
