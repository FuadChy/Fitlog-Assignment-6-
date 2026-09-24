"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-white/10 bg-[#111216]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />

          <span className="text-lg font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              pathname === "/"
                ? "bg-[#1c2a0a] text-[#ccff00]"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              pathname === "/my-plan"
                ? "bg-[#1c2a0a] text-[#ccff00]"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Plan & Saved */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-xs text-gray-400"
          >
            <span className="hidden sm:inline">Plan</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-1.5 font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-xs text-gray-400"
          >
            <span className="hidden sm:inline">Saved</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/20 px-1.5 text-white">
              0
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;