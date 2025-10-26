import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ChipProps {
  children: ReactNode;
  variant?: 'default' | 'primary';
  className?: string;
}

export function Chip({ children, variant = 'default', className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-xl border px-2.5 py-1 text-xs font-medium',
        variant === 'default' &&
          'border-border bg-muted text-ink-2',
        variant === 'primary' &&
          'border-blush-300 bg-blush-300/30 text-brown-600 dark:border-blush-400 dark:bg-blush-400/20 dark:text-blush-300',
        className
      )}
    >
      {children}
    </span>
  );
}


