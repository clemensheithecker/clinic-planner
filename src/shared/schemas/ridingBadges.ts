import { z } from "zod";

export const ridingBadgeSchema = z.enum(
  ["10", "9", "8", "7", "6", "5", "4", "3"],
  {
    message: "Bitte wähle ein Reitabzeichen",
  },
);
