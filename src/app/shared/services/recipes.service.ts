import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredients } from '../models/ingredients.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'pasta',
      'pasta with white Sauce',
      '../../../assets/images/place.png',
      [new Ingredients('Meat', 1), new Ingredients('Fries', 20)]
    ),
    new Recipe(
      'cheese',
      'cheese with white Sauce',
      '../../../assets/images/cheese.png',
      [new Ingredients('Buns', 2), new Ingredients('Meat', 1)]
    ),
  ];
  changedRecipes = new BehaviorSubject(this.recipes);
  changedRecipesobs = this.changedRecipes.asObservable();
  getRecipes() {
    return this.recipes?.slice();
  }
  getRecipebyid(id: number) {
    return this.recipes[id];
  }

  addNewRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.changedRecipes.next(this.recipes.slice());
  }

  updateNewRecipe(index: number, editRecipe: Recipe) {
    this.recipes[index] = editRecipe;
    this.changedRecipes.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.changedRecipes.next(this.recipes.slice());
  }
}
