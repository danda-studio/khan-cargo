namespace Khan_cargo.Services.Models
{
    /// <summary>
    /// Информация о телефонном номере клиента.
    /// </summary>
    public class Phone
    {
        /// <summary>
        /// Код страны или региона (например, 7 для России).
        /// </summary>
        public int Code { get; set; } 

        /// <summary>
        /// Основной номер телефона клиента.
        /// </summary>
        public int Number { get; set; }
    }
}
