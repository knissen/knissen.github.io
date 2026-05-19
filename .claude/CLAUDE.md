# Kyle Nissen — Portfolio Website

## Project Overview
Personal portfolio website for Kyle Nissen, Technical Game Designer. The site is designed to attract recruiters and hiring managers at video game studios, clearly communicating a hybrid designer/programmer identity with 10+ years of shipped titles.

## Design Goals
- **Role identity front and centre**: The site must immediately communicate "Technical Game Designer" — not pure programmer, not pure designer
- **Recruiter-optimised**: Fast to scan, clear hierarchy, key achievements surfaced without needing to read deeply
- **Dark theme**: Industry-native aesthetic with a yellow-green (`#e8ff47`) primary accent and blue (`#47c8ff`) secondary accent
- **Mobile-first**: Many recruiters review portfolios on mobile between meetings
- **Typography**: JetBrains Mono (body) + Syne (headings/display) — do not substitute these

## Site Structure (Single-page scroll with anchor links)

### 1. Nav
Fixed, minimal. Logo (KN monogram), links to: Work, Skills, About, Contact. Blurred backdrop on scroll.

### 2. Hero
- Name, title ("Technical Game Designer"), one-line bio
- Two CTAs: "See My Work" (scrolls to projects) and "Download CV" (links to PDF resume)
- Subtle grid background pattern
- Content should be **vertically centred** in the viewport (not bottom-anchored)

### 3. Featured Projects
Three project cards in order of priority:
1. **Atrio: The Dark Wild** (Isto Inc., 2018–2023) — green colour theme
2. **Multiplayer Space-Physics Game** (Box Cutter Games, 2024–2025) — blue colour theme
3. **Disjoint** (Copper Brain, 2015–2016) — orange colour theme

Each card has: thumbnail placeholder, project name, year, 2–3 sentence description, tags, and a "View Case Study" link. Clicking a card navigates to a dedicated case study page.

### 4. Case Study Pages (separate routes/pages)
Each case study follows this structure:
- **The Problem**: What design or technical challenge was being solved
- **Approach**: Design decisions and technical implementation
- **Details**: GDD excerpts, architecture diagrams, Blueprint screenshots (placeholders for now)
- **Outcome**: Shipped result, metrics, reception

### 5. Skills
Four groups displayed in a 2×2 grid:
- **Design**: Systemic Design, GDD Authoring, Multiplayer Design, Economy & Balance, Procedural Design
- **Engines**: Unreal Engine 5, UE5 PCG, Blueprints, Unity (8+ yrs), FMOD
- **Code**: C++, C#, Gameplay Systems, AI Behaviour, Replication
- **Pipeline**: Perforce, Rider/UGS, CI/CD, Code Review

### 6. About
- Key stats (10+ years, shipped titles, 2× Olympian, 8yr community)
- Two short paragraphs on the designer/programmer hybrid identity
- Olympic athlete callout — this is a memorable differentiator, keep it visible

### 7. Community
Three cards:
- Calgary Game Developers Association (board member 2021–2023, active since 2016)
- Presenter & Speaker (PCG in Unreal, FMOD, game design topics)
- IndieCade Participant (arcade cabinet builds)

### 8. Contact
- Email: nissenkyle@gmail.com
- Links: LinkedIn, GitHub, Resume PDF download

## Visual Reference
The `kyle-portfolio-mockup.html` file in this project is the approved design reference. Match its colour variables, typography, card styles, and section layout exactly. Do not deviate from the established aesthetic without being asked.

## CSS Variables (from mockup)
```css
--bg: #0a0a0c;
--surface: #111116;
--surface2: #18181f;
--accent: #e8ff47;
--accent2: #47c8ff;
--text: #f0f0ee;
--muted: #6b6b7a;
--border: #222230;
--card: #13131a;
```

## Content Notes
- Resume PDF should be linked from the CV download button and the contact section
- All placeholder images in project thumbnails should eventually be replaced with real gameplay screenshots or video
- GitHub and LinkedIn URLs to be added when known
- The Olympic athlete detail should never be removed — it is a key differentiator in a competitive applicant pool

## Out of Scope
- CMS or blog functionality
- User authentication
- Contact form backend (email link is sufficient for now)
- Analytics (can be added later)