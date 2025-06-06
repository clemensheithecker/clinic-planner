import type { FieldValues, UseControllerProps } from "react-hook-form";
import { useController } from "react-hook-form";

import type { SelectProps } from "@/_components/ui";
import {
  FieldError,
  Label,
  Select,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/_components/ui";

type ControlledSelectProps<
  TFieldValues extends FieldValues,
  TItem extends object,
> = Omit<UseControllerProps<TFieldValues>, "disabled"> &
  Omit<
    SelectProps<TItem>,
    | "children"
    | "defaultSelectedKey"
    | "errorMessage"
    | "isInvalid"
    | "name"
    | "onBlur"
    | "onSelectionChange"
    | "selectedKey"
    | "validationBehavior"
  > & {
    label?: string;
    items?: Iterable<TItem>;
    children: React.ReactNode | ((item: TItem) => React.ReactNode);
  };

/**
 * A React-Hook-Form–controlled version of the <Select> component.
 */
export const ControlledSelect = <
  TFieldValues extends FieldValues,
  TField extends object,
>({
  control,
  name,
  rules,
  ...selectProps
}: ControlledSelectProps<TFieldValues, TField>) => {
  const { field, fieldState } = useController<TFieldValues>({
    control,
    name,
    rules,
  });

  return (
    <Select
      {...selectProps}
      isDisabled={selectProps.isDisabled}
      isInvalid={fieldState.invalid}
      name={field.name}
      onBlur={field.onBlur}
      onSelectionChange={field.onChange}
      selectedKey={field.value}
      validationBehavior="aria"
    >
      <Label>{selectProps.label}</Label>
      <SelectTrigger ref={field.ref}>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox items={selectProps.items}>
          {selectProps.children}
        </SelectListBox>
      </SelectPopover>
      <FieldError>{fieldState.error?.message}</FieldError>
    </Select>
  );
};
