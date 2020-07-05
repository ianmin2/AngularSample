import { Directive, Input, ViewChild } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {
@Input() set customIf(condition:Boolean, ){
  if(condition)
  {

  }
  else
  {

  }
}
  constructor(private vcRef:ViewChild, ) { }

}
