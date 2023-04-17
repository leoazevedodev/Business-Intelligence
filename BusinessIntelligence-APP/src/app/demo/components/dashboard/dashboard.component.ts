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

        this.data = {
            labels: ['01-07', '08-14', '15-21', '22-31'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81],
                    fill: false,
                    borderColor: 'black',
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19],
                    fill: false,
                    borderColor: 'orange',
                    tension: 0.4
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
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
                        color: 'white'
                    },
                    grid: {
                        color: 'white',
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'white',
                        drawBorder: false
                    }
                }
            }
        };
    }

}
