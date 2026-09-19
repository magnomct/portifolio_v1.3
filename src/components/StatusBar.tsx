import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';

interface StatusBarProps {
  part: string;
  title: string;
  location?: string;
  className?: string;
}

export function StatusBar({ part, title, location = 'SÃO PAULO, BR', className }: StatusBarProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between font-mono text-kicker text-text-dim border-b border-line pb-5 mb-9 flex-shrink-0',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Zap className="w-1.5 h-1.5 text-teal" style={{ boxShadow: '0 0 6px #4FD1C5' }} />
        <span>{part}</span>
      </div>
      <div className="flex items-center gap-4 text-text-dim">
        <span>{title}</span>
        {location && <span>{location}</span>}
      </div>
    </div>
  );
}