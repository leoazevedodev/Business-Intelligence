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
    
    constructor(
                public layoutService: LayoutService,
                public messageService: MessageService,
                public dialogService: DialogService,
                private AuthService: AuthService,
                private router: Router)
                 {
    }

    ngOnInit() {
    }

}
