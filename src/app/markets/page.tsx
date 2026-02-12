"use client";

import Link from 'next/link';
import { ArrowRight, BatteryCharging, Building2, Factory, Shield, Target, TowerControl, Users } from 'lucide-react';
import Section from '../../components/Section';
import CtaStrip from '../../components/CtaStrip';

export const MARKETS_PAGE_TITLE = 'Swarm.ai scenarios';
export const MARKETS_DEFENSE_SECTION_TITLE = 'Defense scenarios (focus)';
export const MARKETS_CRITICAL_INFRA_SECTION_TITLE = 'Critical infrastructure scenarios (focus)';

function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
      <div className="mb-3 flex items-center gap-3">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1 font-semibold">
          {n}
        </div>
        <h3 className="text-base font-semibold text-textPrimary">{title}</h3>
      </div>
      <p className="text-sm text-textSecondary">{desc}</p>
    </div>
  );
}

function DiagramPlaceholder({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <p className="text-sm font-semibold text-textPrimary">{title}</p>
      <div className="mt-3 rounded-xl border border-white/10 bg-black/20 p-5 text-sm text-textSecondary">{children}</div>
      <p className="mt-3 text-xs text-textSecondary/80">Placeholder schematic — replace with a clean SVG later.</p>
    </div>
  );
}

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
          Open scenario <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function ScenariosPage() {
  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-accentCool/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent1/10 blur-3xl" />

      <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1922] via-[#111d28] to-[#0f151d] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">Scenarios</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-textPrimary sm:text-5xl">
          {MARKETS_PAGE_TITLE}
          <span className="text-accent1">_</span>
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-textSecondary">
          Customers need to understand how Swarm.ai behaves when a threat emerges: from first detection to stable
          tracking, fused confidence, and integration-ready outputs. This page shows the step-by-step flow (today), the
          roadmap, and how deployments differ between defense and critical infrastructure.
        </p>
        <p className="mt-2 max-w-3xl text-base leading-relaxed text-textSecondary">
          Start with the closest scenario and we’ll map it to a pilot plan.
        </p>
      </section>

      <Section
        id="workflow"
        title="Threat handling workflow (today)"
        subtitle="From first detection to decision-ready tracks — designed for degraded comms and clutter."
        wrapperClassName="pt-16"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4">
            <StepCard n="1" title="Detect" desc="Edge nodes observe potential targets in EO/IR under clutter and low SNR." />
            <StepCard n="2" title="Track" desc="Multi-target tracking stabilizes motion and reduces false alarms." />
            <StepCard
              n="3"
              title="Classify (optional)"
              desc="Optional class hints / prompted identification improve confidence without requiring RF."
            />
            <StepCard n="4" title="Fuse" desc="Track-level correlation across nodes produces a consistent operational picture." />
            <StepCard
              n="5"
              title="Score & alert"
              desc="Threat scoring + policy thresholds trigger alerts and increased sensor revisit."
            />
            <StepCard
              n="6"
              title="Export"
              desc="Outputs are tracks/events/confidence to C2 dashboards and partner interfaces (permissioned contexts)."
            />
          </div>

          <DiagramPlaceholder title="Workflow schematic">
            <div className="space-y-3">
              <div className="rounded-lg border border-white/10 bg-background/20 px-4 py-3">Sensor nodes (EO/IR)</div>
              <div className="text-center text-textSecondary">↓</div>
              <div className="rounded-lg border border-white/10 bg-background/20 px-4 py-3">Edge detection + tracking</div>
              <div className="text-center text-textSecondary">↓</div>
              <div className="rounded-lg border border-white/10 bg-background/20 px-4 py-3">
                Track-level fusion (distributed)
              </div>
              <div className="text-center text-textSecondary">↓</div>
              <div className="rounded-lg border border-white/10 bg-background/20 px-4 py-3">
                Alerts + exports (tracks/events/confidence)
              </div>
              <div className="text-center text-textSecondary">↓</div>
              <div className="rounded-lg border border-white/10 bg-background/20 px-4 py-3">
                Operator / C2 / partner interfaces
              </div>
            </div>
          </DiagramPlaceholder>
        </div>
      </Section>

      <Section
        id="roadmap"
        title="Roadmap: how threat interaction evolves"
        subtitle="Capability progression from perception to distributed intelligence and partner-integrated response interfaces."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <h3 className="text-base font-semibold text-textPrimary">Today</h3>
              <ul className="mt-3 space-y-2 text-sm text-textSecondary">
                <li>Edge tracking + stable multi-target tracks</li>
                <li>Track/event exports + confidence</li>
                <li>Replayable evidence</li>
                <li>Prototype fusion</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <h3 className="text-base font-semibold text-textPrimary">Next</h3>
              <ul className="mt-3 space-y-2 text-sm text-textSecondary">
                <li>Multi-site pilots + operational hardening</li>
                <li>Integration profiles (C2 / security systems)</li>
                <li>Security posture iterations</li>
                <li>Expanded sensor modalities where needed</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <h3 className="text-base font-semibold text-textPrimary">Later</h3>
              <ul className="mt-3 space-y-2 text-sm text-textSecondary">
                <li>Partner-integrated response interfaces (permissioned contexts)</li>
                <li>Multi-site coordination</li>
                <li>Automation for large-area operations</li>
                <li>Certification pathways (where applicable)</li>
              </ul>
            </div>
          </div>

          <DiagramPlaceholder title="Capability progression">
            <div className="rounded-lg border border-white/10 bg-background/20 px-4 py-3 text-center">
              Perception → Fusion → Intelligence → Partner Interfaces
            </div>
          </DiagramPlaceholder>
        </div>
      </Section>

      <Section
        id="defense"
        title={MARKETS_DEFENSE_SECTION_TITLE}
        subtitle="Distributed sensing under degraded comms and mobility constraints. Outputs are designed for integration into existing command and control stacks."
        wrapperClassName="pt-16"
      >
        {/* TODO(routes): Move these scenario links from /markets/* to /scenarios/* once matching routes exist. */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ScenarioCard
            title="Mobile field deployment"
            subtitle="Deploy a distributed, battery-powered sensor mesh on demand in the field."
            icon={<BatteryCharging className="h-5 w-5" />}
            href="/markets/tactical-base"
            bullets={[
              'Rapid setup with mobile nodes and flexible placement',
              'Distributed coverage that keeps operating under comms stress',
              'Battery-powered operation for temporary and shifting missions',
            ]}
          />
          <ScenarioCard
            title="Response interface for interceptors (partner-integrated)"
            subtitle="Decision-ready tracks and confidence outputs to support partner response workflows."
            icon={<Target className="h-5 w-5" />}
            href="/markets/interceptor-guidance"
            bullets={[
              'Prioritized tracks and confidence scoring for operator focus',
              'Cueing signals and confidence thresholds for response coordination (permissioned)',
              'Integration-ready outputs for command and control stacks',
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
        id="comparison"
        title="What differs between defense and critical infrastructure"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
            <h3 className="text-xl font-semibold text-textPrimary">Defense</h3>
            <ul className="mt-4 space-y-2 text-sm text-textSecondary">
              <li>Degraded comms baseline</li>
              <li>Mobility and rapid placement</li>
              <li>Operator workload under saturation</li>
              <li>C2 integration focus</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
            <h3 className="text-xl font-semibold text-textPrimary">Critical infrastructure</h3>
            <ul className="mt-4 space-y-2 text-sm text-textSecondary">
              <li>Low false-alarm tolerance</li>
              <li>Privacy and retention constraints</li>
              <li>24/7 uptime</li>
              <li>Security SOC integration</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="civil"
        title={MARKETS_CRITICAL_INFRA_SECTION_TITLE}
        subtitle="Regulated environments where false alarms, privacy boundaries, uptime, and auditability matter."
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
            We respond with a staged pilot plan: deployment form, integration outputs (tracks/events), and measurable
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
