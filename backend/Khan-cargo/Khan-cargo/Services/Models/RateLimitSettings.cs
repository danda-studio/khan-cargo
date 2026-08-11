/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

namespace Khan_cargo.Services.Models
{
    public class RateLimitSettings
    {
        public int PerIpDailyLimit { get; set; }
        public int GlobalDailyMessageBudget { get; set; }
    }
}
