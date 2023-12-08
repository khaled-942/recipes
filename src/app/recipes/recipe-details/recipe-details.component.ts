import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
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
  constructor(private RecipeService: RecipesService, private ShoppingService: ShoppingListService,
    private activeRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data: any) => {
      this.id = data.id
      this.itemD = this.RecipeService.getRecipebyid(this.id);
    })
  }
  addtoShopList() {
    this.ShoppingService.updateIngrediant(this.itemD.ingrediants)
  }
  toEdit() {
    this.route.navigate([`edit`], { relativeTo: this.activeRoute })
  }
  delete(){
    this.RecipeService.deleteRecipe(this.id);
    this.route.navigate(['recipes'])
  }
}
