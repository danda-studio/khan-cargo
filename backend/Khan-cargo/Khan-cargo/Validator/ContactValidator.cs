using System.Text.RegularExpressions;

namespace Khan_cargo.Validator
{
    public static class ContactValidator
    {
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

    }
}
