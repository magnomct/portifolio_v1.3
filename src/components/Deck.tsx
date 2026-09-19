import { cn } from '@/lib/utils';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { Slide } from './Slide';
import { Navigation } from './Navigation';
import type { SlideData } from '@/types';

interface DeckProps {
  slides: SlideData[];
  className?: string;
}

export function Deck({ slides, className }: DeckProps) {
  const {
    currentIndex,
    goToSlide,
    goToPrev,
    goToNext,
  } = useSlideNavigation(slides.length);

  return (
    <div
      className={cn('relative h-screen w-screen overflow-hidden', className)}
      role="region"
      aria-label="Portfólio slides"
    >
      {/* Slide track — flex row that translates horizontally */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: 'transform 0.55s cubic-bezier(0.65, 0, 0.35, 1)',
        }}
      >
        {slides.map((slide) => (
          <Slide key={slide.id} id={slide.id}>
            {slide.content}
          </Slide>
        ))}
      </div>

      {/* Navigation stays fixed — outside the translating track */}
      <Navigation
        current={currentIndex}
        total={slides.length}
        onPrev={goToPrev}
        onNext={goToNext}
        onNavigate={goToSlide}
      />
    </div>
  );
}