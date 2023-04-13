import { ErrorInterceptor } from './demo/components/auth/login/helpers/error.interceptor';
import { JwtInterceptor } from './demo/components/auth/login/helpers/jwt.interceptor';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from 'primeng/api';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule    
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
         MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
