"use client";

import type { CalendarDate } from "@internationalized/date";
import { forwardRef } from "react";
import type {
  DateFieldProps as AriaDateFieldProps,
  DateInputProps as AriaDateInputProps,
  DateSegmentProps as AriaDateSegmentProps,
  TimeFieldProps as AriaTimeFieldProps,
  TimeValue as AriaTimeValue,
  ValidationResult as AriaValidationResult,
} from "react-aria-components";
import {
  composeRenderProps,
  DateField as AriaDateField,
  DateInput as AriaDateInput,
  DateSegment as AriaDateSegment,
  Text,
  TimeField as AriaTimeField,
} from "react-aria-components";
import type { VariantProps } from "tailwind-variants";

import { cn } from "@/_utils/cn";

import { FieldError, fieldGroupVariants, Label } from "./field";

const DateField = <T extends CalendarDate>({
  className,
  ...props
}: AriaDateFieldProps<T>) => (
  <AriaDateField
    className={composeRenderProps(className, (className) =>
      cn("group flex flex-col gap-2", className),
    )}
    {...props}
  />
);

const TimeField = AriaTimeField;

const DateSegment = ({ className, ...props }: AriaDateSegmentProps) => (
  <AriaDateSegment
    className={composeRenderProps(className, (className) =>
      cn(
        "type-literal:px-0 inline rounded p-0.5 caret-transparent outline-none",
        /* Placeholder */
        "data-[placeholder]:text-muted-foreground",
        /* Disabled */
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        /* Focused */
        "data-[focused]:bg-accent data-[focused]:text-accent-foreground",
        /* Invalid */
        "data-[invalid]:data-[focused]:bg-destructive data-[invalid]:data-[focused]:data-[placeholder]:text-destructive-foreground data-[invalid]:data-[focused]:text-destructive-foreground data-[invalid]:data-[placeholder]:text-destructive data-[invalid]:text-destructive",
        className,
      ),
    )}
    {...props}
  />
);

interface DateInputProps
  extends AriaDateInputProps,
    VariantProps<typeof fieldGroupVariants> {}

const DateInput = forwardRef<HTMLDivElement, Omit<DateInputProps, "children">>(
  ({ className, variant, ...props }, ref) => (
    <AriaDateInput
      ref={ref}
      className={composeRenderProps(className, (className) =>
        cn(fieldGroupVariants({ variant }), "text-sm", className),
      )}
      {...props}
    >
      {(segment) => <DateSegment segment={segment} />}
    </AriaDateInput>
  ),
);
DateInput.displayName = "DateInput";

interface JollyDateFieldProps<T extends CalendarDate>
  extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
}

const JollyDateField = <T extends CalendarDate>({
  label,
  description,
  errorMessage,
  ...props
}: JollyDateFieldProps<T>) => (
  <DateField {...props}>
    <Label>{label}</Label>
    <DateInput />
    {description && (
      <Text className="text-muted-foreground text-sm" slot="description">
        {description}
      </Text>
    )}
    <FieldError>{errorMessage}</FieldError>
  </DateField>
);

interface JollyTimeFieldProps<T extends AriaTimeValue>
  extends AriaTimeFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
}

const JollyTimeField = <T extends AriaTimeValue>({
  label,
  description,
  errorMessage,
  className,
  ...props
}: JollyTimeFieldProps<T>) => (
  <TimeField
    className={composeRenderProps(className, (className) =>
      cn("group flex flex-col gap-2", className),
    )}
    {...props}
  >
    <Label>{label}</Label>
    <DateInput />
    {description && <Text slot="description">{description}</Text>}
    <FieldError>{errorMessage}</FieldError>
  </TimeField>
);

export {
  DateField,
  DateInput,
  DateSegment,
  JollyDateField,
  JollyTimeField,
  TimeField,
};
export type {
  AriaDateFieldProps as DateFieldProps,
  DateInputProps,
  JollyDateFieldProps,
  JollyTimeFieldProps,
};
