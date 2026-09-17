import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-white" : "text-zinc-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b12]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl">🎬</span>
          <span className="text-lg font-bold text-white">
            Movie<span className="brand-gradient-text">Explorer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/movies" className={linkClass}>
            Movies
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/movies"
            className="btn-gradient rounded-full px-5 py-2 text-sm font-semibold text-white"
          >
            Explore Now
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-2 text-zinc-300 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#0b0b12] px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <NavLink
                to="/"
                end
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-300"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
