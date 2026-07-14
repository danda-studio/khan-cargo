namespace Khan_cargo.Services.Models
{
    public class WASettings
    {
        // Идентификатор номера телефона (Phone Number ID), с которого отправляются сообщения
        public string PhoneNumberId { get; set; } = string.Empty;

        // ID вашего WhatsApp Business Account (WABA)
        public string WhatsAppBusinessAccountId { get; set; } = string.Empty;

        // Access Token — System User Token для продакшена (постоянный)
        public string AccessToken { get; set; } = string.Empty;

        // Базовый URL Graph API
        public string BaseUrl { get; set; } = "https://graph.facebook.com";

        // App ID и App Secret приложения из Meta for Developers
        public string AppId { get; set; } = string.Empty;
        public string AppSecret { get; set; } = string.Empty;
        public string TemplateName { get; set; } = string.Empty;
        public string TemplateLanguageCode { get; set; } = string.Empty;
    }
}
