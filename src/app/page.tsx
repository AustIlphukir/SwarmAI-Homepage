"use client";
import Image from 'next/image';
import Link from 'next/link';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Cpu, Eye, Network, Shield } from 'lucide-react';
/**
 * The homepage is intentionally minimal.  It shows a passkey
 * entry form until the user enters the correct key via the
 * `/api/unlock` endpoint.  Once unlocked, a simple welcome
 * message is displayed.  The unlocked state is persisted in
 * `localStorage` so visitors aren’t prompted again on future
 * visits.  This logic keeps the password protection aspect of
 * the original project while stripping away the heavy marketing
 * sections, videos and modals that were previously present.
 */
export default function HomePage() {
  const [enteredKey, setEnteredKey] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [unlockError, setUnlockError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fade, setFade] = useState(false);


  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [role, setRole] = useState<string | null>(null);
  // ---- Safe storage helpers ----
  function loadMeta(): any {
    if (typeof window === 'undefined') return {};
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch { return {}; }
  }
  function saveMeta(meta: any) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(meta));
  }
  // helpers
  const STORAGE_KEY = 'swarm_role_modal_meta';
  const SNOOZE_DAYS = 14;                      // "Not now" snoozes for 14 days
  const MAX_SHOWS = 3;                         // show CTA at most 3 times total per browser

  // ---- Local state to control CTA visibility ----
  const [canShowCta, setCanShowCta] = useState(false);
  function getSafeRedirectTarget() {
    if (typeof window === 'undefined') return null;
    try {
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get('redirect');
      if (!redirect) return null;
      // Only allow internal absolute paths to avoid open redirects.
      if (!redirect.startsWith('/') || redirect.startsWith('//')) return null;
      return redirect;
    } catch (_) {
      return null;
    }
  }
  // Initialize CTA visibility from persisted meta
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const meta = loadMeta() || {};
      const totalShows = meta.totalShows || 0;
      const lastDismiss = meta.lastDismissTs ? new Date(meta.lastDismissTs).getTime() : 0;
      const now = Date.now();
      const snoozeMs = SNOOZE_DAYS * 24 * 60 * 60 * 1000;
      const canShow = totalShows < MAX_SHOWS && (lastDismiss === 0 || now - lastDismiss > snoozeMs);
      setCanShowCta(canShow);
    } catch (e) {
      setCanShowCta(false);
    }
  }, []);
  const onClose = () => {
    setShowModal(false);
    const meta = loadMeta();
    saveMeta({ ...meta, lastDismissTs: Date.now() }); // start snooze
    setCanShowCta(false); // hide CTA immediately
  };
  // ---- Open/Close handlers (CTA + modal overlay/close button) ----
  const openFromCta = () => {
    setShowModal(true);
    const meta = loadMeta();
    saveMeta({ ...meta, totalShows: (meta.totalShows || 0) + 1, lastShowTs: Date.now() });
  };
  // Bootstrapping: check session via API and fetch content if authenticated
  useEffect(() => {
    let mounted = true;
    // During tests we avoid making network calls that cause async state updates.
    // Tests directly control unlocked/localStorage behavior.
    if (process.env.NODE_ENV === 'test') {
      try {
        if (typeof window !== 'undefined' && localStorage.getItem('swarm_home_unlocked') === '1') {
          setUnlocked(true);
        }
      } catch (_) {}
      return () => { mounted = false };
    }

    async function bootstrap() {
      try {
        const res = await fetch('/api/status', { credentials: 'include' });
        const body = await res.json().catch(() => ({}));
        const serverUnlocked = Boolean(body?.unlocked);

        if (!mounted) return;

        if (serverUnlocked) {
          setUnlocked(true);
          try { localStorage.setItem('swarm_home_unlocked', '1'); } catch (_) {}
          const redirectTarget = getSafeRedirectTarget();
          if (redirectTarget) {
            window.location.replace(redirectTarget);
          }
          return;
        }

        // Cookie/session is not valid: ensure stale local flag cannot trigger redirect loops.
        try { localStorage.removeItem('swarm_home_unlocked'); } catch (_) {}
        setUnlocked(false);
      } catch (_) {
        if (!mounted) return;
        // If status check fails, keep lock screen by default.
        setUnlocked(false);
      }
    }
    bootstrap();
    return () => { mounted = false };
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
        try { localStorage.setItem('swarm_home_unlocked', '1'); } catch (_) {}
        const redirectTarget = getSafeRedirectTarget();
        if (redirectTarget) {
          window.location.assign(redirectTarget);
          return;
        }
        // In test environment avoid calling navigation.reload (jsdom doesn't implement it)
        if (process.env.NODE_ENV !== 'test') {
          try { window.location.reload(); } catch (_) {}
        }
        return;
      }
      // if not success, show error
      setUnlockError(j?.error || 'Unlock failed');
    } catch (e) {
      setUnlockError('Network error — try again');
    }
  }

  // Render the lock screen until the correct key is entered.
  if (!unlocked) {
    return (
      <div className="py-0 relative overflow-hidden flex items-center justify-center bg-background">
        <div className="hero-bg-elements">
          <div className="hero-bg-lines" />
          <div className="hero-bg-glow-top" />
          <div className="hero-bg-glow-bottom" />
          <div className="hero-bg-fade" />
        </div>

        {/* Modal (only if user clicks CTA) */}
              {showModal && (
                <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-black/40" onClick={onClose} />
                  <div className="relative bg-white dark:bg-card text-textPrimary rounded-lg max-w-lg w-full p-6 shadow-lg z-10">
                    <h3 className="text-lg font-semibold mb-2">Quick question</h3>
                    <p className="text-sm text-textSecondary mb-4">
                      Are you an investor, project partner, or a potential customer? Optionally subscribe to product updates (GDPR-compliant).
                    </p>

                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={() => setRole('investor')}
                        className={`px-3 py-1 rounded ${
                          role === 'investor'
                            ? 'bg-accent1 text-white'
                            : 'bg-[#0f1724] text-textSecondary'
                        }`}
                      >
                        Investor
                      </button>
                      <button
                        onClick={() => setRole('partner')}
                        className={`px-3 py-1 rounded ${
                          role === 'partner'
                            ? 'bg-accent1 text-white'
                            : 'bg-[#0f1724] text-textSecondary'
                        }`}
                      >
                        Project partner
                      </button>
                      <button
                        onClick={() => setRole('customer')}
                        className={`px-3 py-1 rounded ${
                          role === 'customer'
                            ? 'bg-accent1 text-white'
                            : 'bg-[#0f1724] text-textSecondary'
                        }`}
                      >
                        Customer
                      </button>
                    </div>

                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const simpleEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (email && !simpleEmail.test(email)) {
                          alert('Please enter a valid email or leave blank to skip.');
                          return;
                        }
                        if (email && !consent) {
                          alert('Please consent to receive updates via email.');
                          return;
                        }
                        try {
                          const res = await fetch('/api/subscribe', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ role, email: email || null, consent }),
                          });
                          const payload = await res.json();
                          if (!res.ok) throw new Error(payload?.error || 'failed');
                          setSubscribed(true);
                          setTimeout(() => setShowModal(false), 1000);
                        } catch (err) {
                          console.error(err);
                          alert('Subscription failed — try again later.');
                        }
                      }}
                      className="flex flex-col gap-3"
                    >
                      <input
                        ref={emailRef}
                        type="email"
                        placeholder="Email (optional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded px-3 py-2 bg-[#0b1220] text-textSecondary"
                      />
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                        />{' '}
                        I agree to receive product updates (you can unsubscribe anytime)
                      </label>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-textSecondary">
                          {subscribed ? 'Thanks — you will be updated.' : 'We’ll only email product updates.'}
                        </div>
                        <div className="flex gap-2">
                          <button type="button" onClick={onClose} className="text-sm text-textSecondary hover:underline">
                            Close
                          </button>
                          <button type="submit" className="px-3 py-1 rounded bg-accent1 text-white text-sm">
                            {subscribed ? 'Done' : 'Subscribe'}
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-textSecondary mt-2">
                        Privacy: we store only role, email (if provided), consent and a consent timestamp.
                        See our <a href="/privacy" className="text-accent1 underline">privacy policy</a>.
                      </p>
                    </form>
                  </div>
                </div>
              )}

              {/* Floating CTA */}
                {!showModal && canShowCta && (
                  <div className="fixed bottom-4 right-4 z-40 rounded-lg shadow-lg bg-[#0f1724] text-textSecondary px-4 py-3 flex items-center gap-3">
                    <span className="text-sm">Get product updates?</span>
                    <button
                      className="px-3 py-1 rounded bg-accent1 text-white text-sm"
                      onClick={openFromCta}
                    >
                      Yes, notify me
                    </button>
                    <button className="text-xs opacity-70 hover:opacity-100" onClick={onClose}>
                      Not now
                    </button>
                  </div>
                )}


        <section className="py-0 relative overflow-hidden flex items-center justify-center">


          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

          <div className="grid md:grid-cols-1 gap-8 items-center">
            <div className="space-y-6">
              
              {/* Intro statements */}
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                SWARM.AI<span className="text-accent1">_</span>
              </h1>
              <p className="text-lg md:text-xl text-textSecondary">
                AI backbone for drone detection, tracking and defence.
              </p>
              

            </div>
            <div className="hidden md:block">
              {/* Placeholder for hero visual; can be replaced with 3D/sensor animation */}
            </div>
          </div>
        </div>
      </section>

        <div className="bg-card rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Protected Homepage</h2>
          <p className="mb-6 text-textSecondary">Enter passkey to access the site.</p>
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
          <Link
            href="/contact"
            className="mt-4 inline-block text-base font-semibold text-accent1 hover:underline"
          >
            Interested? Contact us
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden border-b border-[#465644]/60">
        <div className="space-y-24 pointer-events-none">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute top-0 left-0 w-full h-full object-cover object-[center_90%] transition-opacity duration-2000 ${
              fade ? "opacity-0" : "opacity-20"
            }`}
          >
            <source src="/videos/source-3.mov" type="video/mp4" />
          </video>
          <div className="hero-bg-lines" />
          <div className="hero-bg-glow-top" />
          <div className="hero-bg-glow-bottom" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background/90" />
        </div>
        <div className="py-0 relative overflow-hidden flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-textSecondary mb-4">
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-accent1 font-semibold">Perception Systems For European Defence</span>
            
          </h1>
          <p className="text-lg md:text-xl text-textSecondary mb-4 max-w-3xl">
            Protect airspace 24/7 with AI-powered perception at the edge and a distributed using propreritary mirror-power optical sensors and fault-tolerant, portable sensor architecture.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent1 text-white rounded-lg hover:bg-accent1/80 transition-colors font-semibold"
          >
            Contact us
            <ArrowRight className="w-5 h-5" />
          </Link>
          {process.env.NODE_ENV !== 'production' && (
            <button
              onClick={async () => {
                try {
                  await fetch('/api/lock', { method: 'POST' });
                } catch (_) {}
                try { localStorage.removeItem('swarm_home_unlocked'); } catch (_) {}
                try { location.reload(); } catch (_) { /* ignore */ }
              }}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-textSecondary bg-card"
            >
              Dev: Lock
            </button>
          )}
        </div>
      </section>

      <Section
        title="Defend against drones"
        subtitle="Three operational domains for modern counter-drone defense, powered by resilient AI-based sensing."
        wrapperClassName="border-t border-[#465644]/55 bg-gradient-to-b from-[#141c16]/75 to-[#101713]/75"
      >
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-card rounded-2xl overflow-hidden shadow-md border border-card/60">
            <Image
              src="/images/87753f8d-9322-4db9-9c40-aa5d3ed249d3.png"
              alt="Air domain drone defense"
              width={1200}
              height={700}
              className="h-48 w-full object-cover brightness-60"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Air</h3>
              <p className="text-textSecondary">
                Detect small flying drones early. Ground-to-drone or drone-to-drone detection.
              </p>
            </div>
          </div>
          <div className="bg-card rounded-2xl overflow-hidden shadow-md border border-card/60">
            <Image
              src="/images/16beed3b-21af-4a36-96d9-f6e1d4b90d31.png"
              alt="Land domain drone defense"
              width={1200}
              height={700}
              className="h-48 w-full object-cover brightness-60"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Land</h3>
              <p className="text-textSecondary">
                Solutions for critical infrastructure protection and mobile support for soldiers in the field.
              </p>
            </div>
          </div>
          <div className="bg-card rounded-2xl overflow-hidden shadow-md border border-card/60">
            <Image
              src="/images/9cc2f798-4eeb-4dbc-bee3-9e3b964061ab.png"
              alt="Sea domain drone defense"
              width={1200}
              height={700}
              className="h-48 w-full object-cover brightness-60"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Sea</h3>
              <p className="text-textSecondary">
                We provide systems for floating platforms and water drones for maritime surveillance and defense.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Core tech"
        subtitle={
          <>
            A hardware stack of sensors and edge nodes, built for real-time perception without data bottlenecks,
            paired with cutting-edge AI research. 
          </>
        }
        wrapperClassName="border-t border-[#495a47]/55 bg-gradient-to-b from-[#171d16]/75 to-[#121813]/75"
      >
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <FeatureCard icon={<Eye className="w-7 h-7 mx-auto text-accent1" />} title="360° RGB & TIR" desc="24/7 fully-automated surveillance of the air space." />
            <FeatureCard icon={<Cpu className="w-7 h-7 mx-auto text-accent1" />} title="Real-time Edge CV" desc="Compute at the sensor edge, with minimal data footprint." />
            <FeatureCard icon={<Network className="w-7 h-7 mx-auto text-accent1" />} title="Distributed" desc="Robust, fault-tolerant, and highly scalable. All compute is done at the sensor mesh." />
            <FeatureCard icon={<Shield className="w-7 h-7 mx-auto text-accent1" />} title="Resilient by design" desc="Built for mission-critical environments. Redundant to sensor losses." />
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/tech"
              className="inline-flex items-center gap-2 px-5 py-3 bg-card rounded-lg hover:bg-card/80 transition-colors text-sm font-semibold"
            >
              Explore Core Tech
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section
        title="The Swarm.ai technology"
        subtitle="From raw sensing to mission-level autonomy in a staged, deployable architecture."
        wrapperClassName="border-t border-[#4a5a46]/55 bg-gradient-to-b from-[#181f17]/75 to-[#111712]/75"
      >
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="relative hidden md:block">
            <div className="absolute left-0 right-0 top-5 h-[2px] rounded-full bg-white/15" />
            <div className="absolute left-0 top-5 h-[2px] w-1/2 rounded-full bg-accent1" />
            <div className="grid grid-cols-7 gap-3">
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-[14px] h-3 w-3 -translate-x-1/2 rounded-full bg-accent1" />
                <div className="rounded-xl border border-white/10 bg-card/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">01</p>
                  <p className="mt-1 text-sm font-medium">360° sensor</p>
                </div>
              </div>
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-[14px] h-3 w-3 -translate-x-1/2 rounded-full bg-accent1" />
                <div className="rounded-xl border border-white/10 bg-card/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">02</p>
                  <p className="mt-1 text-sm font-medium">6D unknown object identification and tracking</p>
                </div>
              </div>
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-[14px] h-3 w-3 -translate-x-1/2 rounded-full bg-accent1" />
                <div className="rounded-xl border border-white/10 bg-card/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">03</p>
                  <p className="mt-1 text-sm font-medium">Distributed Edge Network</p>
                </div>
              </div>
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-[14px] h-3 w-3 -translate-x-1/2 rounded-full bg-accent1" />
                <div className="rounded-xl border border-white/10 bg-card/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">04</p>
                  <p className="mt-1 text-sm font-medium">Military grade 3D-printable drone platform</p>
                </div>
              </div>
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-[14px] h-3 w-3 -translate-x-1/2 rounded-full border border-white/35 bg-background" />
                <div className="rounded-xl border border-white/10 bg-card/40 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">05</p>
                  <p className="mt-1 text-sm font-medium text-textSecondary">Swarm Intelligence Layer</p>
                </div>
              </div>
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-[14px] h-3 w-3 -translate-x-1/2 rounded-full border border-white/35 bg-background" />
                <div className="rounded-xl border border-white/10 bg-card/40 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">06</p>
                  <p className="mt-1 text-sm font-medium text-textSecondary">autonomous impact and parachute deployment</p>
                </div>
              </div>
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-[14px] h-3 w-3 -translate-x-1/2 rounded-full border border-white/35 bg-background" />
                <div className="rounded-xl border border-white/10 bg-card/40 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">07</p>
                  <p className="mt-1 text-sm font-medium text-textSecondary">Optimize for mobility and fast deployment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:hidden">
            <div className="rounded-xl border border-white/10 bg-card/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">01 360° sensor</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">02 6D unknown object identification and tracking</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">03 Distributed Edge Network</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent1">04 military grade printable drone supplier</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">05 Swarm Intelligence Layer</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">06 autonomous impact and parachute deployment</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">07 Optimize for mobility and fast deployment</p>
            </div>
          </div>
        </div>
      </Section>


      <Section
        title="Team"
        subtitle="Focused on capabilities and a proven track record."
        wrapperClassName="border-t border-[#4d5f48]/55 bg-gradient-to-b from-[#1a1f18]/75 to-[#141912]/75"
      >
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card rounded-xl p-5">
              <div className="text-sm text-textSecondary">Research</div>
              <div className="mt-2 font-semibold">CVPR‑Track‑Record in Computer Vision</div>
              <div className="mt-2 text-sm text-textSecondary">
                Publications and results from top-tier conferences.
              </div>
            </div>
            <div className="bg-card rounded-xl p-5">
              <div className="text-sm text-textSecondary">Autonomous Systems</div>
              <div className="mt-2 font-semibold">Industry-proven autonomy expertise</div>
              <div className="mt-2 text-sm text-textSecondary">
                Robustness, safety, and integration in real deployments.
              </div>
            </div>
            <div className="bg-card rounded-xl p-5">
              <div className="text-sm text-textSecondary">Experience</div>
              <div className="mt-2 font-semibold">Experience from Huawei &amp; Mercedes-Benz</div>
              <div className="mt-2 text-sm text-textSecondary">
                Scaling, product leadership, and international execution.
              </div>
            </div>
            <div className="bg-card rounded-xl p-5">
              <div className="text-sm text-textSecondary">Remote Sensing</div>
              <div className="mt-2 font-semibold">Top-ranked German team</div>
              <div className="mt-2 text-sm text-textSecondary">
                According to ShanghaiRanking GRAS 2020 (AS0224).
                {" "}
                <a
                  href="https://www.shanghairanking.com/rankings/gras/2020/AS0224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent1 hover:underline"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-3 bg-card rounded-lg hover:bg-card/80 transition-colors text-sm font-semibold"
            >
              Get to know us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <section className="w-full py-8 bg-background border-t border-[#465644]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-textSecondary">
            <div className="opacity-80">
              © {new Date().getFullYear()} Swarm.ai. All rights reserved.
            </div>
            <nav className="flex items-center gap-4" aria-label="Footer navigation">
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/imprint" className="hover:underline">Imprint</Link>
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="text-accent1 hover:underline" aria-label="Get product updates">
                Get product updates →
              </Link>
              <nav className="flex items-center gap-3" aria-label="Social links">
                <a href="https://www.linkedin.com/company/tum-chair-of-remote-sensing-technology/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">X</a>
              </nav>
            </div>
            <div className="opacity-80">
              Built in Munich, EU
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
