using BusinessIntelligence_API.Api.Home.Build;
using BusinessIntelligence_API.Api.Home.Dtos;
using BusinessIntelligence_API.Data;
using BusinessIntelligence_API.Utils;

namespace BusinessIntelligence_API.Api.Home.Services
{
    public class HomeServices : IHomeServices
    {
        DataContext _context;
        public HomeServices(DataContext context)
        {
            _context = context;
        }

        public async Task<KpisView> GetKpis(Request req)
        {
            var response = await new HomeBuilder(_context).GetKpis(req);

            return response;
        }
    }
}
