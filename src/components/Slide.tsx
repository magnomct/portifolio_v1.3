import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Slide({ children, className, id }: SlideProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-screen h-screen flex flex-col shrink-0',
        'px-6 pt-8 pb-24',
        'md:px-[72px] md:pt-[56px] md:pb-[40px]',
        'overflow-y-auto',
        className
      )}
    >
      <div className="flex-1 flex flex-col justify-center max-w-[1120px] w-full mx-auto">
        {children}
      </div>
    </section>
  );
}