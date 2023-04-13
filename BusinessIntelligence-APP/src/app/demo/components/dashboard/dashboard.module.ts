import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { AppConfigModule } from "../../../layout/config/config.module";
import {DividerModule} from 'primeng/divider';
import { DatapickerComponent } from "../datapicker/datapicker.component";
import {TabViewModule} from 'primeng/tabview';
import { SplitterModule } from 'primeng/splitter';


@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule,
        CalendarModule,
        DynamicDialogModule,
        ToastModule,
        DialogModule,
        OverlayPanelModule,
        InputTextModule,
        AppConfigModule,
        DividerModule,
        SplitterModule,
        TabViewModule
        
    ]
})
export class DashboardModule { }
