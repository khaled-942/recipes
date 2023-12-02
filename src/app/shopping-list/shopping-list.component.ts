import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/models/ingredients.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  Ingredients: Ingredients[] = [];
  constructor(private ShoppingService: ShoppingListService) {}
  ngOnInit(): void {
    this.Ingredients = this.ShoppingService.getIngrediants();
    this.ShoppingService.addItems.subscribe(
      (ingredient: Ingredients[]) => (this.Ingredients = ingredient)
    );
    this.ShoppingService.updateIngredients.subscribe(
      (ingredient: Ingredients[]) => {
        this.Ingredients = ingredient;
      }
    );
  }
  editingradient(index:number){
    this.ShoppingService.specific.next(index)
  }
}
