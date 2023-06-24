import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './AlphaBi/layout/app.layout.component';
import { AppLayoutVendedorasComponent } from './AlphaBiVendedoras/layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'business', component: AppLayoutComponent,
                children: [
                    { path: 'home', loadChildren: () => import('./AlphaBi/components/dashboard/dashboard.module').then(m => m.DashboardModule) }
                ]   
            },
            {
                path: 'teste', component: AppLayoutVendedorasComponent,
                children: [
                    { path: 'home', loadChildren: () => import('./AlphaBiVendedoras/components/deshboard/deshboard.module').then(m => m.DashboardVendedorasModule) }
                ]       
            },
            { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
