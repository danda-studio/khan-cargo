import type { ContactFormValues } from "./schema";
import type { ContactRequestInput, Phone } from "@/shared/api/generated/models";
import { stripDigits } from "./phone-mask";

export function toPhone(phoneCode: string, phoneNumber: string): Phone {
  return {
    code: Number(stripDigits(phoneCode)) || 994,
    number: Number(stripDigits(phoneNumber)) || 0,
  };
}

export function toContactRequestInput(values: ContactFormValues): ContactRequestInput {
  return {
    name: values.name.trim(),
    address: values.pickupLocation.trim(),
    cargoType: values.cargoType.trim(),
    phone: toPhone(values.phoneCode, values.phoneNumber),
    turnstileToken: values.turnstileToken,
    website: values.website,
  };
}
