using Khan_cargo.Services.Models;
using Khan_cargo.Validator;
using Microsoft.Extensions.Options;
using System.Net;
using System.Net.Http.Headers;
using System.Net.Mail;
using System.Text;
using System.Text.Json;

namespace Khan_cargo.Services
{
    public class ContactService : IContactService
    {
        private readonly WASettings _waSettings;
        private readonly EmailSetting _emailSetting;
        private readonly HttpClient _httpClient;
        private readonly IHostEnvironment _environment;

        public ContactService(IOptions<WASettings> waOptions, IOptions<EmailSetting> emailOptions, HttpClient httpClient, IHostEnvironment environment)
        {
            _waSettings = waOptions.Value;
            _emailSetting = emailOptions.Value;
            _httpClient = httpClient;
            _environment = environment;
        }

        public async Task<SendContactResponse> SendContact(SendContactRequest request)
        {
            if (!ContactValidator.ValidateName(request.Name, out var nameError))
                return new SendContactResponse { Success = false, Message = nameError };
            if (!ContactValidator.ValidatePhone(request.Phone.Code.ToString(), request.Phone.Number.ToString(), out var phoneError))
                return new SendContactResponse { Success = false, Message = phoneError };
            if (!ContactValidator.ValidateAddress(request.Address, out var addressError))
                return new SendContactResponse { Success = false, Message = addressError };
            if (!ContactValidator.ValidateCargoType(request.CargoType, out var cargoError))
                return new SendContactResponse { Success = false, Message = cargoError };

            var response = new SendContactResponse();

            if (!_environment.IsProduction())
            {
                response.Success = true;
                response.Message = "Сообщение отправлено";
                return response;
            }

            var (waSuccess, waMessage) = await SendWhatsAppMessage(request);
            var mailMessage = await SendEmailMessage(request);

            if (waSuccess)
            {
                response.Success = true;
                response.Message = "Сообщение отправлено";
            }
            else
            {
                response.Success = false;
                response.Message = $"WhatsApp: {waMessage}; Email: {mailMessage}";
            }

            return response;


        }

        private async Task<(bool Success, string Message)> SendWhatsAppMessage(SendContactRequest request)
        {

            try
            {
                var payload = new
                {
                    messaging_product = "whatsapp",
                    to = _waSettings.RecipientsPhone,
                    type = "template",
                    template = new
                    {
                        name = _waSettings.TemplateName,
                        language = new { code = _waSettings.TemplateLanguageCode },
                        components = new object[]
                        {
                            new
                            {
                                type = "body",
                                parameters = new object[]
                                {
                                    new { type = "text", parameter_name = "customer_name", text = request.Name },
                                    new { type = "text", parameter_name = "phone_number", text = $"+{request.Phone.Code}{request.Phone.Number}" },
                                    new { type = "text", parameter_name = "origin_city", text = request.Address },
                                    new { type = "text", parameter_name = "cargo_type", text = request.CargoType },
                                }
                            }
                        }
                    }
                };

                var json = JsonSerializer.Serialize(payload);
                using var content = new StringContent(json, Encoding.UTF8, "application/json");

                var url = $"{_waSettings.BaseUrl}/v25.0/{_waSettings.PhoneNumberId}/messages";

                using var httpRequest = new HttpRequestMessage(HttpMethod.Post, url) { Content = content };
                httpRequest.Headers.Authorization = new AuthenticationHeaderValue("Bearer", _waSettings.AccessToken);

                var httpResponse = await _httpClient.SendAsync(httpRequest);
                var responseBody = await httpResponse.Content.ReadAsStringAsync();

                if (httpResponse.IsSuccessStatusCode)
                    return (true, "OK");

                return (false, responseBody);
            }
            catch (Exception ex)
            {
                return (false, ex.Message);
            }

        }

        private async Task<string> SendEmailMessage(SendContactRequest request)
        {

            try
            {
                using var client = new SmtpClient(_emailSetting.SmtpServer, _emailSetting.SmtpPort)
                {
                    EnableSsl = true,
                    Credentials = new NetworkCredential(_emailSetting.Email, _emailSetting.Password),
                    UseDefaultCredentials = false,
                    DeliveryMethod = SmtpDeliveryMethod.Network
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_emailSetting.Email),
                    Subject = $"New Contact Request from {request.Name}",
                    Body = FormatHtmlEmail(request),
                    IsBodyHtml = true,
                    BodyEncoding = Encoding.UTF8,
                    SubjectEncoding = Encoding.UTF8
                };

                // Добавление адресов получателей из конфигурации
                if (_emailSetting.Recipients != null && _emailSetting.Recipients.Count != 0)
                {
                    foreach (var recipient in _emailSetting.Recipients)
                    {
                        if (!string.IsNullOrWhiteSpace(recipient))
                            mailMessage.To.Add(recipient.Trim());
                    }
                }
                else
                {
                    mailMessage.To.Add(_emailSetting.Email);
                }

                // Отправка email
                await client.SendMailAsync(mailMessage);

                return ("OK");
            }
            catch (Exception ex)
            {
                return (ex.Message);
            }
        }

        private static string FormatHtmlEmail(SendContactRequest request)
        {
            return
            "Yeni sorğu<br>" +
            "-------------------<br>" +
            $"Müştərinin adı: {request.Name}<br>" +
            $"Telefon nömrəsi: {request.Phone?.Code} {request.Phone?.Number}<br>" +
            $"Göndərmə şəhəri: {request.Address}<br>" +
            $"Yük növü: {request.CargoType}<br>" +
            "-------------------<br>" +
            $"Müraciət tarixi: {DateTime.Now:yyyy-MM-dd HH:mm:ss}";
        }
    }
}

       