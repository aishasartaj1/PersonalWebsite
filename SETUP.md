# Setup Guide

## 🚀 Quick Start

Follow these steps to get your portfolio website running:

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14+ with App Router
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Customize Content

Edit `lib/data.ts` to update:
- Your projects (title, description, tech stack, links)
- Work experience (company, role, achievements)
- Now section (current projects, learning, live sessions)
- Skills (AI/ML, Data & Cloud, Development tools)

### 4. Add Your Images

Place images in `public/img/`:
- `socratifyme.jpg` - Project 1 image
- `emotion-analysis.jpg` - Project 2 image
- `portfolio.jpg` - Project 3 image
- `exp-1.jpg` - First work experience
- `exp-2.jpg` - Second work experience
- `og-image.jpg` - Social media preview (1200x630px)

Use AVIF or WebP format for best performance.

### 5. Update Personal Info

In `app/layout.tsx`, update:
- Metadata (title, description)
- Social links
- Email address

In `app/(home)/Hero.tsx`, update:
- Your name
- Tagline
- GitHub/LinkedIn URLs

In `app/(home)/Contact.tsx`, update:
- Email address

## 🎨 Customization

### Colors

Edit CSS variables in `styles/globals.css`:
```css
:root {
  --color-primary: 16 185 129;  /* Change emerald to your color */
}
```

### Fonts

In `app/layout.tsx`, change the font:
```typescript
import { YourFont } from 'next/font/google';
const yourFont = YourFont({ subsets: ['latin'] });
```

## ✅ Pre-Deployment Checklist

Before deploying:

- [ ] Update all content in `lib/data.ts`
- [ ] Add your images to `public/img/`
- [ ] Test dark/light mode toggle
- [ ] Test all interactive elements (drag, flip, modal)
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Run `npm run build` to check for errors
- [ ] Test keyboard navigation (Tab, Arrow keys, Esc)
- [ ] Verify contact form works

## 🌐 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy
5. Add your custom domain in Vercel dashboard

## 🔧 Optional: Contact Form Setup

To enable the contact form:

1. Sign up for [Resend](https://resend.com)
2. Get your API key
3. Sign up for [hCaptcha](https://www.hcaptcha.com/)
4. Add environment variables in Vercel:
   - `RESEND_API_KEY`
   - `HCAPTCHA_SECRET`
5. Uncomment the TODO sections in `app/api/contact/route.ts`

## 📊 Performance Testing

Run Lighthouse audit:
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Generate report
4. Aim for scores ≥90 (Performance, Accessibility, SEO)

## 🐛 Troubleshooting

**Issue:** Animations not working
- Solution: Ensure Framer Motion is installed (`npm install framer-motion`)

**Issue:** TypeScript errors
- Solution: Run `npm run build` to see detailed errors

**Issue:** Images not loading
- Solution: Ensure images are in `public/img/` and paths in `lib/data.ts` start with `/img/`

**Issue:** Dark mode not persisting
- Solution: Check browser localStorage is enabled

## 📝 Next Steps

1. Add a blog section (`/writing`)
2. Add case study pages (`/case-study/[slug]`)
3. Integrate analytics (Plausible)
4. Add more projects as you build them
5. Update "Now" section monthly

## 💡 Tips

- Keep the "Now" section updated monthly
- Add new projects as cards in `lib/data.ts`
- Optimize images before adding (use [Squoosh](https://squoosh.app))
- Test accessibility with screen readers
- Keep animations under 450ms for smooth feel

---

**Need help?** Check the README.md or Next.js documentation at [nextjs.org/docs](https://nextjs.org/docs)




