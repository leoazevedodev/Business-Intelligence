import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'business', component: AppLayoutComponent,
                children: [
                    { path: 'home', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) }
                    

                ]   
            },
            // { path: 'metas', loadChildren: () => import('./CadastroMetas/cadastro-metas.module').then(m => m.CadastroMetasModule) },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
