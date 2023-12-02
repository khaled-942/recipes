import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../models/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  specific = new Subject();
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
  getIngredient(index:number){
    return this.Ingredients[index];
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

  updateIngredientByIndex(index:number, newIngredient:Ingredients){
    this.Ingredients[index] = newIngredient
    this.updateIngredients.emit(this.Ingredients.slice());
  }
}
