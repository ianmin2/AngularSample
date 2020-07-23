import { Recipe } from './../recipes/recipes.model';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChannel:Subject<Recipe[]> = new Subject<Recipe[]>();

  recipeSelected = new EventEmitter<Recipe>();

  recipeList = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
       "Test",
      "https://www.flaticon.com/premium-icon/icons/svg/2253/2253457.svg",
      [
        new Ingredient("Willpower",1)
      ]
    ),
    new Recipe(
      "Hokkaido Milk Buns",
       "The softest buns ever",
      "https://www.flaticon.com/premium-icon/icons/svg/2253/2253457.svg",
      [
        new Ingredient("Milk",1),
        new Ingredient("Egg",3),
        new Ingredient("Flour",3),
        new Ingredient("Sugar",1),
        new Ingredient("Baking Powder",9),
        new Ingredient("Salt",1),
        new Ingredient("Oil",1),
        new Ingredient("Tangzhong",1)
      ]
    ),
    new Recipe(
      "Tangzhong",
       "Gelatinized dough for making Hokkaido milk buns.",
      "https://www.flaticon.com/premium-icon/icons/svg/2253/2253457.svg",
      [
        new Ingredient("Milk",4),
        new Ingredient("Water",2),
        new Ingredient("Flour",1),
      ]
    )
  ];


  private registerChanges():void
  {
    this.recipeChannel.next(this.recipes.slice());
  }

  deleteRecipe(recipeId:number)
  {
    this.recipes.splice(recipeId,1);
    this.registerChanges();
  }
  addRecipe(recipe:Recipe)
  {
    this.recipes.push(recipe);
    this.registerChanges();
  }

  getRecipes()
  {
    this.registerChanges();
  }

  getRecipe(recipeId:number)
  {
    return this.recipes.slice()[recipeId];
  }

  moveIngredientsToShoppingList(ingredients: Ingredient[])
  {
    this.shoppingListService.addIngredients(ingredients);
  }

  constructor(private shoppingListService:ShoppingListService) { }

}
