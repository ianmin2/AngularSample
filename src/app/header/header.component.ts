import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectPath = new EventEmitter<string>();


  selectedPath:string = "Recipes"

  title:string;
  constructor() {

    this.title = "Recipe Book";

  }

  ngOnInit(): void {
  }

  implementPath( path: string)
  {
    this.selectedPath = path;
    // console.log(`\n\n=========================================================\n@implementingPath ${path}\n=========================================================\n\n`)
    this.selectPath.emit(path);
  }

  isPathSelected(path:string)
  {
    // console.log(`\n\n\=======================\n@${path}\n\n`)
    return this.selectedPath == path;
  }

}
