import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  listUpdated:EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  private ingredients:Ingredient[] = [
    new Ingredient('milk',2),
    new Ingredient('mangoes',12)
  ];

  constructor() { }

  private registerChanges()
  {
    this.listUpdated.emit(this.getIngredients());
  }

  getIngredients ()
  {
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.registerChanges();
  }

  addIngredients(ingredients:Ingredient[])
  {
     this.ingredients.push(...ingredients);
     this.registerChanges();
  }

}
