import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  itemD!: Recipe;
  constructor(private RecipeService:RecipesService, private ShoppingService:ShoppingListService) {}

  ngOnInit(): void {
    this.RecipeService.recipeSelected.subscribe((item:Recipe)=>{this.itemD = item})
  }
  addtoShopList(){
    this.ShoppingService.updateIngrediant(this.itemD.ingrediants)
  }
}
