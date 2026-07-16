import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Adınızı daxil edin"),
  phone: z.string().min(9, "Telefon nömrəsini daxil edin"),
  pickupLocation: z.string().min(1, "Çatdırılma yerini qeyd edin"),
  cargoType: z.string().min(1, "Yük növünü qeyd edin"),
  consent: z.literal(true, { error: "Şərtləri qəbul etməlisiniz" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaultValues: ContactFormValues = {
  name: "",
  phone: "",
  pickupLocation: "",
  cargoType: "",
  consent: false as unknown as true,
};
