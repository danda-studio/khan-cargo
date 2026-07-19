using Khan_cargo.Services;
using Khan_cargo.Services.Models;
using Khan_cargo.Services.TurnstileService;
using Microsoft.AspNetCore.Mvc;
using System.Threading.RateLimiting;

namespace Khan_cargo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;
        private readonly ITurnstileService _turnstileService;
        private readonly ContactRateLimiter _rateLimiter;

        public ContactController(IContactService contactService, ITurnstileService turnstileService, ContactRateLimiter rateLimiter)
        {
            _contactService = contactService;
            _turnstileService = turnstileService;
            _rateLimiter = rateLimiter;
        }

        [HttpPost("contact")]
        public async Task<ActionResult<SendContactResponse>> SendContact([FromBody] SendContactRequest request)
        {

            if (!string.IsNullOrWhiteSpace(request.Website))
                return Ok(new SendContactResponse { Success = true, Message = "Сообщение отправлено" });

            var remoteIp = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "unknown";
            if (!await _turnstileService.VerifyAsync(request.TurnstileToken, remoteIp))
                return BadRequest(new SendContactResponse { Success = false, Message = "Проверка на робота не пройдена" });

            var (allowed, reason) = await _rateLimiter.TryReserveSlotAsync(remoteIp);
            if (!allowed)
                return StatusCode(429, new SendContactResponse { Success = false, Message = reason });

            var result = await _contactService.SendContact(request);
            return Ok(result);

        }
    }
}
