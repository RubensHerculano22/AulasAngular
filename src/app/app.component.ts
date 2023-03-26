import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!-- <app-diretivas-atributos>
      <h1>Aulas de Diretivas de Atributos</h1>
      <h3>Final da Aula </h3>
      <hr>
    </app-diretivas-atributos>

    <app-diretivas-atributos>
      <h1>Acotar</h1>
      <h3>Acowar</h3>
      <hr>
    </app-diretivas-atributos>
    <router-outlet></router-outlet> -->
    <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
    <!-- <app-new-component></app-new-component> -->

    <app-input [contador]="addValue"></app-input>
    <button (click)="add()">Add</button>
  `
})
export class AppComponent implements OnInit{
  public addValue: number = 10;
  constructor() {}

  ngOnInit(): void { }

  public add() {
    this.addValue += 1;
  }
}
