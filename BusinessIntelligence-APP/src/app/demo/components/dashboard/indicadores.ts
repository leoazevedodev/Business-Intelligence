export interface Indicadores {
    pa : {
        paAtual: 0;
        paAnoPassado: 0;
        crescimento: 'string';
    },
    numeroVendas: {
        nvendasAtual: number;
        nvendasAnoPassado: number;
        crescimento: string;
    },
    valorTotal: {
        valorTotalAtual: number;
        valorTotalAnoPassado: number;
        crescimento: string;
    },
    meta: {
        metaAtual: number;
        metaAnoPassado: number;
        crescimento: string;
    },
    pmv: {
        pmvAtual: number;
        pmvAnoPassado: number;
        crescimento: string;
    },
    associacao: {
        clientesAssociadosAtual: number;
        clientesAssociadosAnoPassado: number;
        associacaoAtual: number;
        associacaoAnoPassado: number;
        crescimento: string;
    },
    ticketMedio: {
        ticketMedioAtual: number;
        ticketMedioAnoPassado: number;
        crescimento: string;
    },
    vendaPorRegiao : Regiao[];

}

export interface Regiao {
    uf: string;
    valorAtual: number;
    valorAnoPassado: number;
}