import { RecipeService } from './../../../services/recipe.service';
import { Recipe } from './../../recipes.model';
import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe;

  @Input() index: number;


  constructor(private recipeService:RecipeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelectRecipe( )
  {
    // console.dir(Router);
    // Router.navigate([`/${this.index}`], {relativeTo: ActivatedRoute});
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
