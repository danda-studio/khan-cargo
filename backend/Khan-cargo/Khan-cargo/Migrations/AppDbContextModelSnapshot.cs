/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

using System;
using Khan_cargo.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Khan_cargo.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.29")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Khan_cargo.Services.Models.ContactRequestLimit", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("Count")
                        .HasColumnType("integer");

                    b.Property<string>("Identifier")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateOnly>("RequestDate")
                        .HasColumnType("date");

                    b.HasKey("Id");

                    b.HasIndex("Identifier", "RequestDate")
                        .IsUnique();

                    b.ToTable("ContactRequestLimits");
                });

            modelBuilder.Entity("Khan_cargo.Services.Models.DailyMessageBudget", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateOnly>("Date")
                        .HasColumnType("date");

                    b.Property<int>("SentCount")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("Date")
                        .IsUnique();

                    b.ToTable("DailyMessageBudgets");
                });
#pragma warning restore 612, 618
        }
    }
}
