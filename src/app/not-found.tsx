import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[#0b0c0f] px-4">
      <div className="text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C2F800]">
          FITLOG
        </p>

        <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          404
        </h1>

        <h2 className="mt-2 text-sm font-bold uppercase text-white">
          WORKOUT NOT FOUND
        </h2>

        <p className="mx-auto mt-2 max-w-sm text-[9px] leading-4 text-gray-500 sm:text-[10px]">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-5 inline-flex rounded-[4px] bg-[#C2F800] px-4 py-2 text-[8px] font-bold uppercase text-black transition hover:bg-[#b8e600]"
        >
          BACK TO WORKOUTS
        </Link>
      </div>
    </main>
  );
};

export default NotFound;