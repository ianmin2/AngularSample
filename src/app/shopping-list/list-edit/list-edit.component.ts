import { ShoppingListService } from './../../services/shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {

  @ViewChild('editedIngredientName') ingredientName:ElementRef;
  @ViewChild('editedIngredientAmount') IngredientAmount:ElementRef;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){

    const nom = this.ingredientName.nativeElement.value;
    const montant = this.IngredientAmount.nativeElement.value;

    if( nom.length > 2 && !isNaN(montant) )
    {
      const ingredient:Ingredient = new Ingredient( nom, montant);
      this.shoppingListService.addIngredient(ingredient);
    }
    else
    {
      alert(`Enter a valid ingredient name and value!`);
    }


  }

}
