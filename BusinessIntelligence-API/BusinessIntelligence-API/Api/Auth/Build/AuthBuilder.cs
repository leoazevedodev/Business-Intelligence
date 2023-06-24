using BusinessIntelligence_API.Api.Auth.Dtos;
using BusinessIntelligence_API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace BusinessIntelligence_API.Api.Auth.Build
{
    public class AuthBuilder
    {
        DataContext _context;
        private readonly IConfiguration _configuration;
        public AuthBuilder(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<dynamic> LoginUsuarios(LoginRequest request)
        {
            var user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == request.Email);

            if (user == null)
                throw new Exception("Usuário não encontrado !");

            if (user.Senha != request.Senha)
                throw new Exception("Senha Incorreta !");

            return new { Usuario = user, Token = GenerateToken() };

        }

        public async Task<dynamic> LoginVendedoras(LoginRequest request)
        {
            var user = await _context.Vendedoras.FirstOrDefaultAsync(x => x.Email == request.Email);

            if (user == null)
                throw new Exception("Vendedora não encontrada !");

            if (user.Senha != request.Senha)
                throw new Exception("Senha Incorreta !");

            return new { Usuario = user, Token = GenerateToken() };

        }

        private dynamic GenerateToken()
        {
            //var key = Encoding.ASCII.GetBytes("fedaf7d8863b48e197b9287d492b708e");
            var key = Encoding.ASCII.GetBytes(_configuration["JwtBearerTokenSettings:SecretKey"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                //Subject = new ClaimsIdentity(new Claim[]
                //{
                //    new Claim(ClaimTypes.Email, request.Email),
                //    //new Claim("TypePermission", "Admin")
                //}),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Audience = _configuration["JwtBearerTokenSettings:Audience"],
                Issuer = _configuration["JwtBearerTokenSettings:Issuer"],
                Expires = DateTime.UtcNow.AddDays(7)
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
