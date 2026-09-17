import { useEffect } from "react";
import { stripHtml } from "../api/tvmaze";

export default function MovieDetailsModal({ show, onClose }) {
  // Close on Escape key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!show) return null;

  const backdrop = show.image?.original || show.image?.medium;
  const summary = stripHtml(show.summary) || "No overview available.";
  const rating = show.rating?.average ?? "N/A";
  const releaseDate = show.premiered || "Unknown";
  const genres = show.genres?.length ? show.genres.join(", ") : "N/A";
  const network = show.network?.name || show.webChannel?.name || "N/A";

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="animate-pop-in relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#14141f]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          ✕
        </button>

        <div className="h-56 w-full bg-zinc-800 sm:h-72">
          {backdrop ? (
            <img src={backdrop} alt={show.name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-zinc-500">
              No Image
            </div>
          )}
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">{show.name}</h2>
          <p className="mt-2 text-sm text-zinc-400">
            ⭐ Rating: {rating} &nbsp;|&nbsp; 📅 Release: {releaseDate}
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            🎭 Genre: {genres} &nbsp;|&nbsp; 📺 Network: {network}
          </p>

          <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-zinc-300">
            Overview
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{summary}</p>

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-lg border border-white/10 py-2.5 text-sm font-semibold text-white hover:bg-white/5 sm:w-auto sm:px-6"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}
