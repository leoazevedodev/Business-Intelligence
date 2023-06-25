using BusinessIntelligence_API.Api.Auth.Build;
using BusinessIntelligence_API.Api.Auth.Dtos;
using BusinessIntelligence_API.Data;

namespace BusinessIntelligence_API.Api.Auth.Services
{
    public class AuthService : IAuthService
    {
        DataContext _context;
        private readonly IConfiguration _configuration;
        private readonly HttpClient _httpclient;

        public AuthService(DataContext context, IConfiguration configuration, HttpClient httpcliente)
        {
            _context = context;
            _configuration = configuration;
            _httpclient = httpcliente;
        }

        public async Task<dynamic> LoginUsuario(LoginRequest request)
        {
            var response = await new AuthBuilder(_context, _configuration, _httpclient).LoginUsuarios(request);

            return response;
        }

        public async Task<dynamic> LoginVendedoras(LoginRequest request)
        {
            var response = await new AuthBuilder(_context, _configuration, _httpclient).LoginVendedoras(request);

            return response;
        }

        public async Task<dynamic> ResetSenha(string email)
        {
            var response = await new AuthBuilder(_context, _configuration, _httpclient).ResetSenha(email);

            return response;
        }

        public async Task<dynamic> VerificarCodigoGerado(int codigo)
        {
            var response = await new AuthBuilder(_context, _configuration, _httpclient).VerificarCodigoGerado(codigo);

            return response;
        }

    }
}
