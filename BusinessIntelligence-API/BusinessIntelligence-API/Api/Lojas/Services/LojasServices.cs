using BusinessIntelligence_API.Api.Lojas.Build;
using BusinessIntelligence_API.Api.Lojas.Dtos;
using BusinessIntelligence_API.Data;

namespace BusinessIntelligence_API.Api.Lojas.Services
{
    public class LojasServices : ILojasServices
    {
        private readonly DataContext _context;
        public LojasServices(DataContext context)
        {
            _context = context;
        }
        public async Task<List<BaseList>> GetBases()
        {
            var response = await new LojasBuilder(_context).GetBases();

            return response;
        }   
    }
}
