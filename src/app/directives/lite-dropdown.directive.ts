import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appLiteDropdown]'
})
export class LiteDropdownDirective {

  @HostBinding('class.open') isOpen = false;
  @HostListener('document.click',['$event']) toggleOpen (evt:Event){
    this.isOpen = (this.elRef.nativeElement.contains(evt.target)) ? !this.isOpen : false;
  }

  constructor(private elRef:ElementRef){}


  //@ Don't

  // isOpen:boolean = false;
  // @HostListener('click') toggleOpen(evt:Event){
  //   if(this.isOpen)
  //   {
  //     //@ Remove Class
  //     this.renderer.removeClass(this.elRef.nativeElement,'open');
  //   }
  //   else
  //   {
  //     //@ Add Class
  //     this.renderer.addClass(this.elRef.nativeElement,'open');
  //   }

  //   this.upDateClassAttachment();

  // }

  // private upDateClassAttachment():void{
  //   this.isOpen=!this.isOpen;
  // }

  // constructor(private elRef:ElementRef, private renderer:Renderer2) { }

}
