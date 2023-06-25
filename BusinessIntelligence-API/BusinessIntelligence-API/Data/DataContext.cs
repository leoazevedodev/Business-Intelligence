using BusinessIntelligence_API.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace BusinessIntelligence_API.Data
{
    // 1 - Add-Migration NomeDaMigracao - para criar uma nova migração com o nome desejado.
    // 2 - Update-Database - para atualizar o banco de dados com as migrações pendentes.
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<VendasModel> Vendas { get; set; }
        public DbSet<LojasModel> Lojas { get; set; }
        public DbSet<UsuariosModel> Usuarios { get; set; }  
        public DbSet<VendedorasModel> Vendedoras { get; set; }
        public DbSet<RecuperarSenhaModel> RecuperarSenha { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {   
            base.OnModelCreating(builder);

            VendasBuilder(builder);

            LojasBuilder(builder);

            UsuariosBuilder(builder);

            VendedorasBuilder(builder);

            RecuperarSenhaBuilder(builder);
        }

        private static void LojasBuilder(ModelBuilder builder)
        {
            builder.Entity<VendasModel>()
                .HasIndex(x => x.Lojaid);
        }

        private static void RecuperarSenhaBuilder(ModelBuilder builder)
        {
            builder.Entity<RecuperarSenhaModel>()
                .HasIndex(x => x.Id)
                .IsUnique();

            builder.Entity<RecuperarSenhaModel>()
                .HasIndex(x => x.Email);

            builder.Entity<RecuperarSenhaModel>()
                .Property(x => x.Email)
                .HasMaxLength(150)
                .IsRequired();

            builder.Entity<RecuperarSenhaModel>()
                .Property(x => x.Codigo)
                .IsRequired();

            builder.Entity<RecuperarSenhaModel>()
                .Property(x => x.Data)
                .IsRequired();

        }

        private static void UsuariosBuilder(ModelBuilder builder)
        {
            builder.Entity<UsuariosModel>()
                .HasIndex(x => x.Id)
                .IsUnique();

            builder.Entity<UsuariosModel>()
                .HasIndex(x => x.Email)
                .IsUnique();

            builder.Entity<UsuariosModel>()
                .HasIndex(x => x.Nome);

            builder.Entity<UsuariosModel>()
                .Property(x => x.Senha)
                .IsRequired();

            builder.Entity<UsuariosModel>()
                .Property(x => x.Nome)
                .HasMaxLength(150)
                .IsRequired();

            builder.Entity<UsuariosModel>()
                .Property(x => x.Email)
                .HasMaxLength(150)
                .IsRequired();

            builder.Entity<UsuariosModel>()
                .Property(x => x.Senha)
                .HasMaxLength(50)
                .IsRequired();

            builder.Entity<UsuariosModel>()
                .Property(x => x.Telefone)
                .HasMaxLength(25)
                .IsRequired();

            builder.Entity<UsuariosModel>()
                .Property(x => x.Foto)
                .IsRequired(false)
                .HasMaxLength(500);
        }

        private static void VendedorasBuilder(ModelBuilder builder)
        {
            builder.Entity<VendedorasModel>()
                .HasIndex(x => x.Id)
                .IsUnique();

            builder.Entity<VendedorasModel>().
                HasIndex(x => x.LojaId);

            builder.Entity<VendedorasModel>()
                .HasIndex(x => x.Email)
                .IsUnique();

            builder.Entity<VendedorasModel>()
                .HasIndex(x => x.Nome);

            builder.Entity<VendedorasModel>()
                .Property(x => x.Senha)
                .IsRequired();

            builder.Entity<VendedorasModel>()
                .Property(x => x.Nome)
                .HasMaxLength(150)
                .IsRequired();

            builder.Entity<VendedorasModel>()
                .Property(x => x.LojaId)
                .HasMaxLength(25)
                .IsRequired();

            builder.Entity<VendedorasModel>()
                .Property(x => x.Id)
                .HasMaxLength(25)
                .IsRequired();

            builder.Entity<VendedorasModel>()
                .Property(x => x.Fantasia)
                .HasMaxLength(150)
                .IsRequired();

            builder.Entity<VendedorasModel>()
                .Property(x => x.Email)
                .HasMaxLength(150)
                .IsRequired();

            builder.Entity<VendedorasModel>()
                .Property(x => x.Senha)
                .HasMaxLength(50)
                .IsRequired();

            builder.Entity<VendedorasModel>()
                .Property(x => x.Telefone)
                .HasMaxLength(25)
                .IsRequired();

            builder.Entity<VendedorasModel>()
                .Property(x => x.Foto)
                .IsRequired(false)
                .HasMaxLength(500);
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
