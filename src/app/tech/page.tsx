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

export default function TechPage() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="text-xs tracking-widest uppercase text-textSecondary mb-3">Tech</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            How we detect &amp; track small drones
            <span className="text-accent1">_</span>
          </h1>
          <p className="text-textSecondary max-w-4xl mx-auto">
            Counter‑UAS fails when perception fails: low-altitude clutter, low SNR, degraded comms, and short timelines.
            Swarm.ai is built to turn EO/IR streams into stable, auditable tracks—then distribute that intelligence
            without a brittle central pipeline.
          </p>
        </div>
      </div>

      <Section
        title="Perception pipeline (what breaks first)"
        subtitle="A practical pipeline designed around measurable constraints."
        wrapperClassName="border-t border-[#465644]/60 bg-gradient-to-b from-[#171d16]/60 to-[#121813]/60"
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-textPrimary">Detection</h3>
              <p className="mt-2 text-sm text-textSecondary">
                EO/IR detection optimized for small targets in clutter (trees, buildings, heat haze, background motion).
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-textPrimary">Tracking</h3>
              <p className="mt-2 text-sm text-textSecondary">
                Multi-object tracking converts detections into stable tracks. Timing is instrumented end-to-end.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-textPrimary">Identification cues</h3>
              <p className="mt-2 text-sm text-textSecondary">
                Reference‑conditioned perception reduces retraining cycles and helps suppress false positives.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
                <Network className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-textPrimary">Fusion</h3>
              <p className="mt-2 text-sm text-textSecondary">
                Track‑to‑track correlation + de‑dup across nodes. Intelligence stays operational under degraded comms.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Edge-first</p>
              <p className="mt-2 text-sm text-textSecondary">
                Mission-critical perception runs on Linux edge nodes. Optional cloud is for offline validation and updates.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Low bandwidth</p>
              <p className="mt-2 text-sm text-textSecondary">
                Nodes exchange track/event messages instead of video. Secure mesh links use mTLS.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Auditability</p>
              <p className="mt-2 text-sm text-textSecondary">
                Decision points are explicit: thresholds, confidence, and policy steps are logged and reviewable.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Outputs and interfaces (integrators)"
        subtitle="Downstream systems should consume structured intelligence."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-textSecondary">Track/event output</h3>
              <p className="mt-2 text-sm text-textSecondary">
                We export tracks and events, not pixels. Example payload shape:
              </p>
              <p className="mt-2 text-sm text-textSecondary">
                We convert camera feeds into compact, actionable track/event data that downstream systems can use
                directly.
              </p>
              <div className="mt-3 rounded-lg border border-white/10 bg-background/40 p-4 font-mono text-xs text-textSecondary">
                {'{track_id, pos, vel, class, threat, conf, ts}'}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-textSecondary">
                {[
                  'Designed for low-latency consumer systems (alerts, dashboards, C2)',
                  'Supports multi-sensor correlation and de-dup at the track layer',
                  'Integration-driven export formats (e.g. ASTERIX CAT062 / STANAG 5516 / STANAG 4586 as targets)',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accentCool" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-textSecondary">Effector interface</h3>
              <p className="mt-2 text-sm text-textSecondary">
                Swarm.ai provides cueing, safety interlocks, and audit trails. Physical response is executed via a
                consortium partner platform through a defined interface.
              </p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-lg border border-white/10 bg-card/40 p-4">
                  <p className="text-sm text-textSecondary">
                    <span className="font-semibold text-textPrimary">Autonomy-ready:</span> autonomous perception and
                    tracking, human authorization where required, explicit abort/safe states.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-card/40 p-4">
                  <p className="text-sm text-textSecondary">
                    <span className="font-semibold text-textPrimary">Degraded comms:</span> nodes operate independently
                    and degrade gracefully without single points of failure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Decision logic (safety-first escalation)"
        subtitle="A multi-stage flow that is explicit, verifiable, and auditable."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <ol className="grid gap-3 md:grid-cols-2">
            {[
              {
                title: 'Low confidence / ambiguous',
                desc: 'Track only. Continue observing and avoid premature escalation.',
              },
              {
                title: 'Strengthen posterior',
                desc: 'Increase revisit / allocate sensors. Fusion improves confidence through multi-view correlation.',
              },
              {
                title: 'Response readiness',
                desc: 'Cue effector interface (no launch yet). Pre-check safety interlocks and authorization rules.',
              },
              {
                title: 'Execute (permissioned contexts)',
                desc: 'Swarm coordination prioritizes threats, allocates N interceptors, de-conflicts trajectories, and maintains safety margins.',
              },
              {
                title: 'Abort / safe state',
                desc: 'Disengage if possible. Continue tracking and alert the operator.',
              },
              {
                title: 'Post-action verification',
                desc: 'Archive evidence and telemetry for review and continuous improvement.',
              },
            ].map((s, idx) => (
              <li key={s.title} className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <p className="mt-2 text-sm font-semibold text-textPrimary">{s.title}</p>
                <p className="mt-2 text-sm text-textSecondary">{s.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-textSecondary">
            Note: public wording is intentionally conservative—final behavior depends on customer policy, authorization
            requirements, and the selected effector platform.
          </p>
        </div>
      </Section>

      <Section title="Demos" subtitle="Concrete examples of our 3D and perception work.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm">
            <Link
              href="https://3dtwin.3dwe.org/burda_senatorre.html"
              className="inline-flex items-center gap-2 rounded-lg border border-accent1/40 bg-accent1/10 px-4 py-2 text-accent1 transition-colors hover:bg-accent1/20"
            >
              View edge-based 3D reconstruction demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pose"
              className="inline-flex items-center gap-2 rounded-lg border border-accent1/40 bg-accent1/10 px-4 py-2 text-accent1 transition-colors hover:bg-accent1/20"
            >
              View real-time 6D pose estimation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section
        title="Data sovereignty & security"
        subtitle="Edge processing minimizes data movement and supports privacy/security constraints."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-card/60 p-5 text-center">
              <Cpu className="mx-auto h-6 w-6 text-accent1" />
              <p className="mt-2 text-sm font-medium">Edge-only core</p>
              <p className="mt-1 text-xs text-textSecondary">Mission-critical inference runs locally.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5 text-center">
              <Gauge className="mx-auto h-6 w-6 text-accentCool" />
              <p className="mt-2 text-sm font-medium">Low latency</p>
              <p className="mt-1 text-xs text-textSecondary">Designed for fast detect-to-track timing.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5 text-center">
              <Shield className="mx-auto h-6 w-6 text-accentCool2" />
              <p className="mt-2 text-sm font-medium">Secure links</p>
              <p className="mt-1 text-xs text-textSecondary">mTLS on the mesh; least-data-by-default.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-5 text-center">
              <Network className="mx-auto h-6 w-6 text-accent1" />
              <p className="mt-2 text-sm font-medium">Graceful degradation</p>
              <p className="mt-1 text-xs text-textSecondary">No brittle central dependency.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="FAQ" subtitle="Risk reducers for operators and integrators.">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <Faq
            items={[
              {
                q: 'Do you rely on RF / remote ID?',
                a: 'No. RF can be an auxiliary signal, but the core stack is optical EO/IR perception and tracking.',
              },
              {
                q: 'How do you reduce false alarms in clutter?',
                a: 'We treat false alarms as a first-class constraint: tracking stability, confidence calibration, and multi-view fusion are designed to suppress clutter-induced noise.',
              },
              {
                q: 'What do you output to downstream systems?',
                a: (
                  <span>
                    Structured track/event intelligence (tracks, not pixels). Export formats are integration-driven (e.g.
                    ASTERIX CAT062 / STANAG 5516 / STANAG 4586 as targets).
                  </span>
                ),
              },
              {
                q: 'What happens under degraded communications?',
                a: 'Nodes keep operating locally; fusion and coordination degrade gracefully. There is no single central point that must be reachable.',
              },
              {
                q: 'Do you provide the effector / interceptor?',
                a: 'Swarm.ai provides cueing, safety interlocks, and auditability. Physical response is executed via a consortium partner platform through a defined interface.',
              },
              {
                q: 'Is it autonomous?',
                a: 'Autonomous perception and tracking are core. Escalation follows explicit policy/threshold rules, with human authorization where required by the operational context.',
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
            We’ll map your environment and integration surfaces to a staged pilot plan and a concrete interface spec
            (tracks/events, exports, and decision hooks).
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
