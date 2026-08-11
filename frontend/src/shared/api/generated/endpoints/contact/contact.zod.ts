/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import * as zod from 'zod';

export const CreateContactRequestBody = zod.object({
  "name": zod.string().min(1),
  "address": zod.string().min(1),
  "phone": zod.object({
  "code": zod.number(),
  "number": zod.number()
}),
  "cargoType": zod.string().min(1),
  "turnstileToken": zod.string().min(1).describe('Cloudflare Turnstile response token'),
  "website": zod.string().optional().describe('Honeypot field — must be empty for legitimate submissions')
})

export const CreateContactRequestResponse = zod.object({
  "success": zod.boolean(),
  "message": zod.string().optional()
})

