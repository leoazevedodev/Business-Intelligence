﻿// <auto-generated />
using BusinessIntelligence_API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BusinessIntelligence_API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20230624172521_NovaTabela-Vendedoras")]
    partial class NovaTabelaVendedoras
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.16")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("BusinessIntelligence_API.Data.Models.LojasModel", b =>
                {
                    b.Property<string>("Lojaid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Base")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Canal")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cnpj")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Loja")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UF")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Lojaid");

                    b.ToTable("Lojas");
                });

            modelBuilder.Entity("BusinessIntelligence_API.Data.Models.UsuariosModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<bool>("Ativo")
                        .HasColumnType("bit");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<int>("Exp")
                        .HasColumnType("int");

                    b.Property<string>("Foto")
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<bool>("Vendedora")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("Id")
                        .IsUnique();

                    b.HasIndex("Nome");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("BusinessIntelligence_API.Data.Models.VendasModel", b =>
                {
                    b.Property<string>("Chave")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Base")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Canal")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ClientesAssociados")
                        .HasColumnType("int");

                    b.Property<int>("ClientesAssociadosAnoPassado")
                        .HasColumnType("int");

                    b.Property<decimal>("CustoTotal")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("CustoTotalAnoPassado")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("Data")
                        .HasColumnType("int");

                    b.Property<int>("FluxoClientes")
                        .HasColumnType("int");

                    b.Property<int>("FluxoClientesAnoPassado")
                        .HasColumnType("int");

                    b.Property<string>("Loja")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lojaid")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<decimal>("MetaDia")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("MetaDiaAnoPassado")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("MetaMes")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("MetaMesAnoPassado")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("NumeroVendas")
                        .HasColumnType("int");

                    b.Property<int>("NumeroVendasAnoPassado")
                        .HasColumnType("int");

                    b.Property<decimal>("Pa")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("PaAnoPassado")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("Pmv")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("PmvAnoPassado")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("Quantidade")
                        .HasColumnType("int");

                    b.Property<int>("QuantidadeAnoPassado")
                        .HasColumnType("int");

                    b.Property<decimal>("TicketMedio")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("TicketMedioAnoPassado")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("UF")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<decimal>("ValorTotal")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("ValorTotalAnoPassado")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("ValorTotalApp")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("ValorTotalLoja")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Chave");

                    b.HasIndex("Chave");

                    b.HasIndex("Data");

                    b.HasIndex("Lojaid");

                    b.HasIndex("UF");

                    b.ToTable("Vendas");
                });

            modelBuilder.Entity("BusinessIntelligence_API.Data.Models.VendedorasModel", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<bool>("Ativo")
                        .HasColumnType("bit");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<int>("Exp")
                        .HasColumnType("int");

                    b.Property<string>("Fantasia")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("Foto")
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("LojaId")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<bool>("Vendedora")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("Id")
                        .IsUnique();

                    b.HasIndex("LojaId");

                    b.HasIndex("Nome");

                    b.ToTable("Vendedoras");
                });
#pragma warning restore 612, 618
        }
    }
}
