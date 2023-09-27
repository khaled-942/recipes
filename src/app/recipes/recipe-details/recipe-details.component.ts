import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  itemD!: Recipe;
  constructor(private RecipeService:RecipesService) {}

  ngOnInit(): void {
    this.RecipeService.recipeSelected.subscribe((item:Recipe)=>{this.itemD = item})
  }
  addtoShopList(){
     
  }
}
