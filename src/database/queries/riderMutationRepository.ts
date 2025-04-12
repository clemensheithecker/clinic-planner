import { db } from "../drizzle";
import type { InsertRider } from "../schemas";
import { ridersTable } from "../schemas";

export const RIDER_MUTATION_REPOSITORY = Object.freeze({
  createOne: async (data: InsertRider): Promise<void> => {
    await db.insert(ridersTable).values(data);
  },
} as const);
