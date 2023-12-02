import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective{
  listItems:any
  @HostListener('click') toggleClass() {
    this.eleRef.nativeElement.classList.toggle('show');
  }
  @HostListener('document:click', ['$event'])
  clickout(event:Event) {
    if(this.eleRef.nativeElement.contains(event.target)) { } else {
      this.eleRef.nativeElement?.classList.remove('show');
    }
  }
  constructor(private eleRef: ElementRef) {}
}
