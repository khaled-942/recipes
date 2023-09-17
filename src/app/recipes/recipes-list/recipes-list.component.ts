import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes?: Recipe[] = [
    new Recipe('pasta','pasta with white Sauce','https://lilluna.com/wp-content/uploads/2022/11/white-sauce-pasta-resize-5.jpg')
  ];
  constructor() {}

  ngOnInit(): void {

    console.log(this.recipes![0])
  }
}
