"use client";

import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

type WorkoutActionsProps = {
  workout: Workout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { addToPlan, saveWorkout, plan, saved } = useFitLog();

  const [toast, setToast] = useState("");

  const isInPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const handleAddToPlan = () => {
    if (isInPlan) {
      showToast("Already in today's plan");
      return;
    }

    if (plan.length >= 5) {
      showToast("Today's plan is full");
      return;
    }

    addToPlan(workout);
    showToast("Added to today's plan");
  };

  const handleSaveWorkout = () => {
    if (isSaved) {
      showToast("Already saved");
      return;
    }

    saveWorkout(workout);
    showToast("Saved for later");
  };

  return (
    <>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={handleAddToPlan}
          className="inline-flex items-center justify-center rounded-md bg-[#C2F800] px-4 py-2.5 text-[9px] font-bold uppercase text-black transition hover:bg-[#b8e600]"
        >
          {isInPlan ? "Added to plan" : "Add to today's plan"}
        </button>

        <button
          type="button"
          onClick={handleSaveWorkout}
          className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2.5 text-[9px] font-bold uppercase text-white transition hover:bg-white/5"
        >
          {isSaved ? "Saved" : "Save for later"}
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-md border border-white/10 bg-[#15171b] px-4 py-3 shadow-lg">
          <p className="text-[9px] font-medium text-[#C2F800]">
            {toast}
          </p>
        </div>
      )}
    </>
  );
};

export default WorkoutActions;