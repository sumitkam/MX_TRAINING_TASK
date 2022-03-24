import { Directive , ElementRef , Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private eleRef : ElementRef, private renderer : Renderer2) {
    // eleRef.nativeElement.style.color = 'red';
    // eleRef.nativeElement.style.background = 'orange';
    this.changeDom('purple','lightblue');

  }
  changeDom(bg:String,color:String){
    this.renderer.setStyle(this.eleRef.nativeElement,'background',bg);
    this.renderer.setStyle(this.eleRef.nativeElement, 'color',color);
    var texLength = this.eleRef.nativeElement.innerHTML.length;
    this.eleRef.nativeElement.innerHTML = texLength;
  }

  @HostListener('mouseenter')onMouseEnter(){
    this.changeDom('red','white');
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.changeDom('yellow','blue');
  }

}
