import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDangerElement]'
})
export class DangerElementDirective implements OnInit {

  constructor( private elRef:ElementRef, private renderer:Renderer2 ) { }

  ngOnInit()
  {
    this.renderer.addClass(this.elRef.nativeElement,'app-danger');
  }

}
