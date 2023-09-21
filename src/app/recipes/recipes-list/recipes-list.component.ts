import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  @Output() sendFromList = new EventEmitter<Recipe>();
  recipes?: Recipe[] = [
    new Recipe(
      'pasta',
      'pasta with white Sauce',
      '../../../assets/images/place.png'
    ),
    new Recipe(
      'cheese',
      'cheese with white Sauce',
      '../../../assets/images/cheese.png'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  send(recipe:Recipe){
    this.sendFromList.emit(recipe)
  }
}
