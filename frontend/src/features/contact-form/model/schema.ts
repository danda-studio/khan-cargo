import { z } from "zod";
import { stripDigits } from "./phone-mask";

/** Stable keys — mapped to `t.ctaForm.errors` in the UI. */
export const contactFormSchema = z
  .object({
    name: z.string().trim().min(2, { error: "name" }),
    phoneCode: z.string().min(1, { error: "phoneCode" }),
    phoneNumber: z.string(),
    phoneSlots: z.number().int().nonnegative(),
    pickupLocation: z.string().trim().min(1, { error: "pickup" }),
    cargoType: z.string().trim().min(1, { error: "cargo" }),
    consent: z.boolean().refine(value => value === true, { error: "consent" }),
    /** Cloudflare Turnstile response token */
    turnstileToken: z.string().min(1, { error: "captcha" }),
    /** Honeypot — must stay empty for real users */
    website: z.string(),
  })
  .superRefine((data, ctx) => {
    const digits = stripDigits(data.phoneNumber);
    const needed = data.phoneSlots > 0 ? data.phoneSlots : 5;

    if (digits.length < needed) {
      ctx.addIssue({
        code: "custom",
        path: ["phoneNumber"],
        message: "phone",
      });
    }

    if (!data.phoneCode.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["phoneCode"],
        message: "phoneCode",
      });
    }
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaultValues: ContactFormValues = {
  name: "",
  phoneCode: "+994",
  phoneNumber: "",
  phoneSlots: 9,
  pickupLocation: "",
  cargoType: "",
  consent: false,
  turnstileToken: "",
  website: "",
};
