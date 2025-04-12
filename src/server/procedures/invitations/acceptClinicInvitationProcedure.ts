import { z } from "zod";

import { RIDER_MUTATION_REPOSITORY } from "@/database/queries";
import { acceptClinicInvitationSchema } from "@/shared/schemas";
import { publicProcedure } from "@/trpc/procedures";

const inputSchema = z.object({
  clinicId: z.string(),
  payload: acceptClinicInvitationSchema,
});

export const acceptClinicInvitationProcedure = publicProcedure
  .input(inputSchema)
  .mutation(async ({ ctx, input }) => {
    console.log("acceptClinicInvitationProcedure", { ctx, data: input });

    const { payload } = input;

    await RIDER_MUTATION_REPOSITORY.createOne({
      addressLine1: payload.address.line1,
      bornAt: payload.bornAt,
      city: payload.address.city,
      firstName: payload.firstName,
      lastName: payload.lastName,
      postalCode: payload.address.postalCode,
      weightInKg: payload.weightInKg,
    });
  });
