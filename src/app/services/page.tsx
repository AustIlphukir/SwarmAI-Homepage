"use client";

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Cog,
  Cpu,
  Eye,
  Network,
  Shield,
  Target,
} from 'lucide-react';
import Section from '../../components/Section';
import CtaStrip from '../../components/CtaStrip';

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accentCool" />
      <span>{children}</span>
    </li>
  );
}

function LaneCard({
  title,
  subtitle,
  bullets,
  primary,
  secondary,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
      <h3 className="text-xl font-semibold text-textPrimary">{title}</h3>
      <p className="mt-2 text-sm text-textSecondary">{subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm text-textSecondary">
        {bullets.map((b) => (
          <Bullet key={b}>{b}</Bullet>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={primary.href}
          className="inline-flex items-center gap-2 rounded-lg border border-accent1/40 bg-accent1/10 px-4 py-2 text-sm font-semibold text-accent1 transition-colors hover:bg-accent1/20"
        >
          {primary.label} <ArrowRight className="h-4 w-4" />
        </Link>
        {secondary && (
          <Link
            href={secondary.href}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-card/30 px-4 py-2 text-sm font-semibold text-textPrimary transition-colors hover:border-accentCool/50 hover:text-accentCool"
          >
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-accentCool/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent1/10 blur-3xl" />

      <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1922] via-[#111d28] to-[#0f151d] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">Services</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-textPrimary sm:text-5xl">
          From sensing to decisions: deployable perception systems
          <span className="text-accent1">_</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-textSecondary">
          We sell to operators first and support integrators as a secondary lane. Our optical counter‑UAS perception
          works under real constraints: clutter, low SNR, degraded comms, and strict timing.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-textSecondary">
          Engagement is hands-on: system design, edge optimization, integration surfaces, and measurable performance
          verification—not slide decks.
        </p>
      </section>

      <Section
        title="Primary path: operators"
        subtitle="Operator deployments are the default commercial path; integrators/OEMs are supported as a secondary lane."
        wrapperClassName="pt-16"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <LaneCard
            title="For operators"
            subtitle="Pilot and deploy site protection with measurable performance and integration into your existing stack."
            bullets={[
              'Site assessment: range, clutter, false-alarm tolerance, comms constraints',
              'Deployment plan: fixed / mobile / temporary event / tactical',
              'Outputs: alerts + track/event feeds for your existing security or C2 system',
            ]}
            primary={{ href: '/markets', label: 'Explore scenarios' }}
            secondary={{ href: '/contact?intent=pilot-discussion', label: 'Discuss a pilot' }}
          />

          <LaneCard
            title="For integrators / OEMs (secondary)"
            subtitle="Integrate perception modules into your systems and product lines with a clear interface contract."
            bullets={[
              'Sensor integration: EO/IR pipelines, time sync, calibration alignment',
              'Track/event interfaces: payload schema + export formats',
              'Reference architectures for degraded networks and staged rollout',
            ]}
            primary={{ href: '/partners/integrators', label: 'Integration path' }}
            secondary={{ href: '/contact?intent=talk-to-an-engineer', label: 'Talk to an engineer' }}
          />
        </div>
      </Section>

      <Section
        title="What we deliver"
        subtitle="Concrete deliverables you can evaluate, integrate, and deploy."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
                <Eye className="h-5 w-5" />
              </div>
              <p className="font-semibold">EO/IR detection and stable tracking</p>
              <p className="mt-2 text-sm text-textSecondary">
                Perception tuned for low-altitude clutter and low SNR—built around timing and false-alarm constraints.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
                <Cpu className="h-5 w-5" />
              </div>
              <p className="font-semibold">Edge optimization</p>
              <p className="mt-2 text-sm text-textSecondary">
                Low-latency inference on embedded hardware; offline-capable operation and minimal bandwidth usage.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
                <Network className="h-5 w-5" />
              </div>
              <p className="font-semibold">Distributed fusion and interfaces</p>
              <p className="mt-2 text-sm text-textSecondary">
                Track‑to‑track fusion over secure mesh links; integration-first outputs for existing C2/security stacks.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
                <Shield className="h-5 w-5" />
              </div>
              <p className="font-semibold">Safety logic and auditability</p>
              <p className="mt-2 text-sm text-textSecondary">
                Explicit thresholds, policy steps, abort/safe states, and telemetry for review and continuous improvement.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
                <Target className="h-5 w-5" />
              </div>
              <p className="font-semibold">Test &amp; validation plan</p>
              <p className="mt-2 text-sm text-textSecondary">
                ROC-style evaluation, timing verification, degraded-comms testing, and multi-target scenarios.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
                <Cog className="h-5 w-5" />
              </div>
              <p className="font-semibold">Integration support</p>
              <p className="mt-2 text-sm text-textSecondary">
                Interface specs, reference architectures, and hands-on support to deploy incrementally into existing stacks.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Engagement model"
        subtitle="A staged approach that reduces risk and produces measurable outcomes."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">01 Discovery</p>
              <p className="mt-2 font-semibold">Constraints &amp; interfaces</p>
              <ul className="mt-3 space-y-2 text-sm text-textSecondary">
                <Bullet>Threat + environment assessment</Bullet>
                <Bullet>Integration surfaces and output contract</Bullet>
                <Bullet>Success criteria (latency, FA rate, coverage)</Bullet>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">02 Pilot</p>
              <p className="mt-2 font-semibold">Instrumented evaluation</p>
              <ul className="mt-3 space-y-2 text-sm text-textSecondary">
                <Bullet>Edge deployment + telemetry</Bullet>
                <Bullet>ROC and timing measurements</Bullet>
                <Bullet>Degraded comms and multi-target tests</Bullet>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">03 Rollout</p>
              <p className="mt-2 font-semibold">Scale and integrate</p>
              <ul className="mt-3 space-y-2 text-sm text-textSecondary">
                <Bullet>Deployment density planning</Bullet>
                <Bullet>Integration into C2/security systems</Bullet>
                <Bullet>Update pipeline and operations playbook</Bullet>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CtaStrip
        kicker="Contact"
        title="Start with constraints"
        desc={
          <>
            Tell us your environment and integration needs. We’ll respond with a concrete pilot plan and a clear output
            contract (tracks/events, exports, and decision hooks).
          </>
        }
        primary={{ href: '/contact?intent=pilot-discussion', label: 'Discuss a pilot' }}
        secondary={{ href: '/contact?intent=talk-to-an-engineer', label: 'Talk to an engineer' }}
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
