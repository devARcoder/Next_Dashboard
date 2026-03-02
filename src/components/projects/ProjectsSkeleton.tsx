"use client";

export default function ProjectsSkeleton() {
  return (
    <div className="my-6 animate-pulse">

      

      {/* Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="border border-[#0F172A] p-6 rounded-2xl bg-[#0F172A] space-y-4"
          >
            <div className="flex justify-between">
              <div className="h-5 w-20 bg-[#1E293B] rounded" />
              <div className="h-5 w-5 bg-[#1E293B] rounded" />
            </div>

            <div className="h-5 w-3/4 bg-[#1E293B] rounded" />
            <div className="h-4 w-full bg-[#1E293B] rounded" />
            <div className="h-4 w-2/3 bg-[#1E293B] rounded" />

            <div className="flex justify-between mt-4">
              <div className="h-3 w-24 bg-[#1E293B] rounded" />
              <div className="h-3 w-16 bg-[#1E293B] rounded" />
            </div>

            <div className="h-3 w-full bg-[#1E293B] rounded mt-3" />
          </div>
        ))}
      </div>
    </div>
  );
}