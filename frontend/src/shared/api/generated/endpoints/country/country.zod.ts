/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import * as zod from 'zod';

export const GetCountryCodesResponseItem = zod.object({
  "region": zod.string().optional(),
  "countryPhoneCode": zod.string().optional(),
  "countryName": zod.string().optional(),
  "mask": zod.string().optional()
})
export const GetCountryCodesResponse = zod.array(GetCountryCodesResponseItem)

