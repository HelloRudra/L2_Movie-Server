export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-zinc-400">🔍</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie or show..."
        className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none sm:text-base"
      />
    </div>
  );
}
