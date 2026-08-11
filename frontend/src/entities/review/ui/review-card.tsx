/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Review } from "../model/types";
import { cn } from "@/shared/lib/cn";

export function ReviewCard({ review, className }: { review: Review; className?: string }) {
  return (
    <div className={cn("flex h-[23.5rem] w-[19.875rem] shrink-0 flex-col justify-between gap-[1rem] rounded-[0.375rem] bg-surface-1 p-[1.25rem] md:h-[26rem] md:w-auto md:min-w-0 md:flex-1 md:shrink md:gap-[1.3333rem] md:rounded-[0.5rem] md:p-[2rem]", className)}>
      <p className="text-[0.875rem] leading-[1.2] text-white/48 md:text-[1.3333rem]">
        “
        {review.quote}
        ”
      </p>

      <div className="flex items-center gap-[0.75rem] md:gap-[1.3333rem]">
        <span className="flex size-[3.25rem] shrink-0 items-center justify-center rounded-full bg-surface-3 text-[1rem] text-white md:size-[6rem] md:text-[2rem]">
          {review.authorInitial}
        </span>
        <div className="flex flex-col gap-[0.5rem] md:gap-[0.6667rem]">
          <span className="text-[1rem] text-white md:text-[1.3333rem]">{review.authorName}</span>
          <span className="text-[0.75rem] text-white/48 md:text-[1rem]">{review.company}</span>
        </div>
      </div>
    </div>
  );
}
