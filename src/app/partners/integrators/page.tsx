import Link from 'next/link';
import { ArrowRight, CheckCircle2, Cpu, Network, Shield } from 'lucide-react';
import Section from '../../../components/Section';
import CtaStrip from '../../../components/CtaStrip';

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accentCool" />
      <span>{children}</span>
    </li>
  );
}

export default function IntegratorsPage() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="text-xs tracking-widest uppercase text-textSecondary mb-3">Integrators / OEMs</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Integrate perception modules into your stack
            <span className="text-accent1">_</span>
          </h1>
          <p className="text-textSecondary max-w-4xl mx-auto">
            Swarm.ai is built as a modular, edge-first perception system. You can consume track/event intelligence via
            APIs or align exports to common formats—without adopting a monolithic centralized video pipeline.
          </p>
        </div>
      </div>

      <Section
        title="What you integrate"
        subtitle="Clear modules with a clean output contract."
        wrapperClassName="border-t border-[#465644]/60 bg-gradient-to-b from-[#171d16]/60 to-[#121813]/60"
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <Cpu className="h-6 w-6 text-accent1" />
              <p className="mt-3 font-semibold">Edge perception</p>
              <p className="mt-2 text-sm text-textSecondary">
                Detection + multi-object tracking on embedded compute, optimized for low-altitude clutter and low SNR.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <Network className="h-6 w-6 text-accentCool" />
              <p className="mt-3 font-semibold">Distributed fusion</p>
              <p className="mt-2 text-sm text-textSecondary">
                Track-to-track correlation + de-dup across nodes. Operates under degraded comms and partial loss.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <Shield className="h-6 w-6 text-accentCool2" />
              <p className="mt-3 font-semibold">Safety-first decision hooks</p>
              <p className="mt-2 text-sm text-textSecondary">
                Explicit thresholds, policy steps, and auditability—human authorization where required.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Interfaces and data products"
        subtitle="Tracks and events are the product; pixels are optional."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-textPrimary">Track/event payload shape</p>
              <p className="mt-2 text-sm text-textSecondary">
                The system converts raw EO/IR streams into structured outputs:
              </p>
              <div className="mt-3 rounded-lg border border-white/10 bg-background/40 p-4 font-mono text-xs text-textSecondary">
                {'{track_id, pos, vel, class, threat, conf, ts}'}
              </div>
              <p className="mt-2 text-xs text-textSecondary">
                Export formats are integration-driven (e.g. ASTERIX CAT062 / STANAG 5516 (Link 16) / STANAG 4586 as
                targets), plus APIs for your internal models.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-textPrimary">What you get</p>
              <ul className="mt-3 space-y-2 text-sm text-textSecondary">
                <Bullet>Output contract and integration spec (data products + timing)</Bullet>
                <Bullet>Reference architecture for degraded networks</Bullet>
                <Bullet>Deployment and validation plan (ROC-style metrics + timing verification)</Bullet>
                <Bullet>Incremental rollout strategy into existing C2/security stacks</Bullet>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/tech"
                  className="inline-flex items-center gap-2 rounded-lg border border-accent1/40 bg-accent1/10 px-4 py-2 text-sm font-semibold text-accent1 transition-colors hover:bg-accent1/20"
                >
                  Technical proof <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-card/30 px-4 py-2 text-sm font-semibold text-textPrimary transition-colors hover:border-accentCool/50 hover:text-accentCool"
                >
                  Engagement model
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaStrip
        kicker="Next step"
        title="Get an interface walkthrough"
        desc={
          <>
            We’ll map your sensor environment and C2/security interfaces to a concrete output contract (tracks/events,
            exports, timing) and a staged pilot plan.
          </>
        }
        primary={{ href: '/contact?intent=talk-to-an-engineer', label: 'Talk to an engineer' }}
        secondary={{ href: '/contact?intent=request-access', label: 'Request access' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4 text-sm text-textSecondary">
            <Link href="/" className="text-accent1 hover:underline">
              Back to home page
            </Link>
            <Link href="/imprint" className="hover:underline">
              Imprint
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
          <Link
            href="/contact?intent=talk-to-an-engineer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-accent1 text-white rounded-lg hover:bg-accent1/80 transition-colors font-semibold"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}

