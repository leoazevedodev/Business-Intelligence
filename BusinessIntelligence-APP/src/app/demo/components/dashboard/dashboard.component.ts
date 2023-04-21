import { AuthService } from './../auth/login/services/auth.service';
import { AuthGuard } from './../auth/login/helpers/auth.guard';
import { CanActivate, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DialogService, MessageService]
})

export class DashboardComponent implements OnInit {

    gaugeValue = 60.5;
    gaugeAppendText = "%";

    cities: any[] = [];

    data: any;
    options: any;

    data2: any;
    options2: any;
    
    constructor(
                public layoutService: LayoutService,
                public messageService: MessageService,
                public dialogService: DialogService,
                private AuthService: AuthService,
                private router: Router)
                 {
    }

    ngOnInit() {
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
                    label: '',
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
            legend: {
                display: false
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
                    borderColor: ['rgba(133, 169, 255)'],
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
                        color: '#31374a',
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: '#31374a',
                        drawBorder: false
                    }
                }
            },
            barPercentage: 0.1
        };
    }
}

        

