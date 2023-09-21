import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  detailsRecipe!:Recipe
  constructor() {}

  ngOnInit(): void {}
  reciveRecipe(recipe: any) {
    this.detailsRecipe = recipe
  }
}
