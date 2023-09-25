import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/models/ingredients.model';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss'],
})
export class ShoppingDetailsComponent implements OnInit {
  @ViewChild('nameItem') name!: ElementRef;
  @ViewChild('amountItems') amount!: ElementRef;
  @Output() addNewItem = new EventEmitter<Ingredients>()
  Ingredient!: Ingredients;
  constructor() {}

  ngOnInit(): void {}
  addIngraient() {
    const newName = this.name.nativeElement.value;
    const newAmount = this.amount.nativeElement.value;
    this.Ingredient = new Ingredients(newName, newAmount);
    this.addNewItem.emit(this.Ingredient)
  }
}
