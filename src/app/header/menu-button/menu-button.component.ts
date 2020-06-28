import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'byte-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  @Output() pathSelected = new EventEmitter<string>();

  @Input() customClass:string;
  @Input() targetUrl:string;
  @Input() title:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(path:string)
  {
    // console.log(`\n\n=========================================================\n@menu-button onSelect selecting '${path}'\n=========================================================\n\n`)
    this.pathSelected.emit(path);
  }

}
