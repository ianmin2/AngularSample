import { LiteLoggerService } from './../../services/lite-logger.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-dropdown-button',
  templateUrl: './ui-dropdown-button.component.html',
  styleUrls: ['./ui-dropdown-button.component.css']
})
export class UiDropdownButtonComponent implements OnInit {


  @Input() mainClass:string = "";
  @Input() customClass:string = "";
  @Input() targetUrl:string = "";
  @Input() title:string = "";
  @Input() subMenuItems: any = "";
  @Input() isAlignedRight:string = "";

  @Input() callback:Function = () => { console.log('Nada!')};


  constructor(private logger:LiteLoggerService) {

   }

  ngOnInit(): void {

    let rgx = new RegExp(/\{(.*?)\}/ig);

    this.subMenuItems = this.subMenuItems
    .replace(/\'/ig,'"')
    .match(rgx)
    .map(itm=>JSON.parse(itm),[]);

    // let cb = `(function ${this.callback})`.toString();
    // this.callback = eval(cb);


  }

  // runCallback()
  // {
  //   this.logger.log(`Attempting to execute ${this.callback} of type ${typeof this.callback}`);

  //   // eval(this.callback);
  // }


  getAlignment()
  {
    let v = this.isAlignedRight.toLowerCase();
    return (v == "true" || v== "y" || v=="1" || v== "yes")  ? true : false;
  }


}
