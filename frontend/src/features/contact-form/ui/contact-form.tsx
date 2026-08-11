/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { Button } from "@/shared/ui/button/button";
import { Checkbox } from "@/shared/ui/checkbox/checkbox";
import { TextField } from "@/shared/ui/input/text-field";
import { resolveFieldError, shouldShowFieldError } from "../model/resolve-field-error";
import { useContactForm } from "../model/use-contact-form";
import { HoneypotField } from "./honeypot-field";
import { PhoneField } from "./phone-field";
import { TurnstileField } from "./turnstile-field";

export function ContactForm() {
  const t = useTranslations();
  const { form, isPending, isSuccess, isError, captchaResetKey } = useContactForm();
  const errors = t.ctaForm.errors;

  return (
    <form
      noValidate
      className="flex flex-wrap items-start justify-between gap-[2rem] p-[1.5rem] md:p-[2rem] md:flex-nowrap"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <div className="flex w-full max-w-[36.6667rem] flex-col gap-[1rem] md:gap-[1.3333rem]">
        <h3 className="font-display text-[1.5rem] leading-[1.1] text-black md:text-[3rem]">
          {t.ctaForm.title}
        </h3>
        <p className="text-[1rem] leading-[1.2] font-medium text-black/48 md:text-[1.3333rem]">
          {t.ctaForm.subtitle}
        </p>
      </div>

      <div className="flex w-full max-w-[60rem] flex-col gap-[1.75rem] md:gap-[1.3333rem]">
        <div className="flex flex-col gap-[0.5rem] md:gap-[1.3333rem]">
          <div className="flex flex-col gap-[0.5rem] md:flex-row md:gap-[1rem]">
            <form.Field name="name">
              {field => (
                <TextField
                  label={t.ctaForm.nameLabel}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onValueChange={value => field.handleChange(value)}
                  error={
                    shouldShowFieldError(field.state.meta)
                      ? resolveFieldError(field.state.meta.errors, errors)
                      : undefined
                  }
                />
              )}
            </form.Field>
            <form.Field name="phoneNumber">
              {phoneField => (
                <form.Subscribe selector={state => [state.values.phoneCode, state.values.phoneNumber] as const}>
                  {([phoneCode, phoneNumber]) => (
                    <PhoneField
                      phoneCode={phoneCode}
                      phoneNumber={phoneNumber}
                      onPhoneCodeChange={code => form.setFieldValue("phoneCode", code)}
                      onPhoneNumberChange={(number) => {
                        phoneField.handleChange(number);
                      }}
                      onPhoneSlotsChange={slots => form.setFieldValue("phoneSlots", slots)}
                      onBlur={phoneField.handleBlur}
                      error={
                        shouldShowFieldError(phoneField.state.meta)
                          ? resolveFieldError(phoneField.state.meta.errors, errors)
                          : undefined
                      }
                    />
                  )}
                </form.Subscribe>
              )}
            </form.Field>
          </div>

          <div className="flex flex-col gap-[0.5rem] md:flex-row md:gap-[1rem]">
            <form.Field name="pickupLocation">
              {field => (
                <TextField
                  label={t.ctaForm.pickupLabel}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onValueChange={value => field.handleChange(value)}
                  error={
                    shouldShowFieldError(field.state.meta)
                      ? resolveFieldError(field.state.meta.errors, errors)
                      : undefined
                  }
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
                  error={
                    shouldShowFieldError(field.state.meta)
                      ? resolveFieldError(field.state.meta.errors, errors)
                      : undefined
                  }
                />
              )}
            </form.Field>
          </div>
        </div>

        <form.Field name="website">
          {field => (
            <HoneypotField
              value={field.state.value}
              onValueChange={value => field.handleChange(value)}
            />
          )}
        </form.Field>

        <div className="flex flex-wrap items-center justify-between gap-[1.3333rem]">
          <form.Field name="consent">
            {field => (
              <Checkbox
                label={t.ctaForm.consent}
                checked={field.state.value}
                onCheckedChange={(checked) => {
                  field.handleChange(checked === true);
                  field.handleBlur();
                }}
                error={
                  shouldShowFieldError(field.state.meta)
                    ? resolveFieldError(field.state.meta.errors, errors)
                    : undefined
                }
              />
            )}
          </form.Field>
        </div>

        <form.Field name="turnstileToken">
          {field => (
            <TurnstileField
              resetKey={captchaResetKey}
              onTokenChange={(token) => {
                field.handleChange(token);
                field.handleBlur();
              }}
              error={
                field.state.meta.isBlurred || field.state.meta.errorMap?.onSubmit
                  ? resolveFieldError(field.state.meta.errors, errors)
                  : undefined
              }
            />
          )}
        </form.Field>

        <div className="flex flex-col items-start gap-[1rem] md:flex-row md:flex-wrap md:items-center md:gap-[2rem]">
          <form.Subscribe selector={state => [state.canSubmit, state.isSubmitting] as const}>
            {([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                variant="light"
                className="w-full md:w-fit"
                disabled={!canSubmit || isPending || isSubmitting}
              >
                {isPending || isSubmitting ? t.ctaForm.submitting : t.ctaForm.submit}
              </Button>
            )}
          </form.Subscribe>
          <span className="text-[0.75rem] font-medium text-black md:text-[1rem]">
            {isSuccess
              ? t.ctaForm.success
              : isError
                ? <span className="text-red-700">{t.ctaForm.error}</span>
                : t.ctaForm.note}
          </span>
        </div>
      </div>
    </form>
  );
}
