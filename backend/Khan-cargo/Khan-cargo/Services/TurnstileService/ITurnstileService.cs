namespace Khan_cargo.Services.TurnstileService
{
    public interface ITurnstileService
    {
        Task<bool> VerifyAsync(string token, string? remoteIp);
    }
}
