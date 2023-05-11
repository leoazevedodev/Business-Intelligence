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
        [Route("api/v1/lojas/bases")]
        public async Task<IActionResult> GetBases()
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

        [HttpGet]
        [Route("api/v1/lojas")]
        public async Task<IActionResult> GetLojas()
        {
            try
            {
                var response = await _lojas.GetLojas();

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}
