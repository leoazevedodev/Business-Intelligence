import { Component, OnInit } from '@angular/core';
import { Lojas } from './lojas';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {


    dateinicio: Date = new Date();
    datefim: Date = new Date();

    dateInicioLabel: string = '';
    dateFimLabel: string = '';

    displayDatePicker!: boolean;
    positionDate!: string;

    displayLojaPicker!: boolean;
    positionLoja!: string;

    lojas!: Lojas[];
    selectedLojas: Lojas[] = [];
    
    constructor() { }

    ngOnInit() {
        if(localStorage.getItem('dataInicio') === null || localStorage.getItem('dataFim') === null)
        {
            this.showDialogDate('top');
        } else {
            this.dateinicio = localStorage.getItem('formatoDataInicio') ? new Date(parseInt(localStorage.getItem('formatoDataInicio')!)) : new Date();
            this.datefim = localStorage.getItem('formatoDataFim') ? new Date(parseInt(localStorage.getItem('formatoDataFim')!)) : new Date();
            this.dateFimLabel = localStorage.getItem('dataFimLabel') ? localStorage.getItem('dataFimLabel')! : '';
            this.dateInicioLabel = localStorage.getItem('dataInicioLabel') ? localStorage.getItem('dataInicioLabel')! : '';
        }

        this.lojas = [
            {lojaid: '54654', loja: 'Nike', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54655', loja: 'Adidas', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54656', loja: 'Puma', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Mizuno', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Asics', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Olympikus', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Fila', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Umbro', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Topper', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Fila', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Umbro', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Topper', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Fila', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Umbro', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'},
            {lojaid: '54654', loja: 'Topper', uf: 'SP', canal: 'Loja', cnpj: '12345678912345'}
        ];
    }

    pickDate()
    {
        const numeroInicio = this.dateinicio.getTime(); // Converte para um valor numérico em milissegundos
        // console.log(numeroInicio); // Imprime o valor numérico

        const numeroFim = this.datefim.getTime(); // Converte para um valor numérico em milissegundos
        // console.log(numeroFim); // Imprime o valor numérico

        localStorage.setItem('formatoDataInicio', numeroInicio.toString());
        localStorage.setItem('formatoDataFim', numeroFim.toString());

        // const dataConvertida = new Date(numero); // Converte o valor numérico de volta para um objeto Date
        // console.log(dataConvertida); // Imprime a data e hora convertidas de volta para um objeto Date

        this.convertData();
    }

    convertData()
    {
        let diaInicio = '';
        let mesInicio = '';
        let anoInicio = this.dateinicio.getFullYear().toString();

        let diaFim = '';
        let mesFim = '';
        let anoFim = this.datefim.getFullYear().toString();

        if(this.dateinicio.getDate() < 10)
        {
            diaInicio = '0' + this.dateinicio.getDate().toString();
        } else {
            diaInicio = this.dateinicio.getDate().toString();
        }

        if(this.dateinicio.getMonth() + 1  < 10)
        {
            mesInicio = '0' + (this.dateinicio.getMonth() + 1).toString();
        } else {
            mesInicio = (this.dateinicio.getMonth() + 1).toString();
        }

        if(this.datefim.getDate() < 10)
        {
            diaFim = '0' + this.datefim.getDate().toString();
        } else {
            diaFim = this.datefim.getDate().toString();
        }

        if(this.datefim.getMonth() + 1  < 10)
        {
            mesFim = '0' + (this.datefim.getMonth() + 1).toString();
        } else {
            mesFim = (this.datefim.getMonth() + 1).toString();
        }

        localStorage.setItem('dataInicio', anoInicio + mesInicio + diaInicio);
        localStorage.setItem('dataFim', anoFim + mesFim + diaFim);

        this.dateInicioLabel = diaInicio + '/' + mesInicio + '/' + anoInicio;
        this.dateFimLabel = diaFim + '/' + mesFim + '/' + anoFim;

        localStorage.setItem('dataInicioLabel', this.dateInicioLabel);
        localStorage.setItem('dataFimLabel', this.dateFimLabel);

        this.displayDatePicker = false;

    }

    closeDialogDate()
    {
        this.displayDatePicker = false;
    }

    showDialogDate(position: string) 
    {
        this.positionDate = position;
        this.displayDatePicker = true;
    }   

    closeDialogLoja()
    {
        this.displayLojaPicker = false;
    }

    showDialogLoja(position: string) 
    {
        this.positionLoja = position;
        this.displayLojaPicker = true;
    }   


}
