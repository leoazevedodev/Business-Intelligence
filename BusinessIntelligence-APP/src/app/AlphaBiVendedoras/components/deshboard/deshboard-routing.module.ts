import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeshboardVendedorasComponent } from './deshboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DeshboardVendedorasComponent }
    ])],
    exports: [RouterModule]
})
export class DashboardsVendedorasRoutingModule { }
