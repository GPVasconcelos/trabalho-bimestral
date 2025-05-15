export class Cliente {
    id: string;
    nome: string;
    cnpj: string;
    endereco: string;
    email: string; 
    telefone: string;  

    constructor(
        id: string,
        nome: string,
        cnpj: string,
        endereco: string,
        email: string,
        telefone: string,
    ){
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;

    }
}

