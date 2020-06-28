import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {

  @ViewChild('editedIngredientName') ingredientName:ElementRef;
  @ViewChild('editedIngredientAmount') IngredientAmount:ElementRef;

  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){

    const nom = this.ingredientName.nativeElement.value;
    const montant = this.IngredientAmount.nativeElement.value;

    if( nom.length > 2 && !isNaN(montant) )
    {
      const ingredient:Ingredient = new Ingredient( nom, montant);
      this.ingredientAdded.emit(ingredient);
    }
    else
    {
      alert(`Enter a valid ingredient name and value!`);
    }


  }

}
