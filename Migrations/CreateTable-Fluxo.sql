SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[fluxo](
	[chave] [varchar](100) PRIMARY KEY NOT NULL,
	[data] [varchar] (100) NOT NULL,
	[lojaid] [varchar](100) NOT NULL,
	[hora] [int] NOT NULL,
	[fluxo] [int] NOT NULL,
	[criancas] [int] NOT NULL,
	[oportunidade] [int] NOT NULL
)  