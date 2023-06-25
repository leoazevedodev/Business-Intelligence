using BusinessIntelligence_API.Api.Auth.Dtos;
using BusinessIntelligence_API.Data;
using BusinessIntelligence_API.Data.Models;
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
        private readonly HttpClient _httpclient;
        public AuthBuilder(DataContext context, IConfiguration configuration, HttpClient httpclient)
        {
            _context = context;
            _configuration = configuration;
            _httpclient = httpclient;
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

        public async Task<dynamic> ResetSenha(string email)
        {
            var user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

            if (user == null)
                throw new Exception("Usuário não encontrado !");

            int randomNumber = GenerateRandomNumber(100000, 999999);

            var set = await SetCodeBd(email, randomNumber);

            var response = await _httpclient.PostAsJsonAsync(_httpclient.BaseAddress, new { email = email, codigo = randomNumber });

            if (response.StatusCode == System.Net.HttpStatusCode.BadRequest)
                throw new Exception("Erro ao enviar código de verificação !");

            return new{ Message = "Código de verficação enviado para seu e-mail !" };

        }

        public async Task<dynamic> VerificarCodigoGerado(int codigo)
        {
            var response = await _context.RecuperarSenha.FirstOrDefaultAsync(x => x.Codigo == codigo);

            if (response == null)
                throw new Exception("Código não encontrado !");

            if (response.Data.AddMinutes(5) < DateTime.Now)
                throw new Exception("Código expirado !");

            return new { Message = "Código verificado com sucesso !" };

        }

        private async Task<dynamic> SetCodeBd(string email, int codigo)
        {
            var obj = new RecuperarSenhaModel
            {
                Email = email,
                Codigo = codigo,
                Data = DateTime.Now
            };

            var response = await _context.RecuperarSenha.AddAsync(obj);
            await _context.SaveChangesAsync();

            return response;
        }

        private int GenerateRandomNumber(int min, int max)
        {
            Random random = new Random();
            return random.Next(min, max + 1);
        }
    }
}
