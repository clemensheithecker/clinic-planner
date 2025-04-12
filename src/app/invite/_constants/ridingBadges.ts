import type { z } from "zod";

import type { ridingBadgeSchema } from "../_schemas";

type RidingBadge = z.infer<typeof ridingBadgeSchema>;

export const RIDING_BADGES = Object.freeze<
  Record<RidingBadge, { label: string }>
>({
  "10": { label: "Reitabzeichen 10" },
  "9": { label: "Reitabzeichen 9" },
  "8": { label: "Reitabzeichen 8" },
  "7": { label: "Reitabzeichen 7" },
  "6": { label: "Reitabzeichen 6" },
  "5": { label: "Reitabzeichen 5" },
  "4": { label: "Reitabzeichen 4" },
  "3": { label: "Reitabzeichen 3" },
} as const);
