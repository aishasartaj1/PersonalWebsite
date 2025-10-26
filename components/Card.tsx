import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 shadow-soft',
        hoverable && 'transition-all hover:-translate-y-0.5 hover:shadow-lift',
        className
      )}
    >
      {children}
    </div>
  );
}


