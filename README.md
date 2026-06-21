# Fernando Duarte — Portfolio Website

A high-fashion, maximalist portfolio for Fernando Duarte: professional ballet dancer and physique model. Built with Astro, Tailwind CSS, and GSAP.

---

## Quick Start

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

---

## 1. Adding Photos

Photos are stored in `/public/images/` and referenced from JSON files in `/src/content/gallery/`.

### Step 1 — Drop your images into the right folder

| Category | Folder |
|---|---|
| Dance / Performance | `/public/images/dance/` |
| Fitness / Physique | `/public/images/fitness/` |
| Editorial / Fashion | `/public/images/editorial/` |
| Casting Digitals | `/public/images/digitals/` |
| Hero / Homepage | `/public/images/hero/` |
| Featured (Nigel Barker) | `/public/images/featured/` |

**Recommended formats:** JPG or WebP. Aim for 1200–2400px on the longest edge. Keep file sizes under 500KB for fast loading.

### Step 2 — Update the matching JSON file

Each category has a JSON file in `/src/content/gallery/`. Edit it to list your images:

**Example — `/src/content/gallery/dance.json`:**
```json
[
  {
    "id": "dance-01",
    "src": "/images/dance/performance-arabesque.jpg",
    "alt": "Fernando Duarte in arabesque — Swan Lake, 2024",
    "caption": "Swan Lake, Act II",
    "credit": "Photo: Jane Smith",
    "featured": false
  },
  {
    "id": "dance-02",
    "src": "/images/dance/contemporary-leap.jpg",
    "alt": "Fernando Duarte — contemporary piece, aerial leap",
    "caption": "Untitled Contemporary Work",
    "credit": "Photo: John Doe",
    "featured": true
  }
]
```

The same pattern applies to `fitness.json` and `editorial.json`.

### Casting Digitals — `/src/content/gallery/digitals.json`

The digitals page expects exactly 4 shots. Update each entry's `src` field:

```json
[
  { "id": "digitals-full", "src": "/images/digitals/full-body.jpg", "alt": "...", "label": "Full Body" },
  { "id": "digitals-waist", "src": "/images/digitals/waist-up.jpg", "alt": "...", "label": "Waist Up" },
  { "id": "digitals-profile", "src": "/images/digitals/profile.jpg", "alt": "...", "label": "Profile" },
  { "id": "digitals-headshot", "src": "/images/digitals/headshot.jpg", "alt": "...", "label": "Headshot" }
]
```

### Hero Image

To add a full-bleed hero image on the homepage, open `/src/pages/index.astro` and find the comment block in the hero section. Uncomment the `<img>` tag and update the path:

```html
<img src="/images/hero/hero-main.jpg" alt="Fernando Duarte" class="w-full h-full object-cover opacity-60" />
```

### Open Graph / Social Share Image

Place a 1200×630px image at `/public/images/hero/og-image.jpg`. This is automatically referenced in the `<head>` of every page.

---

## 2. Editing Bio, Stats & CV

All personal content lives in one file: **`/src/content/site.json`**

Open it and fill in the placeholder values (anything in `[BRACKETS]`):

- **`bio`** — Artist statement. Supports paragraph breaks with `\n\n`.
- **`stats`** — Height, chest, waist, hips, inseam, shoe, hair, eyes, pronouns.
- **`danceCV`** — Training, companies, repertoire, choreographers, notable performances.
- **`contact`** — Email, Instagram handle, agency name and email.

Any stat field left as `[PLACEHOLDER]` will be displayed in a muted italic style on the Stats page, so it is safe to publish with incomplete data.

---

## 3. Adding Video

Place video files in `/public/video/`. Then open `/src/pages/reel.astro` and replace the placeholder `<div>` blocks with `<video>` elements:

```html
<!-- Primary reel -->
<video
  src="/video/reel-main.mp4"
  controls
  poster="/images/hero/reel-poster.jpg"
  class="w-full h-full object-cover"
>
  Your browser does not support the video tag.
</video>
```

**Tip:** Keep videos under 50MB. For larger files, host on Vimeo/YouTube and embed with an `<iframe>`.

---

## 4. Running Locally

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Deploying to GitHub Pages

### One-time setup

1. Update `astro.config.mjs` — set `site` to your actual domain or GitHub Pages URL:
   ```js
   site: 'https://yourusername.github.io',
   // or if using a custom domain:
   site: 'https://fernandoduarte.com',
   ```

2. If deploying to a GitHub Pages project (not a user/org root), also set `base`:
   ```js
   base: '/your-repo-name',
   ```

### Build and deploy

```bash
npm run build
# This outputs to /dist — deploy that folder.
```

**With GitHub Actions** — create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then in your GitHub repo settings, set Pages source to the `gh-pages` branch.

---

## 6. Enabling the Contact Form

The contact form uses [Formspree](https://formspree.io) — free for up to 50 submissions/month.

1. Go to [formspree.io](https://formspree.io) and sign up.
2. Create a new form — copy your Form ID (looks like `xpzgkdqr`).
3. Open `/src/pages/contact.astro` and replace `YOUR_FORMSPREE_ID`:
   ```html
   <form action="https://formspree.io/f/xpzgkdqr" method="POST" ...>
   ```

Submissions will be emailed to the address you used to sign up with Formspree.

---

## Project Structure

```
src/
├── content/
│   ├── site.json          ← Bio, stats, CV, contact info
│   └── gallery/
│       ├── dance.json     ← Dance photo list
│       ├── fitness.json   ← Fitness photo list
│       ├── editorial.json ← Editorial photo list
│       └── digitals.json  ← Casting digitals (4 shots)
├── layouts/
│   └── Layout.astro       ← HTML shell, nav, footer, GSAP, grain
├── components/
│   ├── Nav.astro
│   ├── Footer.astro
│   ├── GalleryGrid.astro
│   ├── Lightbox.astro
│   └── GrainOverlay.astro
└── pages/
    ├── index.astro        ← Homepage
    ├── portfolio.astro    ← Tabbed gallery
    ├── reel.astro         ← Video reel
    ├── digitals.astro     ← Casting digitals
    ├── stats.astro        ← Measurements / comp card
    ├── about.astro        ← Bio + dance CV
    └── contact.astro      ← Contact form + booking
```

---

## Palette

| Name | Hex | Use |
|---|---|---|
| `fd-black` | `#0A0A0A` | Background |
| `fd-cream` | `#F5F0E8` | Body text |
| `fd-red` | `#C8102E` | Primary accent |
| `fd-gold` | `#D4A827` | Secondary highlight |
| `fd-gray` | `#1A1A1A` | Card / surface |

---

Built with [Astro](https://astro.build) · [Tailwind CSS](https://tailwindcss.com) · [GSAP](https://gsap.com)
