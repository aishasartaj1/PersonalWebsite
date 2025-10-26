'use client';

import { useState, FormEvent } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { Card } from '@/components/Card';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white/70 p-8 shadow-soft backdrop-blur-sm dark:bg-[#2A2420]/80 md:p-12">
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-ink md:text-5xl">Get in Touch</h2>
        <p className="mb-12 text-center text-lg leading-relaxed text-ink-2">
          Open to collaborations, ideas, or even a quick chat over chai ☕
        </p>

        <Card>
          {status === 'success' ? (
            <div className="py-12 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blush-300/30 dark:bg-blush-400/20">
                <Check className="h-8 w-8 text-primary dark:text-blush-300" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold text-ink">Message Sent!</h3>
              <p className="text-ink-2">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-blush-300"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-accent">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-blush-300"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-accent">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-blush-300"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-accent">
                    {errors.message}
                  </p>
                )}
              </div>

              {status === 'error' && (
                <div className="rounded-2xl border border-accent/30 bg-blush-300/20 p-4 text-sm text-ink-2 dark:bg-terra-500/20 dark:border-terra-500/40">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60 dark:bg-terra-500"
              >
                {status === 'loading' ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </Card>

        <div className="mt-8 text-center">
          <a
            href="mailto:aisha@buildwithaisha.com"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80"
          >
            <Mail className="h-5 w-5" />
            aisha@buildwithaisha.com
          </a>
        </div>
      </div>
    </section>
  );
}


