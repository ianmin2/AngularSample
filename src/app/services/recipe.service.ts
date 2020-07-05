import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

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

  getRecipes()
  {
    return this.recipes.slice();
  }

  moveIngredientsToShoppingList(ingredients: Ingredient[])
  {
    this.shoppingListService.addIngredients(ingredients);
  }

  constructor(private shoppingListService:ShoppingListService) { }
}
