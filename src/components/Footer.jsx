export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm font-semibold text-white">
          Movie<span className="brand-gradient-text">Explorer</span>
        </p>
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} MovieExplorer. All rights reserved by Rudra
        </p>
        <div className="flex gap-4 text-sm text-zinc-400">
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
