import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Cpu,
  Eye,
  Gauge,
  Network,
  Shield,
  Target,
} from 'lucide-react';
import Section from '../../components/Section';
import CtaStrip from '../../components/CtaStrip';
import Faq from '../../components/Faq';
import ProofHook from '../../components/ProofHook';

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accentCool" />
      <span>{children}</span>
    </li>
  );
}

function PipelineStep({
  icon,
  title,
  constraint,
  mechanism,
  output,
  proofType,
  proofText,
}: {
  icon: React.ReactNode;
  title: string;
  constraint: string;
  mechanism: string;
  output: string;
  proofType: 'Demo' | 'Benchmark' | 'Publication' | 'Integration artifact' | 'Test report' | 'Pilot metric';
  proofText: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-card/60 p-5">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-textPrimary">{title}</h3>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Constraint</p>
      <p className="mt-1 text-sm text-textSecondary">{constraint}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Mechanism</p>
      <p className="mt-1 text-sm text-textSecondary">{mechanism}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Output</p>
      <p className="mt-1 text-sm text-textSecondary">{output}</p>
      <ProofHook className="mt-4" items={[{ type: proofType, text: proofText }]} />
    </div>
  );
}

function WhyCard({
  title,
  claim,
  because,
  mechanism,
  proofType,
  proofText,
}: {
  title: string;
  claim: string;
  because: string;
  mechanism: string;
  proofType: 'Demo' | 'Benchmark' | 'Publication' | 'Integration artifact' | 'Test report' | 'Pilot metric';
  proofText: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <p className="text-sm font-semibold text-textPrimary">{title}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Claim</p>
      <p className="mt-1 text-sm text-textSecondary">{claim}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Because</p>
      <p className="mt-1 text-sm text-textSecondary">{because}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Mechanism</p>
      <p className="mt-1 text-sm text-textSecondary">{mechanism}</p>
      <ProofHook className="mt-4" items={[{ type: proofType, text: proofText }]} />
    </div>
  );
}

function ControlCard({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-card/60 p-5 text-center">
      <div className="mx-auto mb-2 inline-flex h-8 w-8 items-center justify-center text-accent1">{icon}</div>
      <p className="text-sm font-medium text-textPrimary">{label}</p>
    </div>
  );
}

function DemoTile({
  title,
  proves,
  href,
  cta,
  proofText,
}: {
  title: string;
  proves: string;
  href: string;
  cta: string;
  proofText: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex aspect-video items-center justify-center rounded-xl border border-white/10 bg-black/20 p-4 text-center text-xs text-textSecondary">
        Thumbnail placeholder
      </div>
      <p className="mt-3 text-sm font-semibold text-textPrimary">{title}</p>
      <p className="mt-2 text-sm text-textSecondary">
        <span className="font-semibold text-textPrimary">Proves:</span> {proves}
      </p>
      <ProofHook className="mt-4" items={[{ type: 'Demo', text: proofText }]} />
      <div className="mt-4">
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-lg border border-accent1/40 bg-accent1/10 px-4 py-2 text-sm font-semibold text-accent1 transition-colors hover:bg-accent1/20"
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function TechPage() {
  return (
    <div className="bg-background">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-accentCool/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent1/10 blur-3xl" />

        <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1922] via-[#111d28] to-[#0f151d] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">Tech</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-textPrimary sm:text-5xl">
            World-leading capabilities in 3D perception, remote sensing, and autonomous systems
            <span className="text-accent1">_</span>
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-textSecondary">
            Built on multi-view geometry, EO/IR perception, and distributed fusion, engineered for low-altitude
            clutter, low SNR, degraded comms, and short timelines.
          </p>
          <div className="mt-6 max-w-5xl rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-textSecondary">Evidence strip</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-card/40 p-3 text-sm text-textSecondary">
                [PROOF: Demo links] 3D recon, 6D pose, fusion demo
              </div>
              <div className="rounded-lg border border-white/10 bg-card/40 p-3 text-sm text-textSecondary">
                [PROOF: Publications/partners] TUM + public references
              </div>
              <div className="rounded-lg border border-white/10 bg-card/40 p-3 text-sm text-textSecondary">
                [PROOF: Benchmarks] latency, false alarms, track continuity
              </div>
            </div>
            <ProofHook
              className="mt-4"
              items={[
                { type: 'Demo', text: '3D recon / 6D pose / fusion demo links' },
                { type: 'Publication', text: 'TUM + public references placeholder' },
                { type: 'Benchmark', text: 'Latency + false alarms + continuity placeholder' },
              ]}
            />
          </div>
          <h2 className="mt-8 max-w-4xl text-2xl font-semibold leading-tight text-textPrimary sm:text-4xl">
            How we detect &amp; track small drones
            <span className="text-accent1">_</span>
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-textSecondary">
            Counter-UAS fails when perception fails under clutter, low SNR, and timing constraints. We convert EO/IR
            streams into stable, auditable tracks and distribute them without a central video pipeline.
          </p>
          <p className="mt-3 max-w-4xl text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">
            [PROOF: show detect-&gt;track timing traces + example logs]
          </p>
          <ProofHook className="mt-3 max-w-4xl" items={[{ type: 'Test report', text: 'Detect->track traces + log sample' }]} />
          <div className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-card/40 p-6 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-textSecondary">
              Architecture diagram (placeholder)
            </p>
            <div className="mt-3 flex aspect-video items-center justify-center rounded-xl border border-white/10 bg-black/20 p-4 text-center text-sm text-textSecondary">
              Diagram: EO/IR → edge perception → distributed fusion → tracks/events → C2/operator
            </div>
          </div>
        </section>
      </div>

      <Section
        title="Perception pipeline under real operational constraints"
        subtitle="Detect -> Track pipeline with explicit constraints, mechanisms, outputs, and proof hooks."
        wrapperClassName="border-t border-[#465644]/60 bg-gradient-to-b from-[#171d16]/60 to-[#121813]/60"
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <PipelineStep
              icon={<Eye className="h-5 w-5" />}
              title="Detection"
              constraint="Clutter and low SNR drive false alarms."
              mechanism="EO/IR detection tuned for small targets under background motion."
              output="Candidate detections with confidence."
              proofType="Benchmark"
              proofText="Detection PR curve + false alarm rate definition + eval set."
            />
            <PipelineStep
              icon={<Target className="h-5 w-5" />}
              title="Tracking"
              constraint="Track breaks under motion and short revisit windows."
              mechanism="Multi-object tracker with camera-motion handling and latency instrumentation."
              output="Stable tracks with detect->track timing."
              proofType="Test report"
              proofText="Detect->track latency traces + continuity replay."
            />
            <PipelineStep
              icon={<Brain className="h-5 w-5" />}
              title="Identification cues"
              constraint="Recurring clutter signatures raise false positives."
              mechanism="Reference-conditioned cues with novelty/open-set checks."
              output="Updated class/threat cues per track."
              proofType="Benchmark"
              proofText="Open-set confusion matrix + clutter suppression cases."
            />
            <PipelineStep
              icon={<Network className="h-5 w-5" />}
              title="Fusion"
              constraint="Partial observability and degraded comms fragment tracks."
              mechanism="Track-level correlation, de-dup, and posterior updates across nodes."
              output="Unified track stream for downstream decisions."
              proofType="Demo"
              proofText="Fusion replay under degraded comms and partial views."
            />
          </div>
        </div>
      </Section>

      <Section title="Architecture choices with failure-mode rationale" subtitle="Detect -> Track -> Decide without central fragility.">
        <div className="grid gap-4 md:grid-cols-3">
          <WhyCard
            title="Why edge-first"
            claim="Mission-critical inference runs on edge nodes."
            because="Uplinks degrade and latency dominates detect/track decisions."
            mechanism="On-device perception, local buffering, and optional offline update loop."
            proofType="Demo"
            proofText="Comms-loss operation replay + latency chart placeholder."
          />
          <WhyCard
            title="Why we do not stream video"
            claim="Nodes exchange tracks/events, not pixels."
            because="Bandwidth and central bottlenecks degrade responsiveness."
            mechanism="Event-driven messaging with track-level fusion."
            proofType="Benchmark"
            proofText="Bandwidth budget table + sample message-rate profile."
          />
          <WhyCard
            title="How auditability is implemented"
            claim="Escalation is explicit and reviewable."
            because="Regulated environments need post-incident reconstruction."
            mechanism="Thresholds, confidence, and policy steps logged at state transitions."
            proofType="Integration artifact"
            proofText="Audit log excerpt + state-transition record."
          />
        </div>
      </Section>

      <Section
        title="Track outputs and integration interfaces"
        subtitle="Track -> Decide surfaces for integrators."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-textSecondary">Track/event output</h3>
              <p className="mt-2 text-sm text-textSecondary">We export tracks and events, not pixels.</p>
              <ul className="mt-4 space-y-2 text-sm text-textSecondary">
                {[
                  'Designed for low-latency consumers (alerts, dashboards, C2)',
                  'Supports correlation and de-dup at the track layer',
                  'Integration-driven for downstream consumers',
                ].map((line) => (
                  <Bullet key={line}>{line}</Bullet>
                ))}
              </ul>

              <div className="mt-4 space-y-3">
                <details className="group rounded-lg border border-white/10 bg-black/25 p-4 open:border-accent1/40">
                  <summary className="cursor-pointer list-none select-none text-sm font-semibold text-textPrimary">
                    Example payload (expand)
                  </summary>
                  <div className="mt-3 rounded-lg border border-white/10 bg-background/40 p-4 font-mono text-xs text-textSecondary">
                    {'{track_id, pos, vel, class, threat, conf, ts}'}
                  </div>
                </details>

                <details className="group rounded-lg border border-white/10 bg-black/25 p-4 open:border-accent1/40">
                  <summary className="cursor-pointer list-none select-none text-sm font-semibold text-textPrimary">
                    Export targets (expand)
                  </summary>
                  <p className="mt-3 text-sm text-textSecondary">
                    Integration-driven design targets, not certified out of the box.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-textSecondary">
                    {['ASTERIX CAT062', 'STANAG 5516', 'STANAG 4586'].map((line) => (
                      <Bullet key={line}>{line}</Bullet>
                    ))}
                  </ul>
                </details>
              </div>
              <ProofHook className="mt-4" items={[{ type: 'Integration artifact', text: 'Integration screenshot or sample export file' }]} />
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-textSecondary">Effector interface</h3>
              <p className="mt-2 text-sm text-textSecondary">
                Cueing, safety interlocks, and audit trails via a defined interface. Physical response is executed via
                partner platforms.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-textSecondary">
                {[
                  'Human authorization where required',
                  'Explicit abort/safe states',
                  'Graceful degradation',
                ].map((line) => (
                  <Bullet key={line}>{line}</Bullet>
                ))}
              </ul>
              <ProofHook
                className="mt-4"
                items={[
                  { type: 'Integration artifact', text: 'Interface spec excerpt placeholder' },
                  { type: 'Test report', text: 'Cue-only vs execute gating state machine' },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Decision logic (safety-first escalation)"
        subtitle="Decide with explicit, reviewable state transitions."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="rounded-xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">
              Staged flow diagram (placeholder)
            </p>
            <div className="mt-3 flex items-center justify-center rounded-lg border border-white/10 bg-background/20 p-4 text-center text-sm text-textSecondary">
              Track only -&gt; Strengthen posterior -&gt; Response readiness -&gt; Execute -&gt; Abort/safe -&gt; Post-action verification
            </div>
          </div>

          <ol className="mt-6 grid gap-2 md:grid-cols-2">
            {[
              'Track only',
              'Strengthen posterior',
              'Response readiness (cue only + interlocks)',
              'Execute (permissioned contexts)',
              'Abort/safe state',
              'Post-action verification',
            ].map((label, idx) => (
              <li key={label} className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <p className="mt-2 text-sm font-semibold text-textPrimary">{label}</p>
              </li>
            ))}
          </ol>
          <ProofHook
            className="mt-4"
            items={[
              { type: 'Integration artifact', text: 'Incident replay workflow' },
              { type: 'Test report', text: 'Safe-state / abort test case' },
              { type: 'Pilot metric', text: 'Policy thresholds table template' },
            ]}
          />
          <p className="mt-4 text-xs text-textSecondary">
            Final behavior depends on customer policy, authorization requirements, and the selected effector platform.
          </p>
        </div>
      </Section>

      <Section title="Security and data sovereignty controls" subtitle="Controls applied to detect, track, and decide flows.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <ControlCard icon={<Cpu className="h-6 w-6" />} label="Edge-only core" />
            <ControlCard icon={<Shield className="h-6 w-6" />} label="mTLS links" />
            <ControlCard icon={<Gauge className="h-6 w-6" />} label="Least-data-by-default" />
            <ControlCard icon={<Network className="h-6 w-6" />} label="Graceful degradation (no brittle central dependency)" />
          </div>
          <ProofHook
            className="mt-4"
            items={[
              { type: 'Publication', text: 'Threat model doc link placeholder' },
              { type: 'Integration artifact', text: 'Security architecture diagram placeholder' },
              { type: 'Test report', text: 'Pen-test / hardening checklist placeholder' },
            ]}
          />
        </div>
      </Section>

      <Section title="Demos (evidence hub)" subtitle="Each demo states what it proves.">
        <div className="grid gap-4 md:grid-cols-3">
          <DemoTile
            title="Edge-based 3D reconstruction demo"
            proves="3D-from-edge with minimal data footprint."
            href="https://3dtwin.3dwe.org/burda_senatorre.html"
            cta="View edge-based 3D reconstruction demo"
            proofText="Video link"
          />
          <DemoTile
            title="Real-time 6D pose estimation"
            proves="Tracking stability and pose outputs under real conditions."
            href="/pose"
            cta="View real-time 6D pose estimation"
            proofText="Video link"
          />
          <DemoTile
            title="Multi-node fusion replay"
            proves="Track correlation and de-dup under partial observability."
            href="/contact?intent=pilot-discussion"
            cta="Request a fusion demo"
            proofText="Video link"
          />
        </div>
      </Section>

      <Section title="FAQ" subtitle="Risk reducers for operators and integrators.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <Faq
            items={[
              {
                q: 'What data leaves the site?',
                a: 'By default: track/event intelligence and telemetry, not video. Video can remain local for operator validation.',
              },
              {
                q: 'How does it behave under comms loss?',
                a: 'Nodes keep operating locally; fusion and coordination degrade gracefully without a single central dependency.',
              },
              {
                q: 'How do you measure latency and false alarms?',
                a: 'We instrument detect->track timing end-to-end and evaluate false alarms under clutter using repeatable test sets.',
              },
              {
                q: 'What are the integration surfaces?',
                a: 'Track/event streams, alert channels, dashboard hooks, and C2 adapter endpoints, all defined through interface contracts.',
              },
              {
                q: 'What is the minimum viable pilot?',
                a: 'A constrained site plus measurable criteria (coverage, latency, false alarms, degraded comms), staged from alerts to full track consumption.',
              },
            ]}
          />
        </div>
      </Section>

      <CtaStrip
        kicker="Next step"
        title="Want an architecture walkthrough?"
        desc={
          <>
            We map your environment and integration surfaces to a staged pilot plan.
            <br />
            You get a concrete interface spec.
          </>
        }
        primary={{ href: '/contact?intent=pilot-discussion', label: 'Discuss a pilot' }}
        secondary={{ href: '/product', label: 'See product architecture' }}
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
