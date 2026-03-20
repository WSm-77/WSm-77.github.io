# Wiktor Sędzimir - Portfolio Website

A modern portfolio website built with React, TypeScript, and Vite showcasing research, projects, and GitHub contribution data.

**Live Site:** https://wsm-77.github.io

## Features

- **Research Spotlight:** Featured publication (CheckEmbed: LLM Verification)
- **Live GitHub Stats:** Dynamic commit graph and repository data
- **Project Showcase:** Interactive carousel of featured projects
- **Neural Twin Chatbot:** AI-powered stub assistant for visitor engagement
- **Resume Modal:** Downloadable resume and professional experience
- **Responsive Design:** Optimized for desktop and mobile

## Development

**Prerequisites:** Node.js 20+

### Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser

### Build & Deploy

- **Build:** `npm run build` (outputs to `dist/`)
- **Deploy:** Push to `main` branch to trigger GitHub Actions deployment
- **Preview:** `npm run preview`

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS, Framer Motion
- **Data:** GitHub REST API (dynamic stats)
- **Deployment:** GitHub Pages + GitHub Actions
- **Icons:** Lucide React
