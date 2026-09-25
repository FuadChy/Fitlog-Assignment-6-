const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0b0c0f] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#C2F800]" />

            <p className="mt-4 text-[9px] font-bold uppercase tracking-wider text-gray-500">
              Loading workouts...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;