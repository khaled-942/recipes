import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() itemD!: Recipe;
  constructor() {}

  ngOnInit(): void {}
}
