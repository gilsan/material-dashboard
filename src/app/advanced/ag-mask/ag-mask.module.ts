import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgMaskComponent } from './ag-mask.component';
import { AuMaseDirective } from './au-mask/au-mask.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
     AgMaskComponent,
     AuMaseDirective
    ],
  exports: [
    AuMaseDirective
  ]
})
export class AgMaskModule { }
