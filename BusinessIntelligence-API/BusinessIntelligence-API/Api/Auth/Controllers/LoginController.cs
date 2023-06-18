﻿using BusinessIntelligence_API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BusinessIntelligence_API.Api.Auth.Controllers
{
    public class LoginController : Controller
    {
        DataContext _context;
        public LoginController(DataContext context)
        {
            _context = context;
        }


        [HttpPost]
        [Route("api/v1/auth/login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var configuration = HttpContext.RequestServices.GetService(typeof(IConfiguration)) as IConfiguration;

            var user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == request.Email);

            if (user == null)
                return BadRequest(new { Message = "Usuário não encontrado" });

            if (user.Senha != request.Senha)
                return BadRequest(new { Message = "Senha incorreta" });

            //var key = Encoding.ASCII.GetBytes("fedaf7d8863b48e197b9287d492b708e");
            var key = Encoding.ASCII.GetBytes(configuration["JwtBearerTokenSettings:SecretKey"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                //Subject = new ClaimsIdentity(new Claim[]
                //{
                //    new Claim(ClaimTypes.Email, request.Email),
                //    //new Claim("TypePermission", "Admin")
                //}),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Audience = configuration["JwtBearerTokenSettings:Audience"],
                Issuer = configuration["JwtBearerTokenSettings:Issuer"],
                Expires = DateTime.UtcNow.AddDays(7)
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new { token = tokenHandler.WriteToken(token), Usuario = user });
        }
    }

    public record LoginRequest(string Email, string Senha);
}
