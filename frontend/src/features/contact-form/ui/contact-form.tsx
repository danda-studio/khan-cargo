"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { Button } from "@/shared/ui/button/button";
import { Checkbox } from "@/shared/ui/checkbox/checkbox";
import { TextField } from "@/shared/ui/input/text-field";
import { useContactForm } from "../model/use-contact-form";

export function ContactForm() {
  const t = useTranslations();
  const { form, isPending, isSuccess } = useContactForm();

  return (
    <form
      className="flex flex-wrap items-start justify-between gap-[2rem] p-[2rem] md:flex-nowrap"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <div className="flex w-full max-w-[36.6667rem] flex-col gap-[1.3333rem]">
        <h3 className="font-display text-[2rem] leading-[1.1] text-black md:text-[3rem]">
          {t.ctaForm.title}
        </h3>
        <p className="text-[1.3333rem] leading-[1.2] font-medium text-black/48">
          {t.ctaForm.subtitle}
        </p>
      </div>

      <div className="flex w-full max-w-[60rem] flex-col gap-[1.3333rem]">
        <div className="flex flex-col gap-[1rem] md:flex-row">
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
        </div>

        <div className="flex flex-col gap-[1rem] md:flex-row">
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
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[1.3333rem]">
          <form.Field name="consent">
            {field => (
              <Checkbox
                label={t.ctaForm.consent}
                checked={field.state.value}
                onCheckedChange={checked => field.handleChange(checked as true)}
              />
            )}
          </form.Field>
        </div>

        <div className="flex flex-wrap items-center gap-[2rem]">
          <form.Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <Button type="submit" variant="light" disabled={!canSubmit || isPending || isSubmitting}>
                {isPending || isSubmitting ? t.ctaForm.submitting : t.ctaForm.submit}
              </Button>
            )}
          </form.Subscribe>
          <span className="text-[1rem] font-medium text-black">
            {isSuccess ? t.ctaForm.success : t.ctaForm.note}
          </span>
        </div>
      </div>
    </form>
  );
}
