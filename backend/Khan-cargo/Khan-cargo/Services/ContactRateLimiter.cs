using Khan_cargo.Data;
using Khan_cargo.Services.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Khan_cargo.Services
{
    public class ContactRateLimiter
    {
        private readonly AppDbContext _db;
        private readonly RateLimitSettings _settings;

        public ContactRateLimiter(AppDbContext db, IOptions<RateLimitSettings> options)
        {
            _db = db;
            _settings = options.Value;
        }

        public async Task<(bool Allowed, string? Reason)> TryReserveSlotAsync(string ip)
        {
            var today = DateOnly.FromDateTime(DateTime.UtcNow);

            // 1. Глобальный дневной бюджет — атомарный инкремент
            var globalSql = @"
            INSERT INTO ""DailyMessageBudgets"" (""Date"", ""SentCount"")
            VALUES ({0}, 1)
            ON CONFLICT (""Date"")
            DO UPDATE SET ""SentCount"" = ""DailyMessageBudgets"".""SentCount"" + 1
            RETURNING ""SentCount"";";

            var globalCount = (await _db.Database
                .SqlQueryRaw<int>(globalSql, today).ToListAsync()).First();

            if (globalCount > _settings.GlobalDailyMessageBudget)
                return (false, "Дневной лимит заявок исчерпан, попробуйте завтра");

            // 2. Лимит по IP — атомарный инкремент
            var ipSql = @"
            INSERT INTO ""ContactRequestLimits"" (""Identifier"", ""RequestDate"", ""Count"")
            VALUES ({0}, {1}, 1)
            ON CONFLICT (""Identifier"", ""RequestDate"")
            DO UPDATE SET ""Count"" = ""ContactRequestLimits"".""Count"" + 1
            RETURNING ""Count"";";

            var ipCount = (await _db.Database
                .SqlQueryRaw<int>(ipSql, ip, today).ToListAsync()).First();

            if (ipCount > _settings.PerIpDailyLimit)
                return (false, "Превышен лимит заявок на сегодня");

            return (true, null);
        }
    }
}
