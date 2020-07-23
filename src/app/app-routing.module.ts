import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppComponent } from './app.component';
import { RecipePlaceholderComponent } from './recipes/recipe-placeholder/recipe-placeholder.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const routes: Routes  = [
  { path: '', redirectTo: "/recipes", pathMatch: "full"},
  { path: 'recipes', component: RecipesComponent,
    children : [
      { path: '', component: RecipePlaceholderComponent, pathMatch: "full"},
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: RecipeDetailsComponent},
      { path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
