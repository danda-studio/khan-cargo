using Khan_cargo.Services.Models;
using Khan_cargo.Validator;
using Microsoft.Extensions.Options;

namespace Khan_cargo.Services
{
    public class ContactService : IContactService
    {
        private readonly WASettings _settings;


        public ContactService(IOptions<WASettings> options)
        {
            _settings = options.Value;

        }

        public async Task<SendContactResponse> SendContact(SendContactRequest request)
        {
            if (!ContactValidator.ValidateName(request.Name, out var nameError))
                return new SendContactResponse { Success = false, Message = nameError };
            if (!ContactValidator.ValidatePhone(request.Phone.Code, request.Phone.Number, out var phoneError))
                return new SendContactResponse { Success = false, Message = phoneError };

            return new SendContactResponse()
            {
                Success = true,
                Message = "Сообщение отправлено"
            };
        }
            
        //    var response = new SendContactResponse();

        //    try
        //    {
        //        // Номер телефона в международном формате без "+", без пробелов и скобок
        //        var fullPhoneNumber = $"{request.Phone.Code}{request.Phone.Number}";

        //        var payload = new
        //        {
        //            messaging_product = "whatsapp",
        //            to = fullPhoneNumber,
        //            type = "template",
        //            template = new
        //            {
        //                name = _settings.TemplateName,
        //                language = new { code = _settings.TemplateLanguageCode },
        //                components = new object[]
        //                {
        //                    new
        //                    {
        //                        type = "body",
        //                        parameters = new object[]
        //                        {
        //                            new { type = "text", text = request.Name },
        //                            new { type = "text", text = request.Address },
        //                            new { type = "text", text = request.CargoType }
        //                        }
        //                    }
        //                }
        //            }
        //        };

        //        var json = JsonSerializer.Serialize(payload);
        //        using var content = new StringContent(json, Encoding.UTF8, "application/json");

        //        using var httpRequest = new HttpRequestMessage(HttpMethod.Post, "")
        //        {
        //            Content = content
        //        };
        //        httpRequest.Headers.Authorization =
        //            new AuthenticationHeaderValue("Bearer", _settings.AccessToken);

        //        var httpResponse = await _httpClient.SendAsync(httpRequest);
        //        var responseBody = await httpResponse.Content.ReadAsStringAsync();

        //        if (httpResponse.IsSuccessStatusCode)
        //        {
        //            using var doc = JsonDocument.Parse(responseBody);
        //            var messageId = doc.RootElement
        //                .GetProperty("messages")[0]
        //                .GetProperty("id")
        //                .GetString();

        //            response.Success = true;
        //            response.Message = $"Сообщение отправлено";
        //        }
        //        else
        //        {
        //            response.Success = false;
        //            response.Message = $"Ошибка WhatsApp API: {responseBody}";
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        response.Success = false;
        //        response.Message = $"Ошибка отправки: {ex.Message}";
        //    }

        //    return response;
        //}
    }
}