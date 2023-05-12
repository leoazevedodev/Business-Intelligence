import { Component, OnInit } from '@angular/core';
import { Bases, Lojas } from './lojas';
import { PickerService } from './picker.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss'],
  providers: [MessageService]
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

    lojaids: { } [] = [];
    countLojas: number = 0;
    loja: string = '';

    dropDownBases: { name: string, code: string } [] = [];
    selectedBase: { name: string, code: string } [] = [
        {name: 'Shopping', code: 'Shopping'},
        {name: 'Atacado', code: 'Atacado'},
        {name: 'Defeito', code: 'Defeito'},
        {name: 'Outlet', code: 'Outlet'}
    ];
    base: Bases[] = [];
    
    constructor(private PickerService: PickerService,
                private messageService: MessageService) { }

    ngOnInit() {
        this.show();
        this.carregarLojas();
        this.getLojas();
        this.getBases();
        if(localStorage.getItem('dataInicio') === null || localStorage.getItem('dataFim') === null)
        {
            this.showDialogDate('top');
        } else {
            this.dateinicio = localStorage.getItem('formatoDataInicio') ? new Date(parseInt(localStorage.getItem('formatoDataInicio')!)) : new Date();
            this.datefim = localStorage.getItem('formatoDataFim') ? new Date(parseInt(localStorage.getItem('formatoDataFim')!)) : new Date();
            this.dateFimLabel = localStorage.getItem('dataFimLabel') ? localStorage.getItem('dataFimLabel')! : '';
            this.dateInicioLabel = localStorage.getItem('dataInicioLabel') ? localStorage.getItem('dataInicioLabel')! : '';
        }
    }

    getLojas()
    {
        this.PickerService.getLojas().subscribe(
            (response) => { this.lojas = response; },
            (error) =>  { this.messageService.add( { life: 4250, sticky: false, severity:'success', closable: true, summary:'Falha de conexão com servidor', detail: error.error.message } ) ; }
        );
    }

    getBases()
    {
        this.PickerService.getBases().subscribe(
            (response) => { 
                for(let i = 0; i < response.length; i++)
                {
                    this.dropDownBases.push({ name: response[i].base, code: response[i].base });
                }
             },
            (error) =>  { this.messageService.add( { life: 4250, sticky: false, severity:'success', closable: true, summary:'Falha de conexão com servidor', detail: error.error.message } ) ; }
        );
    }

    show() {
        console.log('chamou');
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    }

    pickLojas()
    {
        let LojasJson = JSON.stringify(this.selectedLojas);
        localStorage.setItem('lojas', LojasJson);

        for(let i = 0; i < this.selectedLojas.length; i++)
        {
            this.lojaids.push(this.selectedLojas[i].lojaid);
        }

        localStorage.setItem('lojaids', JSON.stringify(this.lojaids));
        this.displayLojaPicker = false;
        this.carregarLojas();
    }

    carregarLojas(){
        if(localStorage.getItem('lojas') === null )
        {
            console.log('Selecione uma loja !!')
            this.displayLojaPicker = true;
            this.positionLoja = 'bottom'
            this.messageService.add( { severity:'success', closable: true, summary:'Falha de conexão com servidor', detail: 'asdasd' } ) ;
        } 
        else 
        {
            this.selectedLojas = JSON.parse(localStorage.getItem('lojas')!);
        }
        this.countLojas = this.selectedLojas.length;
        if(this.countLojas == 1)
        {
            this.loja = this.selectedLojas[0].loja;
        }
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
