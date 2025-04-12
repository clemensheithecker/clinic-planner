"use client";

import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import type {
  CellProps,
  ColumnProps as AriaColumnProps,
  RowProps,
  TableBodyProps,
  TableHeaderProps,
  TableProps,
} from "react-aria-components";
import {
  Cell as AriaCell,
  Column as AriaColumn,
  ColumnResizer,
  composeRenderProps,
  Group,
  ResizableTableContainer as AriaResizableTableContainer,
  Row as AriaRow,
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableHeader,
} from "react-aria-components";

import { cn } from "@/_utils/cn";

const ResizableTableContainer = AriaResizableTableContainer;

const Table = ({ className, ...props }: TableProps) => (
  <AriaTable
    className={composeRenderProps(className, (className) =>
      cn(
        "data-[focus-visible]:outline-ring w-full caption-bottom text-sm -outline-offset-2",
        className,
      ),
    )}
    {...props}
  />
);

const TableHeader = <T extends object>({
  className,
  ...props
}: TableHeaderProps<T>) => (
  <AriaTableHeader
    className={composeRenderProps(className, (className) =>
      cn("[&_tr]:border-b", className),
    )}
    {...props}
  />
);

export interface ColumnProps extends AriaColumnProps {
  isResizable?: boolean;
}

const Column = ({ className, children, ...props }: ColumnProps) => (
  <AriaColumn
    className={composeRenderProps(className, (className) =>
      cn(
        "text-muted-foreground data-[focus-visible]:outline-ring h-10 text-left align-middle font-medium -outline-offset-2",
        className,
      ),
    )}
    {...props}
  >
    {composeRenderProps(children, (children, { allowsSorting }) => (
      <div className="flex items-center">
        <Group
          role="presentation"
          tabIndex={-1}
          className={cn(
            "flex h-9 flex-1 items-center gap-1 overflow-hidden rounded-md px-2",
            allowsSorting &&
              "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground p-2",
            "data-[focus-visible]:outline-ring focus-visible:outline-none data-[focus-visible]:-outline-offset-2 [&:has([slot=selection])]:pr-0 [&>[slot=selection]]:translate-y-[2px]",
          )}
        >
          <span className="truncate">{children}</span>
          {allowsSorting && <ChevronUpDownIcon className="ml-2 size-4" />}
        </Group>
        {props.isResizable && (
          <ColumnResizer className="data-[focus-visible]:ring-rin bg-muted-foreground data-[resizing]:bg-primary data-[focus-visible]:ring-ring box-content h-5 w-px translate-x-[8px] cursor-col-resize rounded bg-clip-content px-[8px] py-1 focus-visible:outline-none data-[focus-visible]:ring-1 data-[resizing]:w-[2px] data-[resizing]:pl-[7px]" />
        )}
      </div>
    ))}
  </AriaColumn>
);

const TableBody = <T extends object>({
  className,
  ...props
}: TableBodyProps<T>) => (
  <AriaTableBody
    className={composeRenderProps(className, (className) =>
      cn("[&_tr:last-child]:border-0", className),
    )}
    {...props}
  />
);

const Row = <T extends object>({ className, ...props }: RowProps<T>) => (
  <AriaRow
    className={composeRenderProps(className, (className) =>
      cn(
        "data-[hovered]:bg-muted/50 data-[selected]:bg-muted data-[focus-visible]:outline-ring border-b -outline-offset-2 transition-colors",
        className,
      ),
    )}
    {...props}
  />
);

const Cell = ({ className, ...props }: CellProps) => (
  <AriaCell
    className={composeRenderProps(className, (className) =>
      cn(
        "data-[focus-visible]:outline-ring p-2 align-middle -outline-offset-2 [&:has([slot=selection])]:pr-0 [&>[slot=selection]]:translate-y-[2px]",
        className,
      ),
    )}
    {...props}
  />
);

export {
  Cell,
  Column,
  ResizableTableContainer,
  Row,
  Table,
  TableBody,
  TableHeader,
};
