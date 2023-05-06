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
    [Migration("20230506163915_NovaTabela-Lojas")]
    partial class NovaTabelaLojas
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

                    b.Property<string>("Data")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

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
#pragma warning restore 612, 618
        }
    }
}
