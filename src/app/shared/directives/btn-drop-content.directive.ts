import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBtnDropContent]',
  standalone: true,
})
export class BtnDropContentDirective {
  @Input() appBtnDropContent = false;
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(false);
  }

  private highlight(isOpenBtnDropdown: boolean) {
    // this.el.nativeElement.style.backgroundColor = '';
    console.log('element: ', this.el.nativeElement.nextSibling);
    // this.el.nativeElement.nextSibling.classList.remove('hidden');
    this.el.nativeElement.style.backgroundColor = true;
  }
}
