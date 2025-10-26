# Aisha Sartaj — Portfolio Website PRD

## 1) Overview & Goals
**Mission:** Build a fast, scalable, emotionally intelligent portfolio website that reflects Aisha’s technical expertise, creativity, and curiosity. The site must be modern, accessible, and expandable — capable of growing into a long-term professional platform with live sessions, blogs, and case studies.

**Primary Goals:**
- Showcase work, thought process, and personality through interactive storytelling.
- Achieve Lighthouse ≥ 90 across all pillars (desktop & mobile).
- Use scalable architecture (Next.js + Tailwind + TypeScript + Vercel).

---

## 2) Tech Stack
**Framework:** Next.js (App Router, TypeScript)

**Frontend:**
- **Tailwind CSS** for styling (with shadcn/ui component primitives)
- **Framer Motion** for animations (smooth card drags, page transitions)
- **Lucide React Icons** for clean iconography

**Backend:**
- **Vercel Serverless Functions** for the contact form (with validation + hCaptcha)
- **Resend** for secure email delivery

**Database (future‑ready):**
- **Supabase (Postgres)** — for storing form submissions, analytics, or blog data

**Deployment:**
- **Vercel Hosting** (auto HTTPS, CI/CD with GitHub)
- **Domain:** buildwithaisha.com (DNS via Vercel)

**Analytics:**
- **Plausible** (lightweight, privacy‑focused)

**Design Tokens:**
- CSS variables bound to Tailwind config for light/dark mode theming
- Primary accent: Emerald Green (emotionally resonant, human + tech blend)

---

## 3) Information Architecture & Layout

**Overview:**  
A single‑page, mobile‑first portfolio with smooth scroll and anchor navigation. Additional pages like `/writing` or `/case‑study/<slug>` can be added later.

**Sections & Order**

### Hero —
- Identity: *Aisha Sartaj — AI/ML Engineer Enthusiast*
- Tagline: *Build with Aisha — Exploring intelligence, empathy, and creativity through code.*
- Optional evolving sub‑tagline: *AI Engineer • Building human‑centered systems.*
- CTAs: View My Work, Resume, GitHub, LinkedIn.

### About Me —
- Professional bio + portrait.
- Skill chips highlighting key domains.
- **Resume** button (opens PDF or Notion CV).
- **Life** button → modal overlay with creative tiles (🎨 Art, ✍️ Poetry, 📚 Reading, 📷 Photography).
- Each tile includes short caption + external link.
- Purpose: maintain professional tone while showing depth & warmth.

### Now —
A **real‑time creative dashboard** capturing what I’m currently building, learning, and exploring — structured as a three‑pane layout that updates monthly, reflecting **technical progress, curiosity, and community engagement.**

#### Left — Presently Building:
Highlights one or two active projects.
- Project Title + Brief Description *(e.g., SocratifyMe — Multi‑agent tutor pipeline for conceptual exploration).*
- GitHub Link for transparency *(e.g., github.com/aishasartaj/socratifyme).*
- Activity Status *(e.g., “pushing updates weekly”).*
- Tech‑stack Chips *(e.g., LangGraph, Bedrock, OpenSearch, Streamlit).*
- Purpose: convey active engineering work and sustained iteration.

#### Top Right — Currently Exploring:
Log of learning/discovery — courses, books, frameworks, or conferences.
- Displayed as concise chips with icons (📚 Book, 🎓 Course, 🧠 Framework, 🎤 Conference).
- Each includes a one‑line goal or takeaway *(e.g., 🎓 Deep RL with Hugging Face — understanding policy gradient stability).* 

#### Bottom Right — Build / Study with Aisha LIVE:
Highlights upcoming or recent live sessions.
- Shows date/time, session theme, and a “Join / Watch Replay” link.
- *(e.g., Next Live: Oct 20 — Fine‑tuning LoRA Adapters on Feedback Examples 🎥).*  

Together, these panes form a living snapshot of creation, exploration, and shared learning — a transparent view into both process and progress.

### Projects —
Interactive **draggable stack** (mobile: swipe, desktop: click‑drag).
- Each card: project title, short description, timeline, and tech chips.
- Hover reveals: project image, extended blurb, GitHub + “Check it out.”
- Optional filter: All / ML / Web / Research.

### Work Experience —
**Flipbook layout** with Prev/Next controls and 3‑D rotate transitions.
- Each page: role, company, outcomes, and takeaway line *(e.g., “Built emotion‑aware pipeline with Hume AI”).*

### Skills —
Grouped for clarity:
- **AI / ML** — PyTorch, LangGraph, Hugging Face, RAG
- **Data & Cloud** — SQL, AWS, Docker, MLflow
- **Development & Tools** — Next.js, Tailwind, Framer Motion, Streamlit

### Contact —
Email, social links, and a short friendly form.
Tagline: *“Open to collaborations, ideas, or even a quick chat over chai ☕.”*  
After submission → confirmation message.

---

## 4) Accessibility & SEO
- Semantic HTML, ARIA landmarks, and visible focus states.
- WCAG AA color contrast compliance.
- Alt text for all visuals.
- Metadata: description, OpenGraph, Twitter Card, canonical URL.
- Lazy‑loaded, responsive images (AVIF/WebP) with defined dimensions.

---

## 5) Security
- HTTPS (auto via Vercel)
- Contact API → input validation, rate limiting, **hCaptcha**
- Environment variables for secrets (Resend, hCaptcha keys)
- Optional Content‑Security‑Policy headers via `next.config.mjs`

---

## 6) Build & Launch Plan
**Development Workflow:**
1. `npx create-next-app@latest buildwithaisha` (TypeScript, Tailwind, App Router)
2. Implement sections as React Server Components:
   - `/app/(home)/Hero.tsx`
   - `/app/(home)/About.tsx`
   - `/app/(home)/Now.tsx`
   - `/app/(home)/Projects.tsx`
   - `/app/(home)/Experience.tsx`
   - `/app/(home)/Skills.tsx`
   - `/app/(home)/Contact.tsx`
3. Global layout in `/app/layout.tsx` (nav + footer).
4. Add `theme.ts` with CSS variables and a JS hook to toggle mode (persisted via localStorage).
5. Use Framer Motion for:
   - Smooth page transitions
   - Project card stack animation
   - Experience flipbook 3‑D rotate
6. Optimize with `<Image>` (Next/Image) for responsive lazy images.
7. Add SEO config in `/app/metadata.ts`.
8. Test Lighthouse + Axe for accessibility.
9. Deploy on **Vercel**, attach **buildwithaisha.com**.

---

## 7) Maintenance Rhythm
- **Monthly:** Update *Now* (projects + reading + live session).
- **Quarterly:** Add new project cards or work entries.
- **Yearly:** Refresh SEO, rotate API keys, review analytics.

---

**Decision:** Use **Next.js** for scalability and long‑term maintainability.  
The site remains single‑page at launch but supports quick expansion to new pages later (writing, live events, etc.).

