import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective implements OnInit {

  // constructor( ) { }
  constructor(private elRef:ElementRef, private renderer: Renderer2) {}

  ngOnInit(){

    this.renderer.addClass(this.elRef.nativeElement,'important');


    // // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','deepskyblue');
    // VS
    // // this.elRef.nativeElement.style.backgroundColor = "darkslategrey";
    // // this.elRef.nativeElement.style.color = "white";
    // // this.elRef.nativeElement.style.padding = "0.2em";
  }

}
