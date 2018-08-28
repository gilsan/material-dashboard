import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputRef]'
})
export class InputRefDirective {
  focus = false;
  constructor() { }

  @HostListener('focus')
    onFocus() {
      this.focus = true;
    }
  @HostListener('blur')
  onblur() {
    this.focus = false;
  }

}
