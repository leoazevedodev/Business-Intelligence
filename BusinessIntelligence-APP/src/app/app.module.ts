import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppLayoutModule } from './AlphaBi/layout/app.layout.module';
import { AppLayoutVendedorasModule } from './AlphaBiVendedoras/layout/app.layout.module';
import { JwtInterceptor } from './auth/login/helpers/jwt.interceptor';
import { ErrorInterceptor } from './auth/login/helpers/error.interceptor';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        AppLayoutVendedorasModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
