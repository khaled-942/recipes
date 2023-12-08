import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes?: Recipe[];
  subs!: Subscription;
  constructor(
    private listService: RecipesService,
    private route: Router,
    private activerRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subs = this.listService.changedRecipesobs.subscribe((recipes) => {
      this.recipes = recipes;
    });
    this.recipes = this.listService.getRecipes();
  }
  addNewRecipe() {
    this.route.navigate(['new'], { relativeTo: this.activerRoute });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
