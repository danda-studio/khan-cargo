/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

using Microsoft.Extensions.Options;

namespace Khan_cargo.Services.TurnstileService
{
    public class TurnstileService : ITurnstileService
    {
        private readonly HttpClient _httpClient;
        private readonly string _secretKey;

        public TurnstileService(HttpClient httpClient, IOptions<TurnstileSettings> options)
        {
            _httpClient = httpClient;
            _secretKey = options.Value.SecretKey;
        }

        public async Task<bool> VerifyAsync(string token, string? remoteIp)
        {
            if (string.IsNullOrWhiteSpace(token))
                return false;

            var form = new Dictionary<string, string>
            {
                ["secret"] = _secretKey,
                ["response"] = token
            };
            if (!string.IsNullOrEmpty(remoteIp))
                form["remoteip"] = remoteIp;

            var response = await _httpClient.PostAsync(
                "https://challenges.cloudflare.com/turnstile/v0/siteverify",
                new FormUrlEncodedContent(form));

            if (!response.IsSuccessStatusCode)
                return false;

            var result = await response.Content.ReadFromJsonAsync<TurnstileVerifyResponse>();
            return result?.Success ?? false;
        }
    }
}
