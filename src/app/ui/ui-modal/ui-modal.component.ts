import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.css']
})
export class UiModalComponent implements OnInit {

 @Input("openText") modalOpenText:string = "Open Modal";
 @Input("openClass") modalOpenClass:string = "btn-primary";

  constructor() { }

  ngOnInit(): void {
  }

}
