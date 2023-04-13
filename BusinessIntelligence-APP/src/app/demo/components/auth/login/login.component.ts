import { AuthService } from './services/auth.service';
// import { LoginService } from './services/login.service';
import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Credentials, UsuarioLogin } from './interfaces/login';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    providers: [MessageService,ConfirmationService]
})
export class LoginComponent {

    constructor( public layoutService: LayoutService,
                 private router: Router,
                 private AuthService: AuthService,
                 private MessageService: MessageService,
                 private ConfirmationService: ConfirmationService ) { }

    valCheck: string[] = ['remember'];
    credentials: Credentials = {} as Credentials;
    userprofile: UsuarioLogin = {} as UsuarioLogin;
    
    carregando = false;
    error = '';
    loading = false;

    Login () {
        this.AuthService.login(this.credentials)
        .pipe(first())
        .subscribe({
            next: () => {
                // get return url from route parameters or default to '/'
                this.router.navigate(['/']);
            },
            error: error => {
                this.MessageService.add({severity:'error', summary:'Falha ao Autenticar', detail:'Usuário ou Senhas Inválidos'});
                this.error = error;
                this.loading = false;
            }
        });
    }
}
