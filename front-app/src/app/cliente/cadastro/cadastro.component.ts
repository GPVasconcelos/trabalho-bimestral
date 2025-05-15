import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
 
  cliente: Cliente = {
    id:'',
    nome: '',
    cnpj: '',
    endereco: '',
    email: '',
    telefone: ''
    };

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  salvar() {
    this.clienteService.cadastrarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['/listagem'])
    })
  }


}
