import { cn } from '@/lib/utils';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleColor?: 'teal' | 'amber';
  body?: React.ReactNode;
}

export function Panel({ children, className, title, titleColor = 'teal', body }: PanelProps) {
  return (
    <div
      className={cn(
        'bg-panel border border-line p-6',
        className
      )}
    >
      {title && (
        <div
          className={cn(
            'font-mono text-panel-title mb-2.5',
            titleColor === 'teal' ? 'text-teal' : 'text-amber'
          )}
        >
          {title}
        </div>
      )}
      {body && <div className="text-panel-body text-text-muted">{body}</div>}
      {children}
    </div>
  );
}