import type { FieldValues, UseControllerProps } from "react-hook-form";
import { useController } from "react-hook-form";

import type { InputProps, TextFieldProps } from "@/_components/ui";
import { FieldError, Input, Label, TextField } from "@/_components/ui";

type ControlledTextFieldProps<TFieldValues extends FieldValues> = Omit<
  UseControllerProps<TFieldValues>,
  "disabled"
> &
  Omit<
    TextFieldProps,
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
    inputProps?: InputProps;
  };

/**
 * A React-Hook-Form–controlled version of the <TextField> component.
 */
export const ControlledTextField = <TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  ...textFieldProps
}: ControlledTextFieldProps<TFieldValues>) => {
  const { field, fieldState } = useController<TFieldValues>({
    control,
    name,
    rules,
  });

  return (
    <TextField
      {...textFieldProps}
      errorMessage={fieldState.error?.message}
      isDisabled={textFieldProps.isDisabled}
      isInvalid={fieldState.invalid}
      name={field.name}
      onBlur={field.onBlur}
      onChange={field.onChange}
      validationBehavior="aria"
      value={field.value}
    >
      <Label>{textFieldProps.label}</Label>
      <Input ref={field.ref} {...textFieldProps?.inputProps} />
      <FieldError>{fieldState.error?.message}</FieldError>
    </TextField>
  );
};
