/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

using Khan_cargo.Services.Models;
using Microsoft.EntityFrameworkCore;

namespace Khan_cargo.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<ContactRequestLimit> ContactRequestLimits { get; set; } = null!;
        public DbSet<DailyMessageBudget> DailyMessageBudgets { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ContactRequestLimit>()
                .HasIndex(x => new { x.Identifier, x.RequestDate })
                .IsUnique();

            modelBuilder.Entity<DailyMessageBudget>()
                .HasIndex(x => x.Date)
                .IsUnique();
        }
    }
}
