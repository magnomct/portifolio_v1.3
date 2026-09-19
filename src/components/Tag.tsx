import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'font-mono text-kicker text-text border border-line px-2.5 py-1 bg-panel-2',
        className
      )}
    >
      {children}
    </span>
  );
}