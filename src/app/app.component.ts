import { Component } from '@angular/core';
  import { from } from 'rxjs';

@Component({
  selector: 'byte-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedComponent:string = "recipes";

  title = "Recipe Book";
  name="";

  displaySelectedComponent(path:string)
  {
    this.selectedComponent = path
                  .trim()
                  .toLowerCase()
                  .replace(/\s/ig,'-');

                  // console.log(`\n\n=========================================================\n@app-component updated selected component to '${this.selectedComponent}'\n=========================================================\n\n`)

  }

  isSelectedButtonComponent(componentName:string)
  {
    let curr = componentName.trim().toLowerCase().replace(/\s/ig,'-');
    return curr == this.selectedComponent;
  }

}
