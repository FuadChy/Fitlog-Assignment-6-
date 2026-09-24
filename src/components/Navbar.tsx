"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <nav className="border-b border-white/10 bg-[#0b0c0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/logo.png"
              alt="FitLog logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />

            <span className="text-sm font-bold tracking-wide text-white">
              FITLOG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                isWorkoutActive
                  ? "bg-[#1c2a0a] text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                isPlanActive
                  ? "bg-[#1c2a0a] text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Plan */}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white"
            >
              <span className="hidden sm:inline">Plan</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-bold text-black">
                0
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white"
            >
              <span className="hidden sm:inline">Saved</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/30 px-1.5 text-[10px] font-bold text-white">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-8 w-8 items-center justify-center rounded-md text-gray-300 hover:bg-white/5 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-3 py-2 text-sm ${
                  isWorkoutActive
                    ? "bg-[#1c2a0a] text-[#ccff00]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                Workout
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-3 py-2 text-sm ${
                  isPlanActive
                    ? "bg-[#1c2a0a] text-[#ccff00]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                My Plan
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;