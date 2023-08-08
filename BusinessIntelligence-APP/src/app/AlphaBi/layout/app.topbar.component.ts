import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from 'src/app/auth/login/services/auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss']
})
export class AppTopBarComponent {

    items!: MenuItem[];

    message: boolean = true;

    openModalUser: boolean = false;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,
        private auth: AuthService) { }

    ngOnInit() {

    }

    closeMessage()
    {
        this.message = false;
    }

    logout(){
        this.auth.logout();
    }

    abrirUsuarioModal()
    {
        this.openModalUser = true;
    }

    fecharUsuarioModal()
    {
        this.openModalUser = false;
    }
}
