import { db } from "../drizzle";
import type { SelectRider } from "../schemas";
import { ridersTable } from "../schemas";

export const RIDER_QUERY_REPOSITORY = Object.freeze({
  findAll: async (): Promise<SelectRider[]> => {
    const riders = await db.select().from(ridersTable);
    return riders;
  },
} as const);
