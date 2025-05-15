import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListagemComponent } from './cliente/listagem/listagem.component';
import { CadastroComponent } from './cliente/cadastro/cadastro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-app';
}
