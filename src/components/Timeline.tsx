import { cn } from '@/lib/utils';
import type { TimelineItem } from '@/types';

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('flex items-end gap-4.5 h-[150px] border-b border-line pb-0', className)}>
      {items.map((item) => (
        <div key={item.year} className="flex-1 flex flex-col items-center justify-end h-full">
          <div
            className={cn(
              'w-full',
              item.highlight
                ? 'bg-gradient-to-t from-amber-dim to-amber'
                : 'bg-gradient-to-t from-teal-dim to-teal'
            )}
            style={{ height: item.height }}
          />
          <div className="font-mono text-timeline-count text-text mt-1.5">{item.count}</div>
          <div className="font-mono text-timeline-year text-text-dim mt-2.5">{item.year}</div>
        </div>
      ))}
    </div>
  );
}