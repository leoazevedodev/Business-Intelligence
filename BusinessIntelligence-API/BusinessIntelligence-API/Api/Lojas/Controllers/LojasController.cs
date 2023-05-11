using BusinessIntelligence_API.Api.Lojas.Services;
using Microsoft.AspNetCore.Mvc;

namespace BusinessIntelligence_API.Api.Lojas.Controllers
{
    public class LojasController : ControllerBase
    {
        private readonly ILojasServices _lojas;
        public LojasController(ILojasServices lojas) 
        {
            _lojas = lojas;
        }

        [HttpGet]
        [Route("api/v1/produtos")]
        public async Task<IActionResult> ObterProduto()
        {
            try
            {
                var response = await _lojas.GetBases();
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}
