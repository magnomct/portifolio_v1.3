import { cn } from '@/lib/utils';

interface KickerProps {
  children: React.ReactNode;
  className?: string;
}

export function Kicker({ children, className }: KickerProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 font-mono text-kicker text-teal',
        className
      )}
    >
      <span className="text-amber">›</span>
      {children}
    </div>
  );
}