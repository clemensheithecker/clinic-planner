import { acceptClinicInvitationProcedure } from "@/server/procedures/invitations";

import { createTRPCRouter } from "../init";

export const clinicInvitationsRouter = createTRPCRouter({
  accept: acceptClinicInvitationProcedure,
});

export const invitationsRouter = createTRPCRouter({
  clinic: clinicInvitationsRouter,
});
