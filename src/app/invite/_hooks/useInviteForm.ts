import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { InviteFormData } from "../_schemas";
import { inviteFormSchema } from "../_schemas";

export const useInviteForm = () => {
  const form = useForm<InviteFormData>({
    resolver: zodResolver(inviteFormSchema),
    defaultValues: {},
  });

  const onSubmit = (data: InviteFormData) => {
    console.log("submitted form data", data);
  };

  return { form, onSubmit };
};
