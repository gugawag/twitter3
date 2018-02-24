import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nome: string;
  idade: number;

  constructor() {
    this.nome = 'Coloque aqui seu nome';
    this.idade = 20;
    console.log(`O sistema está sendo executado por ${this.nome}
       com idade ${this.idade.toString()}`);
  }

  getNome() {
    return this.nome;
  }
}
