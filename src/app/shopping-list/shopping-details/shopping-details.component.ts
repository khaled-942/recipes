import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/models/ingredients.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss'],
})
export class ShoppingDetailsComponent implements OnInit, OnDestroy {
  Ingredient!: Ingredients;
  ingradientForm!: FormGroup;
  editMode: boolean = false;
  ingredientIndex!: number;
  ingredientItem!: Ingredients;
  ingredientSubscribtion!: Subscription
  constructor(private ShoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingradientForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/i)]),
    })

    this.ingredientSubscribtion = this.ShoppingService.specific.subscribe((index: any) => {
      this.ingredientIndex = index;
      this.editMode = true;
      this.ingredientItem = this.ShoppingService.getIngredient(index);
      this.ingradientForm.setValue({
        name: this.ingredientItem.name,
        amount: this.ingredientItem.amount
      })
    })
  }

  ngOnDestroy(): void {
    this.ingredientSubscribtion.unsubscribe()
  }

  clear() {
    this.ingradientForm.reset();
    this.editMode = false;
  }

  addIngraient() {
    const newName = this.ingradientForm.value.name;
    const newAmount = this.ingradientForm.value.amount;
    this.Ingredient = new Ingredients(newName, newAmount);
    if (this.editMode) {
      this.ShoppingService.updateIngredientByIndex(this.ingredientIndex, this.Ingredient)
    }
    else {
      this.ShoppingService.addIngrediant(this.Ingredient);
    }
    this.editMode = false;
    this.ingradientForm.reset();
  }
}
