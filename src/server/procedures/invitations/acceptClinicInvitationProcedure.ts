import { z } from "zod";

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
  });
