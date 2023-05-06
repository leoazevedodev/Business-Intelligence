using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusinessIntelligence_API.Migrations
{
    public partial class PrimeiraMigracao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vendas",
                columns: table => new
                {
                    Chave = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Lojaid = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Loja = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UF = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Canal = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Data = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ValorTotal = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ValorTotalApp = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ValorTotalLoja = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ValorTotalAnoPassado = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CustoTotal = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CustoTotalAnoPassado = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Pmv = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PmvAnoPassado = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    TicketMedio = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    TicketMedioAnoPassado = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Pa = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PaAnoPassado = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Quantidade = table.Column<int>(type: "int", nullable: false),
                    QuantidadeAnoPassado = table.Column<int>(type: "int", nullable: false),
                    NumeroVendas = table.Column<int>(type: "int", nullable: false),
                    FluxoClientes = table.Column<int>(type: "int", nullable: false),
                    FluxoClientesAnoPassado = table.Column<int>(type: "int", nullable: false),
                    NumeroVendasAnoPassado = table.Column<int>(type: "int", nullable: false),
                    ClientesAssociados = table.Column<int>(type: "int", nullable: false),
                    ClientesAssociadosAnoPassado = table.Column<int>(type: "int", nullable: false),
                    MetaDia = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    MetaDiaAnoPassado = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    MetaMes = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    MetaMesAnoPassado = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vendas", x => x.Chave);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Vendas_Chave",
                table: "Vendas",
                column: "Chave");

            migrationBuilder.CreateIndex(
                name: "IX_Vendas_Data",
                table: "Vendas",
                column: "Data");

            migrationBuilder.CreateIndex(
                name: "IX_Vendas_Lojaid",
                table: "Vendas",
                column: "Lojaid");

            migrationBuilder.CreateIndex(
                name: "IX_Vendas_UF",
                table: "Vendas",
                column: "UF");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vendas");
        }
    }
}
