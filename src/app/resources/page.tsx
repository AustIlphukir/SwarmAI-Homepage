import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import Section from '../../components/Section';
import CtaStrip from '../../components/CtaStrip';

function ResourceCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 text-accent1">
        <BookOpen className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-textPrimary">{title}</h3>
      <p className="mt-2 text-sm text-textSecondary">{desc}</p>
      <div className="mt-6">
        <Link href={href} className="inline-flex items-center gap-2 text-accent1 font-semibold hover:underline">
          Read <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="text-xs tracking-widest uppercase text-textSecondary mb-3">Resources</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Practical notes on drone detection
            <span className="text-accent1">_</span>
          </h1>
          <p className="text-textSecondary max-w-4xl mx-auto">
            Short, engineering-driven explanations that clarify why small drones are hard to detect—and why modular,
            edge-first architectures outperform monolithic centralized pipelines.
          </p>
        </div>
      </div>

      <Section title="Articles" subtitle="Start here.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ResourceCard
            title="Why small drones are hard to detect"
            desc="Low altitude, clutter, low SNR, autonomy, and short timelines: the real failure modes."
            href="/resources/why-small-drones-are-hard"
          />
          <ResourceCard
            title="Edge vs centralized perception"
            desc="Why video-to-cloud pipelines become brittle in the environments that matter."
            href="/resources/edge-vs-centralized-perception"
          />
          <ResourceCard
            title="Data products for integration"
            desc="What to export (tracks/events), how to measure latency, and how to connect to C2/security systems."
            href="/resources/data-products-for-integration"
          />
        </div>
      </Section>

      <CtaStrip
        kicker="Next step"
        title="Want a tailored walkthrough?"
        desc={
          <>
            Share your scenario and constraints. We’ll translate it into an architecture proposal and a staged pilot
            plan.
          </>
        }
        primary={{ href: '/contact?intent=talk-to-an-engineer', label: 'Talk to an engineer' }}
        secondary={{ href: '/markets', label: 'Browse scenarios' }}
      />
    </div>
  );
}

