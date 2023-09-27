import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredients } from '../models/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes?: Recipe[] = [
    new Recipe(
      'pasta',
      'pasta with white Sauce',
      '../../../assets/images/place.png',
      [new Ingredients('Meat', 1),new Ingredients('Fries', 20)]
    ),
    new Recipe(
      'cheese',
      'cheese with white Sauce',
      '../../../assets/images/cheese.png',
      [new Ingredients('Buns', 2),new Ingredients('Meat', 1)]
    ),
  ];
  constructor() {}
  getRecipes() {
    return this.recipes?.slice();
  }
}
