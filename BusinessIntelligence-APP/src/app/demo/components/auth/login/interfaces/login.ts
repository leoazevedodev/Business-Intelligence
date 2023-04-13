export interface UsuarioLogin {
    token: string;
    usuario: Usuarios[];

}

export interface Usuarios {
    id: number;
    nome: string;
    senha: string;
    email: string;
    telefone: string;
    pais: string;
    estado: string;
    cidade: string;
    status: boolean;
    permissao: string;
    update: Date;
    create: Date;
}

export interface Credentials {
    email: string;
    senha: string;
}