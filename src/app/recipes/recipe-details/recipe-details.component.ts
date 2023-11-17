import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
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
  id!: number
  constructor(private RecipeService: RecipesService, private ShoppingService: ShoppingListService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data: any) => {
      this.itemD = this.RecipeService.getRecipebyid(data.id);
    })
  }
  addtoShopList() {
    this.ShoppingService.updateIngrediant(this.itemD.ingrediants)
  }
}
