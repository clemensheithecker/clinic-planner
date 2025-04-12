import type { CalendarDate } from "@internationalized/date";

export const calendarDateToDate = (
  value: CalendarDate | null | undefined,
): Date | null | undefined => {
  if (!value) return value;

  return value.toDate("UTC");
};
