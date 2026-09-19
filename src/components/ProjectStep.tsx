import { cn } from '@/lib/utils';

interface ProjectStepProps {
  num: string;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export function ProjectStep({ num, title, description, isLast, className }: ProjectStepProps) {
  return (
    <div
      className={cn(
        'flex-1 min-w-[150px] bg-panel border border-line p-4 relative',
        isLast ? '' : 'border-r-0',
        className
      )}
    >
      <div className="font-mono text-project-step-num text-amber">{num}</div>
      <div className="text-project-step-title font-semibold mt-1.5">{title}</div>
      <div className="text-project-step-desc text-text-muted mt-1.5">{description}</div>
    </div>
  );
}