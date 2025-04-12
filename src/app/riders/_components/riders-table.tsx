"use client";

import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/_components/ui";

import type { TableRow } from "../_hooks/useRidersTable";
import { useRidersTable } from "../_hooks/useRidersTable";

export const RidersTable = () => {
  const { list } = useRidersTable();

  return (
    <div className="flex size-full items-center justify-center">
      <div className="relative w-full overflow-auto rounded-md border">
        <Table
          aria-label="Example table with client side sorting"
          sortDescriptor={list.sortDescriptor}
          onSortChange={list.sort}
        >
          <TableHeader>
            <Column id="firstName" isRowHeader allowsSorting>
              Vorname
            </Column>
            <Column id="lastName" allowsSorting>
              Nachname
            </Column>
            <Column id="age" allowsSorting>
              Alter
            </Column>
            <Column id="weightInKg" allowsSorting>
              Gewicht (kg)
            </Column>
            <Column id="addressLine1" allowsSorting>
              Addresse
            </Column>
            <Column id="city" allowsSorting>
              Ort
            </Column>
            <Column id="postalCode" allowsSorting>
              PLZ
            </Column>
          </TableHeader>
          <TableBody
            items={list.items}
            renderEmptyState={() => "No results found."}
          >
            {(item: TableRow) => (
              <Row id={`${item.firstName}-${item.lastName}`}>
                <Cell>{item.firstName}</Cell>
                <Cell>{item.lastName}</Cell>
                <Cell>{item.age}</Cell>
                <Cell>{item.weightInKg}</Cell>
                <Cell>{item.addressLine1}</Cell>
                <Cell>{item.city}</Cell>
                <Cell>{item.postalCode}</Cell>
              </Row>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
