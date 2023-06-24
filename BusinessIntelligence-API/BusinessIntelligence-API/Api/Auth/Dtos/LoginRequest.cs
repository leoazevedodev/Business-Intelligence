namespace BusinessIntelligence_API.Api.Auth.Dtos
{
    public class LoginRequest
    {
        public string Email { get; set; }
        public string Senha { get; set; }
        public bool Vendedora { get; set; }
    }
}
