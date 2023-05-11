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
                    Base = x.Base
                })
                .Distinct()
                .ToListAsync();

            return bases;
        }

        public async Task<List<LojasView>> GetLojas()
        {
            var lojas = await _context.Lojas
                .Select(x => new LojasView
                {
                    Lojaid = x.Lojaid,
                    Loja = x.Loja,
                    UF = x.UF,
                    Canal = x.Canal,
                    Cnpj = x.Cnpj,
                    Base = x.Base
                })
                .ToListAsync();

            return lojas;
        }

    }
}
