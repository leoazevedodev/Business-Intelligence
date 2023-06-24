using BusinessIntelligence_API.Api.Auth.Build;
using BusinessIntelligence_API.Api.Auth.Dtos;
using BusinessIntelligence_API.Data;

namespace BusinessIntelligence_API.Api.Auth.Services
{
    public class AuthServices : IAuthService
    {
        DataContext _context;
        private readonly IConfiguration _configuration;

        public AuthServices(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<dynamic> LoginUsuario(LoginRequest request)
        {
            var response = await new AuthBuilder(_context, _configuration).LoginUsuarios(request);

            return response;
        }

        public async Task<dynamic> LoginVendedoras(LoginRequest request)
        {
            var response = await new AuthBuilder(_context, _configuration).LoginVendedoras(request);

            return response;
        }

    }
}
