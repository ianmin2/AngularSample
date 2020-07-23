import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedPath:string = "Recipes"

  title:string;
  constructor() {

    this.title = "Recipe Book";

  }

  ngOnInit(): void {
  }




}
