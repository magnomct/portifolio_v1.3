import { cn } from '@/lib/utils';
import { Tag } from './Tag';

interface TagListProps {
  tags: string[];
  className?: string;
}

export function TagList({ tags, className }: TagListProps) {
  return (
    <div className={cn('flex flex-wrap gap-2 mt-3', className)}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}