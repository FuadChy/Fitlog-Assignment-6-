import Image from "next/image";
import WorkoutActions from "@/components/WorkoutActions";

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

const WorkoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  const workout: Workout = await response.json();

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          {/* Workout Image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#15171b]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>

          {/* Workout Information */}
          <div>
            <h1 className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl">
              {workout.name}
            </h1>

            <p className="mt-3 max-w-xl text-xs leading-5 text-gray-400 sm:text-sm">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscleGroup) => (
                <span
                  key={muscleGroup}
                  className="rounded-[4px] bg-[#C2F800] px-2.5 py-1 text-[8px] font-bold uppercase text-black"
                >
                  {muscleGroup}
                </span>
              ))}
            </div>

            {/* Workout Specs */}
            <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-[#15171b]">
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <span className="text-[8px] font-bold uppercase tracking-wide text-gray-500">
                  Equipment
                </span>

                <span className="text-[10px] text-gray-300">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <span className="text-[8px] font-bold uppercase tracking-wide text-gray-500">
                  Difficulty
                </span>

                <span className="text-[10px] text-gray-300">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <span className="text-[8px] font-bold uppercase tracking-wide text-gray-500">
                  Sets
                </span>

                <span className="text-[10px] text-gray-300">
                  {workout.sets}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <span className="text-[8px] font-bold uppercase tracking-wide text-gray-500">
                  Reps
                </span>

                <span className="text-[10px] text-gray-300">
                  {workout.reps}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <span className="text-[8px] font-bold uppercase tracking-wide text-gray-500">
                  Duration
                </span>

                <span className="text-[10px] text-gray-300">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <span className="text-[8px] font-bold uppercase tracking-wide text-gray-500">
                  Calories
                </span>

                <span className="text-[10px] text-gray-300">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[8px] font-bold uppercase tracking-wide text-gray-500">
                  Rating
                </span>

                <span className="text-[10px] text-gray-300">
                  {workout.rating}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-sm font-extrabold uppercase text-white">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2.5">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={instruction}
                    className="flex gap-2 text-[10px] leading-5 text-gray-400 sm:text-xs"
                  >
                    <span className="shrink-0 text-gray-500">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Actions */}
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;