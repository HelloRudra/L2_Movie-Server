import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.35), transparent 40%), radial-gradient(circle at 80% 30%, rgba(225,29,72,0.3), transparent 45%), linear-gradient(180deg, #14141f 0%, #0b0b12 100%)",
      }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center sm:py-32">
        <span className="mb-4 text-4xl">🎬</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          DISCOVER <span className="brand-gradient-text">MOVIES</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-zinc-400 sm:text-lg">
          Explore and discover your favorite movies and TV shows from around
          the world, search by title, and dive into the details.
        </p>
        <Link
          to="/movies"
          className="btn-gradient mt-8 rounded-lg px-8 py-3 text-sm font-semibold text-white sm:text-base"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
}
