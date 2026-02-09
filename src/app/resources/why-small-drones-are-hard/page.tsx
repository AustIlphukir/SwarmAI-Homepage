import Link from 'next/link';
import Section from '../../../components/Section';
import CtaStrip from '../../../components/CtaStrip';

export default function WhySmallDronesAreHardPage() {
  return (
    <div className="bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-xs tracking-widest uppercase text-textSecondary mb-3">Resource</div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Why small drones are hard to detect<span className="text-accent1">_</span>
        </h1>
        <p className="text-textSecondary">
          In counter‑UAS, the limiting factor is usually not “having a sensor”—it’s achieving reliable perception under
          low-altitude constraints with strict timing.
        </p>
      </div>

      <Section title="The real failure modes" subtitle="Concrete reasons systems degrade.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-textSecondary space-y-3">
          <p>
            <strong className="text-textPrimary">Low altitude + clutter:</strong> targets sit in the worst part of the
            scene: trees, buildings, wires, water reflections, and heat haze.
          </p>
          <p>
            <strong className="text-textPrimary">Low SNR:</strong> small targets produce weak signals, especially in
            adverse weather or low contrast conditions.
          </p>
          <p>
            <strong className="text-textPrimary">Background motion:</strong> wind, camera motion, and moving objects
            create false positives that overwhelm detector-only systems.
          </p>
          <p>
            <strong className="text-textPrimary">Autonomy and decoys:</strong> RF is not guaranteed; swarms and decoys
            require robust tracking and correlation.
          </p>
          <p>
            <strong className="text-textPrimary">Short timelines:</strong> detection-to-track latency defines what you
            can do next. If it’s not instrumented, it’s usually underestimated.
          </p>
        </div>
      </Section>

      <Section title="What works better" subtitle="Design principles we follow.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-textSecondary space-y-3">
          <p>
            <strong className="text-textPrimary">Track stability first:</strong> you can’t fuse, identify, or decide on
            noise. Tracking is the backbone.
          </p>
          <p>
            <strong className="text-textPrimary">Multi-view correlation:</strong> track-to-track fusion across nodes can
            suppress clutter-induced false alarms without shipping video.
          </p>
          <p>
            <strong className="text-textPrimary">Edge-first outputs:</strong> export tracks/events (not pixels) so
            downstream systems can act quickly and auditably.
          </p>
        </div>
      </Section>

      <CtaStrip
        kicker="Next step"
        title="Discuss your constraints"
        desc={
          <>
            Tell us your scenario and success criteria. We’ll propose a staged pilot plan and a concrete output
            contract.
          </>
        }
        primary={{ href: '/contact?intent=talk-to-an-engineer', label: 'Talk to an engineer' }}
        secondary={{ href: '/resources', label: 'Back to resources' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-textSecondary">
        <Link href="/resources" className="hover:underline">
          ← Back to resources
        </Link>
      </div>
    </div>
  );
}

