# My Portfolio

Modern personal portfolio website for **Patrick Morano** — BS Computer Science student — built with **Next.js (App Router) + TypeScript + Framer Motion**, deployed on **Vercel**.

## ✨ Features
- Next.js 15 App Router with TypeScript
- Smooth UI animations with Framer Motion (scroll reveals, staggered cards, ambient glow blobs, gradient shine text)
- Fully responsive dark theme with glassmorphism cards
- Static pre-render — fast and Vercel-ready

## 🗂 Structure
```
├── app/
│   ├── layout.tsx      # Root layout + metadata
│   ├── page.tsx        # Home page (all sections)
│   └── globals.css     # Theme + base styles
├── components/
│   ├── Navbar.tsx      # Fixed glass navbar
│   ├── Hero.tsx        # Animated hero section
│   └── Animated.tsx    # Reusable scroll-animation components
└── lib/
    └── data.ts         # All portfolio/CV data
```

## 🚀 Run Locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## ☁️ Deploy to Vercel
1. Push to GitHub (this repo)
2. Go to https://vercel.com/new
3. Import the `my-portfolio` repository — Vercel auto-detects Next.js
4. Click **Deploy**

