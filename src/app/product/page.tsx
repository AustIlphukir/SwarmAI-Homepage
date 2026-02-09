"use client";

import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Cloud,
  Cog,
  Eye,
  Landmark,
  Network,
  Plane,
  Radar,
  Route,
  Shield,
  Target,
  TowerControl,
} from 'lucide-react';
import Section from '../../components/Section';
import CtaStrip from '../../components/CtaStrip';

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-card/80 p-5 text-left shadow-[0_20px_45px_rgba(0,0,0,0.25)] backdrop-blur-sm">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-textPrimary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-textSecondary">{desc}</p>
    </div>
  );
}

function LayerCard({
  title,
  desc,
  deliveryLine,
  videoSrc,
  videoCaption,
  bullets,
}: {
  title: string;
  desc: string;
  deliveryLine: string;
  videoSrc: string;
  videoCaption: string;
  bullets: string[];
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-card to-card/70 p-6 text-left shadow-[0_24px_64px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-accent1/40">
      <h3 className="text-xl font-semibold text-textPrimary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-textSecondary">{desc}</p>
      <p className="mt-2 text-xs text-textSecondary">
        <span className="font-medium text-textPrimary">Delivered as:</span> {deliveryLine}
      </p>
      <div className="mt-4 flex flex-col items-center rounded-xl border border-white/10 bg-black/20 p-3">
        <video
          className="h-[220px] w-full rounded-md object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={`${title} video`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <p className="mt-2 text-center text-[11px] leading-snug text-textSecondary">{videoCaption}</p>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-textSecondary">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accentCool" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductPage() {
  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-accentCool/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent1/10 blur-3xl" />

      <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1922] via-[#111d28] to-[#0f151d] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">Product Platform</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-textPrimary sm:text-5xl">
          Perception-first architecture for low-altitude airspace intelligence
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-textSecondary">
          Small drones exploit the edge cases where detection breaks first: low altitude, clutter, low SNR, and degraded
          communications. Swarm.ai is built to stay reliable there.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-textSecondary">
          We deliver deployable optical sensor nodes, on-device perception, distributed fusion, and integration-first
          interfaces for operators and existing C2/security workflows.
        </p>
      </section>

      <Section
        title="Threat reality: why small drones are hard to detect"
        subtitle="The hard part is reliable perception under low-altitude constraints."
        wrapperClassName="pt-16"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={<Radar className="h-5 w-5" />}
            title="Below classical coverage"
            desc="Small UAVs fly low and close to clutter, where traditional monitoring envelopes degrade."
          />
          <InfoCard
            icon={<Eye className="h-5 w-5" />}
            title="Clutter, motion, and low SNR"
            desc="Heat haze, clouds, trees, buildings, and camera motion create hard false-alarm conditions."
          />
          <InfoCard
            icon={<Route className="h-5 w-5" />}
            title="Non-cooperative behavior"
            desc="Autonomy and route changes make RF an unreliable primary signal; swarms and decoys raise the bar further."
          />
          <InfoCard
            icon={<Target className="h-5 w-5" />}
            title="Timing is the constraint"
            desc="Response options depend on detection-to-track latency. We instrument end-to-end timing rather than assuming it."
          />
        </div>
      </Section>

      <Section
        title="Product Architecture: Three Deployable Layers"
        subtitle="Deployable sensing, edge perception, and distributed intelligence—built for operational environments."
      >
        <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid items-center gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
              <Radar className="mx-auto h-6 w-6 text-accentCool" />
              <p className="mt-2 text-sm font-medium">Mantyx</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
              <Brain className="mx-auto h-6 w-6 text-accent1" />
              <p className="mt-2 text-sm font-medium">Myrix</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
              <Network className="mx-auto h-6 w-6 text-accentCool2" />
              <p className="mt-2 text-sm font-medium">Nexus</p>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-textSecondary">
            Edge-first architecture: track/event intelligence over a secure mesh—no central video pipeline required.
          </p>

        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <LayerCard
              title="Mantyx Sensor Nodes"
              desc="Passive EO/IR sensing for detection, identification cues, and stable tracking of small UAVs in real conditions."
              deliveryLine="Integrated EO/IR sensor packages or retrofit kits for existing optics and mounts."
              videoSrc="/videos/source.mp4"
              videoCaption="Example: passive EO/IR sensing for detection and identification at range."
              bullets={[
                'Day/night operation (visible + thermal)',
                'Designed for scalable deployment density',
                'Outputs structured tracks/events instead of streaming video',
              ]}
            />
            <LayerCard
              title="Myrix Edge Perception"
              desc="On-device perception converts EO/IR streams into stable tracks under clutter, motion, and low SNR."
              deliveryLine="Runs on embedded GPU / edge compute (airborne or stationary), offline-capable."
              videoSrc="/videos/Drone_Animation_From_Thermal_Image.mp4"
              videoCaption="Example: on-device tracking and trajectory estimation from thermal input."
              bullets={[
                'Multi-object tracking (up to 30 Hz close-tracking mode)',
                '6D tracking and trajectory estimation',
                'Low latency and low-bandwidth operation',
              ]}
            />
            <LayerCard
              title="Nexus Distributed Intelligence"
              desc="Distributed fusion correlates tracks across nodes and supports safety-first decision logic without centralized fragility."
              deliveryLine="Interfaces for existing C2 / safety systems, dashboards, and APIs."
              videoSrc="/videos/source-3.mp4"
              videoCaption="Example: multi-node fusion and operator-facing command intelligence."
              bullets={[
                'Track correlation + de-dup + posterior updates',
                'Operates under degraded comms / partial node loss',
                'Cueing via defined effector interface (partner platform)',
              ]}
            />
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-textPrimary">360° video stream</p>
              <p className="mt-2 text-sm text-textSecondary">
                Panorama video remains available for operator context and validation while perception and fusion stay edge-first.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-textPrimary">Track/event outputs</p>
              <p className="mt-2 text-sm text-textSecondary">
                Nodes exchange low-bandwidth track/event messages over a secure mesh (mTLS):
              </p>
              <div className="mt-3 rounded-lg border border-white/10 bg-background/40 p-3 font-mono text-[11px] text-textSecondary">
                {'{track_id, pos, vel, class, threat, conf, ts}'}
              </div>
              <p className="mt-2 text-xs text-textSecondary">
                Standards support is integration-driven (e.g. ASTERIX CAT062 / STANAG 5516 (Link 16) / STANAG 4586 as
                design targets).
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-textPrimary">Response-ready interface</p>
              <p className="mt-2 text-sm text-textSecondary">
                Swarm.ai provides cueing, safety interlocks, and auditability. Physical response is executed via a
                consortium partner platform through a defined effector interface.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Why monolithic systems fail"
        subtitle="Centralized pipelines are brittle, expensive, and slow to adapt."
      >
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-textSecondary">
          Most systems fail not because response options are missing, but because perception breaks first—detection,
          tracking, and identification under real constraints.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={<Shield className="h-5 w-5" />}
            title="Single points of failure"
            desc="Central fusion centers and high-bandwidth links become brittle under stress or interference."
          />
          <InfoCard
            icon={<Network className="h-5 w-5" />}
            title="Bandwidth and latency penalties"
            desc="Streaming video is expensive and slow. Operational outputs should be tracks, events, and confidence."
          />
          <InfoCard
            icon={<Cog className="h-5 w-5" />}
            title="Vendor lock-in"
            desc="Closed stacks slow integration and upgrades. Modularity wins in long-lived deployments."
          />
          <InfoCard
            icon={<Target className="h-5 w-5" />}
            title="Perception is the bottleneck"
            desc="If tracking and ID are unstable, every downstream step becomes noisy and expensive."
          />
        </div>
      </Section>

      <Section
        title="Deployment forms"
        subtitle="Same perception core, different packaging."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon={<Building2 className="h-5 w-5" />}
            title="Fixed site"
            desc="Persistent coverage for airports, energy sites, and critical infrastructure perimeters."
          />
          <InfoCard
            icon={<TowerControl className="h-5 w-5" />}
            title="Temporary event"
            desc="Rapidly deployable nodes for events and short-term protection scenarios."
          />
          <InfoCard
            icon={<Plane className="h-5 w-5" />}
            title="Mobile"
            desc="Vehicle-mounted or relocatable nodes for flexible coverage and convoy routes."
          />
          <InfoCard
            icon={<Landmark className="h-5 w-5" />}
            title="Tactical"
            desc="Distributed sensing built for degraded comms and contested environments."
          />
        </div>
      </Section>

      <Section
        title="Designed for critical and regulated environments"
        subtitle="Operational constraints first: safety, integration, and auditability."
      >
        <div className="grid gap-4 md:grid-cols-4">
          <InfoCard
            icon={<Building2 className="h-5 w-5" />}
            title="Critical infrastructure"
            desc="Perimeter and asset monitoring with resilient edge perception."
          />
          <InfoCard
            icon={<TowerControl className="h-5 w-5" />}
            title="Airports and airspace"
            desc="Low-altitude awareness beyond classical radar coverage."
          />
          <InfoCard
            icon={<Landmark className="h-5 w-5" />}
            title="Defense installations"
            desc="Distributed sensing for contested and constrained environments."
          />
          <InfoCard
            icon={<Cloud className="h-5 w-5" />}
            title="Data sovereignty"
            desc="Edge-first processing to minimize data transfer and support privacy/security constraints."
          />
        </div>
      </Section>

      <Section
        title="Proof and credibility"
        subtitle="Authority comes from measurable behavior, not adjectives."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={<Cloud className="h-5 w-5" />}
            title="Research-backed core"
            desc="Perception and fusion methods based on validated academic and industrial work, developed with TUM."
          />
          <InfoCard
            icon={<Shield className="h-5 w-5" />}
            title="Safety-first escalation"
            desc="Rule-based decision logic with probabilistic inputs, explicit thresholds, and abort/safe states."
          />
          <InfoCard
            icon={<Network className="h-5 w-5" />}
            title="Integration-first interfaces"
            desc="Designed to connect into existing monitoring and C2 stacks via APIs and standardized track exports."
          />
        </div>
      </Section>

      <CtaStrip
        kicker="Get started"
        title="Assess fit in one call"
        desc={
          <>
            Share your environment and constraints. We’ll outline a staged pilot plan, required interfaces, and measurable
            success criteria (latency, false alarms, coverage, degraded comms behavior).
          </>
        }
        primary={{ href: '/contact?intent=pilot-discussion', label: 'Discuss a pilot' }}
        secondary={{ href: '/services', label: 'See how we engage' }}
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
          Contact us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
