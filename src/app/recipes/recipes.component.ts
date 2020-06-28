import { Recipe } from './recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  activeRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  updateActiveRecipe(recipe:Recipe){
    this.activeRecipe = recipe;
    console.log(`\n\n____________________________________\nACTIVE RECIPE UPDATED TO:`);
    console.dir(this.activeRecipe);
    console.log(`____________________________________`);
  }

}
