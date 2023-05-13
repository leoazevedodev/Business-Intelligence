using BusinessIntelligence_API.Api.Home.Dtos;
using BusinessIntelligence_API.Utils;

namespace BusinessIntelligence_API.Api.Home.Services
{
    public interface IHomeServices
    {
        Task<KpisView> GetKpis(Request req);
    }
}
