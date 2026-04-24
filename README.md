# Developer Portfolio — Next.js 15

A production-ready developer portfolio built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 15 (App Router, Static Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   └── page.tsx            # Home page (assembles all sections)
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Landing section
│   │   ├── Projects.tsx    # Project cards grid
│   │   ├── Skills.tsx      # Categorized skill badges
│   │   ├── GitHubStats.tsx # GitHub stats via API
│   │   └── Contact.tsx     # Contact form + links
│   ├── Button.tsx          # Reusable button (button/anchor)
│   ├── Footer.tsx          # Site footer
│   ├── Navbar.tsx          # Responsive sticky nav
│   ├── ProjectCard.tsx     # Project display card
│   ├── SectionHeading.tsx  # Section title + label
│   └── SectionWrapper.tsx  # Section layout wrapper
├── lib/
│   ├── config.ts           # Site-wide configuration
│   ├── projects.ts         # Project data
│   ├── skills.ts           # Skills data
│   └── utils.ts            # Utility functions (cn)
├── styles/
│   └── globals.css         # Global styles + font imports
├── public/
│   └── resume.pdf          # Your resume (add this)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## Customization

### 1. Personal Info — `lib/config.ts`
Update your name, role, email, GitHub/LinkedIn URLs, and location.

### 2. Projects — `lib/projects.ts`
Add or remove entries in the `projects` array. Each project has:
- `title`, `description`, `techStack[]`
- `githubUrl`, optional `liveUrl`
- `featured: boolean` — featured projects appear larger
- `category`: `"AI" | "Backend" | "Fullstack" | "Tool"`

### 3. Skills — `lib/skills.ts`
Edit `skillCategories` to reflect your actual skills. Levels: `expert | proficient | familiar`.

### 4. Resume
Drop your PDF into `public/resume.pdf`.

---

## Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Other commands

```bash
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Option B — GitHub Integration (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Done. Every push to `main` auto-deploys.

### Environment Variables (if needed)
Set these in Vercel Dashboard → Project → Settings → Environment Variables:
```
# If you add a contact form backend (e.g. Formspree)
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

---

## Performance Notes

- All pages are **statically generated** at build time
- Next.js `Image` component handles image optimization automatically
- Fonts are loaded via Google Fonts with `display=swap`
- No heavy animation libraries — CSS transitions only
- GitHub Stats images are loaded with `unoptimized` to bypass CDN caching issues

---

## Contact Form (Production)

The contact form currently simulates submission. To wire it up:

1. **Formspree** (easiest): Create a form at formspree.io, get your endpoint, POST to `https://formspree.io/f/YOUR_ID`
2. **Resend + API Route**: Create `app/api/contact/route.ts` and use the Resend SDK

---

## License

MIT
