"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { forwardRef } from "react";
import type {
  ButtonProps as AriaButtonProps,
  InputProps as AriaInputProps,
  NumberFieldProps as AriaNumberFieldProps,
  ValidationResult as AriaValidationResult,
} from "react-aria-components";
import {
  composeRenderProps,
  Input as AriaInput,
  NumberField as AriaNumberField,
} from "react-aria-components";

import { cn } from "@/_utils/cn";

import { Button } from "./button";

type NumberFieldInputProps = AriaInputProps;

const NumberFieldInput = forwardRef<HTMLInputElement, NumberFieldInputProps>(
  ({ className, ...props }, ref) => (
    <AriaInput
      ref={ref}
      className={composeRenderProps(className, (className) =>
        cn(
          "bg-background placeholder:text-muted-foreground w-fit min-w-0 flex-1 border-r border-transparent pr-2 outline-none [&::-webkit-search-cancel-button]:hidden",
          className,
        ),
      )}
      {...props}
    />
  ),
);

NumberFieldInput.displayName = "NumberFieldInput";

const NumberFieldSteppers = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cn("absolute right-0 flex h-full flex-col border-l", className)}
    {...props}
  >
    <NumberFieldStepper slot="increment">
      <ChevronUpIcon aria-hidden className="size-4" />
    </NumberFieldStepper>
    <div className="border-b" />
    <NumberFieldStepper slot="decrement">
      <ChevronDownIcon aria-hidden className="size-4" />
    </NumberFieldStepper>
  </div>
);

const NumberFieldStepper = ({ className, ...props }: AriaButtonProps) => (
  <Button
    className={composeRenderProps(className, (className) =>
      cn("text-muted-foreground w-auto grow rounded-none px-0.5", className),
    )}
    variant="ghost"
    size="icon"
    {...props}
  />
);

interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
}

const NumberField = ({ children, className, ...props }: NumberFieldProps) => (
  <AriaNumberField
    className={composeRenderProps(className, (className) =>
      cn("group flex flex-col gap-2", className),
    )}
    {...props}
  >
    {children}
  </AriaNumberField>
);

export {
  NumberField,
  NumberFieldInput,
  NumberFieldStepper,
  NumberFieldSteppers,
};
export type { NumberFieldInputProps, NumberFieldProps };
