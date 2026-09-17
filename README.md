# 🎬 MovieExplorer

A responsive Movie Explorer web app built with React, where users can browse
TV shows and movies, search by title, and view detailed information in an
interactive modal — all powered by the free [TVMaze API](https://www.tvmaze.com/api).

## 🛠️ Built With

- **React** (Vite)
- **React Router** — client-side routing between Home and Movies pages
- **Tailwind CSS v4** — styling
- **TVMaze API** — show data (`/shows`, `/search/shows`)

## ✨ Features

1. **Home page** with a hero banner and a clear call-to-action into the
   Movie Listing page.
2. **Live search** — the movie grid updates automatically as you type
   (debounced), searching TVMaze by title; clearing the search returns to
   the full show list.
3. **Details modal** — clicking "See Details" on any card opens an overlay
   with the backdrop image, overview, rating, release date, genre, and
   network. Closable via the ✕ button, the "Close" button, clicking outside
   the modal, or pressing Escape.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 📦 Project Structure

```
src/
  api/tvmaze.js          → API calls (getAllShows, searchShows, getShowById)
  components/             → Navbar, Footer, Hero, SearchBar, MovieCard, MovieDetailsModal
  pages/
    Home.jsx              → landing page with hero
    Movies.jsx             → search + responsive grid + modal wiring
  App.jsx                 → routes (/ and /movies)
```

## 📤 Submitting This Assignment

You need to submit **two links**: a public GitHub repo, and a live
deployment link. Here's the fastest way to get both:

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: MovieExplorer"
```

Create a new **public** repository on GitHub (github.com/new), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/movie-explorer.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel (easiest option)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New Project"** and import your `movie-explorer` repo.
3. Vercel auto-detects Vite — leave the default build settings
   (Build Command: `npm run build`, Output Directory: `dist`).
4. Click **Deploy**. You'll get a live URL like
   `https://movie-explorer-yourname.vercel.app`.

That URL is your **Live Deployment Link**; your GitHub repo URL is your
**GitHub Repository Link** — submit both.
