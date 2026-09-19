import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavDots } from './NavDots';

interface NavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onNavigate: (index: number) => void;
  className?: string;
}

export function Navigation({
  current,
  total,
  onPrev,
  onNext,
  onNavigate,
  className,
}: NavigationProps) {
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 z-10 flex items-center justify-between',
        'px-[72px] py-4.5',
        'font-mono',
        className
      )}
      role="navigation"
      aria-label="Navegação do portfólio"
    >
      <div className="text-nav-count text-text-dim">{pad(current + 1)} / {pad(total)}</div>

      <NavDots total={total} current={current} onNavigate={onNavigate} />

      <div className="flex gap-2.5">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className={cn(
            'bg-panel border border-line text-text font-mono text-nav-btn px-4 py-2',
            'transition-colors',
            'disabled:opacity-30 disabled:cursor-not-allowed',
            'hover:border-teal hover:text-teal',
            'disabled:hover:border-line disabled:hover:text-text'
          )}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-4 h-4 inline mr-1" /> anterior
        </button>
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className={cn(
            'bg-panel border border-line text-text font-mono text-nav-btn px-4 py-2',
            'transition-colors',
            'disabled:opacity-30 disabled:cursor-not-allowed',
            'hover:border-teal hover:text-teal',
            'disabled:hover:border-line disabled:hover:text-text'
          )}
          aria-label="Próximo slide"
        >
          próximo <ChevronRight className="w-4 h-4 inline ml-1" />
        </button>
      </div>
    </nav>
  );
}