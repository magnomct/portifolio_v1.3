import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { NavDots } from './NavDots';
import { useLanguage } from '@/context/LanguageContext';

interface NavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onNavigate: (index: number) => void;
  className?: string;
}

const navLabels = {
  'pt-BR': { prev: 'anterior', next: 'próximo', ariaLabel: 'Navegação do portfólio', ariaPrev: 'Slide anterior', ariaNext: 'Próximo slide' },
  'en': { prev: 'prev', next: 'next', ariaLabel: 'Portfolio navigation', ariaPrev: 'Previous slide', ariaNext: 'Next slide' },
};

export function Navigation({
  current,
  total,
  onPrev,
  onNext,
  onNavigate,
  className,
}: NavigationProps) {
  const { lang } = useLanguage();
  const labels = navLabels[lang];
  const pad = (n: number) => String(n).padStart(2, '0');

  const toggleLang = lang === 'pt-BR' ? '/en' : '/';
  const toggleLabel = lang === 'pt-BR' ? 'EN' : 'PT';

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 z-10 flex items-center justify-between',
        'px-4 md:px-[72px] py-4.5',
        'font-mono',
        className
      )}
      role="navigation"
      aria-label={labels.ariaLabel}
    >
      <div className="flex items-center gap-3">
        <div className="text-nav-count text-text-dim">{pad(current + 1)} / {pad(total)}</div>
        <a
          href={toggleLang}
          className={cn(
            'flex items-center gap-1.5 bg-panel border border-line text-text-muted font-mono text-nav-btn px-3 py-1.5',
            'transition-colors hover:border-teal hover:text-teal'
          )}
          aria-label={lang === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
        >
          <Globe className="w-3.5 h-3.5" />
          {toggleLabel}
        </a>
      </div>

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
          aria-label={labels.ariaPrev}
        >
          <ChevronLeft className="w-4 h-4 inline mr-1" />{labels.prev}
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
          aria-label={labels.ariaNext}
        >
          {labels.next}<ChevronRight className="w-4 h-4 inline ml-1" />
        </button>
      </div>
    </nav>
  );
}