import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { useTRPC } from "@/trpc/client";

import type { InviteFormData } from "../_schemas";
import { inviteFormSchema } from "../_schemas";

export const useInviteForm = () => {
  const trpc = useTRPC();

  const { mutate: acceptClinicInvitation } = useMutation(
    trpc.invitations.clinic.accept.mutationOptions(),
  );

  const form = useForm<InviteFormData>({
    resolver: zodResolver(inviteFormSchema),
    defaultValues: {},
  });

  const onSubmit = (data: InviteFormData) => {
    acceptClinicInvitation(
      {
        clinicId: "clinic_123", // TODO: Get this from the URL or props
        payload: data,
      },
      {
        onSuccess: () => {
          // Handle successful submission
          console.log("Invitation accepted successfully");
        },
        onError: (error) => {
          // Handle error
          console.error("Failed to accept invitation:", error);
        },
      },
    );
  };

  return {
    form,
    onSubmit,
  };
};
