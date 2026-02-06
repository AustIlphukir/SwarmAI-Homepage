import Link from 'next/link';
import Section from '../../components/Section';
import FeatureCard from '../../components/FeatureCard';
import { Cpu, Eye, Network, Shield, Radar, Server, Gauge, Brain } from 'lucide-react';

export default function CorePage() {
  return (
    <div className="bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="text-xs tracking-widest uppercase text-textSecondary mb-3">Core tech</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Core tech in detail</h1>
          <p className="text-textSecondary max-w-3xl mx-auto">
            Swarm.ai combines sensor systems with edge computing for distributed real-time perception.
            The result is a robust, scalable platform for 360° airspace monitoring without central
            data bottlenecks.
          </p>
        </div>
      </div>

      <Section
        title="Hardware solution: Sensor system + edge node"
        subtitle="Intelligence runs directly at the sensor, enabling low latency, minimal data paths, and high resilience."
      >
        <div className="grid md:grid-cols-4 gap-4">
          <FeatureCard icon={<Eye className="w-7 h-7 mx-auto text-accent1" />} title="RGB & TIR" desc="Day/night vision for reliable detection." />
          <FeatureCard icon={<Cpu className="w-7 h-7 mx-auto text-accent1" />} title="Edge CV" desc="Real-time inference and tracking on-device." />
          <FeatureCard icon={<Gauge className="w-7 h-7 mx-auto text-accent1" />} title="Low latency" desc="Fast response without a central pipeline." />
          <FeatureCard icon={<Shield className="w-7 h-7 mx-auto text-accent1" />} title="Robust" desc="Fail-safe design for critical environments." />
        </div>
      </Section>

      <Section
        title="Perception pipeline"
        subtitle="From capture to decision: consistent, traceable real-time signals."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Detection</h3>
            <p className="text-textSecondary">
              Multi-sensor capture (RGB/TIR) with high sensitivity for small, fast targets.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Tracking</h3>
            <p className="text-textSecondary">
              Persistent multi-target tracking across multiple sensor nodes.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Classification</h3>
            <p className="text-textSecondary">
              Context-based assessment with a low false-positive rate.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Distributed Architecture"
        subtitle="Decentralized nodes operate as a resilient mesh, scalable from a single site to a full network."
      >
        <div className="grid md:grid-cols-4 gap-4">
          <FeatureCard icon={<Network className="w-7 h-7 mx-auto text-accent1" />} title="Mesh-first" desc="No single point of failure." />
          <FeatureCard icon={<Server className="w-7 h-7 mx-auto text-accent1" />} title="Edge-to-edge" desc="Synchronized situational awareness without a central cloud." />
          <FeatureCard icon={<Radar className="w-7 h-7 mx-auto text-accent1" />} title="360° coverage" desc="Wide-area monitoring with overlap." />
          <FeatureCard icon={<Shield className="w-7 h-7 mx-auto text-accent1" />} title="Fail-safe" desc="Graceful degradation during disruption." />
        </div>
      </Section>

      <Section
        title="Data sovereignty & security"
        subtitle="Data processing where data is generated, GDPR-ready, controlled, and auditable."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Edge-only processing</h3>
            <p className="text-textSecondary">
              Primary analysis is local, with optional forwarding of selected metadata.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Secure deployment</h3>
            <p className="text-textSecondary">
              Role-based access, encrypted data paths, and controlled updates.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">GDPR-ready</h3>
            <p className="text-textSecondary">
              Data minimization and privacy by design for civilian use cases.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Audit-capable</h3>
            <p className="text-textSecondary">
              Traceable logs and clean documentation of system responses.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Operations & scaling"
        subtitle="From pilot setup to large-scale rollout without switching systems."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">24/7/365 operation</h3>
            <p className="text-textSecondary">Continuous monitoring with high system availability.</p>
          </div>
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Scalable density</h3>
            <p className="text-textSecondary">More nodes increase precision and redundancy.</p>
          </div>
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Compatible integrations</h3>
            <p className="text-textSecondary">Connections to existing C2 or security systems.</p>
          </div>
        </div>
      </Section>

      <Section title="References & credibility" subtitle="Selected partners and deployment contexts.">
        <div className="grid md:grid-cols-4 gap-4 text-sm text-textSecondary">
          <div className="bg-card/60 rounded-lg p-4">Bangkok Airport (BKK)</div>
          <div className="bg-card/60 rounded-lg p-4">TUM Venture Labs</div>
          <div className="bg-card/60 rounded-lg p-4">RV Connex</div>
          <div className="bg-card/60 rounded-lg p-4">Industrial Defence &amp; Incubation partner</div>
        </div>
      </Section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-accent1 hover:underline">Back to home page</Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-accent1 text-white rounded-lg hover:bg-accent1/80 transition-colors font-semibold">
            Get in touch
          </Link>
        </div>
      </div>
      <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid items-center gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
              <Radar className="mx-auto h-6 w-6 text-accentCool" />
              <p className="mt-2 text-sm font-medium">Remote Sensing</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
              <Brain className="mx-auto h-6 w-6 text-accent1" />
              <p className="mt-2 text-sm font-medium">Edge Perception</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
              <Network className="mx-auto h-6 w-6 text-accentCool2" />
              <p className="mt-2 text-sm font-medium">Distributed Interfaces and Big Data Compute</p>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-textSecondary">
            High-level system flow from optical sensing to edge inference and network-level intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}
