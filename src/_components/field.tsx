import type {
  FieldErrorProps as AriaFieldErrorProps,
  GroupProps as AriaGroupProps,
  LabelProps as AriaLabelProps,
  TextProps as AriaTextProps,
} from "react-aria-components";
import {
  composeRenderProps,
  FieldError as AriaFieldError,
  Group as AriaGroup,
  Label as AriaLabel,
  Text as AriaText,
} from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

import { cn } from "@/_utils/cn";

const labelVariants = tv({
  base: [
    "text-sm leading-none font-medium",
    /* Disabled */
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
    /* Invalid */
    "group-data-[invalid]:text-destructive",
  ],
});

const Label = ({ className, ...props }: AriaLabelProps) => (
  <AriaLabel className={labelVariants({ className })} {...props} />
);

function FormDescription({ className, ...props }: AriaTextProps) {
  return (
    <AriaText
      className={cn("text-muted-foreground text-[0.8rem]", className)}
      {...props}
      slot="description"
    />
  );
}

function FieldError({ className, ...props }: AriaFieldErrorProps) {
  return (
    <AriaFieldError
      className={cn("text-destructive text-[0.8rem] font-medium", className)}
      {...props}
    />
  );
}

const fieldGroupVariants = tv({
  variants: {
    variant: {
      default: [
        "border-input relative flex h-9 w-full items-center overflow-hidden rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
        /* Focus Within */
        "data-[focus-within]:ring-ring data-[focus-within]:ring-1 data-[focus-within]:outline-none",
        /* Disabled */
        "data-[disabled]:opacity-50",
      ],
      ghost: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface GroupProps
  extends AriaGroupProps,
    VariantProps<typeof fieldGroupVariants> {}

function FieldGroup({ className, variant, ...props }: GroupProps) {
  return (
    <AriaGroup
      className={composeRenderProps(className, (className) =>
        cn(fieldGroupVariants({ variant }), className),
      )}
      {...props}
    />
  );
}

export {
  FieldError,
  FieldGroup,
  fieldGroupVariants,
  FormDescription,
  Label,
  labelVariants,
};
