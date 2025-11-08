# Andres Bryant Media Log

Mindful tracking and public logging of media consumption powered by Next.js and Sanity CMS.

---

## Overview

**Andres Bryant’s Media Log** is a **personal media tracking platform** designed to help manage, document, and reflect on media consumption in a public, accessible record. It combines a clean, mobile-friendly static website with the flexibility of Sanity CMS for effortless content updates and automated deployments.

This project addresses the challenge of staying mindful in the vast sea of digital content by providing a lightweight, maintainable, and easy-to-update log.

---

## Key Features

* **Mindful Media Logging** — Track and document articles, videos, podcasts, and other media for personal reflection or public sharing.
* **Sanity-Powered CMS** — Easily add, edit, or remove posts using a visual, intuitive interface.
* **Clean, Minimal Design** — Focus on content with an uncluttered, accessible layout.
* **Mobile-Friendly** — Optimized for seamless browsing on phones and tablets.
* **Static Site with Auto-Deploy** — Leverages Next.js incremental static regeneration and Sanity webhook triggers for fast, low-maintenance updates.
* **Search & Categorization** — Filter and sort media by type, date, or custom tags.
* **Low Maintenance** — Minimal infrastructure overhead; everything handled via Next.js and Sanity CMS.

---

## Tech Stack

* **Next.js 15** — Modern React framework for static and dynamic content.
* **Sanity CMS** — Headless CMS with real-time visual editing and content management.
* **Tailwind CSS / CSS-in-JS** — Optional styling for clean, responsive UI.
* **Vercel** — Deployment platform with incremental static regeneration.
* **JavaScript / TypeScript** — Core application logic with optional type safety.

---

## Getting Started

### Install and Setup

1. Clone the repository:

```bash
git clone <repo-url> media-log
cd media-log
```

2. Install dependencies:

```bash
npm install
```

3. Configure Sanity Studio:

```bash
cd studio
npm install
```

4. Run development servers:

```bash
# Next.js frontend
npm run dev

# Sanity Studio
cd studio
npm run dev
```

5. Open in browser:

* Frontend: [http://localhost:3000](http://localhost:3000)
* Studio: [http://localhost:3333](http://localhost:3333)

---

### Adding Content

1. Create a new `Post` or media entry in Sanity Studio.
2. Add title, description, media link, and any tags.
3. Publish — Next.js frontend will update automatically.

Optional: Import sample data for initial setup:

```bash
npm run import-sample-data
```

---

### Deployment

1. Deploy Sanity Studio:

```bash
npx sanity deploy
```

2. Deploy Next.js frontend:

* Connect repository to **Vercel**.
* Configure environment variables (`SANITY_PROJECT_ID`, `SANITY_DATASET`, etc.).
* Set root directory to the Next.js app.
* Deploy with one click.

---

## Roadmap & Vision

* Add social sharing and comment features.
* Implement media analytics and consumption trends visualization.
* Enable tagging, search, and personalized filtering.
* Support additional content types: notes, highlights, bookmarks.

---

## License

MIT License
