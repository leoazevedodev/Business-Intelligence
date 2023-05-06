using System.ComponentModel.DataAnnotations;

namespace BusinessIntelligence_API.Data.Models
{
    public class LojasModel
    {
        [Key]
        public string Lojaid { get; set; }
        public string Loja { get; set; }
        public string UF { get; set; }
        public string Canal { get; set; }
        public string Cnpj { get; set; }
    }
}
