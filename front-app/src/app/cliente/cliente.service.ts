import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiURl = 'http://localhost:3000/cliente';

   constructor(private http: HttpClient) { }

   listarCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURl)
   } 

   cadastrarCliente(cliente: Cliente) : Observable<Cliente[]> {
    return this.http.post<Cliente[]>(this.apiURl, cliente)
   }

   buscarCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiURl}/${id}`)
   }

   atualizarCliente(
    id: string,
    cliente: Cliente): Observable<Cliente>{
      return this.http.patch<Cliente>(`${this.apiURl}/${id}`, cliente)
    }

   deletarCliente(id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiURl}/${id}`)
   }
}
