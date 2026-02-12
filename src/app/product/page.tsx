"use client";

import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  Landmark,
  Plane,
  Radar,
  Route,
  Target,
  TowerControl,
} from 'lucide-react';
import Section from '../../components/Section';
import CtaStrip from '../../components/CtaStrip';

function BulletLine({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accentCool" />
      <span>{children}</span>
    </li>
  );
}

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

function LayerBlock({
  title,
  oneLiner,
  bullets,
}: {
  title: string;
  oneLiner: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-card to-card/70 p-6 text-left shadow-[0_24px_64px_rgba(0,0,0,0.32)]">
      <h3 className="text-xl font-semibold text-textPrimary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-textSecondary">{oneLiner}</p>
      <ul className="mt-4 space-y-2 text-sm text-textSecondary">
        {bullets.map((b) => (
          <BulletLine key={b}>{b}</BulletLine>
        ))}
      </ul>
    </div>
  );
}

function DiagramPlaceholder({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <p className="text-sm font-semibold text-textPrimary">{title}</p>
      {children ? (
        <div className="mt-4">{children}</div>
      ) : (
        <p className="mt-3 text-sm text-textSecondary">Replace with SVG later.</p>
      )}
    </div>
  );
}

function CodePayloadBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 p-4 text-xs text-textSecondary">
      <code className="font-mono">{code}</code>
    </pre>
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
	          Small drones exploit the edge cases where detection fails first: low altitude, clutter, low SNR, degraded
	          comms. Swarm.ai is built to stay reliable exactly there.
	        </p>
	        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-textSecondary">
	          Deployable sensing, edge perception, distributed fusion, and integration-first interfaces—designed for real
	          operations.
	        </p>
	      </section>

	      <Section
	        title="Threat reality: why small drones are hard to detect"
	        wrapperClassName="pt-16"
	      >
	        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
	          <InfoCard
	            icon={<Radar className="h-5 w-5" />}
	            title="Below classical coverage"
	            desc="Small UAVs fly where radar and wide-area sensors degrade first."
	          />
	          <InfoCard
	            icon={<Eye className="h-5 w-5" />}
	            title="Clutter & low SNR"
	            desc="Visual noise, motion, and thermal artifacts drive false alarms."
	          />
	          <InfoCard
	            icon={<Route className="h-5 w-5" />}
	            title="Non-cooperative behavior"
	            desc="Autonomy, swarms, and decoys break RF-first assumptions."
	          />
	          <InfoCard
	            icon={<Target className="h-5 w-5" />}
	            title="Timing is the constraint"
	            desc="Detection-to-track latency determines which responses remain possible."
	          />
	        </div>
	      </Section>

	      <Section
	        title="Why distributed optical AI"
	      >
	        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
	          <div>
	            <p className="mb-5 max-w-4xl text-sm leading-relaxed text-textSecondary">
	              Most systems fail not because response options are missing, but because perception breaks first. Centralized
	              pipelines are brittle, bandwidth-heavy, and slow to adapt. Swarm.ai replaces video-centric architectures
	              with distributed, event-driven intelligence.
	            </p>
	            <ul className="grid gap-2 text-sm text-textSecondary md:grid-cols-2">
	              <BulletLine>Single points of failure</BulletLine>
	              <BulletLine>Bandwidth and latency penalties</BulletLine>
	              <BulletLine>Vendor lock-in</BulletLine>
	              <BulletLine>Perception instability</BulletLine>
	            </ul>
	          </div>
	          <DiagramPlaceholder title="Topology sketch">
	            <div className="space-y-3">
	              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-textSecondary">
	                <p className="font-semibold text-textPrimary">X Centralized (brittle)</p>
	                <p className="mt-2">Video streams -&gt; central fusion -&gt; failure point</p>
	              </div>
	              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-textSecondary">
	                <p className="font-semibold text-textPrimary">✓ Distributed (resilient)</p>
	                <p className="mt-2">Tracks/events -&gt; multi-node fusion -&gt; continues under loss</p>
	              </div>
	            </div>
	          </DiagramPlaceholder>
	        </div>
	      </Section>

	      <Section
	        title="Product Architecture: Three Deployable Layers"
	        subtitle="Deployable sensing, edge perception, and distributed intelligence—built for operational environments."
	      >
	        <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
	          <p className="text-sm font-semibold text-textPrimary">Architecture diagram (placeholder)</p>
	          <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
	            <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-textSecondary">
	              <p className="font-semibold text-textPrimary">Sensor nodes</p>
	              <div className="mt-3 space-y-2">
	                <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">EO</div>
	                <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">IR</div>
	                <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">Optional acoustic</div>
	              </div>
	            </div>
	            <div className="hidden items-center justify-center text-textSecondary lg:flex">→</div>
	            <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-textSecondary">
	              <p className="font-semibold text-textPrimary">Edge perception</p>
	              <div className="mt-3 rounded-lg border border-white/10 bg-black/20 px-3 py-3">
	                Track extraction and local inference
	              </div>
	            </div>
	            <div className="hidden items-center justify-center text-textSecondary lg:flex">→</div>
	            <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-textSecondary">
	              <p className="font-semibold text-textPrimary">Distributed fusion + operator/C2</p>
	              <div className="mt-3 space-y-2">
	                <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">Fusion</div>
	                <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">C2/API</div>
	              </div>
	            </div>
	          </div>
	          <p className="mt-4 text-xs text-textSecondary">Placeholder schematic - replace with SVG later.</p>
	        </div>

	        <div className="mt-6 grid gap-6 lg:grid-cols-3">
	          <LayerBlock
	            title="Mantyx — Sensor Nodes"
	            oneLiner="Passive EO/IR sensing for detection, identification cues, and stable tracking in real conditions."
	            bullets={[
	              'Day/night (visible + thermal)',
	              'Designed for scalable deployment density',
	              'Integrated kits or retrofit optics',
	              'Outputs structured tracks/events (no video streaming)',
	            ]}
	          />
	          <LayerBlock
	            title="Myrix — Edge Perception"
	            oneLiner="On-device perception converting EO/IR streams into stable tracks under clutter and low SNR."
	            bullets={[
	              'Multi-object tracking (up to 30 Hz close mode)',
	              '6D tracking and trajectory estimation',
	              'Low latency, low bandwidth',
	              'Offline-capable on embedded GPU',
	            ]}
	          />
	          <LayerBlock
	            title="Nexus — Distributed Intelligence"
	            oneLiner="Correlates tracks across nodes and enables safety-first decision logic without centralized fragility."
	            bullets={[
	              'Track correlation and de-duplication',
	              'Operates under degraded comms',
	              'Interfaces to C2 / dashboards / APIs',
	              'Cueing via defined effector interface (partner)',
	            ]}
	          />
	        </div>

	        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
	          <ul className="space-y-2 text-sm text-textSecondary">
	            <BulletLine>
	              Panorama video remains available for operator validation; perception and fusion stay edge-first.
	            </BulletLine>
	            <BulletLine>Nodes exchange low-bandwidth track and event messages over a secure mesh.</BulletLine>
	            <BulletLine>
	              Integration-driven design with defense and aviation standards as design targets.
	            </BulletLine>
	          </ul>
	        </div>
	      </Section>

	      <Section title="Outputs & interfaces">
	        <div className="grid gap-6 lg:grid-cols-2">
	          <ul className="space-y-2 text-sm text-textSecondary">
	            <BulletLine>Structured tracks/events with confidence and class hints</BulletLine>
	            <BulletLine>Optional 3D track and pose updates</BulletLine>
	            <BulletLine>Node telemetry for health and performance monitoring</BulletLine>
	            <BulletLine>Audit logging for post-mission reconstruction</BulletLine>
	            <BulletLine>Effector cueing interface for partner systems</BulletLine>
	          </ul>
	          <CodePayloadBlock
	            code={`{
  "track_id": "A17",
  "timestamp": 172345345,
  "node_id": "MX-03",
  "position": [12.4, -3.1, 58.0],
  "velocity": [2.3, 0.1, -0.4],
  "confidence": 0.92,
  "class_hint": "UAV",
  "pose": { "rpy": [0.1, 0.0, 1.6] }
}`}
	          />
	        </div>
	      </Section>

	      <Section
	        title="Deployment forms"
	      >
	        <DiagramPlaceholder title="Deployment patterns">
	          <div className="grid gap-2 sm:grid-cols-2">
	            <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-textSecondary">Fixed site grid</div>
	            <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-textSecondary">Rapid event</div>
	            <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-textSecondary">Mobile vehicle</div>
	            <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-textSecondary">Contested comms</div>
	          </div>
	        </DiagramPlaceholder>

	        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
	          <InfoCard
	            icon={<Building2 className="h-5 w-5" />}
	            title="Fixed site"
	            desc="Persistent perimeter coverage for airports and critical sites."
	          />
	          <InfoCard
	            icon={<TowerControl className="h-5 w-5" />}
	            title="Temporary event"
	            desc="Rapid deployment for short-term protection."
	          />
	          <InfoCard
	            icon={<Plane className="h-5 w-5" />}
	            title="Mobile"
	            desc="Relocatable nodes for flexible coverage."
	          />
	          <InfoCard
	            icon={<Landmark className="h-5 w-5" />}
	            title="Tactical"
	            desc="Distributed sensing for degraded comms environments."
	          />
	        </div>
	      </Section>

	      <Section
	        title="Designed for critical and regulated environments"
	      >
	        <ul className="grid gap-2 text-sm text-textSecondary md:grid-cols-2">
	          <BulletLine>Critical infrastructure</BulletLine>
	          <BulletLine>Airports and airspace</BulletLine>
	          <BulletLine>Defense installations</BulletLine>
	          <BulletLine>Data sovereignty (edge-first)</BulletLine>
	        </ul>
	      </Section>

      <CtaStrip
        kicker="Get started"
        title="Assess fit in one call"
        desc={
	          <>
	            Share your environment and constraints.
	            <br />
	            We outline a staged pilot with measurable success criteria.
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
          Contact us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
