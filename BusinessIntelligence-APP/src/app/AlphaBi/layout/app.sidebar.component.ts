import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from 'src/app/auth/login/services/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef, private auth: AuthService) { }

    isSidebarOpen = false;

    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
        this.layoutService.onMenuToggle();
    }

    logout(){
        this.auth.logout();
    }
}

