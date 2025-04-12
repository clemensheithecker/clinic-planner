import { forwardRef } from "react";
import type {
  InputProps,
  TextAreaProps as AriaTextAreaProps,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult as AriaValidationResult,
} from "react-aria-components";
import {
  composeRenderProps,
  Input as AriaInput,
  TextArea as AriaTextArea,
  TextField as AriaTextField,
} from "react-aria-components";

import { cn } from "@/_utils/cn";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <AriaInput
        ref={ref}
        className={composeRenderProps(className, (className) =>
          cn(
            "border-input placeholder:text-muted-foreground flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-base file:font-medium",
            /* Disabled */
            "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
            /* Focused */
            "data-[focused]:ring-ring data-[focused]:ring-1 data-[focused]:outline-none",
            /* Resets */
            "focus-visible:outline-none",
            className,
          ),
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

const TextArea = ({ className, ...props }: AriaTextAreaProps) => {
  return (
    <AriaTextArea
      className={composeRenderProps(className, (className) =>
        cn(
          "border-input bg-background ring-offset-background placeholder:text-muted-foreground flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base",
          /* Focused */
          "data-[focused]:ring-ring data-[focused]:ring-2 data-[focused]:ring-offset-2 data-[focused]:outline-none",
          /* Disabled */
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          /* Resets */
          "focus-visible:outline-none",
          className,
        ),
      )}
      {...props}
    />
  );
};

interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
  textArea?: boolean;
}

const TextField = ({ children, className, ...props }: TextFieldProps) => (
  <AriaTextField
    className={composeRenderProps(className, (className) =>
      cn("group flex flex-col gap-2", className),
    )}
    {...props}
  >
    {children}
  </AriaTextField>
);

export { Input, TextArea, TextField };
export type { InputProps, TextFieldProps };
