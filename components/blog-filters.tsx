'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BlogFiltersProps {
  tags: string[];
  selectedTag?: string;
}

export function BlogFilters({ tags, selectedTag }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedTag === tag) {
      params.delete('tag');
    } else {
      params.set('tag', tag);
    }
    router.push(`/blog?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push('/blog');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filter by Topic</h3>
        {selectedTag && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear filters
          </Button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={cn(
              'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
              selectedTag === tag
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-input bg-background'
            )}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}