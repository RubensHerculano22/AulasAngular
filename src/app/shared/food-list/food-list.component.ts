import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

//Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit{

  public foodList: Array<FoodList> = [];
  constructor(private foodListService:FoodListService) { 

  }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: (res) => this.foodList = res,
      error: (err) => console.log(err)
    });

    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Olha você adicionou um item: ${res.nome}`)
        return this.foodList.push(res);
      }
    );
  }

}
