import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', redirectTo:'recipes',pathMatch:'full' },
  { path: 'recipes', component: RecipesComponent, canActivate:[AuthGuard], children:[
    {path:'',component:RecipeStartComponent},
    {path:':id',component:RecipeDetailsComponent}
  ] },
  { path: 'cart', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
