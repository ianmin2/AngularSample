import { ShoppingListService } from './../../services/shopping-list.service';
import { RecipeService } from './../../services/recipe.service';
import { LiteLoggerService } from './../../services/lite-logger.service';
import { Recipe } from './../recipes.model';
import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {


  @Input() currentRecipe:Recipe;

  constructor(private logger:LiteLoggerService, private recipeService:RecipeService, private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {

  }

  addToShoppingList()
  {
    this.logger.log("Adding ingredients to shopping list.");
    this.logger.log(JSON.stringify(this.currentRecipe.ingredients));
    this.recipeService.moveIngredientsToShoppingList(this.currentRecipe.ingredients);
  }

  deleteRecipe()
  {
    this.logger.log("Triggering a recipe deletion.");
  }

  editRecipe()
  {
    this.logger.log("Triggering Recipe Edit.");
  }


}
