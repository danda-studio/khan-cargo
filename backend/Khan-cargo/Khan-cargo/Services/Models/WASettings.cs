namespace Khan_cargo.Services.Models
{
    public class WASettings
    {
        public string PhoneNumberId { get; set; } = string.Empty;

        public string WhatsAppBusinessAccountId { get; set; } = string.Empty;

        public string AccessToken { get; set; } = string.Empty;

        public string BaseUrl { get; set; } = "https://graph.facebook.com";

        public string AppId { get; set; } = string.Empty;
        public string AppSecret { get; set; } = string.Empty;
        public string TemplateName { get; set; } = string.Empty;
        public string TemplateLanguageCode { get; set; } = string.Empty;
    }
}
