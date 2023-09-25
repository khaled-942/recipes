import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  Ingredients: Ingredients[] = [
    new Ingredients('Appels', 5),
    new Ingredients('Tomatos', 10),
  ];
  constructor() {}
  ngOnInit(): void {}
  reciveItem(newItem: Ingredients) {
    // this.Ingredients = [...this.Ingredients,newItem];
    this.Ingredients.push(newItem);
  }
}
