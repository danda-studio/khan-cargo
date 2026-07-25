using Khan_cargo.Services.Models;

namespace Khan_cargo.Services
{
    public interface IContactService
    {
        Task<SendContactResponse> SendContact(SendContactRequest request);
    }
}
