import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datapicker',
  templateUrl: './datapicker.component.html',
  styleUrls: ['./datapicker.component.scss']
})
export class DatapickerComponent implements OnInit {

  display: boolean = false;
  datainicio!: Date;
  datafim!: Date;

  datainiciolabel!: string | null;
  datafimlabel!: string | null;

  public convertdateinicio!: string;
  public convertdateend!: string;

  constructor() { }

  ngOnInit() {
    this.Atualiza();
  }

  CloseData(){
    this.display = false;
  }

  Atualiza() {  
    this.datainicio = new Date(localStorage.getItem('Inicio')!);
    this.datafim = new Date(localStorage.getItem('Fim')!);

    this.datainiciolabel = localStorage.getItem('dataInicioLabel');
    this.datafimlabel = localStorage.getItem('dataFimLabel');

    if(localStorage.getItem('dataInicio') === null || localStorage.getItem('dataFim') === null)
    {
       this.display = true;
    }
  } 

  PickData(){

    console.log(this.datainicio);
    console.log(this.datafim);
    if(this.datainicio == null || this.datafim == null){
        console.log('Selecioneee !!');
    } else {

        this.convertdateinicio = this.datainicio.toString().substring(4, 15);
        this.convertdateend = this.datafim.toString().substring(4, 15);

        if(this.convertdateinicio.includes('Dec')){
            const month =this.convertdateinicio.replace('Dec', '12').substring(0,2)
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day;
            this.datainiciolabel = day + '/' + month + '/' + year;
        }
        if(this.convertdateend.includes('Dec')){
            const month =this.convertdateend.replace('Dec', '12').substring(0,2)
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;
            this.datafimlabel = day + '/' + month + '/' + year;
        }

        if(this.convertdateinicio.includes('Nov')){
            const month = parseInt(this.convertdateinicio.replace('Nov', '11').substring(0,2));
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day;  
            this.datainiciolabel = day + '/' + month + '/' + year;
        }
        if(this.convertdateend.includes('Nov')){
            const month = parseInt(this.convertdateend.replace('Nov', '11').substring(0,2));
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;  
            this.datafimlabel = day + '/' + month + '/' + year;
        }

        if(this.convertdateinicio.includes('Oct')){
            const month = parseInt(this.convertdateinicio.replace('Oct', '10').substring(0,2));
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day; 
            this.datainiciolabel = day + '/' + month + '/' + year;   
        }
        if(this.convertdateend.includes('Oct')){
            const month = parseInt(this.convertdateend.replace('Oct', '10').substring(0,2));
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;    
            this.datafimlabel = day + '/' + month + '/' + year;
        }

        if(this.convertdateinicio.includes('Sep')){
            const month = this.convertdateinicio.replace('Sep', '09').substring(0,2);
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day;    
            this.datainiciolabel = day + '/' + month + '/' + year;  
        }
        if(this.convertdateend.includes('Sep')){
            const month = this.convertdateend.replace('Sep', '09').substring(0,2);
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;     
            this.datafimlabel = day + '/' + month + '/' + year; 
        }
        
        if(this.convertdateinicio.includes('Aug')){
            const month = this.convertdateinicio.replace('Aug', '08').substring(0,2);
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day;  
            this.datainiciolabel = day + '/' + month + '/' + year;    
        }
        if(this.convertdateend.includes('Aug')){
            const month = this.convertdateend.replace('Aug', '08').substring(0,2);
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;   
            this.datafimlabel = day + '/' + month + '/' + year;   
        }

        if(this.convertdateinicio.includes('Jul')){
            const month = this.convertdateinicio.replace('Jul', '07').substring(0,2);
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day;   
            this.datainiciolabel = day + '/' + month + '/' + year;   
        }
        if(this.convertdateend.includes('Jul')){
            const month = this.convertdateend.replace('Jul', '07').substring(0,2);
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;      
            this.datafimlabel = day + '/' + month + '/' + year;
        }

        if(this.convertdateinicio.includes('Jun')){
            const month = this.convertdateinicio.replace('Jun', '06').substring(0,2);
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day;  
            this.datainiciolabel = day + '/' + month + '/' + year;    
        }
        if(this.convertdateend.includes('Jun')){
            const month = this.convertdateend.replace('Jun', '06').substring(0,2);
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;     
            this.datafimlabel = day + '/' + month + '/' + year; 
        }

        if(this.convertdateinicio.includes('May')){
            const month = this.convertdateinicio.replace('May', '05').substring(0,2);
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day; 
            this.datainiciolabel = day + '/' + month + '/' + year;      
        }
        if(this.convertdateend.includes('May')){
            const month = this.convertdateend.replace('May', '05').substring(0,2);
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;   
            this.datafimlabel = day + '/' + month + '/' + year;   
        }
        
        if(this.convertdateinicio.includes('Apr')){
            const month = this.convertdateinicio.replace('Apr', '04').substring(0,2);
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day;  
            this.datainiciolabel = day + '/' + month + '/' + year;    
        }
        if(this.convertdateend.includes('Apr')){
            const month = this.convertdateend.replace('Apr', '04').substring(0,2);
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;   
            this.datafimlabel = day + '/' + month + '/' + year;   
        }

        if(this.convertdateinicio.includes('Mar')){
            const month = this.convertdateinicio.replace('Mar', '03').substring(0,2);
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day;   
            this.datainiciolabel = day + '/' + month + '/' + year;   
        }
        if(this.convertdateend.includes('Mar')){
            const month = this.convertdateend.replace('Mar', '03').substring(0,2);
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;    
            this.datafimlabel = day + '/' + month + '/' + year;  
        }

        if(this.convertdateinicio.includes('Feb')){
            const month = this.convertdateinicio.replace('Feb', '02').substring(0,2);
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day;  
            this.datainiciolabel = day + '/' + month + '/' + year;    
        }
        if(this.convertdateend.includes('Feb')){
            const month = this.convertdateend.replace('Feb', '02').substring(0,2);
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;     
            this.datafimlabel = day + '/' + month + '/' + year; 
        }

        if(this.convertdateinicio.includes('Jan')){
            const month = this.convertdateinicio.replace('Jan', '01').substring(0,2);
            const year = this.convertdateinicio.substring(7,11)
            const day = this.convertdateinicio.substring(4,6)
            this.convertdateinicio = year + month + day;  
            this.datainiciolabel = day + '/' + month + '/' + year;    
        }
        if(this.convertdateend.includes('Jan')){
            const month = this.convertdateend.replace('Jan', '01').substring(0,2);
            const year = this.convertdateend.substring(7,11)
            const day = this.convertdateend.substring(4,6)
            this.convertdateend = year + month + day;  
            this.datafimlabel = day + '/' + month + '/' + year;    
        }

        localStorage.setItem('dataInicio', this.convertdateinicio);
        localStorage.setItem('dataFim', this.convertdateend);

        localStorage.setItem('dataInicioLabel', this.datainiciolabel? this.datainiciolabel : '');
        localStorage.setItem('dataFimLabel', this.datafimlabel? this.datafimlabel : '');

        localStorage.setItem('Inicio', this.datainicio.toDateString());
        localStorage.setItem('Fim', this.datafim.toDateString());

        this.display = false;
    }   
}

  showDialog() {
    this.display = true;
  }
}
