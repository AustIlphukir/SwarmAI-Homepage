import Link from 'next/link';
import Section from '../../../components/Section';
import CtaStrip from '../../../components/CtaStrip';

export default function DataProductsForIntegrationPage() {
  return (
    <div className="bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-xs tracking-widest uppercase text-textSecondary mb-3">Resource</div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Data products for integration<span className="text-accent1">_</span>
        </h1>
        <p className="text-textSecondary">
          Integrations fail when outputs are vague. In counter‑UAS, the most useful product is a stable, auditable track
          and event stream with clear timing semantics.
        </p>
      </div>

      <Section title="Tracks, not pixels" subtitle="A practical output contract.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-textSecondary space-y-3">
          <p>
            A good integration surface includes: a track/event schema, latency measurement points, confidence
            calibration expectations, and explicit decision hooks.
          </p>
          <p>
            We convert camera feeds into compact, actionable track/event data that downstream systems can use directly.
          </p>
          <div className="rounded-lg border border-white/10 bg-background/40 p-4 font-mono text-xs text-textSecondary">
            {'{track_id, pos, vel, class, threat, conf, ts}'}
          </div>
          <p className="text-xs">
            Export formats are integration-driven (e.g. ASTERIX CAT062 / STANAG 5516 / STANAG 4586 as targets), plus APIs
            where you control downstream logic.
          </p>
        </div>
      </Section>

      <Section title="Measure what matters" subtitle="Avoid hidden assumptions.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-textSecondary space-y-3">
          <p>
            Define and instrument detection-to-track latency, update rates, false alarm constraints, and degraded-comms
            behavior. If it’s not measured, it will be debated later.
          </p>
        </div>
      </Section>

      <CtaStrip
        kicker="Next step"
        title="Get a concrete interface spec"
        desc={
          <>
            We’ll propose a minimal integration surface you can validate quickly: track/event contract, exports, and
            measurable success criteria.
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
