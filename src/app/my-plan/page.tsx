"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

type SortOption = "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const {
    plan,
    saved,
    completed,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");
  const [toast, setToast] = useState("");

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  const handleMarkAsDone = (id: number) => {
    markAsDone(id);
    showToast("Workout marked as done");
  };

  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
      showToast("Workout removed from today's plan");
    } else {
      removeFromSaved(id);
      showToast("Workout removed from saved");
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-4 py-7 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section>
          <h1 className="text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
            MY PLAN
          </h1>

          <p className="mt-1 text-[9px] text-gray-500 sm:text-[10px]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        <section className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-[#15171b]">
          <div className="grid grid-cols-3">
            <div className="border-r border-white/10 px-4 py-4 sm:px-6">
              <p className="text-[8px] font-medium text-gray-500 sm:text-[9px]">
                Exercises
              </p>
              <p className="mt-1 text-2xl font-extrabold leading-none text-[#C2F800] sm:text-3xl">
                {plan.length}
              </p>
            </div>

            <div className="border-r border-white/10 px-4 py-4 sm:px-6">
              <p className="text-[8px] font-medium text-gray-500 sm:text-[9px]">
                Minutes
              </p>
              <p className="mt-1 text-2xl font-extrabold leading-none text-white sm:text-3xl">
                {totalMinutes}
              </p>
            </div>

            <div className="px-4 py-4 sm:px-6">
              <p className="text-[8px] font-medium text-gray-500 sm:text-[9px]">
                Calories
              </p>
              <p className="mt-1 text-2xl font-extrabold leading-none text-white sm:text-3xl">
                {totalCalories}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-5 flex items-center justify-between gap-4">
          <div className="flex rounded-md border border-white/10 bg-[#15171b] p-0.5">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-[4px] px-3 py-1.5 text-[8px] font-medium transition sm:px-4 ${
                activeTab === "plan"
                  ? "bg-[#20242b] text-gray-300"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-[4px] px-3 py-1.5 text-[8px] font-medium transition sm:px-4 ${
                activeTab === "saved"
                  ? "bg-[#20242b] text-gray-300"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden text-[8px] text-gray-500 sm:inline">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value as SortOption)
              }
              className="rounded-md border border-white/10 bg-[#15171b] px-3 py-1.5 text-[8px] text-gray-300 outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </section>

        {sortedWorkouts.length === 0 ? (
          <section className="mt-4 flex min-h-[185px] items-center justify-center rounded-lg border border-dashed border-white/10 bg-[#0e1013] px-6">
            <div className="text-center">
              <h2 className="text-xs font-extrabold uppercase text-white sm:text-sm">
                NOTHING HERE YET
              </h2>

              <p className="mt-1 text-[8px] text-gray-500 sm:text-[9px]">
                {activeTab === "plan"
                  ? "Browse the library and add a lift to get today moving."
                  : "Save a workout for later and it will appear here."}
              </p>

              <Link
                href="/"
                className="mt-3 inline-flex rounded-[4px] bg-[#C2F800] px-4 py-2 text-[8px] font-bold uppercase text-black transition hover:bg-[#b8e600]"
              >
                GO TO WORKOUTS
              </Link>
            </div>
          </section>
        ) : (
          <section className="mt-4 space-y-2">
            {sortedWorkouts.map((workout) => {
              const isCompleted = completed.includes(workout.id);

              return (
                <article
                  key={workout.id}
                  className="rounded-lg border border-white/10 bg-[#15171b] p-2.5 transition hover:border-white/15 sm:p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md bg-[#111214] sm:h-16 sm:w-24">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap gap-1">
                        {workout.muscleGroups.map((muscleGroup) => (
                          <span
                            key={muscleGroup}
                            className="rounded-[3px] bg-[#C2F800] px-1.5 py-0.5 text-[6px] font-bold uppercase leading-none text-black"
                          >
                            {muscleGroup}
                          </span>
                        ))}
                      </div>

                      <h2 className="mt-1 truncate text-[10px] font-extrabold uppercase text-white sm:text-xs">
                        {workout.name}
                      </h2>

                      <p className="truncate text-[7px] text-gray-500 sm:text-[8px]">
                        {workout.equipment}
                      </p>

                      <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[7px] text-gray-500 sm:text-[8px]">
                        <span>◷ {workout.duration} min</span>
                        <span>◉ {workout.caloriesBurned} kcal</span>
                        <span>★ {workout.rating}</span>
                      </div>
                    </div>

                    <div className="hidden shrink-0 items-center gap-2 sm:flex">
                      <Link
                        href={`/workout/${workout.id}`}
                        className="rounded-full border border-white/15 px-3 py-1.5 text-[7px] font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
                      >
                        View Details
                      </Link>

                      {activeTab === "plan" && (
                        <button
                          type="button"
                          onClick={() => handleMarkAsDone(workout.id)}
                          disabled={isCompleted}
                          className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-[7px] font-bold transition ${
                            isCompleted
                              ? "bg-[#20242b] text-[#C2F800]"
                              : "bg-[#C2F800] text-black hover:bg-[#b8e600]"
                          }`}
                        >
                          <span>✓</span>
                          {isCompleted ? "Done" : "Mark as Done"}
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleRemove(workout.id)}
                        className="flex h-6 w-6 items-center justify-center rounded-full text-gray-500 transition hover:bg-white/5 hover:text-white"
                        aria-label={`Remove ${workout.name}`}
                      >
                        ×
                      </button>
                    </div>

                    <div className="flex shrink-0 flex-col items-end gap-1 sm:hidden">
                      <Link
                        href={`/workout/${workout.id}`}
                        className="rounded-full border border-white/15 px-2 py-1 text-[6px] font-medium text-gray-300"
                      >
                        Details
                      </Link>

                      {activeTab === "plan" && (
                        <button
                          type="button"
                          onClick={() => handleMarkAsDone(workout.id)}
                          disabled={isCompleted}
                          className={`rounded-full px-2 py-1 text-[6px] font-bold ${
                            isCompleted
                              ? "bg-[#20242b] text-[#C2F800]"
                              : "bg-[#C2F800] text-black"
                          }`}
                        >
                          {isCompleted ? "Done" : "Done"}
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleRemove(workout.id)}
                        className="text-[10px] text-gray-500"
                        aria-label={`Remove ${workout.name}`}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </div>

      {toast && (
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-md border border-white/10 bg-[#15171b] px-4 py-3 shadow-lg">
          <p className="text-[9px] font-medium text-[#C2F800]">
            {toast}
          </p>
        </div>
      )}
    </main>
  );
};

export default MyPlanPage;