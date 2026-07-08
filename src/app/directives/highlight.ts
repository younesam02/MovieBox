import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private elementRef = inject(ElementRef<HTMLElement>);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.borderColor = '#facc15';
    this.elementRef.nativeElement.style.transform = 'translateY(-6px)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.borderColor = 'rgba(255, 255, 255, 0.12)';
    this.elementRef.nativeElement.style.transform = 'translateY(0)';
  }
}