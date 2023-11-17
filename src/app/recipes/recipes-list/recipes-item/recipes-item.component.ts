import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent implements OnInit {
  @Input() itemRecipe: any;
  @Input() index!: number;
  constructor(private RecipeService:RecipesService) {}

  ngOnInit(): void {}
}
