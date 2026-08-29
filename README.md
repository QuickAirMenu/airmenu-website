# Air Menu — آير منيو

**Digital Solutions & Brand Identity Platform**

> An English-only brand website for Air Menu, a Saudi digital solutions company offering web development, brand identity, email systems, and digital products (i-Menu, i-Card).

---

## ✦ Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | Hero | Full-screen intro with video background + CTA |
| 02 | Services | Branding, web dev, email, content, SaaS, 3D |
| 03 | Stats & Facts | Company metrics & trust indicators |
| 04 | Why Us | Value propositions & differentiators |
| 05 | Services Grid | Detailed service cards with hover effects |
| 06 | Pricing | 3-tier pricing (Essential / Professional / Enterprise) |
| 07 | Testimonials | Client reviews with avatar cards |
| 08 | FAQ | Accordion with common questions |
| 09 | Latest News | Blog preview cards |
| 10 | Contact | Form + info + map |

---

## ✦ Tech Stack

- **HTML5** — Semantic structure
- **CSS3 / SCSS** — Custom styles with variables architecture
- **Bootstrap 5.3** — Responsive grid & components
- **jQuery** — DOM manipulation & animations
- **Owl Carousel** — Testimonial & partner carousels
- **AOS** — Scroll-triggered animations
- **Iconify** — Icon library

---

## ✦ Project Structure

```
AirMenu/
├── en/                          # English pages (approved language)
│   ├── index.html               # Homepage
│   ├── about-us.html
│   ├── blog.html / blog-detail.html
│   ├── projects.html / projects-detail.html
│   ├── contact.html / support.html / workflow.html
│   ├── sign-in.html / sign-up.html
│   ├── privacy-policy.html / terms-and-conditions.html
│   └── 404.html
├── assets/
│   ├── css/                     # Compiled stylesheets
│   ├── scss/                    # SCSS source files
│   │   ├── variables/
│   │   ├── component/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── utilities/
│   ├── js/                      # Custom JavaScript
│   ├── images/
│   │   ├── backgrounds/
│   │   ├── logos/
│   │   ├── testimonial/
│   │   ├── pricing/
│   │   └── ...
│   └── libs/                    # Vendor libraries
│       ├── bootstrap/
│       ├── jquery/
│       ├── owl.carousel/
│       └── aos-master/
├── .gitignore
└── README.md
```

---

## ✦ Brand Colors

| Role | Color | Hex |
|------|-------|-----|
| Primary (Dark Navy) | ██████ | `#013565` |
| Secondary (Light Blue) | ██████ | `#ADD8E6` |
| Buttons (Blue) | ██████ | `#3361c4` |
| Accent (Gold) | ██████ | `#ffc300` / `#dca73a` |

---

## ✦ Getting Started

```bash
# Clone the repository
git clone https://github.com/QuickAirMenu/airmenu-website.git

# Open in browser (no build step required)
open en/index.html
```

> No build tools or package managers required — pure HTML + CSS + JS.

---

## ✦ Deployment

The site is fully static and can be deployed to any web server or CDN:

- Upload the `AirMenu/` folder to your server
- Point your domain to `en/index.html`
- Enable `.htaccess` for Apache rewrite rules (included)

---

## ✦ License

© 2026 **Air Menu** — All Rights Reserved.
Built with care in Saudi Arabia 🇸🇦