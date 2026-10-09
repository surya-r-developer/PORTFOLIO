# Surya R - Distinctive Full-Stack Developer Portfolio & Mini-CMS

A production-quality, responsive personal portfolio web application and content management system (CMS) engineered for **Surya R**, a Computer Science & Engineering student at Bannari Amman Institute of Technology, Sathyamangalam (Expected Graduation: 2029).

---

## 🌟 Visual Identity & Key Highlights

- **Palette System**: Deep Navy (`#040814`, `#0A132B`) → Slate → Electric Blue (`#3B82F6`) → Cyan (`#22D3EE`).
- **Brand Mark**: Custom minimalist geometric `SR` tech emblem with node bracket motif.
- **Theme Toggle**: Light + Dark Mode with auto system-preference detection and persistence.
- **Custom Futuristic Desktop Cursor**: Animated cursor follower (disabled automatically on touch devices).
- **Interactive Developer HUD**: Animated code terminal view displaying system profile, academic stack, and live status.
- **Zero Fake Data Policy**: Recruiter-friendly authentic representation of a CSE student without exaggerated experience.
- **Integrated CMS Admin Dashboard**: Accessible via `/admin` for editing content, managing skills, adding projects, uploading profile pictures and PDF resumes, managing GitHub repos, and inspecting contact messages.

---

## 🛠️ Technology Stack

| Layer | Technology | Selection Rationale |
|---|---|---|
| **Framework** | Next.js 15+ (App Router) | High performance SSR/SSG, built-in API routes, SEO optimized |
| **Language** | TypeScript | Strong typing, autocompletion, robust API contracts |
| **Styling** | Tailwind CSS + CSS Variables | Full control over custom Navy/Electric/Cyan design system |
| **Icons** | Lucide React | Modern, lightweight, accessible icon set |
| **API & Storage** | Next.js API Routes + JSON Store | Zero-config out-of-the-box local data engine + Cloud sync options |
| **GitHub Integration** | Public GitHub REST API | Fetches repos for `surya-r-developer` with 10-min server caching |

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
Ensure Node.js (v18+) and `npm` are installed on your machine.

### 2. Installation & Run
```bash
# Clone or navigate to the repository folder
cd PORTFOLIO

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open `http://localhost:3000` in your web browser to view the live portfolio.

---

## 🔐 Admin CMS Dashboard

Access the admin management portal at:
```
http://localhost:3000/admin
```

- **Default Admin Passcode**: `admin123` (or set custom passcode in session).
- **Admin Capabilities**:
  1. **Profile Editor**: Edit name, title, intro, bio, and upload profile photo.
  2. **Skills Manager**: Add/edit/delete skills, proficiency levels, and category badges.
  3. **Projects Manager**: Add/edit/delete software projects, feature toggles, images, and live links.
  4. **Achievements & Certifications**: Add honors, hackathons, and verified course certificates.
  5. **Resume Upload**: Upload, replace, or delete official PDF resumes.
  6. **GitHub Selector**: Select featured repositories from `@surya-r-developer` to feature publicly.
  7. **Social Links & Settings**: Modify contact details, phone, social URLs, and hero text.

---

## 📦 Deploying to ₹0 Cost Free Tier (Vercel / Netlify)

This application is 100% free-tier compatible.

### Deploying to Vercel (Recommended):
1. Push this repository to your GitHub account (`surya-r-developer`).
2. Visit [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `PORTFOLIO` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will build and assign a free `.vercel.app` production URL.

---

## 📁 Repository Structure

```
PORTFOLIO/
├── data/                      # Local JSON store (Portfolio data & messages)
├── public/                    # Static assets & SVG favicon
│   ├── uploads/               # Uploaded images and PDF resumes
│   └── favicon.svg
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── admin/             # Admin CMS Dashboard route (/admin)
│   │   ├── api/               # API endpoints (/api/portfolio, /api/upload, /api/github, /api/contact)
│   │   ├── globals.css        # Global CSS design system & custom cursor styles
│   │   ├── layout.tsx         # SEO metadata & font setup
│   │   ├── page.tsx           # Public homepage assembling sections
│   │   ├── robots.ts          # SEO robots.txt
│   │   └── sitemap.ts         # Sitemap generator
│   ├── components/            # UI Components
│   │   ├── About.tsx          # CSE Student Bio & Academic timeline
│   │   ├── Achievements.tsx   # Achievements & Honors card grid
│   │   ├── BackToTop.tsx      # Floating back to top button
│   │   ├── BrandLogo.tsx      # Custom geometric SR brand emblem
│   │   ├── Certifications.tsx # Verified credentials showcase
│   │   ├── Contact.tsx        # Contact form with copy-email notification
│   │   ├── CustomCursor.tsx   # Futuristic desktop glow cursor
│   │   ├── Education.tsx      # BIT Sathyamangalam CSE Card
│   │   ├── Footer.tsx         # Footer with social links & copyright
│   │   ├── GitHubRepos.tsx    # Live GitHub repo fetcher for surya-r-developer
│   │   ├── Hero.tsx           # Hero section with interactive HUD code terminal
│   │   ├── Navbar.tsx         # Sticky navigation with mobile menu
│   │   ├── Projects.tsx       # Filterable projects grid & empty state
│   │   ├── Resume.tsx         # Resume viewer & PDF download action
│   │   ├── Skills.tsx         # Interactive proficiency skill cards
│   │   └── ThemeToggle.tsx    # Dark/Light mode theme toggle
│   ├── lib/                   # Data service & initial seed data
│   └── types/                 # TypeScript data contracts
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind design system configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Package dependencies & scripts
```

---

## 📄 License & Attribution

Designed & Engineered for **Surya R** (B.E. Computer Science & Engineering, Bannari Amman Institute of Technology, Sathyamangalam).
All rights reserved © 2026.
