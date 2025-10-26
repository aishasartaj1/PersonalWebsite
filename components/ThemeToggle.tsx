'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        className="rounded-xl p-2 text-ink-2 transition-colors hover:bg-muted"
        aria-label="Toggle theme"
        disabled
      >
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl p-2 text-ink-2 transition-colors hover:bg-muted hover:text-primary"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}


