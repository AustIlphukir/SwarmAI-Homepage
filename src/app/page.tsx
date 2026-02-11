"use client";

import Link from 'next/link';
import Image from 'next/image';
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

  const ReferencesStrip = ({ compact }: { compact?: boolean }) => {
    return (
      <Section
        title="Research & technical lineage"
        subtitle={
          compact
            ? 'Built on leading research and early industry collaboration in 3D perception, remote sensing, and autonomous systems.'
            : 'Built on leading research and early industry collaboration in 3D perception, remote sensing, and autonomous systems.'
        }
        wrapperClassName="border-b border-[#465644]/60"
      >
        <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Research</p>
              <div className="mt-3 flex min-h-16 items-center justify-center px-2 text-xs text-textSecondary">
                <Image
                  src="/images/partners/TUM.png"
                  alt="TUM logo"
                  width={180}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-sm text-textSecondary">
                Technical lineage via academic collaboration in photogrammetry, remote sensing, and 3D perception.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Industry</p>
              <div className="mt-3 flex min-h-16 items-center justify-center px-2 text-xs text-textSecondary">
                <Image
                  src="/images/partners/3dwe_logo_w-dOqrKD5jGKu2DpWa.png.jpeg"
                  alt="3Dwe logo"
                  width={180}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-sm text-textSecondary">
                Placeholder for collaboration / project involvement reference.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Industry</p>
              <div className="mt-3 flex min-h-16 items-center justify-center px-2 text-xs text-textSecondary">
                <Image
                  src="/images/Logo3.png"
                  alt="RV Connex Ltd. logo"
                  width={180}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-sm text-textSecondary">
                Placeholder for collaboration / project involvement reference.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Industry</p>
              <div className="mt-3 flex min-h-16 items-center justify-center px-2 text-xs text-textSecondary">
                <Image
                  src="/images/partners/novamesh-placeholder.svg"
                  alt="NovaMesh placeholder logo"
                  width={180}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-sm text-textSecondary">
                Placeholder for collaboration / project involvement reference.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Industry</p>
              <div className="mt-3 flex min-h-16 items-center justify-center px-2 text-xs text-textSecondary">
                <Image
                  src="/images/partners/lynxgrid-placeholder.svg"
                  alt="LynxGrid placeholder logo"
                  width={180}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-sm text-textSecondary">
                Placeholder for collaboration / project involvement reference.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Industry</p>
              <div className="mt-3 flex min-h-16 items-center justify-center px-2 text-xs text-textSecondary">
                <Image
                  src="/images/partners/quartzaero-placeholder.svg"
                  alt="QuartzAero placeholder logo"
                  width={180}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-sm text-textSecondary">
                Placeholder for collaboration / project involvement reference.
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs text-textSecondary/90">
            Logos indicate research collaboration, technical lineage, or early project involvement. They do not imply commercial endorsement.
          </p>

          {!compact && (
            <div className="mt-6 flex justify-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 bg-card rounded-lg hover:bg-card/80 transition-colors text-sm font-semibold"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </Section>
    );
  };

  if (!unlocked) {
    return (
      <div className="relative overflow-hidden bg-background">
        <div className="hero-bg-elements">
          <div className="hero-bg-lines" />
          <div className="hero-bg-glow-top" />
          <div className="hero-bg-glow-bottom" />
          <div className="hero-bg-fade" />
        </div>

        <section className="relative isolate min-h-[100dvh] border-b border-[#465644]/60">
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute left-0 right-0 -top-[7%] h-[114%] w-full origin-center object-cover object-center opacity-35 [transform:scaleX(1.04)]"
            >
              <source src="/videos/source-3.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/55" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">Private preview</p>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                  Resilient 3D tracking for drone swarms<span className="text-accent1">_</span>
                </h1>

                <p className="max-w-2xl text-lg text-textSecondary">
                  Swarm.ai delivers reliable multi-target tracking for low-altitude drone threats—built for
                  clutter, low SNR, degraded comms, and short response timelines.
                  <span className="block mt-2">
                    You can’t defeat what you can’t track: we turn EO/IR sensor feeds into stable tracks and events at the edge, so
                    operators and downstream response systems can act in time.
                  </span>
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                    <p className="text-sm font-semibold text-textPrimary">Multi-target tracking at the edge</p>
                    <p className="mt-1 text-sm text-textSecondary">
                      Track stability under clutter and low SNR—without relying on a central video pipeline.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                    <p className="text-sm font-semibold text-textPrimary">Distributed resilience</p>
                    <p className="mt-1 text-sm text-textSecondary">
                      Event-driven outputs keep operations running under degraded comms or partial node loss.
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
                <p className="mb-6 text-textSecondary">
                  Enter the passkey to access product, tech, and service details.
                </p>
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
          subtitle="The hardest part is reliable perception under low-altitude constraints."
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
              <p className="text-sm font-semibold text-textPrimary">Non-cooperative behavior</p>
              <p className="mt-2 text-sm text-textSecondary">
                Autonomy and pre-programmed routes make RF a weak primary signal; swarms and decoys raise the bar.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Short timelines</p>
              <p className="mt-2 text-sm text-textSecondary">
                Response options are bounded by detect-to-track latency. We instrument it end-to-end.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Clutter and low SNR</p>
              <p className="mt-2 text-sm text-textSecondary">
                Heat haze, clouds, buildings, trees, and camera motion create hard false-alarm conditions.
              </p>
            </div>
          </div>
        </Section>

        <Section
          title="Why monolithic systems fail"
          subtitle="Centralized pipelines are brittle, bandwidth-heavy, and slow to adapt."
          wrapperClassName="border-b border-[#465644]/60"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Single points of failure</p>
              <p className="mt-2 text-sm text-textSecondary">
                Central fusion centers and high-bandwidth links become brittle under interference and load.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Bandwidth and latency penalties</p>
              <p className="mt-2 text-sm text-textSecondary">
                Streaming video is expensive and slow. Operational outputs should be tracks, events, and confidence.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Vendor lock-in</p>
              <p className="mt-2 text-sm text-textSecondary">
                Closed stacks slow integration and upgrades. Modularity wins in long-lived deployments.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-textPrimary">Perception is the bottleneck</p>
              <p className="mt-2 text-sm text-textSecondary">
                If tracking is unstable, every downstream step becomes noisy and expensive.
              </p>
            </div>
          </div>
        </Section>

        {/* <ReferencesStrip compact /> */}

        <CtaStrip
          kicker="Next step"
          title="Want a pilot plan for your site?"
          desc={
            <>
              Tell us your environment (airport, energy site, event, tactical base, border/perimeter) and constraints
              (range, false-alarm tolerance, comms, integration). We’ll respond with a concrete staged pilot proposal.
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
      <section className="relative isolate min-h-[100dvh] overflow-hidden border-b border-[#465644]/60">
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute left-0 right-0 -top-[7%] h-[114%] w-full origin-center object-cover object-center opacity-35 [transform:scaleX(1.04)]"
          >
            <source src="/videos/source-3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/55" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">Swarm.ai</p>

          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Resilient 3D tracking for drone swarms<span className="text-accent1">_</span>
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-textSecondary">
            Swarm.ai delivers reliable multi-target tracking for low-altitude drone threats—built for clutter, low SNR,
            degraded comms, and short response timelines.
            <span className="block mt-2">
              You can’t defeat what you can’t track: we turn EO/IR sensor feeds into stable tracks and events at the edge, so
              operators and downstream response systems can act in time.
            </span>
          </p>

          <div className="mt-4 text-sm text-textSecondary">
            Proof: <Link href="/tech#demos" className="text-accent1 hover:underline">demos</Link> +{' '}
            <Link href="/tech#outputs" className="text-accent1 hover:underline">interface examples</Link> (tracks/events, replayable fusion outputs).
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
              <p className=" font-semibold text-textPrimary">Secure a site (Journey operators)</p>
              <p className="mt-2 text-textSecondary">
                Early warning with fixed systems.
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
              <p className=" font-semibold text-textPrimary">Integrate capabilities (Journey integrators / OEMs)</p>
              <p className="mt-2 text-textSecondary">
                Sensor-agnostic AI perception edge modules to turn 3D tracking data to actionable low-bandwith payloads.
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

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-6">
            <div className="flex items-center gap-8 overflow-x-auto">
              <Image
                src="/images/partners/TUM.png"
                alt="TUM logo"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
              />
              <Image
                src="/images/partners/3dwe_logo_w-dOqrKD5jGKu2DpWa.png.jpeg"
                alt="3Dwe logo"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
              />
              <Image
                src="/images/partners/stratoforge-placeholder.svg"
                alt="StratoForge placeholder logo"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
              />
              <Image
                src="/images/partners/novamesh-placeholder.svg"
                alt="NovaMesh placeholder logo"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
              />
              <Image
                src="/images/partners/lynxgrid-placeholder.svg"
                alt="LynxGrid placeholder logo"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
              />
              <Image
                src="/images/partners/quartzaero-placeholder.svg"
                alt="QuartzAero placeholder logo"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Architecture for real operations"
        subtitle="Distributed sensor mesh processes EO/IR at the edge and shares events—not video. Multi-node fusion maintains stable tracks and optional compact 3D updates from minimal data. Designed to remain operational under degraded links and adapt to previously unseen targets."
        wrapperClassName="border-t border-[#465644]/60 bg-gradient-to-b from-[#171d16]/60 to-[#121813]/60"
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-textPrimary">Clutter free tracking day and night</p>
              <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-background/20">
                <video
                  className="aspect-video w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                >
                  <source src="/videos/Drone_Animation_From_Thermal_Image.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold text-textPrimary">3D AI Perception</p>
              <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-background/20">
                <video
                  className="aspect-video w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                >
                  <source src="/videos/PoseEstimationAndTrackingSUV.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm font-semibold text-textPrimary">Response interface (integration-level)</p>
            <p className="mt-2 text-sm text-textSecondary">
              Swarm.ai provides cueing, safety interlocks, and auditability. Physical response is executed via partner
              platforms through a defined interface in permissioned contexts.
            </p>
          </div>
        </div>
      </Section>

      {/* <ReferencesStrip /> */}

      <Section
        title="Demos"
        subtitle="Live demonstration of distributed detection, edge fusion, and real-time alerting."
        wrapperClassName="border-t border-[#465644]/60 bg-gradient-to-b from-[#181f17]/60 to-[#111712]/60"
      >
        <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
          <div className="flex aspect-video items-center justify-center rounded-xl border border-white/10 bg-black/20 p-4 text-center text-sm text-textSecondary">
            Demo media placeholder (video/animation)
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold text-textPrimary">Edge tracking</p>
              <p className="mt-1 text-sm text-textSecondary">What it proves: stable tracking under clutter / low SNR.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold text-textPrimary">Multi-node fusion</p>
              <p className="mt-1 text-sm text-textSecondary">What it proves: correlation + de-dup without a central video pipeline.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold text-textPrimary">Optional 3D update</p>
              <p className="mt-1 text-sm text-textSecondary">What it proves: trajectory/pose intelligence from minimal data.</p>
            </div>
          </div>
        </div>
      </Section>

      <CtaStrip
        kicker="Get started"
        title="Discuss your constraints with us"
        desc={
          <>
            The fastest way to de-risk a counter-UAS program is to align on sensing constraints, integration surfaces,
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
