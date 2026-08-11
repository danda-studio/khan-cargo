/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isLocale, LOCALE_COOKIE, LOCALE_HEADER } from "@/shared/config/i18n/locale-path";

export function middleware(request: NextRequest) {
  const fromQuery = request.nextUrl.searchParams.get("lang");
  const fromCookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(fromQuery) ? fromQuery : isLocale(fromCookie) ? fromCookie : null;

  const requestHeaders = new Headers(request.headers);
  if (locale) {
    requestHeaders.set(LOCALE_HEADER, locale);
  }

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  if (isLocale(fromQuery)) {
    response.cookies.set(LOCALE_COOKIE, fromQuery, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|.*\\..*).*)"],
};
