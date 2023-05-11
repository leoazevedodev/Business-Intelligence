using BusinessIntelligence_API.Api.Lojas.Dtos;
using BusinessIntelligence_API.Data;
using Microsoft.EntityFrameworkCore;

namespace BusinessIntelligence_API.Api.Lojas.Build
{
    public class LojasBuilder
    {
        DataContext _context;
        public LojasBuilder(DataContext context)
        { 
            _context = context;
        }

        public async Task<List<BaseList>> GetBases()
        {
            var bases = await _context.Lojas
                .Select(x => new BaseList 
                { 
                    Base = x.Base, 
                    Lojaid = x.Lojaid 
                })
                .ToListAsync();

            return bases;
        }

    }
}
