using System.Numerics;

namespace Khan_cargo.Services.Models
{
    public class SendContactRequest
    {
        public string Name { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public Phone Phone { get; set; } = new Phone();
        public string CargoType { get; set; } = string.Empty;
    }
}
