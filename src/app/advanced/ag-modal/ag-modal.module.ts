import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';

import { AgModalComponent } from './ag-modal.component';
import { AuModalComponent } from './au-modal/au-modal.component';
import { AuInputModule } from '../ag-input/lib/au-input.module';
import { AgTapModule } from '../ag-tap/ag-tap.module';
import { AgModalDirective } from './ag-modal.directive';


@NgModule({
  imports: [
    CommonModule,
    AuInputModule,
    AgTapModule,
    MaterialModule


  ],
  declarations: [
    AgModalComponent,
    AuModalComponent,
    AgModalDirective
  ],
  exports: [
    AuModalComponent,
    AgModalDirective
  ]
})
export class AgModalModule { }
