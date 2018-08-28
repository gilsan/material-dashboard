import { Component, OnInit, Input, ContentChild , AfterViewInit, HostBinding} from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'app-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit, AfterViewInit {
  @Input() icon: string;
  @ContentChild(InputRefDirective) input: InputRefDirective;
  constructor() { }

  ngAfterViewInit() {
    console.log('input', this.input);
    if (!this.input) {
      console.error('the au-fa-input needs an input inside its contents');
    }
  }

  ngOnInit() {
  }

  @HostBinding('class.input-focus')
  get isInputFoucs() {
     return this.input ? this.input.focus : false;
  }
  get classes() {
    const cssClasses = { };

    if (this.icon) {
       cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }

}
