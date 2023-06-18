using BusinessIntelligence_API.Api.Home.Services;
using BusinessIntelligence_API.Utils;
using Microsoft.AspNetCore.Mvc;

namespace BusinessIntelligence_API.Api.Home.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHomeServices _home;
        public HomeController(IHomeServices home)
        {
            _home = home;
        }
        [HttpPost]
        [Route("api/v1/home/kpis")]
        public async Task<IActionResult> GetKpis([FromBody] Request req)
        {
            try
            {
                var response = await _home.GetKpis(req);

                return Ok(response);
            }
            catch(Exception ex)
            {
                return BadRequest(new { Message  = ex.Message });
            }
        }
        [HttpPost]
        [Route("api/v1/home/comparativo")]
        public async Task<IActionResult> GetComparativo([FromBody] Request req)
        {
            try
            {
                var response = await _home.GetComparativo(req);

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}
