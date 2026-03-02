"use client"

export default function RecentCommitsSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="flex justify-between items-center gap-4 
          bg-gradient-to from-[#1E293B] to-[#0F172A]
          p-5 rounded-2xl border border-[#1E293B]"
        >
          <div className="flex items-start gap-4 w-full">

            {/* Checkbox Skeleton */}
            <div className="w-6 h-6 rounded-full bg-[#334155]" />

            {/* Text Content */}
            <div className="flex-1 space-y-3">
              
              {/* Title Skeleton */}
              <div className="h-4 w-3/4 bg-[#334155] rounded-md" />

              {/* Badge + Time Skeleton */}
              <div className="flex gap-3">
                <div className="h-3 w-20 bg-[#334155] rounded-md" />
                <div className="h-3 w-16 bg-[#334155] rounded-md" />
              </div>

            </div>
          </div>

          {/* Right Glow Dot */}
          <div className="w-2 h-2 rounded-full bg-[#334155]" />
        </div>
      ))}

    </div>
  )
}