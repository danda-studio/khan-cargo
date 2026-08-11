/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

using Khan_cargo.Services.Models;

namespace Khan_cargo.Services
{
    public interface IContactService
    {
        Task<SendContactResponse> SendContact(SendContactRequest request);
    }
}
