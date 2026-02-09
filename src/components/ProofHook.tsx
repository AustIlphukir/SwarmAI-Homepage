export type ProofHookValue =
  | 'Demo'
  | 'Benchmark'
  | 'Publication'
  | 'Integration artifact'
  | 'Test report'
  | 'Pilot metric';

export type ProofHookItem = {
  type: ProofHookValue;
  text: string;
};

export default function ProofHook({
  items,
  className,
}: {
  items: ProofHookItem[];
  className?: string;
}) {
  return (
    <div className={`rounded-lg border border-accent1/30 bg-accent1/10 p-3 ${className ?? ''}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent1">Proof hook</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={`${item.type}:${item.text}`}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-black/20 px-2 py-1 text-[11px]"
          >
            <span className="font-semibold text-accentCool">{item.type}</span>
            <span className="text-textSecondary">{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
