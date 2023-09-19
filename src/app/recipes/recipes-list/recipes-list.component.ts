import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes?: Recipe[] = [
    new Recipe('pasta','pasta with white Sauce','../../../assets/images/place.png')
  ];
  constructor() {}

  ngOnInit(): void {}
}
