/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

using CountryData.Standard;
using Khan_cargo.Services.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using PhoneNumbers;
using System.Text.RegularExpressions;

namespace Khan_cargo.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class CountryController : ControllerBase
    {

        [HttpGet("codes")]
        [EnableRateLimiting("CountryCodesLimit")]
        public ActionResult<IEnumerable<CountryCodeResponse>> GetCountryCodes()
        {
            var phoneUtil = PhoneNumberUtil.GetInstance();
            var supportedRegions = phoneUtil.GetSupportedRegions();

            var countryHelper = new CountryHelper();
            var allCountries = countryHelper.GetCountryData() ?? new List<Country>();

            var countryCodes = supportedRegions
                .Select(region =>
                {
                    var exampleNumber = phoneUtil.GetExampleNumber(region);
                    var mask = exampleNumber != null
                        ? Regex.Replace(phoneUtil.Format(exampleNumber, PhoneNumberFormat.INTERNATIONAL), @"\d", "X")
                        : null;

                    var numericCode = phoneUtil.GetCountryCodeForRegion(region);

                    var countryInfo = allCountries.FirstOrDefault(c =>
                        !string.IsNullOrEmpty(c.CountryShortCode) &&
                        c.CountryShortCode.Equals(region, StringComparison.OrdinalIgnoreCase))
                        ??
                        allCountries.FirstOrDefault(c =>
                            !string.IsNullOrEmpty(c.PhoneCode) &&
                            int.TryParse(c.PhoneCode.Trim().TrimStart('+').Split(' ').FirstOrDefault() ?? "", out var pc) &&
                            pc == numericCode
                        );

                    return new CountryCodeResponse
                    {
                        Region = region,
                        CountryPhoneCode = countryInfo?.PhoneCode,
                        CountryName = countryInfo?.CountryName ?? region,
                        Mask = mask
                    };
                })

                .Where(c => c.CountryPhoneCode != null && c.Mask != null)
                .OrderBy(c => c.CountryName)
                .ToList();

            return Ok(countryCodes);
        }
    }
}
