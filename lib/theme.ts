'use client';

import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('theme');
  return stored === 'light' || stored === 'dark' ? stored : null;
}

export function setStoredTheme(theme: Theme): void {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = getStoredTheme();
    const initial = stored || getSystemTheme();
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!getStoredTheme()) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setStoredTheme(newTheme);
  };

  return { theme, toggleTheme, mounted };
}


