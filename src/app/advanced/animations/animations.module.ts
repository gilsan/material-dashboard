import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';

import { MaterialModule } from './../../material.module';
import { AgTapModule } from '../ag-tap/ag-tap.module';
import { AgModalModule } from '../ag-modal/ag-modal.module';
import { AgMaskModule } from '../ag-mask/ag-mask.module';
import { AuInputModule } from '../ag-input/lib/au-input.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AgTapModule,
    AgModalModule,
    AgMaskModule,
    AuInputModule,
//    BrowserAnimationsModule



  ],
  declarations: [AnimationsComponent]
})
export class AnimationsModule { }
