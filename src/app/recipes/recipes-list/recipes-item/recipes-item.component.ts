import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent implements OnInit {
  @Input() itemRecipe: any;
  constructor(private RecipeService:RecipesService) {}

  ngOnInit(): void {}
  onSelect(){
    this.RecipeService.recipeSelected.emit(this.itemRecipe)
  }
}
