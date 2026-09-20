# 🎞️ Life Through Receipts — Aarav's Journey

> **WebRush Hackathon Submission** | Frontend-Only Storytelling & Data Visualization Website

**Life Through Receipts** is a frontend-only, production-ready interactive storytelling and data visualization web application. It transforms disconnected transactional datasets — Spotify playback logs, household expense records, and national transaction footprints — into a narrative of everyday life through the fictional persona of **Aarav**.

Built to reproduce handwritten design sketches, the website captures an authentic scrapbook/journal aesthetic with hand-drawn typography, dark chalkboard cards, paper cutout clouds, an iconic winding photographic negative filmstrip, and a universal footer.

---

## 📸 Design Authenticity & Visual Features

1. **Winding Filmstrip Timeline (Landing Page)**
   - 3-tier angled zig-zag photographic ribbon with authentic sprocket holes.
   - 9 interactive, clickable chapter frames leading directly into corresponding story pages.
   - Smooth hover scaling and elevation effects.

2. **Color-Coded Narrative Chapters**
   - Strictly alternates between the specified paper color themes:
     - **Blue** (`#7ec4dc`): Landing Page, Story 1, Story 4, Story 7, Final Page
     - **Pink** (`#d989b5`): Story 2, Story 5, Story 8
     - **Yellow** (`#fed843`): Story 3, Story 6, Story 9
   - Cascading chalkboard/dark paper cards with chalk typography, rank badges, and golden highlights.

3. **Data Integrity & Strict Wording Rules**
   - All dataset metrics, dates, ranks, artists, transaction counts, and currency amounts are preserved verbatim.
   - **Page 5 Compliance**: Strictly uses the exact wording *"cities represented in transaction records"* (not *"places visited"*).
   - **Page 8 Compliance**: Retains the exact title *"The Last Shared Moments"*.
   - **Page 9 Compliance**: Notes that all 227 India transactions are from April 2024 with zero in May/June.
   - **Final Reflection Page**: Renders the complete, verbatim reflection text centered in bold dark blue against soft clouds on sky blue paper.

4. **Universal Reusable Footer**
   - Identical across every single page with the hand-drawn divider rule, star doodle (`✦`), and dataset disclaimer text.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18
- **Tooling & Bundler**: Vite 6
- **Routing**: React Router DOM (v6) with clean URLs (`/`, `/story/:id`, `/final`)
- **Styling**: Pure CSS with responsive CSS Grid, Flexbox, custom properties, and media queries
- **Typography**: Google Fonts (`Caveat`, `Patrick Hand`, `Gaegu`, `Kalam`, `Gloria Hallelujah`, `Inter`)
- **Zero Backend / Serverless**: 100% frontend implementation suitable for automated FAIE evaluation.

---

## 📁 Project Structure

```
life-through-receipts/
├── public/
│   ├── _redirects          # Netlify SPA redirect rule
│   └── 404.html            # GitHub Pages SPA fallback
├── src/
│   ├── components/
│   │   ├── ArtistTable.jsx       # Top 5 artists ranking table
│   │   ├── CategoryBreakdown.jsx # Spending category bars
│   │   ├── CityTable.jsx         # Cities represented in tx records
│   │   ├── CloudsBackground.jsx  # Floating paper cloud decorations
│   │   ├── DataCard.jsx          # Dark chalkboard/marker card container
│   │   ├── ExpenseTable.jsx      # Household expenses table
│   │   ├── FilmstripNav.jsx      # Interactive winding photographic filmstrip
│   │   ├── Footer.jsx            # Universal reusable footer component
│   │   ├── StoryHeader.jsx       # Navigation, titles, badges, and Spotify banner
│   │   └── StoryStats.jsx        # Highlight metrics
│   ├── data/
│   │   └── stories.js            # Centralized story & transaction dataset
│   ├── pages/
│   │   ├── FinalPage.jsx         # Ending reflection page
│   │   ├── LandingPage.jsx       # Home / Filmstrip overview
│   │   └── StoryPage.jsx         # Stories 1 through 9 dynamic renderer
│   ├── styles/
│   │   └── theme.css             # Journal aesthetic, sketch borders & layout
│   ├── App.jsx                   # Route provider
│   └── main.jsx                  # React DOM entrypoint
├── index.html                    # HTML shell with Google Fonts
├── package.json                  # Dependencies & scripts
├── vercel.json                   # Vercel SPA routing rewrite
├── vite.config.js                # Vite build configuration
└── README.md                     # Comprehensive project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 1. Installation
```bash
cd life-through-receipts
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified in terminal).

### 3. Build for Production
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Live Deployment Instructions

This frontend is designed for zero-configuration static deployments:

### Deploying to Vercel
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Vercel will automatically detect Vite. Click **Deploy**.
4. The included `vercel.json` ensures all route URLs (`/story/1`, `/final`) resolve without 404 errors.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Set Build Command to `npm run build` and Publish Directory to `dist`.
3. The included `public/_redirects` guarantees clean SPA routing.

### Deploying to GitHub Pages
1. Install `gh-pages` or configure GitHub Actions for static HTML deployment from the `dist` folder.
2. The included `public/404.html` acts as the SPA fallback router.

---

## 📱 Responsiveness & Accessibility

The site has been tested across multiple device viewports:
- **Desktop**: 1440px & 1280px
- **Laptop**: 1024px
- **Tablet**: 768px
- **Mobile**: 430px, 390px, 375px

Features:
- Semantic HTML tags (`<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`, `<table>`).
- Proper table headers (`<th scope="col">`) for screen reader support.
- Fully keyboard-navigable links and buttons with visible focus indicators.
- Responsive filmstrip that adapts seamlessly to vertical screens on mobile devices.

---

## 📄 License & Attribution

- Built as an original project for the WebRush 6-Hour Hackathon.
- Story and datasets based on the provided hackathon prompt.
