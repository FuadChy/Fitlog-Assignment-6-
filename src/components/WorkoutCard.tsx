import Image from "next/image";
import Link from "next/link";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
};

type WorkoutCardProps = {
  workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="block overflow-hidden rounded-lg border border-white/5 bg-[#15171b] transition hover:border-white/15"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#111214]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain"
        />
      </div>

      <div className="p-4">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((muscleGroup) => (
            <span
              key={muscleGroup}
              className="rounded-[3px] bg-[#C2F800] px-2 py-1 text-[8px] font-bold uppercase leading-none text-black"
            >
              {muscleGroup}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="mt-2 text-xs font-extrabold uppercase tracking-tight text-white sm:text-sm">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-[10px] text-gray-500 sm:text-[11px]">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-3 border-t border-white/10" />

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-3 text-[9px] text-gray-500 sm:text-[10px]">
          <span>◷ {workout.duration} min</span>

          <span>◉ {workout.caloriesBurned} kcal</span>

          <span>★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;