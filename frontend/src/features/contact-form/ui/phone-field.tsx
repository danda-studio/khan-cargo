/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useGetCountryCodes } from "@/shared/api/generated/endpoints/country/country";
import { cn } from "@/shared/lib/cn";
import { applyMask, countMaskSlots, getNationalMask, stripDigits } from "../model/phone-mask";

type PhoneFieldProps = {
  phoneCode: string;
  phoneNumber: string;
  onPhoneCodeChange: (code: string) => void;
  onPhoneNumberChange: (number: string) => void;
  onPhoneSlotsChange?: (slots: number) => void;
  onBlur?: () => void;
  error?: string;
  className?: string;
};

const FALLBACK = [
  { region: "AZ", countryPhoneCode: "+994", countryName: "Azerbaijan", mask: "+XXX XX XXX XX XX" },
];

const VIEW_PAD = 12;
const GAP = 8;
const MAX_PANEL = 320;

export function PhoneField({
  phoneCode,
  phoneNumber,
  onPhoneCodeChange,
  onPhoneNumberChange,
  onPhoneSlotsChange,
  onBlur,
  error,
  className,
}: PhoneFieldProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [placeBelow, setPlaceBelow] = useState(true);
  const [maxHeight, setMaxHeight] = useState(MAX_PANEL);

  const { data } = useGetCountryCodes({
    query: {
      select: res => res.data ?? [],
      staleTime: 1000 * 60 * 60,
    },
  });

  const countries = data?.length ? data : FALLBACK;

  const selected = useMemo(
    () => countries.find(c => c.countryPhoneCode === phoneCode) ?? countries.find(c => c.region === "AZ"),
    [countries, phoneCode],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q)
      return countries;

    return countries.filter((country) => {
      const code = country.countryPhoneCode?.toLowerCase() ?? "";
      const name = country.countryName?.toLowerCase() ?? "";
      const region = country.region?.toLowerCase() ?? "";
      return code.includes(q) || name.includes(q) || region.includes(q);
    });
  }, [countries, query]);

  const nationalMask = useMemo(() => {
    const code = selected?.countryPhoneCode ?? phoneCode;
    const mask = selected?.mask ?? "+XXX XX XXX XX XX";
    return getNationalMask(code, mask);
  }, [selected, phoneCode]);

  const displayValue = applyMask(stripDigits(phoneNumber), nationalMask);

  useEffect(() => {
    onPhoneSlotsChange?.(countMaskSlots(nationalMask));

  }, [nationalMask]);

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  const updatePlacement = () => {
    const trigger = triggerRef.current;
    if (!trigger)
      return;

    const rect = trigger.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom - GAP - VIEW_PAD;
    const spaceAbove = rect.top - GAP - VIEW_PAD;
    const below = spaceBelow >= 160 || spaceBelow >= spaceAbove;
    setPlaceBelow(below);
    setMaxHeight(Math.max(140, Math.min(MAX_PANEL, below ? spaceBelow : spaceAbove)));
  };

  useLayoutEffect(() => {
    if (!open)
      return;
    updatePlacement();
    searchRef.current?.focus({ preventScroll: true });
    window.addEventListener("resize", updatePlacement);
    window.addEventListener("scroll", updatePlacement, true);
    return () => {
      window.removeEventListener("resize", updatePlacement);
      window.removeEventListener("scroll", updatePlacement, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open)
      return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (rootRef.current?.contains(target))
        return;
      close();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape")
        close();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative flex w-full flex-col gap-[0.35rem]", className)}>
      <div className="relative flex w-full gap-[0.5rem]">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={Boolean(error)}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (open)
            close();
          else
            setOpen(true);
        }}
        className={cn(
          "flex h-[2.75rem] shrink-0 cursor-pointer items-center gap-[0.375rem] rounded-[0.3333rem] bg-accent-input px-[0.75rem] text-[0.875rem] font-medium text-black outline-none md:h-[3.6667rem] md:gap-[0.5rem] md:px-[1rem] md:text-[1.1667rem]",
          error && "ring-1 ring-red-500/50",
        )}
      >
        <span>{phoneCode || "+994"}</span>
        <img src="/images/arrow-bottom.svg" alt="" className="size-[0.875rem] invert md:size-[1rem]" />
      </button>

      <label className="sr-only">Phone number</label>
      <input
        type="tel"
        inputMode="numeric"
        value={displayValue}
        placeholder={nationalMask.replace(/X/gi, "0")}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        onChange={(event) => {
          const nextDigits = stripDigits(event.target.value);
          const maxSlots = (nationalMask.match(/X/gi) ?? []).length;
          onPhoneNumberChange(nextDigits.slice(0, maxSlots));
        }}
        className={cn(
          "h-[2.75rem] min-w-0 flex-1 rounded-[0.3333rem] bg-accent-input px-[1.5rem] text-[0.875rem] font-medium text-black placeholder:text-black/46 outline-none md:h-[3.6667rem] md:px-[2rem] md:text-[1.1667rem]",
          error && "ring-1 ring-red-500/50",
        )}
      />

      {open && (
        <div
          role="listbox"
          style={{ maxHeight }}
          className={cn(
            "absolute inset-x-0 z-[100] flex w-full flex-col overflow-hidden rounded-[0.5rem] border border-white/16 bg-page shadow-2xl",
            placeBelow ? "top-full mt-2" : "bottom-full mb-2",
          )}
        >
          <div className="shrink-0 border-b border-white/10 p-[0.75rem]">
            <input
              ref={searchRef}
              type="text"
              inputMode="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Country or code"
              className="h-[2.5rem] w-full rounded-[0.3333rem] bg-white/8 px-[0.75rem] text-[0.875rem] text-white outline-none placeholder:text-white/36"
            />
          </div>

          <ul className="phone-code-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain py-[0.35rem]">
            {filtered.length === 0 && (
              <li className="px-[0.875rem] py-[0.75rem] text-[0.875rem] text-white/40">No matches</li>
            )}
            {filtered.map(country => {
              const code = country.countryPhoneCode ?? "";
              const active = code === phoneCode;
              return (
                <li key={`${country.region}-${code}`}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      onPhoneCodeChange(code);
                      onPhoneNumberChange("");
                      close();
                    }}
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-between gap-[0.75rem] px-[0.875rem] py-[0.65rem] text-left transition-colors hover:bg-white/8",
                      active && "bg-white/10",
                    )}
                  >
                    <span className="truncate text-[0.875rem] text-white/55">
                      {country.countryName}
                    </span>
                    <span className={cn("shrink-0 text-[0.875rem] font-medium", active ? "text-accent" : "text-white")}>
                      {code}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      </div>

      {error && (
        <p className="text-[0.75rem] font-medium text-red-700 md:text-[0.875rem]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
