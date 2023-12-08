import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode: boolean = false;
  editRecipeForm!: FormGroup;
  constructor(
    private routerActive: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder,
    private recipeServes: RecipesService
  ) {}

  ngOnInit(): void {
    this.routerActive.params.subscribe((data: any) => {
      this.id = data.id;
      this.editMode = data.id != null;
      this.formInit();
    });
  }

  private formInit() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDesc = '';
    let recipeIngred: any = new FormArray([]);
    if (this.editMode) {
      const currentRecipe = this.recipeServes.getRecipebyid(this.id);
      recipeName = currentRecipe.name;
      recipeImage = currentRecipe.imgSrc;
      recipeDesc = currentRecipe.description;
      if (currentRecipe.ingrediants) {
        for (let ingrediant of currentRecipe.ingrediants) {
          const newAdd: FormGroup = new FormGroup({
            name: new FormControl(ingrediant.name, Validators.required),
            amount: new FormControl(ingrediant.amount, Validators.required),
          });
          recipeIngred.push(newAdd);
        }
      }
    }

    this.editRecipeForm = this.fb.group({
      rName: [recipeName, [Validators.required]],
      rImage: [recipeImage, [Validators.required]],
      rDesc: [recipeDesc, [Validators.required]],
      ingrediants: recipeIngred,
    });
  }

  get ingrediantsArray() {
    return this.editRecipeForm.controls['ingrediants'] as FormArray;
  }

  editSubmit() {
    const newRecipe = new Recipe(
      this.editRecipeForm.value.rName,
      this.editRecipeForm.value.rDesc,
      this.editRecipeForm.value.rImage,
      this.editRecipeForm.value.ingrediants
    );
    if (this.editMode) {
      this.recipeServes.updateNewRecipe(this.id, newRecipe);
    } else {
      this.recipeServes.addNewRecipe(newRecipe);
    }
    this.oncancel()
  }
  addIngradient() {
    const newAdd: FormGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
    });
    this.ingrediantsArray.push(newAdd);
  }

  removeIngradient(index: number) {
    this.ingrediantsArray.removeAt(index);
  }

  oncancel() {
    this.route.navigate(['../'], { relativeTo: this.routerActive });
  }
}
