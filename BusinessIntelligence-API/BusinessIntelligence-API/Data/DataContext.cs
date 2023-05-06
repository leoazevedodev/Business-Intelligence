using BusinessIntelligence_API.Data.Models;
using Microsoft.EntityFrameworkCore;


namespace BusinessIntelligence_API.Data
{
    // 1 - Add-Migration NomeDaMigracao - para criar uma nova migração com o nome desejado.
    // 2 - Update-Database - para atualizar o banco de dados com as migrações pendentes.
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<VendasModel> Vendas { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            VendasBuilder(builder);
        }

        private static void VendasBuilder(ModelBuilder builder)
        {
            builder.Entity<VendasModel>()
                .HasIndex(x => x.Chave);

            builder.Entity<VendasModel>()
                .HasIndex(x => x.Lojaid);

            builder.Entity<VendasModel>()
                .HasIndex(x => x.Data);

            builder.Entity<VendasModel>()
                .HasIndex(x => x.UF);

            builder.Entity<VendasModel>()
                .Property(x => x.ValorTotal)
                .HasColumnType("decimal(18,2))");

            builder.Entity<VendasModel>()
                .Property(x => x.ValorTotalApp)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.ValorTotalLoja)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.ValorTotalAnoPassado)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.CustoTotal)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.CustoTotalAnoPassado)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.Pmv)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.PmvAnoPassado)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.TicketMedio)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.TicketMedioAnoPassado)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.Pa)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.PaAnoPassado)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.MetaDia)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.MetaDiaAnoPassado)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.MetaMes)
                .HasColumnType("decimal(18,2)");

            builder.Entity<VendasModel>()
                .Property(x => x.MetaMesAnoPassado)
                .HasColumnType("decimal(18,2)");
        }
    }
}
