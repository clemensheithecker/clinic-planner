import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
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

function NumberFieldInput({ className, ...props }: AriaInputProps) {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          "bg-background placeholder:text-muted-foreground w-fit min-w-0 flex-1 border-r border-transparent pr-2 outline-none [&::-webkit-search-cancel-button]:hidden",
          className,
        ),
      )}
      {...props}
    />
  );
}

function NumberFieldSteppers({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute right-0 flex h-full flex-col border-l",
        className,
      )}
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
}

function NumberFieldStepper({ className, ...props }: AriaButtonProps) {
  return (
    <Button
      className={composeRenderProps(className, (className) =>
        cn("text-muted-foreground w-auto grow rounded-none px-0.5", className),
      )}
      variant="ghost"
      size="icon"
      {...props}
    />
  );
}

interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
}

function NumberField({ children, className, ...props }: NumberFieldProps) {
  return (
    <AriaNumberField
      className={composeRenderProps(className, (className) =>
        cn("group flex flex-col gap-2", className),
      )}
      {...props}
    >
      {children}
    </AriaNumberField>
  );
}

export {
  NumberField,
  NumberFieldInput,
  NumberFieldStepper,
  NumberFieldSteppers,
};
