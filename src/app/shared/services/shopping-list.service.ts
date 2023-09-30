import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../models/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  addItems = new EventEmitter<Ingredients[]>();
  updateIngredients = new EventEmitter<Ingredients[]>();
  private Ingredients: Ingredients[] = [
    new Ingredients('Appels', 5),
    new Ingredients('Tomatos', 10),
  ];
  constructor() {}

  getIngrediants() {
    return this.Ingredients.slice();
  }

  addIngrediant(ingredient: Ingredients) {
    this.Ingredients.push(ingredient);
    this.addItems.emit(this.Ingredients.slice());
  }
  updateIngrediant(ingredient: Ingredients[]) {
    // this.Ingredients.push(...ingredient);  if i need the past value
    this.Ingredients = ingredient;
    this.updateIngredients.emit(this.Ingredients.slice());
  }
}
