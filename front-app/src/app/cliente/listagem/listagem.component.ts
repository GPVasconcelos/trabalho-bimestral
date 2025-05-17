import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {
  clientes: Cliente[] = [];
  filteredClientes: Cliente[] = [];
  searchTerm: string = '';
  filterCriteria: string = '';

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.carregarCliente();
  }

  carregarCliente(): void {
    this.clienteService.listarCliente().subscribe((res) => {
      this.clientes = res;
      this.filteredClientes = res;
    });
  }

  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();

    this.filteredClientes = this.clientes.filter(cliente => {
      const nomeMatch = cliente.nome.toLowerCase().includes(term);
      const cnpjMatch = cliente.cnpj.toLowerCase().includes(term);
      const enderecoMatch = cliente.endereco.toLowerCase().includes(term);

      if (this.filterCriteria === 'nome') return nomeMatch;
      if (this.filterCriteria === 'cnpj') return cnpjMatch;
      if (this.filterCriteria === 'endereco') return enderecoMatch;

      return nomeMatch || cnpjMatch || enderecoMatch;
    });
  }
}
