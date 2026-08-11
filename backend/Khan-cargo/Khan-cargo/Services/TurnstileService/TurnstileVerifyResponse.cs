/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

using System.Text.Json.Serialization;

namespace Khan_cargo.Services.TurnstileService
{
    public class TurnstileVerifyResponse
    {
        public bool Success { get; set; }

        [JsonPropertyName("error-codes")]
        public List<string>? ErrorCodes { get; set; }
    }
}
