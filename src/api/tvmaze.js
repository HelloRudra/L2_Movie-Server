const BASE_URL = "https://api.tvmaze.com";

/**
 * Fetch every show TVMaze has. Used for the default "browse all" grid.
 */
export async function getAllShows() {
  const res = await fetch(`${BASE_URL}/shows`);
  if (!res.ok) throw new Error("Failed to load shows");
  return res.json();
}

/**
 * Search shows by title. TVMaze wraps each hit as { score, show }.
 * We unwrap it here so callers just get an array of show objects.
 */
export async function searchShows(query) {
  const res = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Failed to search shows");
  const data = await res.json();
  return data.map((entry) => entry.show);
}

/**
 * Fetch full details for a single show by id (used by the details modal
 * in case we need fresher/fuller data than what's in the grid already).
 */
export async function getShowById(id) {
  const res = await fetch(`${BASE_URL}/shows/${id}`);
  if (!res.ok) throw new Error("Failed to load show details");
  return res.json();
}

/** Strip HTML tags out of TVMaze's summary field (it comes back as HTML). */
export function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "");
}
