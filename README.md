# Air Menu — آير منيو

Digital Solutions & Brand Identity Platform — Official Website v2

A bilingual-ready brand website for **Air Menu**, a Saudi digital solutions company. Offers web development, brand identity, corporate email, digital menu (i-Menu), digital card (i-Card), and ongoing technical support.

---

## Pages (13)

| # | Page | Description |
|---|------|-------------|
| 01 | `index.html` | Homepage — hero with 7 video rotation, services, pricing, FAQ, testimonials |
| 02 | `about-us.html` | Company info, team, mission |
| 03 | `contact.html` | Contact form, info, map |
| 04 | `blog.html` | Blog listing |
| 05 | `blog-detail.html` | Single blog post |
| 06 | `projects.html` | Portfolio/projects grid |
| 07 | `projects-detail.html` | Single project detail |
| 08 | `privacy-policy.html` | Privacy policy |
| 09 | `terms-and-conditions.html` | Terms and conditions |
| 10 | `404.html` | 404 error page |
| 11 | `sign-in.html` | Sign in form |
| 12 | `sign-up.html` | Sign up form |
| 13 | `workflow.html` | Agent pipeline visualization |

---

## Core Features

- **Hero**: 7 MP4 videos cycling on `ended` event with matched text overlay
- **Navbar**: Unified responsive nav — desktop links on xl+, hamburger on mobile, hover dropdowns
- **Logo**: Dual SVG (white/dark) with CSS scroll toggle, 150px in navbar
- **Footer**: Unified across all pages — service links, product links, 6 social icons, contact info
- **Agent System**: 9 animal-codenamed agents (Peacock, Lion, Spider, Bull, Hawk, Owl, Wolf, Fox, Ant) with `.agent.md` files
- **Rotating Text**: Gold-highlighted (`text-warning`) taglines synced to each video
- **Marquee**: Partner logos with seamless infinite scroll (30s cycle)

---

## Tech Stack

| Technology | Usage |
|-----------|-------|
| HTML5 | Semantic structure |
| CSS3 / SCSS | Custom styles with variable architecture in `assets/scss/` |
| Bootstrap 5.3 | Responsive grid, components, utilities (compiled into `styles.css`) |
| JavaScript (vanilla) | Video rotation, scroll effects, dropdown hover |
| jQuery | DOM manipulation (via `assets/libs/jquery/`) |
| Owl Carousel | Testimonial & partner carousels |
| AOS | Scroll-triggered animations |
| Iconify | Icon library (CDN) |
| Bootstrap Icons | UI icons (CDN) |

---

## Project Structure

```
.
├── agents/              # Agent system files
│   └── *.agent.md       # 9 agent definitions
├── assets/
│   ├── css/             # Compiled stylesheets (styles.css = Bootstrap + custom)
│   ├── scss/            # SCSS source files
│   ├── js/              # Custom JavaScript (custom.js)
│   ├── images/
│   │   ├── backgrounds/ # 7 hero MP4s + banner JPGs
│   │   ├── logos/       # logo-white.svg, logo-dark.svg, favicon.svg
│   │   ├── portfolio/   # 6 portfolio images
│   │   ├── pricing/     # Partner logos (23+)
│   │   ├── services/    # Service images
│   │   ├── svgs/        # Icons and decorative SVGs
│   │   ├── team/        # Team member photos
│   │   └── testimonial/ # Client review images
│   └── libs/            # Vendor libraries
│       ├── bootstrap/   # Bootstrap 5.3 (full source + dist)
│       ├── jquery/      # jQuery 3.x
│       ├── owl.carousel/ # Owl Carousel
│       └── aos-master/  # AOS animation library
├── en/                  # All HTML pages
│   ├── index.html       # Homepage
│   ├── about-us.html
│   ├── contact.html
│   ├── blog.html
│   ├── blog-detail.html
│   ├── projects.html
│   ├── projects-detail.html
│   ├── privacy-policy.html
│   ├── terms-and-conditions.html
│   ├── 404.html
│   ├── sign-in.html
│   ├── sign-up.html
│   └── workflow.html
├── prompts/             # AI video generation prompt files
├── .gitignore
└── README.md
```

---

## Brand Colors

| Role | Hex |
|------|-----|
| Primary (Dark Navy) | `#143257` |
| Accent (Gold) | `#ffc107` |
| Text on dark | `#ffffff` |
| Background light | `#f8f9fa` |

---

## Getting Started

No build tools required.

```bash
git clone https://github.com/QuickAirMenu/airmenu-website.git
cd airmenu-website
# Open in browser
start en/index.html
```

---

## Deployment

1. Upload the entire repo to your web server
2. Point your domain to `en/` directory
3. Ensure the web server serves `index.html` as default document

---

## Security

- CSP meta tag included (inline scripts permitted from trusted CDNs)
- All external links use `target="_blank"` with `rel="noopener noreferrer"`
- `.gitignore` excludes `.env`, `archive/`, `backup-*/`
- No sensitive credentials in repository

---

## License

© 2026 Air Menu. All rights reserved. Built in Saudi Arabia.
