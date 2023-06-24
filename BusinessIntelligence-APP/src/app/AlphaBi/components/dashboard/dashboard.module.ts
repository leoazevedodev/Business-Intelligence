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
import {DividerModule} from 'primeng/divider';
import { PickerComponent } from "../picker/picker.component";
import {TabViewModule} from 'primeng/tabview';
import { SplitterModule } from 'primeng/splitter';
import { NgxGaugeModule } from 'ngx-gauge';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import {TooltipModule} from 'primeng/tooltip';
import { ProgressBarModule } from 'primeng/progressbar';
import { NgxEchartsModule } from 'ngx-echarts';
import { CheckboxModule } from 'primeng/checkbox';
import {MultiSelectModule} from 'primeng/multiselect';
import { AppConfigModule } from '../../layout/config/config.module';


@NgModule({
    declarations: [DashboardComponent, PickerComponent],
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
        TabViewModule,
        NgxGaugeModule,
        TagModule,
        DropdownModule,
        AvatarModule,
        TooltipModule,
        ProgressBarModule,
        CheckboxModule,
        MultiSelectModule,
        NgxEchartsModule.forRoot({
            /**
             * This will import all modules from echarts.
             * If you only need custom modules,
             * please refer to [Custom Build] section.
             */
            echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
          }),
    ],
})
export class DashboardModule { }
