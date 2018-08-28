import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'app-au-md-input',
  templateUrl: './au-md-input.component.html',
  styleUrls: ['./au-md-input.component.scss']
})
export class AuMdInputComponent implements OnInit {
  @Input() icon: string;
  @ContentChild(InputRefDirective) input: InputRefDirective;
  constructor() { }

  ngOnInit() {
  }

  @HostBinding('class.input-focus')
  get isInputFoucs() {
     return this.input ? this.input.focus : false;
  }

}
