import { AuthService } from './services/auth.service';
// import { LoginService } from './services/login.service';
import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Credentials, UsuarioLogin } from './interfaces/login';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
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
                 private ConfirmationService: ConfirmationService,
                 private renderer: Renderer2,
                 private titleService: Title ) { }

    valCheck: string[] = ['remember'];
    credentials: Credentials = {} as Credentials;
    userprofile: UsuarioLogin = {} as UsuarioLogin;
    
    carregando = false;
    error = '';
    loading = false;

    ngOnInit() {
        // const body = this.renderer.selectRootElement('body');
        // this.titleService.setTitle('Business Intelligence');
        // this.renderer.addClass(body, 'body');
    }

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
