"use client";

interface HoneypotFieldProps {
  value: string;
  onValueChange: (value: string) => void;
}

/** Invisible spam trap — bots often autofill fields named "website". */
export function HoneypotField({ value, onValueChange }: HoneypotFieldProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden opacity-0"
    >
      <label>
        Website
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={event => onValueChange(event.target.value)}
        />
      </label>
    </div>
  );
}
