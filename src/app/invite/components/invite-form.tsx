"use client";

import {
  ControlledNumberField,
  ControlledSelect,
  ControlledTextField,
} from "@/_components/form-fields";
import { ControlledDateField } from "@/_components/form-fields/ControlledDateField";
import { Button, Form, SelectItem, Text } from "@/_components/ui";
import { MAX_WEIGHT_IN_KG, MIN_WEIGHT_IN_KG } from "@/shared/constants";

import { RIDING_BADGES } from "../_constants";
import { useInviteForm } from "../_hooks";

export default function InviteForm() {
  const { form, onSubmit } = useInviteForm();

  const { control, handleSubmit, formState } = form;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ControlledTextField
            control={control}
            inputProps={{ placeholder: "Gib deinen Vorname ein" }}
            label="Vorname"
            name="firstName"
          />
          <ControlledTextField
            control={control}
            inputProps={{ placeholder: "Gib deinen Nachnamen ein" }}
            label="Nachname"
            name="lastName"
          />
        </div>
        <Text className="text-muted-foreground text-sm">
          Bitte gib für das Reitabzeichen deinen vollständigen Namen an.
        </Text>
      </div>
      <ControlledSelect
        control={control}
        name="ridingBadge"
        placeholder="Wähle ein Reitabzeichen"
        label="Reitabzeichen"
        items={Object.entries(RIDING_BADGES)}
      >
        {(item) => <SelectItem id={item[0]}>{item[1].label}</SelectItem>}
      </ControlledSelect>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ControlledDateField
          control={control}
          label="Geburtsdatum"
          name="bornAt"
        />
        <ControlledNumberField
          control={control}
          inputProps={{ placeholder: "Gib dein Gewicht in kg ein" }}
          label="Gewicht in kg"
          maxValue={MAX_WEIGHT_IN_KG}
          minValue={MIN_WEIGHT_IN_KG}
          name="weightInKg"
        />
      </div>
      <fieldset className="flex flex-col gap-6">
        <ControlledTextField
          control={control}
          inputProps={{ placeholder: "Gib deine Adresse ein" }}
          label="Adresse"
          name="address.line1"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ControlledTextField
            control={control}
            inputProps={{ placeholder: "Gib deine Postleitzahl ein" }}
            label="Postleitzahl"
            name="address.postalCode"
          />
          <ControlledTextField
            control={control}
            inputProps={{ placeholder: "Gib deinen Wohnort ein" }}
            label="Ort"
            name="address.city"
          />
        </div>
      </fieldset>
      <ControlledTextField
        control={control}
        inputProps={{ placeholder: "Gib deinen Reitverein ein" }}
        label="Reitverein"
        name="ridingClub"
      />
      <Button type="submit" isDisabled={formState.isSubmitting}>
        Anmelden
      </Button>
    </Form>
  );
}
