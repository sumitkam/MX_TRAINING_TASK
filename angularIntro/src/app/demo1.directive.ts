import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo1]'
})
export class Demo1Directive {

  constructor(private eleRef : ElementRef,private renderer : Renderer2) {
    // this.task('red','lightgreen');
    this.checkPassword();

  }

  checkPassword(){
    var len = this.eleRef.nativeElement.value.length;

    if(len < 8){
      this.eleRef.nativeElement.style.background = 'red';
    }else if(len >=8 && len < 13){
      this.eleRef.nativeElement.style.background = 'orange';
    }
    else{
      this.eleRef.nativeElement.style.background = 'green';
    }

  }

  @HostListener('window:keyup')ngOnChanges() {
   this.checkPassword();
  }

  // task(bg:string,color:string){
  //   var texLength = this.eleRef.nativeElement.innerHTML.length;

  //   if(texLength > 0 && texLength <=10){
  //     this.renderer.setStyle(this.eleRef.nativeElement,'background',bg);
  //     this.renderer.setStyle(this.eleRef.nativeElement, 'color',color);
  //     this.eleRef.nativeElement.innerHTML = texLength;
  //   }else if()
  // }
  // @HostListener('mouseenter')onMouseEnter(){
  //   this.task('red','white');
  // }
  // @HostListener('mouseleave')onMouseLeave(){
  //   this.task('yellow','blue');
  // }

}
