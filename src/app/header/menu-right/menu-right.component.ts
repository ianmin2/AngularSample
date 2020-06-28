import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'byte-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.css']
})
export class MenuRightComponent implements OnInit {

  @Input() customClass:string;
  @Input() targetUrl:string;
  @Input() title:string;

  searchString: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  onInputChange(event:any){
    this.searchString = event.target.value;
  }

  onSearchClick(event:any){
    event.preventDefault();
    console.log("search clicked!")
  }


}
