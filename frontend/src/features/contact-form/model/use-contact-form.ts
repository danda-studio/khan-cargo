"use client";

import { useForm } from "@tanstack/react-form";
import { useCreateContactRequest } from "@/shared/api/generated/endpoints/contact/contact";
import { contactFormDefaultValues, contactFormSchema } from "./schema";

export function useContactForm() {
  const { mutateAsync, isPending, isSuccess } = useCreateContactRequest();

  const form = useForm({
    defaultValues: contactFormDefaultValues,
    validators: {
      onChange: contactFormSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await mutateAsync({ data: value });
        form.reset();
      }
      catch {
        // surfaced via `isError` on the mutation state
      }
    },
  });

  return { form, isPending, isSuccess };
}
