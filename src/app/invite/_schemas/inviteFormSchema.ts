import type { z } from "zod";

import { acceptClinicInvitationSchema } from "@/shared/schemas/invitations";

export const inviteFormSchema = acceptClinicInvitationSchema;

export type InviteFormData = z.infer<typeof inviteFormSchema>;
