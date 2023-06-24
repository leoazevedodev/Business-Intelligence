import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeshboardVendedorasComponent } from './deshboard.component';
import { DashboardsVendedorasRoutingModule } from './deshboard-routing.module';


@NgModule({
    declarations: [DeshboardVendedorasComponent],
    imports: [
        CommonModule,
        FormsModule,
        DashboardsVendedorasRoutingModule
    ],
})
export class DashboardVendedorasModule { }
