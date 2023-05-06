using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusinessIntelligence_API.Migrations
{
    public partial class NovaColunaBase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Base",
                table: "Vendas",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Base",
                table: "Vendas");
        }
    }
}
