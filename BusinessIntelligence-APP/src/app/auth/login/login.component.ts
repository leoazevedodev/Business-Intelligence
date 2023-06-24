import { AuthService } from './services/auth.service';
import { ChangeDetectorRef, Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { Credentials, UsuarioLogin } from './interfaces/login';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/AlphaBi/layout/service/app.layout.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService]
})
export class LoginComponent {

    constructor( public layoutService: LayoutService,
                 private router: Router,
                 private AuthService: AuthService,
                 private messageService: MessageService,
                 private changeDetectorRef: ChangeDetectorRef
                 ) { }

    valCheck: string[] = ['remember'];
    credentials: Credentials = {} as Credentials;
    
    carregando = false;
    error = '';
    loading = false;

    ngOnInit() {
        this.credentials.vendedora = false;
    }

    showSuccess() {
        setTimeout(() => {
            this.messageService.add({ key: 'myKey1', severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
            this.changeDetectorRef.detectChanges();
        }, 10);
    }

    Login () {
        if(this.credentials.vendedora == false)
        {
            this.AuthService.loginUsuario(this.credentials)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from route parameters or default to '/'
                    this.router.navigate(['business/home']);
                },
                error: error => {
                    this.showSuccess();
                    this.error = error;
                    this.loading = false;
                }
            });  
        } 
        else
        {
            this.AuthService.loginVendedora(this.credentials)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from route parameters or default to '/'
                    this.router.navigate(['business/vendedora/home']);
                },
                error: error => {
                    this.showSuccess();
                    this.error = error;
                    this.loading = false;
                }
            });
        }
    }
}
