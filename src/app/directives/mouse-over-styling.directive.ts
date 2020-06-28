import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseOverStyling]'
})
export class MouseOverStylingDirective implements OnInit {

  @HostListener('mouseenter') mouseover(evntData:Event)
  {
    this.renderer.addClass(this.elRef.nativeElement,'app-list-background');
  }


  @HostListener('mouseleave') mouseleave(evntData:Event)
  {
    this.renderer.removeClass(this.elRef.nativeElement,'app-list-background');
  }


  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit()
  {

  }

}
