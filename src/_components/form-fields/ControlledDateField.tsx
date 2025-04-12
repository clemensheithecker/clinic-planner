import type { CalendarDate } from "@internationalized/date";
import { I18nProvider } from "react-aria-components";
import type { FieldValues, UseControllerProps } from "react-hook-form";
import { useController } from "react-hook-form";

import type { DateFieldProps, DateInputProps } from "@/_components/ui";
import { DateField, DateInput, FieldError, Label } from "@/_components/ui";
import { calendarDateToDate } from "@/_utils/calendarDateToDate";
import { dateToCalendarDate } from "@/_utils/dateToCalendarDate";

type ControlledDateFieldProps<
  TFieldValues extends FieldValues,
  TItem extends CalendarDate,
> = Omit<UseControllerProps<TFieldValues>, "disabled"> &
  Omit<
    DateFieldProps<TItem>,
    | "children"
    | "defaultValue"
    | "isInvalid"
    | "name"
    | "onBlur"
    | "onChange"
    | "validationBehavior"
    | "value"
  > & {
    inputProps?: DateInputProps;
    label?: string;
  };

/**
 * A React-Hook-Form–controlled version of the <DateField> component.
 */
export const ControlledDateField = <
  TFieldValues extends FieldValues,
  TField extends CalendarDate,
>({
  control,
  name,
  rules,
  label,
  inputProps,
  ...dateFieldProps
}: ControlledDateFieldProps<TFieldValues, TField>) => {
  const { field, fieldState } = useController<TFieldValues>({
    control,
    name,
    rules,
  });

  return (
    <I18nProvider locale="de-DE">
      <DateField
        {...dateFieldProps}
        isDisabled={dateFieldProps.isDisabled}
        isInvalid={fieldState.invalid}
        name={field.name}
        onBlur={field.onBlur}
        onChange={(value) => field.onChange(calendarDateToDate(value))}
        validationBehavior="aria"
        value={dateToCalendarDate(field.value) as TField | undefined} // TODO: fix this
      >
        <Label>{label}</Label>
        <DateInput ref={field.ref} {...inputProps} />
        <FieldError>{fieldState.error?.message}</FieldError>
      </DateField>
    </I18nProvider>
  );
};
