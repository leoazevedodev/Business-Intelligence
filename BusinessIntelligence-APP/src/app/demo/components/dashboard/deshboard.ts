export interface kpis {
    pa: number;
    paCrescimento: string;
    pmv: number;
    pmvCrescimento: string;
    markup: number;
    markupCrescimento: string;
    ticketmedio: number;
    ticketmedioCrescimento: string;
}

export interface comparativo { 
    valorTotal: number;
    valorTotalAnoPassado: number;
    crescimento: string;
}