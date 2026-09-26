import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-4 py-7 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center overflow-hidden rounded-lg border border-white/10 bg-[#15171b] md:flex-row">
        <div className="w-full px-6 py-10 sm:px-8 lg:w-1/2 lg:px-10">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-3xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-4xl lg:text-5xl">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mt-4 max-w-[430px] text-[10px] leading-4 text-gray-400 sm:text-xs sm:leading-5">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            <br />
            into today's plan, and watch the week's work add up.
          </p>

          <a
            href="#library"
            className="mt-5 inline-flex h-7 items-center gap-1.5 rounded-[3px] bg-[#C2F800] px-3 text-[8px] font-bold uppercase leading-none text-black transition hover:bg-[#b8e600]"
          >
            <span>→</span>
            BROWSE WORKOUTS
          </a>
        </div>

        <div className="relative h-[240px] w-full sm:h-[280px] md:h-[260px] md:w-1/2 lg:h-[320px]">
          <Image
            src="/banner.png"
            alt="Workout"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;