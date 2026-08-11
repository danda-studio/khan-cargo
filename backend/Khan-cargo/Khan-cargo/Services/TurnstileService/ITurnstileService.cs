/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

namespace Khan_cargo.Services.TurnstileService
{
    public interface ITurnstileService
    {
        Task<bool> VerifyAsync(string token, string? remoteIp);
    }
}
