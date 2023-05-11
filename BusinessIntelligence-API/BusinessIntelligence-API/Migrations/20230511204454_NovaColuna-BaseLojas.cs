using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusinessIntelligence_API.Migrations
{
    public partial class NovaColunaBaseLojas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Base",
                table: "Lojas",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Base",
                table: "Lojas");
        }
    }
}
