import { Component, OnInit } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
    styleUrls: ['./app.footer.component.scss'],
    // providers: [MessageService]  

})
export class AppFooterComponent implements OnInit {

    constructor(public layoutService: LayoutService) { }

    items: MenuItem[] = [];

    ngOnInit() {
        // this.items = [
        //     {
        //         icon: 'pi pi-pencil',
        //         command: () => {
        //             this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        //         }
        //     },
        //     {
        //         icon: 'pi pi-refresh',
        //         command: () => {
        //             this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        //         }
        //     },
        //     {
        //         icon: 'pi pi-trash',
        //         command: () => {
        //             this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        //         }
        //     },
        //     {
        //         icon: 'pi pi-upload',
        //         routerLink: ['/fileupload']
        //     },
        //     {
        //         icon: 'pi pi-external-link',
        //         url: 'http://angular.io'
    
        //     }
        // ];
     }

}
