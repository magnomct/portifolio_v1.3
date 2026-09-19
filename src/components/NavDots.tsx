import { cn } from '@/lib/utils';

interface NavDotsProps {
  total: number;
  current: number;
  onNavigate: (index: number) => void;
  className?: string;
}

export function NavDots({ total, current, onNavigate, className }: NavDotsProps) {
  return (
    <div
      className={cn('flex gap-1.5 flex-wrap max-w-[40vw] justify-center', className)}
      role="tablist"
      aria-label="Navegação de slides"
    >
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === current}
          aria-label={`Ir para slide ${i + 1}`}
          onClick={() => onNavigate(i)}
          className={cn(
            'w-1.75 h-1.75 rounded-full transition-colors border-0 p-0',
            i === current ? 'bg-teal' : 'bg-line'
          )}
        />
      ))}
    </div>
  );
}