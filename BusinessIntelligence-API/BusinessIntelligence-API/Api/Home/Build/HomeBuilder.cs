using BusinessIntelligence_API.Api.Home.Dtos;
using BusinessIntelligence_API.Data;
using BusinessIntelligence_API.Utils;
using Microsoft.EntityFrameworkCore;

namespace BusinessIntelligence_API.Api.Home.Build
{
    public class HomeBuilder
    {
        DataContext _context;
        public HomeBuilder(DataContext context)
        {
            _context = context;
        }

        public async Task<KpisView> GetKpis(Request req)
        {

            var response = await (from vendas in _context.Vendas
                           where req.lojaids.Contains(vendas.Lojaid)
                           where vendas.Data >= int.Parse(req.inicio)
                           where vendas.Data <= int.Parse(req.fim)
                           where req.bases.Contains(vendas.Base)
                           group vendas by 1 into g
                           select new 
                           {
                               pmv = Math.Round((double)g.Sum(x => x.ValorTotal) / g.Sum(x => x.Quantidade), 2),
                               pmvAnoPassado = Math.Round((double)g.Sum(x => x.ValorTotalAnoPassado) / g.Sum(x => x.QuantidadeAnoPassado), 2),
                               ticketmedio = Math.Round((double)g.Sum(x => x.ValorTotal) / g.Sum(x => x.NumeroVendas), 2),
                               ticketmedioAnoPassado = Math.Round((double)g.Sum(x => x.ValorTotalAnoPassado) / g.Sum(x => x.NumeroVendasAnoPassado), 2),
                               pa = Math.Round((double)g.Sum(x => x.Quantidade) / g.Sum(x => x.NumeroVendas), 2),
                               paAnoPassado = Math.Round((double)g.Sum(x => x.QuantidadeAnoPassado) / g.Sum(x => x.NumeroVendasAnoPassado), 2),
                               markup = Math.Round((double)g.Sum(x => x.ValorTotal) / (double)g.Sum(x => x.CustoTotal), 2),
                               markupAnoPassado = Math.Round((double)g.Sum(x => x.ValorTotalAnoPassado) / (double)g.Sum(x => x.CustoTotalAnoPassado), 2)


                           }).Select(x => new KpisView
                           {
                                 pmv = x.pmv,
                                 pmvCrescimento = Math.Round((x.pmv - x.pmvAnoPassado) / x.pmvAnoPassado * 100, 2).ToString() + "%",
                                 ticketmedio = x.ticketmedio,
                                 ticketmedioCrescimento = Math.Round((x.ticketmedio - x.ticketmedioAnoPassado) / x.ticketmedioAnoPassado * 100, 2).ToString() + "%",
                                 pa = x.pa,
                                 paCrescimento = Math.Round((x.pa - x.paAnoPassado) / x.paAnoPassado * 100, 2).ToString() + "%",
                                 markup = x.markup,
                                 markupCrescimento = Math.Round((x.markup - x.markupAnoPassado) / x.markupAnoPassado * 100, 2).ToString() + "%" 

                           }).FirstOrDefaultAsync();

            if (response == null)
                return response = new KpisView();
            return response;
        }
    }
}
