import { Component, OnInit} from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes?: Recipe[]
  constructor(private listService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.listService.getRecipes();
  }
}
