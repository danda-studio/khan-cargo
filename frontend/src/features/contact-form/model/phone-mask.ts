/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

export function getNationalMask(countryPhoneCode: string, mask: string): string {
  const codeLen = countryPhoneCode.replace(/\D/g, "").length;
  let xCount = 0;
  let cutAt = 0;

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === "X" || mask[i] === "x") {
      xCount++;
      if (xCount === codeLen) {
        cutAt = i + 1;
        break;
      }
    }
  }

  return mask.slice(cutAt).replace(/^\s+/, "") || "XXXXXXXXX";
}

export function countMaskSlots(mask: string): number {
  return (mask.match(/X/gi) ?? []).length;
}

export function applyMask(digits: string, mask: string): string {
  let result = "";
  let di = 0;

  for (const ch of mask) {
    if (di >= digits.length)
      break;
    if (ch === "X" || ch === "x") {
      result += digits[di++];
    }
    else {
      result += ch;
    }
  }

  return result;
}

export function stripDigits(value: string): string {
  return value.replace(/\D/g, "");
}
