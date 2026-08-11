/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

using System.Text.RegularExpressions;

namespace Khan_cargo.Validator
{
    public static class ContactValidator
    {
        private static readonly Regex HtmlTagPattern = new(@"<[^>]+>", RegexOptions.Compiled);
        public static bool ValidateName(string name, out string error)
        {
            error = "";
            if (string.IsNullOrWhiteSpace(name))
            {
                error = "Имя не может быть пустым.";
                return false;
            }

            if (name.Length < 2)
            {
                error = "Имя слишком короткое.";
                return false;
            }
            if (HtmlTagPattern.IsMatch(name))
            {
                error = "Имя содержит недопустимые символы.";
                return false;
            }
            if (name.Length > 100)
            {
                error = $"Имя не должно превышать {100} символов.";
                return false;
            }

            return true;
        }

        public static bool ValidatePhone(string code, string number, out string error)
        {
            if (string.IsNullOrWhiteSpace(code) || string.IsNullOrWhiteSpace(number))
            {
                error = "Код страны и номер телефона обязательны.";
                return false;
            }
            else if (!Regex.IsMatch(code, @"^\d+$"))
            {
                error = "Код страны должен содержать только цифры.";
                return false;
            }
            else if (!Regex.IsMatch(number, @"^\d{5,15}$"))
            {
                error = "Номер телефона должен содержать от 5 до 15 цифр.";
                return false;
            }
            else
            {
                error = "";
                return true;
            }
        }

        public static bool ValidateAddress(string address, out string error)
        {
            error = "";

            if (string.IsNullOrWhiteSpace(address))
            {
                error = "Адрес не может быть пустым.";
                return false;
            }
            if (address.Length > 200)
            {
                error = $"Адрес не должен превышать {200} символов.";
                return false;
            }
            if (HtmlTagPattern.IsMatch(address))
            {
                error = "Адрес содержит недопустимые символы.";
                return false;
            }
            return true;
        }

        public static bool ValidateCargoType(string cargoType, out string error)
        {
            error = "";

            if (string.IsNullOrWhiteSpace(cargoType))
            {
                error = "Тип груза не может быть пустым.";
                return false;
            }
            if (cargoType.Length > 100)
            {
                error = $"Тип груза не должен превышать {100} символов.";
                return false;
            }
            if (HtmlTagPattern.IsMatch(cargoType))
            {
                error = "Тип груза содержит недопустимые символы.";
                return false;
            }
            return true;
        }

    }
}
