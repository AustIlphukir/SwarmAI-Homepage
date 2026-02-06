"use client";
import Link from 'next/link'
import Section from '../../components/Section';
import FeatureCard from '../../components/FeatureCard';
import { Radar, Brain, Network, ArrowRight } from 'lucide-react';

/**
 * About page.  Share a short history or mission statement of the
 * organisation.  The content here can introduce the team or
 * highlight partnerships and achievements.  This skeleton sets
 * the stage for a more detailed company profile.
 */
export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">


      <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1922] via-[#111d28] to-[#0f151d] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">About Us</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-textPrimary sm:text-5xl">
          Swarm.ai
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-textSecondary">
          Founded in 2025 as a spin-off from the Technical University of Munich (TUM), Swarm.ai is driven by a mission to revolutionize aerial threat detection and defense. Our team combines deep expertise in computer vision, robotics, and aerospace engineering to deliver cutting-edge solutions that address the evolving challenges of modern defense. With a strong foundation in research and a commitment to innovation, we are dedicated to providing reliable, efficient, and scalable technologies that enhance situational awareness and operational effectiveness for our clients worldwide."
        </p>
      </section>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="grid items-center gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
                <Radar className="mx-auto h-6 w-6 text-accentCool" />
                <p className="mt-2 text-sm font-medium">Sensor Input</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
                <Brain className="mx-auto h-6 w-6 text-accent1" />
                <p className="mt-2 text-sm font-medium">Edge Perception</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-card/70 p-4 text-center">
                <Network className="mx-auto h-6 w-6 text-accentCool2" />
                <p className="mt-2 text-sm font-medium">Distributed Command Layer</p>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-textSecondary">
              High-level system flow from optical sensing to edge inference and network-level intelligence.
            </p>
          </div>

          <Section title="Team" subtitle="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <FeatureCard icon={<>👨‍💼</>} title="Dr. Lukas Karge" desc="CEO" image="/images/team/Lukas.png" />
                <FeatureCard icon={<>👨‍💻</>} title="Prof. Benjamin Busam" desc="CTO" image="/images/team/Ben.jpg" />
                <FeatureCard icon={<>🔬</>} title="Michael Greza" desc="AI researcher" image="/images/team/Michael.jpg" />
                <FeatureCard icon={<>🏗️</>} title="Mert Kiray" desc="AI Architect" image="/images/team/Mert.jpg" />
                <FeatureCard icon={<>🔬</>} title="Yordanka Velikova" desc="AI researcher" image="/images/team/Dani.png" />
        </div>

        <div className="mt-6 text-center">
          <Link href="#consortium" className="text-accent1 hover:underline">Meet the extended network &rarr;</Link>
        </div>
        
    </Section>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm">
        <Link href="/" className="rounded-lg border border-white/20 px-4 py-2 text-textPrimary transition-colors hover:border-accentCool/50 hover:text-accentCool">
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-accent1/40 bg-accent1/10 px-4 py-2 text-accent1 transition-colors hover:bg-accent1/20"
        >
          Get in Touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}