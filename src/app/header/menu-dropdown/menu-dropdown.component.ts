import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'byte-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.css']
})





export class MenuDropdownComponent implements OnInit {

  @Input() customClass:string = "";
  @Input() targetUrl:string = "";
  @Input() title:string = "";
  @Input() subMenuItems: any = "";
  @Input() isAlignedRight:string = "";


  constructor() {

   }

  ngOnInit(): void {

    let rgx = new RegExp(/\{(.*?)\}/ig);

    this.subMenuItems = this.subMenuItems
    .replace(/\'/ig,'"')
    .match(rgx)
    .map(itm=>JSON.parse(itm),[]);


  }


  doDisplayElements()
  {
    console.dir( this.subMenuItems);
  }

  getAlignment()
  {
    let v = this.isAlignedRight.toLowerCase();
    return (v == "true" || v== "y" || v=="1" || v== "yes")  ? true : false;
  }

}
