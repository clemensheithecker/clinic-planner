import type { FieldValues, UseControllerProps } from "react-hook-form";
import { useController } from "react-hook-form";

import type { NumberFieldInputProps, NumberFieldProps } from "@/_components/ui";
import {
  FieldError,
  FieldGroup,
  Label,
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from "@/_components/ui";

type ControlledNumberFieldProps<TFieldValues extends FieldValues> = Omit<
  UseControllerProps<TFieldValues>,
  "disabled"
> &
  Omit<
    NumberFieldProps,
    | "children"
    | "defaultValue"
    | "errorMessage"
    | "isInvalid"
    | "name"
    | "onBlur"
    | "onChange"
    | "validationBehavior"
    | "value"
  > & {
    inputProps?: NumberFieldInputProps;
  };

/**
 * A React-Hook-Form–controlled version of the <NumberField> component.
 */
export const ControlledNumberField = <TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  ...numberFieldProps
}: ControlledNumberFieldProps<TFieldValues>) => {
  const { field, fieldState } = useController<TFieldValues>({
    control,
    name,
    rules,
  });

  return (
    <NumberField
      {...numberFieldProps}
      errorMessage={fieldState.error?.message}
      isDisabled={numberFieldProps.isDisabled}
      isInvalid={fieldState.invalid}
      name={field.name}
      onBlur={field.onBlur}
      onChange={field.onChange}
      validationBehavior="aria"
      value={field.value}
    >
      <Label>{numberFieldProps.label}</Label>
      <FieldGroup>
        <NumberFieldInput ref={field.ref} {...numberFieldProps?.inputProps} />
        <NumberFieldSteppers />
      </FieldGroup>
      <FieldError>{fieldState.error?.message}</FieldError>
    </NumberField>
  );
};
