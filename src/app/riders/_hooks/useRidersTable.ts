import { useSuspenseQuery } from "@tanstack/react-query";
import { useAsyncList } from "react-stately";

import type { SelectRider } from "@/database/schemas";
import { useTRPC } from "@/trpc/client";

export type TableRow = {
  addressLine1: string;
  age: number;
  city: string;
  firstName: string;
  lastName: string;
  postalCode: string;
  weightInKg: number;
};

const calculateAge = (bornAt: Date): number => {
  const today = new Date();
  const yearsDiff = today.getFullYear() - bornAt.getFullYear();
  const birthdayNotOccurred =
    today.getMonth() < bornAt.getMonth() ||
    (today.getMonth() === bornAt.getMonth() &&
      today.getDate() < bornAt.getDate());
  return yearsDiff - (birthdayNotOccurred ? 1 : 0);
};

const getTableData = (data: SelectRider[]): TableRow[] => {
  return data.map((rider) => ({
    addressLine1: rider.addressLine1,
    age: calculateAge(rider.bornAt),
    city: rider.city,
    firstName: rider.firstName,
    lastName: rider.lastName,
    postalCode: rider.postalCode,
    weightInKg: rider.weightInKg,
  }));
};

export const useRidersTable = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.riders.loadAll.queryOptions());

  const tableData = getTableData(data);

  const list = useAsyncList<TableRow>({
    load: async () => {
      return {
        items: tableData,
      };
    },
    sort: async ({ items, sortDescriptor }) => ({
      items: items.sort((a, b) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const first = a[sortDescriptor.column];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const second = b[sortDescriptor.column];
        let cmp =
          (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
        if (sortDescriptor.direction === "descending") {
          cmp *= -1;
        }
        return cmp;
      }),
    }),
  });

  return { list };
};
