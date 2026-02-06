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
      <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-textSecondary">Claimed Skills</h3>
            <div className="mt-4 grid gap-3">
              <div>
                <p className="text-sm font-semibold text-accentCool">Sensor Input</p>
                <p className="mt-1 text-sm text-textSecondary">
                  EO/IR camera integration, multi-sensor time sync, and robust signal conditioning for noisy operational environments.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-accent1">Edge Perception</p>
                <p className="mt-1 text-sm text-textSecondary">
                  On-device detection, classification, and 3D tracking optimized for low-latency inference on constrained hardware.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-accentCool2">Distributed Command Layer</p>
                <p className="mt-1 text-sm text-textSecondary">
                  Networked command-and-control orchestration, cross-node data fusion, and resilient decision support at system level.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-textSecondary">
          High-level system flow from optical sensing to edge inference and network-level intelligence.
        </p>
      </div>
      <Section
        title="Services"
        subtitle="Concise, practical services: Edge AI, 3D perception, and consulting for real‑world deployments."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <FeatureCard
              image="/images/f47e5700-e257-478f-9faf-cd859da799d9.png"
              title="Optical Warning and DefenCe"
              desc="EO/IR optics, edge AI, and C2 integration to detect and identify UAVs. We support civil and military vendors integrating into real systems."
            />
            <FeatureCard
              video="/videos/PoseEstimationAndTrackingSUV.mp4"
              title="3D Tracking"
              desc="Robust 3D multi-object tracking and trajectory prediction for drones and other aerial targets, optimized for edge deployment with low latency. Any object class can be tracked, from drones to birds or even ground vehicles - no retraining on new objects necessary."
            />
            <FeatureCard
              image="/images/db3eee31-bb8d-4c19-a8ba-1f1990bf67b6.png"
              title="3D Perception and Reconstruction on the Edge"
              desc="Process video on the edge to minimize data transfer—send results, not raw streams. From compact outputs we reconstruct photorealistic 3D scenes. All with general purpose AI methods that can be adapted to new use cases."
            />
            <FeatureCard
              video="/images/Twin.gif"
              title="Real-world 3D Vision applications"
              desc="Hands‑on consulting for advanced 3D computer vision: backbone design, LoRA training, tracking, and state‑of‑the‑art research—from prototype to production."
            />
          </div>

          <div className="mt-8 flex items-center justify-center">
            <Link href="/contact" className="text-accent1 hover:underline font-medium">
              Request a project — let’s discuss your use case →
            </Link>
          </div>
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
