export type FaqItem = {
  q: string;
  a: React.ReactNode;
};

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-xl border border-white/10 bg-black/25 p-4 open:border-accent1/40"
        >
          <summary className="cursor-pointer list-none select-none text-sm font-semibold text-textPrimary">
            <span className="inline-flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-card/60 text-xs text-textSecondary group-open:text-accent1">
                ?
              </span>
              <span>{item.q}</span>
            </span>
          </summary>
          <div className="mt-3 text-sm leading-relaxed text-textSecondary">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

