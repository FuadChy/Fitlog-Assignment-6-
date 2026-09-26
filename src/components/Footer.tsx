import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c0f]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-[9px] font-bold text-white"
        >
          <span className="text-[#C2F800]">⚡</span>
          FITLOG
        </Link>

        <p className="text-right text-[7px] text-gray-600 sm:text-[8px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;