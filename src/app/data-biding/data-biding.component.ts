import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit{
  
  public nome:string = "Rhysand";
  public idade: number = 514;
  public maisUm: number = 1;
  
  public checkedDisabled:boolean = false;
  public imgScr: string = "https://images2.alphacoders.com/279/279072.jpg";
  public imgTitle: string = "Mario Party";

  public position: {x: number, y:number} = {x: 0, y: 0}

  constructor() { }

  ngOnInit(): void { }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
