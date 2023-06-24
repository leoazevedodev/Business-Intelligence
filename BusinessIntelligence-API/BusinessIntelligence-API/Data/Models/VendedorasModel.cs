namespace BusinessIntelligence_API.Data.Models
{
    public class VendedorasModel
    {
        public string Id { get; set; }
        public string LojaId { get; set; }
        public string Nome { get; set; }
        public string Fantasia { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public bool Vendedora { get; set; }
        public string Foto { get; set; }
        public string Telefone { get; set; }
        public int Exp { get; set; }
        public bool Ativo { get; set; }
    }
}
