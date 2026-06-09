# Jason Albano Portfolio

A production-ready portfolio website for Jason Albano — Senior Healthcare Data Analyst and AI Analytics Professional.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Three.js · React Three Fiber · Lenis

---

## Deploy in 4 Steps

### 1. Create GitHub Repository
- Go to github.com → New Repository → name it `jason-albano-portfolio`
- Set to Public, leave empty (no README)
- Click Create

### 2. Push Files via Terminal
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/jason-albano-portfolio.git
git push -u origin main --force
```

### 3. Connect to Vercel
- Go to vercel.com → Add New Project → import the repository
- Leave all settings default

### 4. Deploy
- Click Deploy — build takes 60–90 seconds
- Your site will be live at `jason-albano-portfolio.vercel.app`

---

## Add Your Resume PDF

Place your resume at:
```
/public/resume/Jason-Albano-Resume.pdf
```
This enables the Download Resume button.

---

## Customize Content

All content is in one file: `/data/resume.ts`

- **Bio / Summary** → `personal.summary`
- **Projects** → `projects` array
- **Experience** → `experience` array
- **Certifications** → `certifications` array
- **Skills** → `skills` object
- **Contact links** → `personal.linkedin`, `personal.github`, `personal.email`
- **Recruiter Q&A** → `recruiterQA` array

---

## Change Colors

Edit `/tailwind.config.ts` and `/app/globals.css`
- Primary accent: `#06b6d4` (cyan)
- Secondary: `#14b8a6` (teal)
- Background: `#050a15` (dark navy)

---

## License

Personal portfolio — all rights reserved by Jason L. Albano.
