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

  const [planMessage, setPlanMessage] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const isInPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    if (isInPlan) {
      setPlanMessage("Already in today's plan");
      return;
    }

    if (plan.length >= 5) {
      setPlanMessage("Today's plan is full");
      return;
    }

    addToPlan(workout);
    setPlanMessage("Added to today's plan");
  };

  const handleSaveWorkout = () => {
    if (isSaved) {
      setSavedMessage("Already saved");
      return;
    }

    saveWorkout(workout);
    setSavedMessage("Saved for later");
  };

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-2 sm:flex-row">
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

      {planMessage && (
        <p className="mt-2 text-[9px] text-[#C2F800]">
          {planMessage}
        </p>
      )}

      {savedMessage && (
        <p className="mt-2 text-[9px] text-[#C2F800]">
          {savedMessage}
        </p>
      )}
    </div>
  );
};

export default WorkoutActions;