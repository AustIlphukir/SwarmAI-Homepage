"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import CtaStrip from '../components/CtaStrip';

export default function HomePage() {
  const [enteredKey, setEnteredKey] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [unlockError, setUnlockError] = useState<string | null>(null);

  function getSafeRedirectTarget() {
    if (typeof window === 'undefined') return null;
    try {
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get('redirect');
      if (!redirect) return null;
      if (!redirect.startsWith('/') || redirect.startsWith('//')) return null;
      return redirect;
    } catch (_) {
      return null;
    }
  }

  useEffect(() => {
    let mounted = true;

    // Tests control unlocked/localStorage behavior; avoid async fetch noise in jsdom.
    if (process.env.NODE_ENV === 'test') {
      try {
        if (typeof window !== 'undefined' && localStorage.getItem('swarm_home_unlocked') === '1') {
          setUnlocked(true);
        }
      } catch (_) {}
      return () => {
        mounted = false;
      };
    }

    async function bootstrap() {
      try {
        const res = await fetch('/api/status', { credentials: 'include' });
        const body = await res.json().catch(() => ({}));
        const serverUnlocked = Boolean(body?.unlocked);

        if (!mounted) return;

        if (serverUnlocked) {
          setUnlocked(true);
          try {
            localStorage.setItem('swarm_home_unlocked', '1');
          } catch (_) {}
          const redirectTarget = getSafeRedirectTarget();
          if (redirectTarget) window.location.replace(redirectTarget);
          return;
        }

        // Cookie/session is not valid: clear stale local flag to avoid redirect loops.
        try {
          localStorage.removeItem('swarm_home_unlocked');
        } catch (_) {}
        setUnlocked(false);
      } catch (_) {
        if (!mounted) return;
        setUnlocked(false);
      }
    }

    bootstrap();
    return () => {
      mounted = false;
    };
  }, []);

  async function handleUnlock() {
    setUnlockError(null);
    try {
      const res = await fetch('/api/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ key: enteredKey.trim() }),
      });
      const j = await res.json().catch(() => ({}));
      if (j && j.success) {
        try {
          localStorage.setItem('swarm_home_unlocked', '1');
        } catch (_) {}
        const redirectTarget = getSafeRedirectTarget();
        if (redirectTarget) {
          window.location.assign(redirectTarget);
          return;
        }
        if (process.env.NODE_ENV !== 'test') {
          try {
            window.location.reload();
          } catch (_) {}
        }
        return;
      }
      setUnlockError(j?.error || 'Unlock failed');
    } catch (e) {
      setUnlockError('Network error — try again');
    }
  }

  if (!unlocked) {
    return (
      <div className="relative overflow-hidden bg-background">
        <div className="hero-bg-elements">
          <div className="hero-bg-lines" />
          <div className="hero-bg-glow-top" />
          <div className="hero-bg-glow-bottom" />
          <div className="hero-bg-fade" />
        </div>

        <section className="relative border-b border-[#465644]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">Private preview</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  Drone detection is a perception problem<span className="text-accent1">_</span>
                </h1>
                <p className="max-w-2xl text-lg text-textSecondary">
                  Small drones fly low, fast, and often without RF control—exactly where classical systems lose
                  reliability first. Swarm.ai builds operator-first detection and tracking systems to protect critical
                  airspace under real constraints.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                    <p className="text-sm font-semibold text-textPrimary">Early warning in clutter</p>
                    <p className="mt-1 text-sm text-textSecondary">
                      EO/IR detection + tracking engineered for low-altitude background clutter and low SNR.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                    <p className="text-sm font-semibold text-textPrimary">Distributed resilience</p>
                    <p className="mt-1 text-sm text-textSecondary">
                      No single fusion center. Nodes keep operating under degraded comms or partial loss.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact?intent=talk-to-an-engineer"
                    className="inline-flex items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 px-5 py-3 text-sm font-semibold text-accent1 transition-colors hover:bg-accent1/20"
                  >
                    Talk to an engineer <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact?intent=request-access"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-card/30 px-5 py-3 text-sm font-semibold text-textPrimary transition-colors hover:border-accentCool/50 hover:text-accentCool"
                  >
                    Request access
                  </Link>
                </div>
              </div>

              <div className="bg-card/70 rounded-2xl shadow-lg p-8 border border-white/10 text-center">
                <h2 className="text-2xl font-bold mb-3">Protected Homepage</h2>
                <p className="mb-6 text-textSecondary">Enter the passkey to access product, tech, and service details.</p>
                <input
                  type="password"
                  placeholder="Passkey"
                  className="w-full px-4 py-2 rounded-md bg-background border border-card/50 mb-4 focus:border-accent1 focus:ring-accent1 outline-none"
                  value={enteredKey}
                  onChange={e => setEnteredKey(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleUnlock();
                    }
                  }}
                />
                {unlockError && <p className="text-red-500 text-sm mb-2">{unlockError}</p>}
                <button
                  onClick={handleUnlock}
                  className="w-full py-2 px-4 rounded-md bg-accent1 text-background hover:bg-accent1/80 transition-colors"
                >
                  Unlock
                </button>
                <p className="mt-4 text-xs text-textSecondary">
                  No passkey?{' '}
                  <Link href="/contact?intent=request-access" className="text-accent1 hover:underline">
                    Request access
                  </Link>{' '}
                  or{' '}
                  <Link href="/contact?intent=talk-to-an-engineer" className="text-accent1 hover:underline">
                    talk to us
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <Section
          title="Why small drones are hard to detect"
          subtitle="Small UAVs exploit the exact edge cases where detection systems break first."
          wrapperClassName="border-b border-[#465644]/60"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Low signature at low altitude</p>
              <p className="mt-2 text-sm text-textSecondary">
                Targets are small, fast, and close to background clutter—especially over cities, trees, or water.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">No RF assumptions</p>
              <p className="mt-2 text-sm text-textSecondary">
                Autonomy and pre-programmed routes make RF detection unreliable as a primary signal.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Short timelines</p>
              <p className="mt-2 text-sm text-textSecondary">
                Response time is defined by detection-to-track latency. We instrument it end-to-end.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Adversarial behavior</p>
              <p className="mt-2 text-sm text-textSecondary">
                Swarms, decoys, and route changes quickly degrade static “detector-only” approaches.
              </p>
            </div>
          </div>
        </Section>

        <Section
          title="Why monolithic systems fail"
          subtitle="Drone defense is not solved by a single sensor and a central video pipeline."
          wrapperClassName="border-b border-[#465644]/60"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Single point of failure</p>
              <p className="mt-2 text-sm text-textSecondary">
                Central fusion centers and high-bandwidth links become brittle under interference and load.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Bandwidth and latency</p>
              <p className="mt-2 text-sm text-textSecondary">
                Streaming video is expensive and slow. Operational outputs should be tracks, events, and confidence.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Vendor lock-in</p>
              <p className="mt-2 text-sm text-textSecondary">
                Closed stacks slow down upgrades and integration. Modularity wins in real deployments.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Slow iteration cycles</p>
              <p className="mt-2 text-sm text-textSecondary">
                Threats evolve fast. Systems must learn and update without replacing the entire platform.
              </p>
            </div>
          </div>
        </Section>

        <Section
          title="Who we are"
          subtitle="Remote sensing world-class expertise and 3D professionals building deployable edge perception."
          wrapperClassName="border-b border-[#465644]/60"
        >
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Remote sensing</p>
              <p className="mt-2 font-semibold text-textPrimary">Top-ranked team</p>
              <p className="mt-2 text-sm text-textSecondary">
                TUM Photogrammetry &amp; Remote Sensing (ShanghaiRanking GRAS 2020, AS0224).
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">3D perception</p>
              <p className="mt-2 font-semibold text-textPrimary">Tracking &amp; reconstruction</p>
              <p className="mt-2 text-sm text-textSecondary">
                3D computer vision methods designed for real-world constraints and edge compute.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Systems</p>
              <p className="mt-2 font-semibold text-textPrimary">AI platforms at scale</p>
              <p className="mt-2 text-sm text-textSecondary">
                Engineering background from large-scale industrial AI platform development.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Deployment</p>
              <p className="mt-2 font-semibold text-textPrimary">Edge-first delivery</p>
              <p className="mt-2 text-sm text-textSecondary">
                Modular software + interfaces built for integration into existing security and C2 ecosystems.
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-3 bg-card rounded-lg hover:bg-card/80 transition-colors text-sm font-semibold"
            >
              Meet the team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        <CtaStrip
          kicker="Next step"
          title="Want a pilot plan for your site?"
          desc={
            <>
              Tell us your environment (airport, energy site, event, tactical base, border/perimeter) and constraints
              (range, false-alarm tolerance, comms, integration). We’ll respond with a concrete deployment proposal.
            </>
          }
          primary={{ href: '/contact?intent=pilot-discussion', label: 'Discuss a pilot' }}
          secondary={{ href: '/contact?intent=request-access', label: 'Request access' }}
        />
      </div>
    );
  }

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b border-[#465644]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">Swarm.ai</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Protect critical airspace with reliable early drone detection<span className="text-accent1">_</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-textSecondary">
            Swarm.ai builds operator-first detection and tracking systems for low-altitude threats. Our mission is to
            keep sites operational in clutter, degraded comms, and short response timelines.
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
              <p className="text-sm font-semibold text-textPrimary">Secure a site (operators)</p>
              <p className="mt-2 text-sm text-textSecondary">
                Early warning and stable tracking with instrumented latency—export tracks into your existing security or
                airspace stack.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/markets#civil"
                  className="inline-flex items-center gap-2 rounded-lg border border-accent1/40 bg-accent1/10 px-4 py-2 text-sm font-semibold text-accent1 transition-colors hover:bg-accent1/20"
                >
                  Explore scenarios <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-card/30 px-4 py-2 text-sm font-semibold text-textPrimary transition-colors hover:border-accentCool/50 hover:text-accentCool"
                >
                  Product overview
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
              <p className="text-sm font-semibold text-textPrimary">Integrate capabilities (secondary path for integrators/OEMs)</p>
              <p className="mt-2 text-sm text-textSecondary">
                Sensor-agnostic perception modules + interfaces. Consume tracks/events or export into standardized C2 data
                products.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/partners/integrators"
                  className="inline-flex items-center gap-2 rounded-lg border border-accent1/40 bg-accent1/10 px-4 py-2 text-sm font-semibold text-accent1 transition-colors hover:bg-accent1/20"
                >
                  Integration path <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tech"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-card/30 px-4 py-2 text-sm font-semibold text-textPrimary transition-colors hover:border-accentCool/50 hover:text-accentCool"
                >
                  Technical proof
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Architecture for real operations"
        subtitle="Swarm.ai is built to protect large areas under real-world constraints. A distributed sensor mesh processes EO/IR data at the edge, sharing events instead of video. Multi-node fusion reconstructs trajectories and optional 3D scene updates from minimal data. The same architecture adapts continuously to new and previously unseen drone types."
        wrapperClassName="border-t border-[#465644]/60 bg-gradient-to-b from-[#171d16]/60 to-[#121813]/60"
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-textPrimary">Architecture diagram (placeholder)</p>
              <div className="mt-3 flex aspect-video items-center justify-center rounded-lg border border-white/10 bg-background/20 p-4 text-center text-xs text-textSecondary">
                Diagram: distributed sensor mesh → edge processing → fusion → structured outputs
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-textPrimary">Looping animation (placeholder)</p>
              <div className="mt-3 flex aspect-video items-center justify-center rounded-lg border border-white/10 bg-background/20 p-4 text-center text-xs text-textSecondary">
                Animation: multi-view detection → track fusion → 3D trajectory
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm font-semibold text-textPrimary">Response-ready interface</p>
            <p className="mt-2 text-sm text-textSecondary">
              Swarm.ai provides cueing, safety interlocks, and auditability. Physical response is executed via partner
              platforms through a defined interface, including autonomy-ready interceptor systems in permissioned
              contexts.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Demos"
        subtitle="Live demonstration of distributed detection, edge fusion, and real-time alerting."
        wrapperClassName="border-t border-[#465644]/60 bg-gradient-to-b from-[#181f17]/60 to-[#111712]/60"
      >
        <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
          <div className="flex aspect-video items-center justify-center rounded-xl border border-white/10 bg-black/20 p-4 text-center text-sm text-textSecondary">
            Demo media placeholder (video/animation)
          </div>
        </div>
      </Section>

      <CtaStrip
        kicker="Get started"
        title="Discuss your constraints with us"
        desc={
          <>
            The fastest way to de-risk a counter‑UAS program is to align on sensing constraints, integration surfaces,
            and measurable success criteria. We’ll translate that into a staged pilot plan.
          </>
        }
        primary={{ href: '/contact?intent=pilot-discussion', label: 'Discuss a pilot' }}
        secondary={{ href: '/services', label: 'See engagement model' }}
      />

      <section className="w-full py-8 bg-background border-t border-[#465644]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-textSecondary">
            <div className="opacity-80">© {new Date().getFullYear()} Swarm.ai. All rights reserved.</div>
            <nav className="flex items-center gap-4" aria-label="Footer navigation">
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/markets" className="hover:underline">
                Markets
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
              <Link href="/imprint" className="hover:underline">
                Imprint
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </nav>
            <div className="opacity-80">Built in Munich, EU</div>
          </div>
        </div>
      </section>
    </div>
  );
}
