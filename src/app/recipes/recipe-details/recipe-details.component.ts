import { ShoppingListService } from './../../services/shopping-list.service';
import { RecipeService } from './../../services/recipe.service';
import { LiteLoggerService } from './../../services/lite-logger.service';
import { Recipe } from './../recipes.model';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  currentRecipe:Recipe;
  recipeID:number;

  constructor(private logger:LiteLoggerService, private recipeService:RecipeService, private shoppingListService:ShoppingListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.currentRecipe =  this.recipeService.getRecipe(params.id);
      this.recipeID = +params.id;
    });
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
    this.recipeService.deleteRecipe(this.recipeID);
    this.router.navigate(['..'],{relativeTo: this.route});
  }

  editRecipe()
  {
    this.router.navigate(['edit'],{relativeTo:this.route});
  }


}
