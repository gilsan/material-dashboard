import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import * as _ from 'lodash';
import { SPECIAL_CHARACTERS, TAB,
  overWriteCharAtPosition, LEFT_ARROW, RIGHT_ARROW,
  BACKSPACE, DELETE,
} from './mask.utils';
import { maskDigitValidators, neverValidator } from './digit.validators';

@Directive({
  selector: '[appAuMask]'
})
export class AuMaseDirective implements OnInit {

   @Input('appAuMask') mask = '';

   input: HTMLInputElement;
   fullFieldSelected = false;
  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnInit() {
   this.input.value = this.buildPlaceHolder();
  }

  @HostListener('select', ['$event'])
  onselect($event: UIEvent) {
     this.fullFieldSelected = this.input.selectionStart == 0 &&
                     this.input.selectionEnd === this.input.value.length;
  }

  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode) {

    if ($event.metaKey || $event.ctrlKey) {
      return;
    }

    if (keyCode !== TAB) {
        $event.preventDefault();
    }
    const key = String.fromCharCode(keyCode);
    const cursorPos = this.input.selectionStart;

    if (this.fullFieldSelected) {
      this.input.value = this.buildPlaceHolder();
      const firstPlaceholderPos = _.findIndex(this.input.value, char => char === '_');
      this.input.setSelectionRange(firstPlaceholderPos, firstPlaceholderPos);
    }

    switch (keyCode) {
      case LEFT_ARROW:
          this.handleLeftArrow(cursorPos);
          return;
      case RIGHT_ARROW:
          this.handleRightArrow(cursorPos);
         return;

    case BACKSPACE:
         this.handleBackspce(cursorPos);
         return;

    case DELETE:
         this.handleDelete(cursorPos);
         return;
    }

    const maskDigit = this.mask.charAt(cursorPos);
    const digitValidator =   maskDigitValidators[maskDigit] || neverValidator;

    if (digitValidator(key)) {
      overWriteCharAtPosition(this.input, cursorPos, key);
      this.handleRightArrow(cursorPos);
    }

  }

  handleBackspce(cursorPos) {
     const previousPos = this.calcuatePreviousCursor(cursorPos);
     if (previousPos >= 0 ) {
      overWriteCharAtPosition(this.input, previousPos, '_');
      this.input.setSelectionRange(previousPos, previousPos);
     }
  }

  handleDelete(cursorPos) {
    overWriteCharAtPosition(this.input, cursorPos, '_');
    this.input.setSelectionRange(cursorPos, cursorPos);
  }


  handleRightArrow(cursorPos) {
    const valueAfterCursor = this.input.value.slice(cursorPos + 1);
    const nextPos = _.findIndex(valueAfterCursor,
           char => !_.includes(SPECIAL_CHARACTERS, char));
         if (nextPos >= 0 ) {
           const newCursorPos = cursorPos + nextPos + 1;
           this.input.setSelectionRange(newCursorPos, newCursorPos);
         }
  }

  handleLeftArrow(cursorPos) {
       const previousPos = this.calcuatePreviousCursor(cursorPos);
         if (previousPos >= 0 ) {
           this.input.setSelectionRange(previousPos, previousPos);
         }
  }

  calcuatePreviousCursor(cursorPos) {
    const valueBeforeCursor = this.input.value.slice(0, cursorPos);
    return _.findLastIndex(valueBeforeCursor,
           char => !_.includes(SPECIAL_CHARACTERS, char));
  }

  buildPlaceHolder(): string {
     const chars = this.mask.split('');
     return chars.reduce((result, char) => {
        return result +=
          _.includes(SPECIAL_CHARACTERS, char) ? char : '_';
     }, '');

  }
}
