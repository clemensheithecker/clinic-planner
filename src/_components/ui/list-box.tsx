"use client";

import { CheckIcon } from "@heroicons/react/16/solid";
import type {
  ListBoxItemProps as AriaListBoxItemProps,
  ListBoxProps as AriaListBoxProps,
} from "react-aria-components";
import {
  Collection as AriaCollection,
  composeRenderProps,
  Header as AriaHeader,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  Section as AriaSection,
} from "react-aria-components";

import { cn } from "@/_utils/cn";

const ListBoxSection = AriaSection;

const ListBoxCollection = AriaCollection;

const ListBox = <T extends object>({
  className,
  ...props
}: AriaListBoxProps<T>) => (
  <AriaListBox
    className={composeRenderProps(className, (className) =>
      cn(
        className,
        "group bg-popover text-popover-foreground overflow-auto rounded-md border p-1 shadow-md outline-none",
        /* Empty */
        "data-[empty]:p-6 data-[empty]:text-center data-[empty]:text-base",
      ),
    )}
    {...props}
  />
);

const ListBoxItem = <T extends object>({
  className,
  children,
  ...props
}: AriaListBoxItemProps<T>) => {
  return (
    <AriaListBoxItem
      textValue={
        props.textValue || (typeof children === "string" ? children : undefined)
      }
      className={composeRenderProps(className, (className) =>
        cn(
          "relative flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-base outline-none select-none",
          /* Disabled */
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          /* Focused */
          "data-[focused]:bg-accent data-[focused]:text-accent-foreground",
          /* Hovered */
          "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
          /* Selection */
          "data-[selection-mode]:pr-8",
          className,
        ),
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {renderProps.isSelected && (
            <span className="absolute right-2 flex size-4 items-center justify-center">
              <CheckIcon className="size-4" />
            </span>
          )}
          {children}
        </>
      ))}
    </AriaListBoxItem>
  );
};

const ListBoxHeader = ({
  className,
  ...props
}: React.ComponentProps<typeof AriaHeader>) => (
  <AriaHeader
    className={cn("px-2 py-1.5 text-base font-semibold", className)}
    {...props}
  />
);

export {
  ListBox,
  ListBoxCollection,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
};
