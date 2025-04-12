"use client";

import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { forwardRef } from "react";
import type {
  ButtonProps as AriaButtonProps,
  ListBoxProps as AriaListBoxProps,
  PopoverProps as AriaPopoverProps,
  SelectProps as AriaSelectProps,
  SelectValueProps as AriaSelectValueProps,
  ValidationResult as AriaValidationResult,
} from "react-aria-components";
import {
  Button as AriaButton,
  composeRenderProps,
  ListBox as AriaListBox,
  Select as AriaSelect,
  SelectValue as AriaSelectValue,
  Text,
} from "react-aria-components";

import { cn } from "@/_utils/cn";

import { FieldError, Label } from "./field";
import {
  ListBoxCollection,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
} from "./list-box";
import { Popover } from "./popover";

const Select = <T extends object>({
  className,
  ...props
}: AriaSelectProps<T>) => (
  <AriaSelect
    className={composeRenderProps(className, (className) =>
      cn("group flex flex-col gap-2", className),
    )}
    {...props}
  />
);

const SelectItem = ListBoxItem;

const SelectHeader = ListBoxHeader;

const SelectSection = ListBoxSection;

const SelectCollection = ListBoxCollection;

const SelectValue = <T extends object>({
  className,
  ...props
}: AriaSelectValueProps<T>) => (
  <AriaSelectValue
    className={composeRenderProps(className, (className) =>
      cn(
        "data-[placeholder]:text-muted-foreground line-clamp-1",
        /* Description */
        "[&>[slot=description]]:hidden",
        className,
      ),
    )}
    {...props}
  />
);

const SelectTrigger = forwardRef<HTMLButtonElement, AriaButtonProps>(
  ({ className, children, ...props }, ref) => (
    <AriaButton
      ref={ref}
      className={composeRenderProps(className, (className) =>
        cn(
          "border-input flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-base whitespace-nowrap shadow-sm",
          /* Disabled */
          "disabled:cursor-not-allowed disabled:opacity-50",
          /* Focused */
          "focus:ring-ring focus:ring-1 focus:outline-none",
          /* Resets */
          "focus-visible:outline-none",
          className,
        ),
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <ChevronUpDownIcon aria-hidden="true" className="size-4 opacity-50" />
        </>
      ))}
    </AriaButton>
  ),
);

SelectTrigger.displayName = "SelectTrigger";

const SelectPopover = ({ className, ...props }: AriaPopoverProps) => (
  <Popover
    className={composeRenderProps(className, (className) =>
      cn("w-[var(--trigger-width)]", className),
    )}
    {...props}
  />
);

const SelectListBox = <T extends object>({
  className,
  ...props
}: AriaListBoxProps<T>) => (
  <AriaListBox
    className={composeRenderProps(className, (className) =>
      cn(
        "max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]",
        className,
      ),
    )}
    {...props}
  />
);

interface JollySelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

const JollySelect = <T extends object>({
  label,
  description,
  errorMessage,
  children,
  className,
  items,
  ...props
}: JollySelectProps<T>) => (
  <Select
    className={composeRenderProps(className, (className) =>
      cn("group flex flex-col gap-2", className),
    )}
    {...props}
  >
    <Label>{label}</Label>
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    {description && (
      <Text className="text-muted-foreground text-base" slot="description">
        {description}
      </Text>
    )}
    <FieldError>{errorMessage}</FieldError>
    <SelectPopover>
      <SelectListBox items={items}>{children}</SelectListBox>
    </SelectPopover>
  </Select>
);

export {
  JollySelect,
  Select,
  SelectCollection,
  SelectHeader,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectSection,
  SelectTrigger,
  SelectValue,
};
export type { JollySelectProps, AriaSelectProps as SelectProps };
