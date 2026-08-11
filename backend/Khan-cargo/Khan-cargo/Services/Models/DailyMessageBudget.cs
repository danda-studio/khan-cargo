/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

namespace Khan_cargo.Services.Models
{
    public class DailyMessageBudget
    {
        public int Id { get; set; }
        public DateOnly Date { get; set; }
        public int SentCount { get; set; }
    }
}
