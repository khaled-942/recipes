import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() highColor: string = 'blue';
  @Input() defaultColor: string = 'red';
  @HostBinding('style.color') color: string = this.defaultColor;
  @HostListener('mouseenter') mouseEnter(dataEvent: Event) {
    this.color = this.highColor;
    //   this.renderer.setStyle(this.element.nativeElement,'color','green')
  }
  @HostListener('mouseleave') mouseLeave(dataEvent: Event) {
    this.color = this.defaultColor;
    //   this.renderer.setStyle(this.element.nativeElement,'color','black')
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this is the basic way
    // this.element.nativeElement.style.backgroundColor = 'green';
    // this is the better way
    // this.renderer.setStyle(this.element.nativeElement,'color','green')
  }
}
