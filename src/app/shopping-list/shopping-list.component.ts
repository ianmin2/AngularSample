import { Ingredient } from '../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingredients:Ingredient[] = [
  new Ingredient('milk',2),
  new Ingredient('mangoes',12)
];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient:Ingredient)
  {
    this.ingredients.push(ingredient);
  }

}
