# Krishnendu S — Developer Portfolio

Personal portfolio site built with Next.js 15, TypeScript, and Tailwind CSS. Showcases professional experience at Oracle, IEEE-published research, and selected projects.

**Live:** https://krishnendus-portfolio.vercel.app

---

## Stack

- **Framework**: Next.js 15 (App Router, Static Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Icons**: Lucide React
- **Fonts**: Syne (display), DM Sans (body), JetBrains Mono (mono)
- **Deployment**: Vercel

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout + SEO metadata
│   └── page.tsx                # Home page (assembles all sections)
├── components/
│   ├── sections/
│   │   ├── Hero.tsx            # Landing — name, bio, stat pills, social links
│   │   ├── Projects.tsx        # Featured + other project cards
│   │   ├── Experience.tsx      # Work timeline + IEEE publications + education
│   │   ├── Skills.tsx          # Categorised skill badges with proficiency levels
│   │   ├── Certifications.tsx  # Verified credentials grid
│   │   └── Contact.tsx         # Contact info + volunteering & leadership cards
│   ├── Button.tsx              # Reusable button (renders as <button> or <a>)
│   ├── Footer.tsx              # Site footer
│   ├── Navbar.tsx              # Responsive sticky nav
│   ├── ProjectCard.tsx         # Project display card (IEEE paper + Live Demo links)
│   ├── SectionHeading.tsx      # Section title + label
│   └── SectionWrapper.tsx      # Section layout wrapper
├── lib/
│   ├── config.ts               # Site-wide configuration (name, links, email)
│   ├── projects.ts             # Project data
│   ├── skills.ts               # Skills data
│   └── utils.ts                # cn() utility
├── styles/
│   └── globals.css             # Global styles, CSS variables, font imports
├── public/
│   ├── profile.jpg             # Profile photo
│   └── resume.pdf              # Resume
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Section Order

Hero → Projects → Experience → Skills → Certifications → Contact

---

## Customisation

### Personal Info — `lib/config.ts`
Update name, role, email, GitHub/LinkedIn/LeetCode URLs, and location.

### Projects — `lib/projects.ts`
Add or edit entries in the `projects` array. Each project has:
- `title`, `description`, `techStack[]`
- `githubUrl`, optional `liveUrl`, optional `publicationUrl`
- `featured: boolean` — featured projects appear in the larger top grid
- `category`: `"AI" | "Backend" | "Fullstack" | "ML"`

### Skills — `lib/skills.ts`
Edit `skillCategories` to reflect your stack. Proficiency levels: `expert | proficient | familiar`.

### Certifications — `components/sections/Certifications.tsx`
Edit the `certifications` array directly in the component.

### Availability pill — `lib/config.ts`
Set `availableForWork: true | false` to toggle the "Open to roles" pill in the Hero.

---

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
npm run build        # Production build
npm run lint         # ESLint
```

---

## Deploy

Auto-deploys on every push to `main` via Vercel GitHub integration.

To deploy manually:

```bash
npm i -g vercel
vercel --prod
```

---

## Design Notes

- Dark theme: `#0a0a0f` background, `#111122` cards
- Accent colours: indigo `#6366f1`, violet `#a78bfa`, pink `#f472b6`, green `#34d399`
- No contact form — Contact section uses static links and volunteering cards
- No GitHub code links on project cards — only IEEE paper and Live Demo where applicable
- All pages statically generated at build time; no server-side data fetching