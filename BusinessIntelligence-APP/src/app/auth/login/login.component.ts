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

    credentials: Credentials = {} as Credentials;
    emailRecuperacao: string = '';
    inputCodigoVerificacao: boolean = false;
    modalButtons: boolean = true;
    codigoVerificacao!: number;
    
    carregando = false;
    error = '';
    loading = false;

    position: string = 'top';
    displayEsqueciSenha: boolean = false;

    ngOnInit() {
        this.credentials.vendedora = false;
    }

    showSuccess() {
        setTimeout(() => {
            this.messageService.add({ key: 'myKey1', severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
            this.changeDetectorRef.detectChanges();
        }, 10);
    }

    abrirModalEsqueciSenha()
    {
        this.displayEsqueciSenha = true;
    }

    fecharModalEsqueciSenha()
    {
        this.displayEsqueciSenha = false;
        this.modalButtons = true;
        this.inputCodigoVerificacao = false;
    }

    enviarCodigoParaEmail()
    {
        if(this.validaEmail(this.emailRecuperacao))
        {
            this.AuthService.esqueciSenha(this.emailRecuperacao).subscribe(
                (response) => 
                { 
                    console.log(response);

                    setTimeout(() => {
                        this.messageService.add({key: 'myKey1', severity:'success', summary: 'success', detail: response.message });
                        this.changeDetectorRef.detectChanges();
                    }, 10); 
                    this.modalButtons = false;
                    this.inputCodigoVerificacao = true;
                },
                (error) => 
                {
                    console.log(error);
                    setTimeout(() => {
                        this.messageService.add({key: 'myKey1', severity:'error', summary: 'Falha !', detail: error });
                        this.changeDetectorRef.detectChanges();
                    }, 10); 
                }
            )
        }
        else 
        {
            setTimeout(() => {
                this.messageService.add({key: 'myKey1', severity:'warn', summary: 'Warn', detail: 'Email inválido !'});
                this.changeDetectorRef.detectChanges();
            }, 10);
        }
    }

    verificarCodigoGerado()
    {
        this.AuthService.verificarCodigo(this.codigoVerificacao).subscribe(
            (response) =>
            {
                setTimeout(() => {
                    this.messageService.add({key: 'myKey1', severity:'success', summary: 'success', detail: response.message });
                    this.changeDetectorRef.detectChanges();
                }, 10); 
            },
            (error) => 
            {
                setTimeout(() => {
                    this.messageService.add({key: 'myKey1', severity:'error', summary: 'Falha !', detail: error });
                    this.changeDetectorRef.detectChanges();
                }, 10); 
            }
        );
    }

    validaEmail(email: string) : boolean
    {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    Login () {
        if(this.credentials.vendedora == false)
        {
            this.AuthService.loginUsuario(this.credentials)
            .pipe(first())
            .subscribe({
                next: () => {
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
