"use client";

import Link from 'next/link';
import { ArrowRight, BatteryCharging, Building2, Factory, Shield, Target, TowerControl, Users } from 'lucide-react';
import Section from '../../components/Section';
import CtaStrip from '../../components/CtaStrip';

function ScenarioCard({
  title,
  subtitle,
  icon,
  href,
  bullets,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  href: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-textPrimary">{title}</h3>
      <p className="mt-2 text-sm text-textSecondary">{subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm text-textSecondary">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accentCool" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link href={href} className="inline-flex items-center gap-2 text-accent1 font-semibold hover:underline">
          View scenario <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function MarketsPage() {
  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-accentCool/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent1/10 blur-3xl" />

      <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1922] via-[#111d28] to-[#0f151d] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">Markets</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-textPrimary sm:text-5xl">
          Choose your scenario
          <span className="text-accent1">_</span>
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-textSecondary">
          The perception problem is the same—small drones are hard to detect in clutter—but deployments differ by
          environment, constraints, and integration surfaces. Start with the closest scenario and we’ll map it to a pilot
          plan.
        </p>
      </section>

      <Section
        id="defense"
        title="Defense & tactical scenarios"
        subtitle="Mobile, distributed, battery-powered sensors can be deployed on demand in the field. Degraded communications, mobility, and multi-target behavior are the baseline."
        wrapperClassName="pt-16"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ScenarioCard
            title="Mobile field deployment"
            subtitle="Deploy a distributed, battery-powered sensor mesh on demand in the field."
            icon={<BatteryCharging className="h-5 w-5" />}
            href="/markets/interceptor-guidance"
            bullets={[
              'Rapid setup with mobile nodes and flexible placement',
              'Distributed coverage that keeps operating under comms stress',
              'Battery-powered operation for temporary and shifting missions',
            ]}
          />
          <ScenarioCard
            title="Interceptor data & AI guidance"
            subtitle="Decision-ready tracks and AI guidance to support interceptor workflows."
            icon={<Target className="h-5 w-5" />}
            href="/markets/interceptor-guidance"
            bullets={[
              'Prioritized tracks and confidence scoring for operator focus',
              'AI guidance cues for interceptor assignment and timing',
              'Integration-ready outputs for command and fire-control stacks',
            ]}
          />
          <ScenarioCard
            title="Border / perimeter"
            subtitle="Wide-area monitoring across large boundaries and terrain variability."
            icon={<Building2 className="h-5 w-5" />}
            href="/markets/border-perimeter"
            bullets={[
              'Coverage planning via sensor density',
              'Low-bandwidth track/event exchange',
              'Integration-first exports to existing systems',
            ]}
          />
        </div>
      </Section>

      <Section
        id="civil"
        title="Civil protection scenarios"
        subtitle="Critical infrastructure and public safety contexts where false alarms, privacy, and uptime matter."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ScenarioCard
            title="Airports"
            subtitle="Low-altitude awareness beyond classical radar coverage."
            icon={<TowerControl className="h-5 w-5" />}
            href="/markets/airports"
            bullets={[
              'Track export into existing security/airspace systems',
              'Low false alarms under clutter and heat haze',
              'Continuous coverage with instrumented latency',
            ]}
          />
          <ScenarioCard
            title="Energy & utilities"
            subtitle="Perimeter monitoring for dispersed assets and restricted zones."
            icon={<Factory className="h-5 w-5" />}
            href="/markets/energy"
            bullets={[
              'Fixed-site sensor mesh around assets',
              'Edge-first processing for data sovereignty',
              'Integration into site security and alerting',
            ]}
          />
          <ScenarioCard
            title="Prisons"
            subtitle="Stop drop-offs and reconnaissance with reliable tracking."
            icon={<Shield className="h-5 w-5" />}
            href="/markets/prisons"
            bullets={[
              'High clutter tolerance near walls/buildings',
              'Track-based alerting and evidence archiving',
              'Designed for continuous operation',
            ]}
          />
          <ScenarioCard
            title="Major events"
            subtitle="Temporary protection for crowds and high-profile venues."
            icon={<Users className="h-5 w-5" />}
            href="/markets/events"
            bullets={[
              'Rapid deployment and temporary nodes',
              'Clear operator workflow and audit trail',
              'Integration into event security operations',
            ]}
          />
        </div>
      </Section>

      <CtaStrip
        kicker="Next step"
        title="Tell us your scenario and constraints"
        desc={
          <>
            We’ll respond with a concrete pilot proposal: recommended deployment form, interface outputs, and measurable
            success criteria (latency, false alarms, coverage, degraded comms behavior).
          </>
        }
        primary={{ href: '/contact?intent=pilot-discussion', label: 'Discuss a pilot' }}
        secondary={{ href: '/product', label: 'See product architecture' }}
      />

      <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm">
        <Link
          href="/"
          className="rounded-lg border border-white/20 px-4 py-2 text-textPrimary transition-colors hover:border-accentCool/50 hover:text-accentCool"
        >
          Back to Home
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
