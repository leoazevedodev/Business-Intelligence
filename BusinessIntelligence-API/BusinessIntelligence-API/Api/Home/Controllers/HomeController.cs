using Microsoft.AspNetCore.Mvc;

namespace BusinessIntelligence_API.Api.Home.Controllers
{
    public class HomeController : Controller
    {
        public async Task<IActionResult> GetKpis()
        {
            try
            {

                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(new { Message  = ex.Message });
            }
        }
    }
}
