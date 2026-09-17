import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieDetailsModal from "../components/MovieDetailsModal";
import { getAllShows, searchShows } from "../api/tvmaze";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  // Load the full show list once on mount.
  useEffect(() => {
    let cancelled = false;

    async function loadAll() {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllShows();
        if (!cancelled) setShows(data);
      } catch (err) {
        if (!cancelled) setError("Could not load shows. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadAll();
    return () => {
      cancelled = true;
    };
  }, []);

  // Re-fetch (search or reset to full list) whenever the query changes,
  // debounced slightly so we don't hit the API on every keystroke.
  useEffect(() => {
    let cancelled = false;

    const timer = setTimeout(async () => {
      setLoading(true);
      setError(null);
      try {
        const data = query.trim()
          ? await searchShows(query.trim())
          : await getAllShows();
        if (!cancelled) setShows(data);
      } catch (err) {
        if (!cancelled) setError("Could not load shows. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 350);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
        Browse <span className="brand-gradient-text">Movies & Shows</span>
      </h1>
      <p className="mt-1 text-sm text-zinc-400">
        Search by title, or scroll through everything TVMaze has to offer.
      </p>

      <div className="mt-6 max-w-xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="mt-8">
        {loading && (
          <div className="flex min-h-[200px] items-center justify-center">
            <div className="flex items-center gap-3 text-zinc-400">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-600 border-t-fuchsia-500" />
              Loading shows...
            </div>
          </div>
        )}

        {!loading && error && (
          <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </p>
        )}

        {!loading && !error && shows.length === 0 && (
          <p className="rounded-lg border border-white/10 bg-white/5 p-6 text-center text-sm text-zinc-400">
            No results found for "{query}".
          </p>
        )}

        {!loading && !error && shows.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shows.map((show) => (
              <MovieCard key={show.id} show={show} onSeeDetails={setSelectedShow} />
            ))}
          </div>
        )}
      </div>

      <MovieDetailsModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
}
