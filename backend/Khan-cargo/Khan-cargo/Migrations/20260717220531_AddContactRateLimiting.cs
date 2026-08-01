using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Khan_cargo.Migrations
{
    /// <inheritdoc />
    public partial class AddContactRateLimiting : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ContactRequestLimits",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Identifier = table.Column<string>(type: "text", nullable: false),
                    RequestDate = table.Column<DateOnly>(type: "date", nullable: false),
                    Count = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactRequestLimits", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DailyMessageBudgets",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Date = table.Column<DateOnly>(type: "date", nullable: false),
                    SentCount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyMessageBudgets", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ContactRequestLimits_Identifier_RequestDate",
                table: "ContactRequestLimits",
                columns: new[] { "Identifier", "RequestDate" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DailyMessageBudgets_Date",
                table: "DailyMessageBudgets",
                column: "Date",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ContactRequestLimits");

            migrationBuilder.DropTable(
                name: "DailyMessageBudgets");
        }
    }
}
