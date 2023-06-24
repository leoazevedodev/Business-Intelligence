export interface UsuarioLogin {
    token: string;
    usuario: Usuarios;

}

export interface VendedoraLogin {
    token: string;
    vendedora: Vendedora;
}

export interface Vendedora { 
    id: string;
    lojaId: string;
    nome: string;
    fantasia: string;
    email: string;
    senha: string;
    vendedora: boolean;
    foto: string;
    telefone: string;
    exp: number;
    ativo: boolean;    
}

export interface Usuarios {
    id: number;
    nome: string;
    email: string;
    senha: string;
    vendedora: boolean;
    foto: string;
    telefone: string;
    exp: number;
    ativo: boolean;
}

export interface Credentials {
    email: string;
    senha: string;
    vendedora: boolean ;
}