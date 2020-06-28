import { Recipe } from './../recipes.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() activeRecipeDefined:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Test","https://www.flaticon.com/premium-icon/icons/svg/2253/2253457.svg"),
    new Recipe("Hokkaido Milk Buns", "The softest buns ever","https://www.flaticon.com/premium-icon/icons/svg/2253/2253457.svg"),
    new Recipe("Tangzhong", "Gelatinized dough for making Hokkaido milk buns.","https://www.flaticon.com/premium-icon/icons/svg/2253/2253457.svg")
  ];

  constructor() { }

  ngOnInit(): void {
  }


  selectRecipeItem(recipeItem:Recipe){
    this.activeRecipeDefined.emit(recipeItem);
  }

}
