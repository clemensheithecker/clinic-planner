"use client";

import { Button } from "@/_components/button";
import { FieldGroup, Label } from "@/_components/field";
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from "@/_components/numberfield";
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/_components/select";
import { Text } from "@/_components/text";
import { Input, TextField } from "@/_components/textfield";

export default function InviteForm() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField>
            <Label>Vorname</Label>
            <Input placeholder="Gib deinen Vornamen ein" />
          </TextField>
          <TextField>
            <Label>Nachname</Label>
            <Input placeholder="Gib deinen Nachnamen ein" />
          </TextField>
        </div>
        <Text className="text-muted-foreground text-sm">
          Bitte gib für das Reitabzeichen deinen vollständigen Namen an.
        </Text>
      </div>
      <Select placeholder="Wähle ein Reitabzeichen">
        <Label>Reitabzeichen</Label>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopover>
          <SelectListBox>
            <SelectItem>Reitabzeichen 10</SelectItem>
            <SelectItem>Reitabzeichen 9</SelectItem>
            <SelectItem>Reitabzeichen 8</SelectItem>
            <SelectItem>Reitabzeichen 7</SelectItem>
            <SelectItem>Reitabzeichen 6</SelectItem>
            <SelectItem>Reitabzeichen 5</SelectItem>
            <SelectItem>Reitabzeichen 4</SelectItem>
            <SelectItem>Reitabzeichen 3</SelectItem>
          </SelectListBox>
        </SelectPopover>
      </Select>
      <NumberField maxValue={100} minValue={3}>
        <Label>Alter</Label>
        <FieldGroup>
          <NumberFieldInput placeholder="Gib dein Alter ein" />
          <NumberFieldSteppers />
        </FieldGroup>
      </NumberField>
      <NumberField maxValue={120} minValue={20}>
        <Label>Gewicht in kg</Label>
        <FieldGroup>
          <NumberFieldInput placeholder="Gib dein Gewicht ein" />
          <NumberFieldSteppers />
        </FieldGroup>
      </NumberField>
      <fieldset className="flex flex-col gap-6">
        <TextField>
          <Label>Adresse</Label>
          <Input placeholder="Gib deine Adresse ein" />
        </TextField>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField>
            <Label>Postleitzahl</Label>
            <Input placeholder="Gib deine Postleitzahl ein" />
          </TextField>
          <TextField>
            <Label>Ort</Label>
            <Input placeholder="Gib deinen Wohnort ein" />
          </TextField>
        </div>
      </fieldset>
      <TextField>
        <Label>Reitverein</Label>
        <Input placeholder="Gib deinen Reitverein ein" />
      </TextField>
      <Button>Anmelden</Button>
    </div>
  );
}
