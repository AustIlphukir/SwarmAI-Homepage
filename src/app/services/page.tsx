"use client";
import Link from 'next/link';
import Section from '../../components/Section';
import FeatureCard from '../../components/FeatureCard';
import { Radar, Brain, Network, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (

    <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8">

      <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1922] via-[#111d28] to-[#0f151d] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">Defence Services</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-textPrimary sm:text-5xl">
          World-class 3D perception, tracking and general purpose AI on the edge for real‑world defence applications.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-textSecondary">
          We provide the computer vision methods for 3D tracking, 3D reconstruction of scenes, and edge AI for real‑world deployments. Our solutions are used on drones or stationary for remote sensing. 
          
        </p>
      </section>
      <Section
        title="Services"
        subtitle="Practical services for deployment-grade edge perception systems."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="mt-6 grid grid-cols-1 gap-4">
            <FeatureCard
              image="/images/f47e5700-e257-478f-9faf-cd859da799d9.png"
              title="Optical Early Warning and Target Identification"
              desc="Edge EO/IR detection, classification, and tracking for small aerial threats (e.g., UAVs). Built for integration into existing sensor networks and C2 interfaces, with low false-alarm operation under real conditions."
              layout="horizontal"
              boxed
            />
            <FeatureCard
              video="/videos/PoseEstimationAndTrackingSUV.mp4"
              title="Robust Multi-Object 3D Tracking"
              desc="Real-time 3D tracking and trajectory estimation from monocular or multi-view vision—airborne and ground targets. Designed for low latency on edge hardware and adaptable across object types without retraining per class."
              layout="horizontal"
              boxed
            />
            <FeatureCard
              image="/images/db3eee31-bb8d-4c19-a8ba-1f1990bf67b6.png"
              title="Edge-Based 3D Scene Understanding"
              desc="On-edge 3D reconstruction and semantic scene understanding to minimize data transfer. We send compact representations and mission outputs instead of raw video, enabling bandwidth-efficient, near-real-time situational awareness."
              layout="horizontal"
              boxed
            />
            <FeatureCard
              video="/images/Twin.gif"
              title="Applied 3D Computer Vision Consulting"
              desc="Hands-on engineering from feasibility to deployment: perception stack design, edge optimization, data strategy, and field iteration. Focused on operational constraints, integration into existing systems, and measurable performance."
              layout="horizontal"
              boxed
            />
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-card/40 px-5 py-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-textSecondary">From sensor to decision - end-to-end systems</p>
            <p className="mt-2 text-sm text-textSecondary">Optical sensing to edge inference to distributed fusion to human decision support.</p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-base font-semibold text-textPrimary">Discuss your operational use case</p>
            <p className="text-sm text-textSecondary">We work with defence, security, and industrial partners on concrete deployments, not slide decks.</p>
            <Link href="/contact" className="text-accent1 hover:underline font-medium">
              Contact us to start the discussion →
            </Link>
          </div>
        </div>
      </Section>

      <Section title="Capabilities">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-6 md:grid-cols-[260px_1fr] md:items-start">
            <div className="space-y-4">
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
            <div className="rounded-xl border border-white/10 bg-card/60 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-textSecondary">
                Capabilities overview
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-textSecondary">
                A compact snapshot of what we deliver across sensing, edge perception, and distributed command intelligence.
              </p>

              <div className="mt-4 grid gap-3 text-sm text-textSecondary">
                <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <p className="text-textPrimary">
                    <span className="font-semibold">Sensing integration:</span> EO/IR (MWIR/LWIR) and auxiliary sensors with time sync, calibration, and robust pipelines under vibration, low SNR, and bandwidth constraints.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <p className="text-textPrimary">
                    <span className="font-semibold">Edge perception:</span> On-device detection, classification, pose estimation, and 3D tracking optimized for low latency on embedded GPU and offline-capable operation.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <p className="text-textPrimary">
                    <span className="font-semibold">Distributed fusion:</span> Multi-node coordination, cross-sensor track fusion, and API-first interfaces designed for degraded networks and incremental rollout into existing C2 systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-textSecondary">
            High-level system flow from optical sensing to edge inference and network-level intelligence.
          </p>
        </div>
      </Section>

      <Section
        title="Markets"
        subtitle="Dual-use application."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-md border border-card/60">
              <div className="text-xs tracking-widest uppercase text-textSecondary mb-2">Civilian Defence</div>
              <h3 className="text-2xl font-semibold mb-3">Critical Infrastructure</h3>
              <p className="text-textSecondary mb-4">
                Protection of airports, energy facilities, urban zones, and events with continuous airspace monitoring.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-md border border-card/60">
              <div className="text-xs tracking-widest uppercase text-textSecondary mb-2">Military Defense</div>
              <h3 className="text-2xl font-semibold mb-3">Tactical Operations</h3>
              <p className="text-textSecondary mb-4">
                Robust, distributed systems for stationary and mobile protection scenarios, including networked C2.
              </p>
            </div>
          </div>
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
