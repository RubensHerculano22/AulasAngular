import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-title title="Olá Mundo"></app-title>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  //public title = 'Bem Vindo'; Variavel para mostrar na tela(app.component.html)
  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(1)
    // }, 5000);
    //console.log(1);
  }

  ngDoCheck(): void {
    console.log("doCheck")
  }

  ngAfterContentInit(): void {
    console.log("doCheck")
  }

  ngAfterContentChecked(): void {
    console.log("aftercontentChecked")
  }

  ngAfterViewInit(): void {
    console.log("afterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("afterViewChecked")
  }
}
