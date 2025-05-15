import {IsString} from 'class-validator';

export class CreateClienteDto {
    
    nome: string;
    cnpj: string;
    endereco: string;
    email: string; 
    telefone: string; 
}
