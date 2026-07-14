using Khan_cargo.Services;
using Khan_cargo.Services.Models;
using Microsoft.AspNetCore.Mvc;

namespace Khan_cargo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;


        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpPost("contact")]
        public async Task<ActionResult<SendContactResponse>> SendContact([FromBody] SendContactRequest request)
        {

            var result = await _contactService.SendContact(request);

            return Ok(result);

        }
    }
}
