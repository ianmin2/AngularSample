import { RecipeService } from './../services/recipe.service';
import { Recipe } from './recipes.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit,OnDestroy {
  recipeSubscription : Subscription;
  activeRecipe: Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeSubscription =  this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) => {
        this.activeRecipe = recipe;
      }
    );
  }

  ngOnDestroy(): void {
   this.recipeSubscription.unsubscribe();
  }

}
