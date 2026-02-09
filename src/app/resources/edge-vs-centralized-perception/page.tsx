import Link from 'next/link';
import Section from '../../../components/Section';
import CtaStrip from '../../../components/CtaStrip';

export default function EdgeVsCentralizedPage() {
  return (
    <div className="bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-xs tracking-widest uppercase text-textSecondary mb-3">Resource</div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Edge vs centralized perception<span className="text-accent1">_</span>
        </h1>
        <p className="text-textSecondary">
          Centralized “stream video to a fusion center” pipelines look simple on paper, but they are brittle in the
          environments that matter. Edge-first architectures minimize bandwidth, reduce latency, and degrade gracefully.
        </p>
      </div>

      <Section title="Why central pipelines fail" subtitle="Typical operational failure modes.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-textSecondary space-y-3">
          <p>
            <strong className="text-textPrimary">Bandwidth:</strong> video streaming is expensive and often impossible
            at scale.
          </p>
          <p>
            <strong className="text-textPrimary">Latency:</strong> centralized processing adds transport and queueing
            delay right where timing matters most.
          </p>
          <p>
            <strong className="text-textPrimary">Fragility:</strong> centralized nodes and links are single points of
            failure under interference or overload.
          </p>
          <p>
            <strong className="text-textPrimary">Slow iteration:</strong> monolithic systems make upgrades hard and
            create vendor lock-in.
          </p>
        </div>
      </Section>

      <Section title="Edge-first principle" subtitle="Tracks/events are the product.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-textSecondary space-y-3">
          <p>
            Edge-first systems export structured intelligence (tracks/events) and exchange only low-bandwidth messages
            across nodes. This supports fast operator workflows, better auditability, and robust operation under
            degraded communications.
          </p>
        </div>
      </Section>

      <CtaStrip
        kicker="Next step"
        title="Map your integration surfaces"
        desc={
          <>
            We’ll translate your environment into an output contract and a staged rollout plan—without forcing a
            monolithic replacement.
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

