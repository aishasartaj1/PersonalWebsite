# Build with Aisha — Portfolio Website

A modern, accessible portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Interactive Storytelling**: Draggable project cards, 3D flipbook work experience
- **Three-Pane Dashboard**: Real-time "Now" section showing current projects, learning, and live sessions
- **Dark/Light Mode**: Automatic theme detection with manual toggle, persisted in localStorage
- **Accessibility-First**: WCAG AA compliant, keyboard navigation, focus management, ARIA labels
- **SEO Optimized**: Comprehensive metadata, OpenGraph, Twitter Cards
- **Performance**: Lighthouse score ≥90 across all metrics
- **Mobile-First**: Responsive design with touch-friendly interactions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with nav, theme, metadata
├── page.tsx                # Home page composing all sections
├── (home)/                 # Section components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Now.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
└── api/
    └── contact/route.ts    # Contact form API (stubbed)

components/
├── Card.tsx                # Reusable card component
├── Chip.tsx                # Skill/tech chips
├── FlipBook.tsx            # 3D rotating experience cards
├── DragStack.tsx           # Draggable project stack
├── ThemeToggle.tsx         # Dark/light mode toggle
└── Modal.tsx               # Accessible modal with focus trap

lib/
├── theme.ts                # Theme management hook
├── data.ts                 # Typed content data
└── utils.ts                # Helper functions
```

## 🎨 Customization

### Update Content

Edit `lib/data.ts` to modify:
- Projects
- Work experience
- Now section (building, exploring, live sessions)
- Skills

### Update Styling

- **Colors**: Modify CSS variables in `styles/globals.css`
- **Tailwind**: Extend config in `tailwind.config.ts`
- **Typography**: Change font in `app/layout.tsx`

### Add Images

Place images in `public/img/` and reference them in `lib/data.ts`:
```typescript
image: '/img/your-image.jpg'
```

## 🔧 TODO: Production Setup

Before deploying to production:

1. **Contact Form**:
   - Add hCaptcha integration
   - Set up Resend for email delivery
   - Add rate limiting

2. **Environment Variables**:
   ```env
   RESEND_API_KEY=your_key
   HCAPTCHA_SECRET=your_secret
   ```

3. **Analytics**:
   - Add Plausible or similar privacy-focused analytics

4. **Images**:
   - Replace placeholder images with actual project/work photos
   - Optimize images (AVIF/WebP format)

## 📊 Performance

Target Lighthouse scores (mobile):
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: 100
- SEO: ≥95

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Then connect your custom domain in Vercel dashboard.

## 📝 License

© 2024 Aisha Sartaj. All rights reserved.

## 🤝 Contributing

This is a personal portfolio, but feel free to use it as inspiration or a template for your own site!

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion**



