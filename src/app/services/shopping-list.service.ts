import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  listUpdated:Subject<Ingredient[]> = new Subject<Ingredient[]>();

  private ingredients:Ingredient[] = [
    new Ingredient('milk',2),
    new Ingredient('mangoes',12)
  ];

  constructor() { }

  private registerChanges()
  {
    this.listUpdated.next(this.getIngredients());
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
