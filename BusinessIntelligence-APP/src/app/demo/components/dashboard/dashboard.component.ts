import { AuthService } from './../auth/login/services/auth.service';
import { AuthGuard } from './../auth/login/helpers/auth.guard';
import { CanActivate, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EChartsOption } from 'echarts';
import { DeshBoardService } from './deshboard.service';


@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DialogService, MessageService]
})

export class DashboardComponent implements OnInit {

    chartOptionLine: EChartsOption ={
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            show: false,
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            show: false,
            type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            areaStyle: {
                color: { // criar um degradê
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(96, 198, 255, 0)'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }]
                }
            },
            type: 'line',
            emphasis: {
                focus: 'series' // define o foco da série de dados

            },
            itemStyle: {
                color: 'rgb(255, 204, 133)'
            },
          }
        ]
      };
    
    chartOptionBar: EChartsOption ={
        legend: {
            data: ['Vendas', 'Meta'], // define as legendas para as séries de dados
            itemStyle: {

            },
            textStyle: {
                color: 'white' // define a cor do texto da legenda
                
            },
            orient: 'vertical',
            left: 'left',
            top: 'top',
            align: 'left'
        },
        dataZoom: [
            {
                type: 'inside', // tipo de dataZoom para zoom interno
                xAxisIndex: 0, // índice do eixo x para aplicar o zoom
                start: 0, // posição inicial do zoom
                end: 100 // posição final do zoom
            },
            // {
            //     type: 'slider', // tipo de dataZoom para barra de zoom
            //     xAxisIndex: 0, // índice do eixo x para aplicar o zoom
            //     start: 0, // posição inicial do zoom
            //     end: 100 // posição final do zoom
            // }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Vendas',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: '15%', // define a largura da barra como 50% da largura padrão
            emphasis: {
                focus: 'series' // define o foco da série de dados

            },
            itemStyle: {
                color: 'rgb(255, 204, 133)'
            },
          },
          {
            name: 'Meta',
            data: [300, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: '15%', // define a largura da barra como 50% da largura padrão
            emphasis: {
                focus: 'series' // define o foco da série de dados
                
            },
            itemStyle: {
                
            },
          }
        ]
      };

    gaugeValue = 60.5;
    gaugeAppendText = "%";

    cities: any[] = [];

    data: any;
    options: any;

    data2: any;
    options2: any;

    displayPosition!: boolean;

    position!: string;

    dateinicio!: number;
    
    constructor(
                private layoutService: LayoutService,
                private deshboardService: DeshBoardService,
                private messageService: MessageService,
                private dialogService: DialogService,
                private AuthService: AuthService,
                private router: Router)
                 {
    }

    ngOnInit() {
        // this.getKpis();

        this.cities = [
            { name: 'Varejo', code: 'NY' },
            { name: 'Franquias', code: 'RM' },
            { name: 'Outlet', code: 'LDN' },
            { name: 'Atacado', code: 'IST' },
            { name: 'Loja Defeitos', code: 'PRS' }
        ];

        this.data2 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Usuários Novos', 
                    backgroundColor: function(context: any) {
                        var chart = context.chart;
                        var ctx = chart.ctx;
                        var gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
                        gradient.addColorStop(0, 'rgba(96, 198, 255, 0.5)');
                        gradient.addColorStop(1, 'rgba(96, 198, 255, 0)');
                        return gradient;
                    },
                    borderColor: ['rgba(96, 198, 255)'],
                    fill: true, 
                    data: [60, 60, 55, 55, 50, 60, 60]
                }
            ]
        };

        this.options2 = {
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
            },
            maintainAspectRatio: false,
            aspectRatio: 2,
            scales: {
                x: {
                    ticks: {
                        display: false,
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false
                    }
                }
            },
            barPercentage: 0.1
        };
        
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Meta',
                    backgroundColor: ['rgba(133, 169, 255)'],
                    borderColor: ['rgba(133, 169, 255)'],
                    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Venda',
                    backgroundColor: ['#31374a'],
                    borderColor: ['#31374a'],
                    data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };


        this.options = {
            animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
            },
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white',
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        color: '#31374a',
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        display: false,
                        color: '#31374a',
                        drawBorder: false
                    }
                }
            },
            barPercentage: 0.1
        };
    }

    getKpis()
    {
        let inicio = localStorage.getItem('dataInicio')!;
        let fim = localStorage.getItem('dataFim')!;
        this.deshboardService.getKpis(inicio, fim).subscribe(
            (response) => {  },
            (error) =>  { this.messageService.add( { life: 4250, sticky: false, severity:'success', closable: true, summary:'Falha de conexão com servidor', detail: error.error.message } ) ; }
        );
    }
}

        

