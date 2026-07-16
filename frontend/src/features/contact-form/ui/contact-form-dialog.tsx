"use client";

import type { ReactElement } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { Button } from "@/shared/ui/button/button";
import { Checkbox } from "@/shared/ui/checkbox/checkbox";
import { TextField } from "@/shared/ui/input/text-field";
import { useContactForm } from "../model/use-contact-form";

export function ContactFormDialog({ trigger }: { trigger: ReactElement }) {
  const t = useTranslations();
  const { form, isPending, isSuccess } = useContactForm();

  return (
    <Dialog.Root>
      <Dialog.Trigger render={trigger} />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[60] bg-black/36 backdrop-blur-[0.75rem] transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-[60] w-[26.5rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[0.75rem] bg-accent p-[1.5rem] outline-none transition-all duration-200 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
          <form
            className="flex flex-col gap-[1rem]"
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();
              void form.handleSubmit();
            }}
          >
            <div className="flex flex-col gap-[1rem]">
              <Dialog.Title className="font-display text-[2.25rem] leading-none text-black tracking-[-0.0125rem]">
                {t.ctaForm.modalTitle}
              </Dialog.Title>
              <Dialog.Description className="text-[1rem] leading-[1.2] font-medium text-black/48">
                {t.ctaForm.modalSubtitle}
              </Dialog.Description>
            </div>

            <form.Field name="name">
              {field => (
                <TextField
                  label={t.ctaForm.nameLabel}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onValueChange={value => field.handleChange(value)}
                />
              )}
            </form.Field>
            <form.Field name="phone">
              {field => (
                <TextField
                  label={t.ctaForm.phoneLabel}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onValueChange={value => field.handleChange(value)}
                />
              )}
            </form.Field>
            <form.Field name="pickupLocation">
              {field => (
                <TextField
                  label={t.ctaForm.pickupLabel}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onValueChange={value => field.handleChange(value)}
                />
              )}
            </form.Field>
            <form.Field name="cargoType">
              {field => (
                <TextField
                  label={t.ctaForm.cargoLabel}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onValueChange={value => field.handleChange(value)}
                />
              )}
            </form.Field>

            <form.Field name="consent">
              {field => (
                <Checkbox
                  label={t.ctaForm.consent}
                  checked={field.state.value}
                  onCheckedChange={checked => field.handleChange(checked as true)}
                />
              )}
            </form.Field>

            <form.Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
              {([canSubmit, isSubmitting]) => (
                <Button type="submit" variant="light" className="w-full" disabled={!canSubmit || isPending || isSubmitting}>
                  {isPending || isSubmitting ? t.ctaForm.submitting : t.ctaForm.submit}
                </Button>
              )}
            </form.Subscribe>

            <span className="text-center text-[0.75rem] font-medium text-black">
              {isSuccess ? t.ctaForm.success : t.ctaForm.note}
            </span>
          </form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
