"use client";

import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Cloud,
  Cog,
  Eye,
  Factory,
  Landmark,
  Network,
  Plane,
  Radar,
  Route,
  Scale,
  Shield,
  Target,
  TowerControl,
} from 'lucide-react';
import Section from '../../components/Section';

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
        <p className="mt-2 text-center text-[11px] leading-snug text-textSecondary">
          {videoCaption}
        </p>
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
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-textSecondary">
          Swarm.ai connects optical sensing, edge AI, and distributed command intelligence into one resilient stack built for operational environments.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-textSecondary">
          Swarm.ai is a modular perception platform composed of deployable sensor nodes, edge AI software, and a distributed intelligence layer.
        </p>
      </section>

      <Section
        title="Product Architecture: Three Deployable Layers"
        subtitle="Deployable sensing, edge perception, and distributed intelligence—built for operational environments."
        wrapperClassName="pt-16"
      >
        <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid items-center gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
              <Radar className="mx-auto h-6 w-6 text-accentCool" />
              <p className="mt-2 text-sm font-medium">Sensor Input</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
              <Brain className="mx-auto h-6 w-6 text-accent1" />
              <p className="mt-2 text-sm font-medium">Edge Perception</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
              <Network className="mx-auto h-6 w-6 text-accentCool2" />
              <p className="mt-2 text-sm font-medium">Swarm Interception Layer</p>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-textSecondary">
            High-level system flow from optical sensing to edge inference and network-level intelligence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <LayerCard
            title="Mantyx Sensor Layer"
            desc="High-performance EO/IR sensing for detection, identification, and tracking of small aerial objects in real-world conditions."
            deliveryLine="Integrated EO/IR sensor packages or retrofit kits for existing optics and mounts."
            videoSrc="/videos/source.mp4"
            videoCaption="Example: passive EO/IR sensing for detection and identification at range."
            bullets={[
              'Day, night, and adverse-weather operation',
              'Long-range passive detection',
              'Designed for scalable deployment',
            ]}
          />
          <LayerCard
            title="Myrix Edge Perception"
            desc="On-device AI processes sensor data locally and synchronizes mission-critical insights across the grid."
            deliveryLine="Runs on embedded GPU / edge compute (airborne or stationary), operating offline-capable."
            videoSrc="/videos/Drone_Animation_From_Thermal_Image.mp4"
            videoCaption="Example: on-device tracking and trajectory estimation from thermal input."
            bullets={[
              'Real-time multi-sensor fusion',
              '6D tracking and trajectory estimation',
              'Low latency and low-bandwidth operation',
            ]}
          />
          <LayerCard
            title="Nexus Command Intelligence"
            desc="Distributed intelligence aggregates local observations and enables coordinated response without centralized fragility."
            deliveryLine="Interfaces for existing C2 / safety systems, or standalone dashboards and APIs."
            videoSrc="/videos/source-3.mp4"
            videoCaption="Example: multi-node fusion and operator-facing command intelligence."
            bullets={[
              'Local fusion with global consistency',
              'Model updates from field data',
              'Interfaces for existing C2 and safety systems',
            ]}
          />
        </div>

        
      </Section>

      <Section
        title="Why classical systems fail in low-altitude airspace"
        subtitle="Defending airspace today is primarily a data and perception challenge."
      >
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-textSecondary">
          Most legacy systems fail not because response options are missing, but because perception breaks first—detection, tracking, and identification under real operational constraints.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={<Target className="h-5 w-5" />}
            title="Below radar thresholds"
            desc="Small autonomous drones operate in envelopes that traditional systems were not optimized to monitor."
          />
          <InfoCard
            icon={<Shield className="h-5 w-5" />}
            title="Centralized fragility"
            desc="Slow, expensive, and brittle architectures cannot adapt at the pace of modern threat evolution."
          />
          <InfoCard
            icon={<Route className="h-5 w-5" />}
            title="Adaptive threat behavior"
            desc="Static detector approaches degrade quickly when adversaries change route, profile, or coordination tactics."
          />
          <InfoCard
            icon={<Eye className="h-5 w-5" />}
            title="Perception bottleneck"
            desc="Reliable detection, tracking, and interpretation is the core limiting factor for response readiness."
          />
        </div>
      </Section>

      <Section
        title="What makes Swarm.ai fundamentally different"
        subtitle="Built around edge autonomy, decentralized intelligence, and continuous learning."
      >
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-textSecondary">
          Swarm.ai is not a radar replacement, a single sensor, or a centralized analytics backend—it is a perception-native system designed from the edge upward.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={<Network className="h-5 w-5" />}
            title="Decentralized by design"
            desc="No single point of failure. Intelligence remains operational at the edge even under network stress."
          />
          <InfoCard
            icon={<Cog className="h-5 w-5" />}
            title="AI-native architecture"
            desc="Perception and learning are foundational system properties, not retrofits on legacy infrastructure."
          />
          <InfoCard
            icon={<Scale className="h-5 w-5" />}
            title="Cost-efficient scaling"
            desc="Dense, affordable sensor grids deliver stronger situational awareness than sparse high-cost systems."
          />
          <InfoCard
            icon={<Activity className="h-5 w-5" />}
            title="Continuous operational improvement"
            desc="Deployed systems feed model iteration cycles to improve performance in real mission conditions."
          />
        </div>
      </Section>

      <Section
        title="Designed for critical and regulated environments"
        subtitle="Designed to meet operational, safety, and integration constraints in regulated environments."
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
            icon={<Factory className="h-5 w-5" />}
            title="Industrial testing zones"
            desc="Autonomous system trials with measurable safety telemetry."
          />
        </div>
      </Section>

      <Section
        title="Built for real-world deployment"
        subtitle="Readiness signals focused on credibility and implementation."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={<Cloud className="h-5 w-5" />}
            title="Research-backed development"
            desc="Built in collaboration with high-level European research and engineering partners."
          />
          <InfoCard
            icon={<Plane className="h-5 w-5" />}
            title="Regulatory alignment"
            desc="Structured for safety-critical and regulated operations with integration flexibility."
          />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-card/80 p-5 text-sm text-textSecondary">
            <p className="font-medium text-textPrimary">Pilot deployments active</p>
            <p className="mt-1">Operating in controlled environments to validate performance and reliability.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card/80 p-5 text-sm text-textSecondary">
            <p className="font-medium text-textPrimary">Evaluation programs available</p>
            <p className="mt-1">Open for structured assessments with qualified partners and operators.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Delivered as"
        subtitle="Clear delivery options for evaluation and integration."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={<Shield className="h-5 w-5" />}
            title="Deployable edge stack"
            desc="Sensor + edge perception software delivered as modular nodes for stationary or airborne use."
          />
          <InfoCard
            icon={<Network className="h-5 w-5" />}
            title="Integration package"
            desc="APIs and interfaces to connect into existing C2, safety systems, and monitoring stacks."
          />
          <InfoCard
            icon={<CheckCircle2 className="h-5 w-5" />}
            title="Evaluation programs"
            desc="Structured assessments with qualified partners and operators to validate performance in controlled settings."
          />
        </div>
      </Section>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm">
        <Link href="/" className="rounded-lg border border-white/20 px-4 py-2 text-textPrimary transition-colors hover:border-accentCool/50 hover:text-accentCool">
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-accent1/40 bg-accent1/10 px-4 py-2 text-accent1 transition-colors hover:bg-accent1/20"
        >
          Contact us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
