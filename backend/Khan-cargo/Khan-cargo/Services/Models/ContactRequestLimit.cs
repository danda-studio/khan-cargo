namespace Khan_cargo.Services.Models
{
    public class ContactRequestLimit
    {
        public int Id { get; set; }
        public string Identifier { get; set; } = null!; 
        public DateOnly RequestDate { get; set; }
        public int Count { get; set; }
    }
}
