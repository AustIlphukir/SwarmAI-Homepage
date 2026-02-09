import Link from 'next/link';
import Section from '../../components/Section';
import CtaStrip from '../../components/CtaStrip';

export default function PoseDemoPage() {
  return (
    <div className="bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-xs tracking-widest uppercase text-textSecondary mb-3">Demo</div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Real-time 6D pose estimation<span className="text-accent1">_</span>
        </h1>
        <p className="text-textSecondary max-w-3xl">
          A short example of real-time pose estimation and tracking. In counter‑UAS, the same 3D foundation supports
          stable tracking, trajectory estimation, and robust decision support under motion and clutter.
        </p>
      </div>

      <Section title="Demo video" subtitle="Example footage (local file in this preview environment).">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <video className="w-full rounded-xl border border-white/10" controls preload="metadata">
            <source src="/videos/Pose.mp4" type="video/mp4" />
          </video>
          <p className="mt-3 text-xs text-textSecondary">
            If you want this demo framed for your use case (sensor type, timing, exports), we can provide a tailored
            walkthrough.
          </p>
        </div>
      </Section>

      <CtaStrip
        kicker="Next step"
        title="Discuss integration outputs"
        desc={
          <>
            We’ll map your scenario to a track/event output contract and a staged pilot plan.
          </>
        }
        primary={{ href: '/contact?intent=talk-to-an-engineer', label: 'Talk to an engineer' }}
        secondary={{ href: '/tech', label: 'Back to tech' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-textSecondary">
        <Link href="/tech" className="hover:underline">
          ← Back to tech
        </Link>
      </div>
    </div>
  );
}

