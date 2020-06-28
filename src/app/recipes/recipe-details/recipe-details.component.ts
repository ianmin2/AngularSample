import { Recipe } from './../recipes.model';
import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {


  @Input() currentRecipe:Recipe;

  constructor() { }

  ngOnInit(): void {

  }


}
