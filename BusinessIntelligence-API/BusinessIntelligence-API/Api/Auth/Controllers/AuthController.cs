using BusinessIntelligence_API.Api.Auth.Dtos;
using BusinessIntelligence_API.Api.Auth.Services;
using BusinessIntelligence_API.Data;
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
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService, DataContext context)
        {
            _authService = authService;
        }

        [HttpPost]
        [Route("api/v1/auth/login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            try
            {

                if (request.Vendedora == true)
                    return Ok(await _authService.LoginVendedoras(request));
                return Ok(await _authService.LoginUsuario(request));
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }   
        }

        [HttpPost]
        [Route("api/v1/auth/esqueci-senha")]
        public async Task<IActionResult> Reset(string email)
        {
            try
            {
                return Ok(await _authService.ResetSenha(email));
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpPost]
        [Route("api/v1/auth/verificar-codigo")]
        public async Task<IActionResult> VerificarCodigoGerado(int codigo)
        {
            try
            {
                return Ok(await _authService.VerificarCodigoGerado(codigo));
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}
