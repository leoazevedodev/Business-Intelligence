SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[vendas](
	[chave] [varchar] (100) PRIMARY KEY NOT NULL,
	[fantasia] [varchar](100) NOT NULL,
	[lojaid] [varchar](100) NOT NULL,
	[data] [varchar](100) NOT NULL,
	[quantidade] [int] NOT NULL,
	[venda] [numeric](10, 2) NOT NULL,
	[nome_vendedor] [varchar](100) NOT NULL,
	[is_vendedor] [varchar](100) NOT NULL,
	[canal] [varchar](100) NOT NULL,
	[hora] [varchar](100) NOT NULL,
	[cod_produto] [varchar](100) NOT NULL,
	[identificador] [varchar](100) NOT NULL,
	[uf] [varchar](100) NOT NULL,
	[integracao] [varchar](100) NOT NULL,
	[client_id] [varchar](100) NOT NULL,
	[sistema] [varchar](100) NOT NULL,
	[rotina_origem] [int] NULL,
	[frete] [numeric](10, 2) NULL,
	[cod_vendedor] [varchar](100) NULL,
	[modalidade] [varchar](250) NULL,
	[pedido] [varchar](100) NULL,
	[vendedor_vtex] [varchar](100) NULL,
	[canal_de_venda] [varchar](250) NULL
) 

