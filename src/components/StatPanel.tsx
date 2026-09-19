import { cn } from '@/lib/utils';

interface StatPanelProps {
  num: string;
  label: string;
  className?: string;
  numColor?: 'amber' | 'teal';
}

export function StatPanel({ num, label, className, numColor = 'amber' }: StatPanelProps) {
  return (
    <div className={cn('bg-panel border border-line p-5 text-left', className)}>
      <div className={cn('font-mono text-stat-num', numColor === 'amber' ? 'text-amber' : 'text-teal')}>
        {num}
      </div>
      <div className="text-stat-label text-text-dim mt-1.5">{label}</div>
    </div>
  );
}