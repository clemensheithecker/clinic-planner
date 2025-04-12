import type { CalendarDate } from "@internationalized/date";
import { parseDate } from "@internationalized/date";
import { z } from "zod";

const dateSchema = z.date();

export const dateToCalendarDate = (
  value: Date | null | undefined,
): CalendarDate | undefined => {
  if (!value) return undefined;

  dateSchema.parse(value);

  const dateString = value.toISOString().split("T")[0];

  return parseDate(dateString);
};
