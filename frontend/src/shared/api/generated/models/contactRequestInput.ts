/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Phone } from './phone';

export interface ContactRequestInput {

  name: string;

  address: string;
  phone: Phone;

  cargoType: string;

  turnstileToken: string;

  website?: string;
}
