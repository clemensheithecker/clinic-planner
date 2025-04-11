import React, { forwardRef } from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import {
  Button as AriaButton,
  composeRenderProps,
} from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors",
    /* Disabled */
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    /* Focus Visible */
    "data-[focus-visible]:ring-ring data-[focus-visible]:ring-2 data-[focus-visible]:outline-none",
    /* Resets */
    "focus-visible:outline-none",
  ],
  variants: {
    variant: {
      default:
        "bg-primary text-primary-foreground data-[hovered]:bg-primary/90 shadow",
      destructive:
        "bg-destructive data-[hovered]:bg-destructive/90 text-red-50 shadow-sm",
      outline:
        "border-input bg-background data-[hovered]:bg-accent data-[hovered]:text-accent-foreground border shadow-sm",
      secondary:
        "bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80 shadow-sm",
      ghost: "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
      link: "text-primary underline-offset-4 data-[hovered]:underline",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <AriaButton
        className={composeRenderProps(className, (className) =>
          buttonVariants({
            variant,
            size,
            className,
          }),
        )}
        {...props}
        ref={ref}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
