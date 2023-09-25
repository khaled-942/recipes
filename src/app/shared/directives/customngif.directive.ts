import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomngif]'
})
export class CustomngifDirective {
@Input() set appCustomngif(condition:boolean){
  if(!condition){
    this.vcRef.createEmbeddedView(this.tempRef);
  }else{
      this.vcRef.clear();
  }
}
  constructor(private tempRef:TemplateRef<any>, private vcRef: ViewContainerRef) { }
}
