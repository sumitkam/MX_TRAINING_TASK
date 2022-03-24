import { Directive,TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appStructuredemo]'
})
export class StructuredemoDirective {

  constructor(private tempRef:TemplateRef<any>,private viewRef : ViewContainerRef) {

  }

  @Input() set appStrDir(time: number){
    setTimeout(()=>{
      this.viewRef.createEmbeddedView(this.tempRef);
    }, time);
  }


}
