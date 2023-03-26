import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit{

  @Output() public enviarDados = new EventEmitter();
  
  public list: Array<{nome: string, idade: number}> = [
    {nome: 'Rhysand', idade: 516},
    {nome: 'Cassian', idade: 518},
    {nome: 'Azriel', idade: 518}
  ]
  constructor() { }

  ngOnInit(): void {
    
  }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }

}
