using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusinessIntelligence_API.Migrations
{
    public partial class NovaTabelaRecuperarSenha : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RecuperarSenha",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Codigo = table.Column<int>(type: "int", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecuperarSenha", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RecuperarSenha_Email",
                table: "RecuperarSenha",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RecuperarSenha_Id",
                table: "RecuperarSenha",
                column: "Id",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RecuperarSenha");
        }
    }
}
