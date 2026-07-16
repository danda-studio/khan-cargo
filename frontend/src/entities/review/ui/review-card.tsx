import type { Review } from "../model/types";
import { cn } from "@/shared/lib/cn";

export function ReviewCard({ review, className }: { review: Review; className?: string }) {
  return (
    <div className={cn("flex h-[26rem] flex-1 flex-col justify-between gap-[1.3333rem] rounded-[0.5rem] bg-surface-1 p-[2rem]", className)}>
      <p className="text-[1.3333rem] leading-[1.2] text-white/48">
        “
        {review.quote}
        ”
      </p>

      <div className="flex items-center gap-[1.3333rem]">
        <span className="flex size-[6rem] shrink-0 items-center justify-center rounded-full bg-surface-3 text-[2rem] text-white">
          {review.authorInitial}
        </span>
        <div className="flex flex-col gap-[0.6667rem]">
          <span className="text-[1.3333rem] text-white">{review.authorName}</span>
          <span className="text-[1rem] text-white/48">{review.company}</span>
        </div>
      </div>
    </div>
  );
}
