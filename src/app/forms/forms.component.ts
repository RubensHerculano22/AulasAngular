import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{

  public listComidas: Array<{ comida: string, preco: string }> = [
    {comida: 'Alface', preco: 'R$10,00'},
    {comida: 'Tomate', preco: 'R$12,00'},
    {comida: 'Batata', preco: 'R$14,00'},
  ]

  constructor() { }

  ngOnInit(): void {
    
  }
}
