import { Subscription } from 'rxjs';
import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../recipes.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  recipeSubscription: Subscription;

  recipes:Recipe[];

  constructor(private recipeService:RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //@ Watch for recipe changes
    this.recipeSubscription = this.recipeService.recipeChannel.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });

    //@ Trigger the initial recipe fetch
    this.recipeService.getRecipes();

  }

  newRecipe()
  {
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  ngOnDestroy(){
    this.recipeSubscription.unsubscribe();
  }

}
