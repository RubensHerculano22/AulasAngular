import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <app-diretivas-atributos>
      <h1>Aulas de Diretivas de Atributos</h1>
      <h3>Final da Aula </h3>
      <hr>
    </app-diretivas-atributos>

    <app-diretivas-atributos>
      <h1>Acotar</h1>
      <h3>Acowar</h3>
      <hr>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
  }
}
