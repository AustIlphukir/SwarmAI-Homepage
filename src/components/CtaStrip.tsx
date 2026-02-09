import Link from 'next/link';

type CtaLink = {
  href: string;
  label: string;
};

export default function CtaStrip({
  kicker,
  title,
  desc,
  primary,
  secondary,
}: {
  kicker?: string;
  title: string;
  desc: React.ReactNode;
  primary: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section className="w-full py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1922] via-[#111d28] to-[#0f151d] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:p-10">
          {kicker && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentCool">
              {kicker}
            </p>
          )}
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-textPrimary sm:text-4xl">
            {title}
            <span className="text-accent1">_</span>
          </h2>
          <div className="mt-3 max-w-3xl text-sm leading-relaxed text-textSecondary">{desc}</div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={primary.href}
              className="inline-flex items-center justify-center rounded-lg border border-accent1/40 bg-accent1/10 px-5 py-3 text-sm font-semibold text-accent1 transition-colors hover:bg-accent1/20"
            >
              {primary.label}
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-card/30 px-5 py-3 text-sm font-semibold text-textPrimary transition-colors hover:border-accentCool/50 hover:text-accentCool"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

