import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Rhysand", idade: 516},
    {nome: "Feyre", idade: 21},
    {nome: "Nestha", idade: 25},
    {nome: "Cassian", idade: 517}
  ]

  public nome: string = "Rhysand";

  constructor() {}

  ngOnInit(): void {
    setInterval( () => {
      if(this.condition == true) {
        this.condition = false
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick() {
    if(this.conditionClick == true) {
      this.conditionClick = false
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({nome: "Elaine", idade: 23})
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }

}
