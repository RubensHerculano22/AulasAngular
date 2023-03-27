import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "X Bacon",
    "Arroz",
    "Ovo"
  ]

  constructor() { }

  public foodList() {
    return this.list;
  }

}
