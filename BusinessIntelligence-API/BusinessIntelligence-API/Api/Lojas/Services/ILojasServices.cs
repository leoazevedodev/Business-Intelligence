using BusinessIntelligence_API.Api.Lojas.Dtos;

namespace BusinessIntelligence_API.Api.Lojas.Services
{
    public interface ILojasServices
    {
        Task<List<BaseList>> GetBases();
        Task<List<LojasView>> GetLojas();
    }
}
