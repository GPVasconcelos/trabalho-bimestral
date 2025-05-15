import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css'
})
export class EdicaoComponent implements OnInit {

  cliente: Cliente = {
    id:'',
    nome: '',
    cnpj: '',
    endereco: '',
    email: '',
    telefone: ''
    };
 private id!: string;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
  ) { }



  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.carregarCliente();
  }

  carregarCliente(): void {

    if (!this.id) {
      this.router.navigate(['/listagem']);
      return;
    }

    this.clienteService.buscarCliente(this.id).subscribe((a) => {
      this.cliente = a;

    });
  }
  salvar(): void {
    if (!this.cliente) return;

    this.clienteService.atualizarCliente(this.cliente.id, this.cliente).subscribe(() => {
      this.router.navigate(['/listagem']);
    });
  }



}