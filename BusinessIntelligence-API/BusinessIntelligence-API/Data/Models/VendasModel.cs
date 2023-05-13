using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessIntelligence_API.Data.Models
{
    public class VendasModel
    {
        [Key]
        public string Chave { get; set; }
        public string Lojaid { get; set; }
        public string Loja { get; set; }
        public string UF { get; set; }
        public string Canal { get; set; }
        public int Data { get; set; }
        public string Base { get; set; }
        public decimal ValorTotal { get; set; }
        public decimal ValorTotalApp { get; set; }
        public decimal ValorTotalLoja { get; set; }
        public decimal ValorTotalAnoPassado { get; set; }
        public decimal CustoTotal { get; set; }
        public decimal CustoTotalAnoPassado { get; set; }
        public decimal Pmv { get; set; }
        public decimal PmvAnoPassado { get; set; }
        public decimal TicketMedio { get; set; }
        public decimal TicketMedioAnoPassado { get; set; }
        public decimal Pa { get; set; }
        public decimal PaAnoPassado { get; set; }
        public int Quantidade { get; set; }
        public int QuantidadeAnoPassado { get; set; }
        public int NumeroVendas { get; set; }
        public int FluxoClientes { get; set; }
        public int FluxoClientesAnoPassado { get; set; }
        public int NumeroVendasAnoPassado { get; set; }
        public int ClientesAssociados { get; set; }
        public int ClientesAssociadosAnoPassado { get; set; }
        public decimal MetaDia { get; set; }
        public decimal MetaDiaAnoPassado { get; set; }
        public decimal MetaMes { get; set; }
        public decimal MetaMesAnoPassado { get; set; }
    }
}
