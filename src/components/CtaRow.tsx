import { cn } from '@/lib/utils';
import type { ContactInfo } from '@/types';

interface CtaRowProps {
  items: ContactInfo[];
  className?: string;
}

export function CtaRow({ items, className }: CtaRowProps) {
  return (
    <div className={cn('flex gap-3.5 flex-wrap mt-9', className)}>
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-panel border border-line p-4 min-w-[160px]"
        >
          <div className="font-mono text-cta-label text-text-dim">{item.label}</div>
          <div className="text-cta-value mt-1">{item.value}</div>
        </div>
      ))}
    </div>
  );
}