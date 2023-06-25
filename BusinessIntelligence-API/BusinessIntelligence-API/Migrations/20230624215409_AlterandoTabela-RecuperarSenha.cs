using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusinessIntelligence_API.Migrations
{
    public partial class AlterandoTabelaRecuperarSenha : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_RecuperarSenha_Email",
                table: "RecuperarSenha");

            migrationBuilder.CreateIndex(
                name: "IX_RecuperarSenha_Email",
                table: "RecuperarSenha",
                column: "Email");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_RecuperarSenha_Email",
                table: "RecuperarSenha");

            migrationBuilder.CreateIndex(
                name: "IX_RecuperarSenha_Email",
                table: "RecuperarSenha",
                column: "Email",
                unique: true);
        }
    }
}
