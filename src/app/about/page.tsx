"use client";

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Section from '../../components/Section';
import FeatureCard from '../../components/FeatureCard';
import CtaStrip from '../../components/CtaStrip';

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accentCool" />
      <span>{children}</span>
    </li>
  );
}

export default function AboutPage() {
  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-accentCool/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent1/10 blur-3xl" />

      <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1922] via-[#111d28] to-[#0f151d] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">About Us</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-textPrimary sm:text-5xl">
          We build deployable perception for low-altitude airspace
          <span className="text-accent1">_</span>
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-textSecondary">
          Swarm.ai is a Munich-based team combining remote sensing, photogrammetry, 3D computer vision, and large-scale AI
          systems engineering. Our focus is not “AI demos”—it’s reliable detection, tracking, and decision support under
          real operational constraints.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-textSecondary">
          We position the problem clearly: small drones are hard to detect, and monolithic centralized pipelines are not
          the solution. Our architecture is modular, edge-first, and integration-driven.
        </p>
      </section>

      <Section
        title="Why we’re qualified"
        subtitle="A blend of world-class remote sensing and 3D professionals focused on deployment."
        wrapperClassName="pt-16"
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm font-semibold text-textPrimary">Remote sensing &amp; photogrammetry</p>
              <p className="mt-2 text-sm text-textSecondary">
                Sensor physics, calibration, and scene understanding—translated into practical deployment constraints and
                measurable performance.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-textSecondary">
                <Bullet>Multi-sensor alignment and robust pipelines</Bullet>
                <Bullet>Low-altitude clutter and low SNR expertise</Bullet>
                <Bullet>Field realism over lab-only assumptions</Bullet>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm font-semibold text-textPrimary">3D computer vision &amp; systems</p>
              <p className="mt-2 text-sm text-textSecondary">
                3D tracking and reconstruction, edge optimization, and distributed systems engineering for reliability
                under degraded networks.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-textSecondary">
                <Bullet>6D tracking and trajectory estimation</Bullet>
                <Bullet>Edge-first design for reliable operator decision support</Bullet>
                <Bullet>Integration-first interfaces for C2/security stacks</Bullet>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-card/50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">Credibility</p>
            <p className="mt-2 text-sm text-textSecondary">
              We build on validated academic and industrial work, with close ties to the Technical University of Munich
              (TUM) and experienced engineering leadership from large-scale AI platform development.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Team" subtitle="Focused on capabilities and execution.">
        <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <FeatureCard icon={<>👨‍💼</>} title="Dr. Lukas Karge" desc="CEO" image="/images/team/Lukas.png" />
            <FeatureCard icon={<>👨‍💻</>} title="Prof. Benjamin Busam" desc="CTO" image="/images/team/Ben.jpg" />
            <FeatureCard icon={<>🔬</>} title="Michael Greza" desc="AI researcher" image="/images/team/Michael.jpg" />
            <FeatureCard icon={<>🏗️</>} title="Mert Kiray" desc="AI Architect" image="/images/team/Mert.jpg" />
            <FeatureCard icon={<>🔬</>} title="Yordanka Velikova" desc="AI researcher" image="/images/team/Dani.png" />
          </div>
        </div>
      </Section>

      <CtaStrip
        kicker="Contact"
        title="Talk to the team"
        desc={
          <>
            If you’re evaluating counter‑UAS perception or need an integration partner, we’ll help you define measurable
            success criteria and a staged pilot plan.
          </>
        }
        primary={{ href: '/contact?intent=talk-to-an-engineer', label: 'Talk to an engineer' }}
        secondary={{ href: '/services', label: 'See engagement model' }}
      />

      <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm">
        <Link
          href="/"
          className="rounded-lg border border-white/20 px-4 py-2 text-textPrimary transition-colors hover:border-accentCool/50 hover:text-accentCool"
        >
          Back to Home
        </Link>
        <Link
          href="/contact?intent=talk-to-an-engineer"
          className="inline-flex items-center gap-2 rounded-lg border border-accent1/40 bg-accent1/10 px-4 py-2 text-accent1 transition-colors hover:bg-accent1/20"
        >
          Get in Touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
