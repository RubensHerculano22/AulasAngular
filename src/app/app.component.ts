import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- {{valor}}
    <button (click)="adicionar()">Adicionar</button> -->
    <app-title *ngIf="destruir"></app-title>
    <br/>
    <button (click)="destruirComponent()">Destruir Componente</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  //public title = 'Bem Vindo'; Variavel para mostrar na tela(app.component.html)
  // public valor: number = 1;

  public destruir:boolean = true;

  constructor() {}

  // public adicionar(): number {
  //   return this.valor += 1;
  // }

  ngOnInit(): void {
  }

  public destruirComponent() {
    this.destruir = false;
  }

  ngDoCheck(): void {
    // console.log("doCheck")
  }

  ngAfterContentInit(): void {
    // console.log("afterContentInit")
  }

  ngAfterContentChecked(): void {
    // console.log("aftercontentChecked")
  }

  ngAfterViewInit(): void {
    // console.log("afterViewInit")
  }

  ngAfterViewChecked(): void {
    // console.log("afterViewChecked")
  }
}
