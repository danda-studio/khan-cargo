/**
 * UI-kit design tokens sourced from Figma (Khan Cargo DEV, node 1:4).
 * Mirrors the CSS variables defined in `src/app/globals.css` — keep both in sync.
 */
export const colors = {
  black: "#000000",
  bgPage: "#131313",
  surface1: "#151515",
  surface2: "#1c1c1c",
  surface3: "#2b2b2b",
  white: "#ffffff",
  accent: "#ffdd00",
  accentInput: "#e8c900",
} as const;

export const fontFamily = {
  sans: "var(--font-inter)",
  display: "var(--font-geist)",
  mono: "var(--font-geist-mono)",
} as const;
