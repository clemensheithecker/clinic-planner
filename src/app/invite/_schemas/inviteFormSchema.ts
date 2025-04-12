import { z } from "zod";

import {
  MAX_AGE,
  MAX_LONG_NAME_LENGTH,
  MAX_NAME_LENGTH,
  MAX_WEIGHT_IN_KG,
  MIN_AGE,
  MIN_NAME_LENGTH,
  MIN_WEIGHT_IN_KG,
} from "../_constants/schemas";

export const ridingBadgeSchema = z.enum(
  ["10", "9", "8", "7", "6", "5", "4", "3"],
  {
    message: "Bitte wähle ein Reitabzeichen",
  },
);

export const inviteFormSchema = z.object({
  address: z.object({
    city: z
      .string({
        required_error: "Ort ist erforderlich",
      })
      .min(
        MIN_NAME_LENGTH,
        `Ort muss mindestens ${MIN_NAME_LENGTH} Zeichen lang sein`,
      )
      .max(
        MAX_NAME_LENGTH,
        `Ort darf maximal ${MAX_NAME_LENGTH} Zeichen lang sein`,
      ),
    line1: z
      .string({
        required_error: "Adresse ist erforderlich",
      })
      .min(
        MIN_NAME_LENGTH,
        `Adresse muss mindestens ${MIN_NAME_LENGTH} Zeichen lang sein`,
      )
      .max(
        MAX_LONG_NAME_LENGTH,
        `Adresse darf maximal ${MAX_LONG_NAME_LENGTH} Zeichen lang sein`,
      ),
    postalCode: z
      .string({
        required_error: "Postleitzahl ist erforderlich",
      })
      .regex(/^\d{5}$/, "Postleitzahl muss 5 Ziffern lang sein"),
  }),
  age: z
    .number({
      invalid_type_error: "Alter muss eine Zahl sein",
      required_error: "Alter ist erforderlich",
    })
    .min(MIN_AGE, `Alter muss mindestens ${MIN_AGE} Jahre sein`)
    .max(MAX_AGE, `Alter darf maximal ${MAX_AGE} Jahre sein`),
  firstName: z
    .string({
      required_error: "Vorname ist erforderlich",
    })
    .min(
      MIN_NAME_LENGTH,
      `Vorname muss mindestens ${MIN_NAME_LENGTH} Zeichen lang sein`,
    )
    .max(
      MAX_NAME_LENGTH,
      `Vorname darf maximal ${MAX_NAME_LENGTH} Zeichen lang sein`,
    )
    .regex(/^[a-zA-ZäöüÄÖÜß\s-]+$/, "Vorname darf nur Buchstaben enthalten"),
  lastName: z
    .string({
      required_error: "Nachname ist erforderlich",
    })
    .min(
      MIN_NAME_LENGTH,
      `Nachname muss mindestens ${MIN_NAME_LENGTH} Zeichen lang sein`,
    )
    .max(
      MAX_NAME_LENGTH,
      `Nachname darf maximal ${MAX_NAME_LENGTH} Zeichen lang sein`,
    )
    .regex(/^[a-zA-ZäöüÄÖÜß\s-]+$/, "Nachname darf nur Buchstaben enthalten"),
  ridingBadge: ridingBadgeSchema,
  ridingClub: z
    .string({
      required_error: "Reitverein ist erforderlich",
    })
    .min(
      MIN_NAME_LENGTH,
      `Reitverein muss mindestens ${MIN_NAME_LENGTH} Zeichen lang sein`,
    )
    .max(
      MAX_LONG_NAME_LENGTH,
      `Reitverein darf maximal ${MAX_LONG_NAME_LENGTH} Zeichen lang sein`,
    )
    .optional(),
  weightInKg: z
    .number({
      invalid_type_error: "Gewicht muss eine Zahl sein",
      required_error: "Gewicht ist erforderlich",
    })
    .min(
      MIN_WEIGHT_IN_KG,
      `Gewicht muss mindestens ${MIN_WEIGHT_IN_KG} kg sein`,
    )
    .max(MAX_WEIGHT_IN_KG, `Gewicht darf maximal ${MAX_WEIGHT_IN_KG} kg sein`),
});

export type InviteFormData = z.infer<typeof inviteFormSchema>;
