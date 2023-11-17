import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes?: Recipe[]
  constructor(private listService: RecipesService, private route:Router, private activerRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.recipes = this.listService.getRecipes();
  }
  addNewRecipe(){
    this.route.navigate(['new'],{relativeTo:this.activerRoute})
  }
}
