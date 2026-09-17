export default function MovieCard({ show, onSeeDetails }) {
  const poster = show.image?.medium || show.image?.original;
  const year = show.premiered ? show.premiered.slice(0, 4) : "N/A";
  const rating = show.rating?.average ?? "N/A";

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="aspect-[2/3] w-full bg-zinc-800">
        {poster ? (
          <img
            src={poster}
            alt={show.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-zinc-500">
            No Image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 text-sm font-bold text-white sm:text-base">
          {show.name}
        </h3>
        <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
          ⭐ {rating} &nbsp;•&nbsp; 📅 {year}
        </p>

        <button
          onClick={() => onSeeDetails(show)}
          className="btn-gradient mt-4 w-full rounded-lg py-2 text-sm font-semibold text-white"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
