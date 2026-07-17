"use client";

import { useRef } from "react";
import { useForm } from "@tanstack/react-form";
import {
  createContactRequest,
  useCreateContactRequest,
} from "@/shared/api/generated/endpoints/contact/contact";
import { contactFormDefaultValues, contactFormSchema } from "./schema";
import { toContactRequestInput } from "./to-contact-request";

type UseContactFormOptions = {
  onSuccess?: () => void;
};

export function useContactForm(options: UseContactFormOptions = {}) {
  const onSuccessRef = useRef(options.onSuccess);
  onSuccessRef.current = options.onSuccess;

  const { mutateAsync, isPending, isSuccess, isError, reset: resetMutation } = useCreateContactRequest({
    mutation: {
      mutationFn: async ({ data }) => {
        const res = await createContactRequest(data);

        if (res.status < 200 || res.status >= 300 || !res.data.success) {
          throw new Error(res.data.message ?? "Request failed");
        }

        return res;
      },
    },
  });

  const form = useForm({
    defaultValues: contactFormDefaultValues,
    validators: {
      onChange: contactFormSchema,
      onSubmit: contactFormSchema,
    },
    onSubmit: async ({ value }) => {
      const scrollY = window.scrollY;
      try {
        resetMutation();
        await mutateAsync({ data: toContactRequestInput(value) });
        form.reset();
        onSuccessRef.current?.();
      }
      catch {
        // surfaced via `isError`
      }
      finally {
        requestAnimationFrame(() => {
          window.scrollTo({ top: scrollY, left: 0, behavior: "instant" as ScrollBehavior });
        });
      }
    },
  });

  return { form, isPending, isSuccess, isError };
}
