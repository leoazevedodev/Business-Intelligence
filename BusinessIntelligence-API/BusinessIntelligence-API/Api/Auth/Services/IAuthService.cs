using BusinessIntelligence_API.Api.Auth.Dtos;

namespace BusinessIntelligence_API.Api.Auth.Services
{
    public interface IAuthService
    {
        Task<dynamic> LoginUsuario(LoginRequest request);
        Task<dynamic> LoginVendedoras(LoginRequest request);

    }
}
