import { pgTable } from "drizzle-orm/pg-core";

export const ridersTable = pgTable("riders_table", (t) => ({
  _id: t.uuid("id").primaryKey().defaultRandom(),
  addressLine1: t.text("address_line_1").notNull(),
  bornAt: t.date("born_at", { mode: "date" }).notNull(),
  city: t.text("city").notNull(),
  firstName: t.text("first_name").notNull(),
  lastName: t.text("last_name").notNull(),
  postalCode: t.text("postal_code").notNull(),
  weightInKg: t.integer("weight_in_kg").notNull(),
}));

export type InsertRider = typeof ridersTable.$inferInsert;
export type SelectRider = typeof ridersTable.$inferSelect;
