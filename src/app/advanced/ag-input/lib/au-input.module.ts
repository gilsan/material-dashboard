import { MaterialModule } from './../../../material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuFaInputComponent } from './au-fa-input/au-fa-input.component';
import { InputRefDirective } from './common/input-ref.directive';
import { AuMdInputComponent } from './au-md-input/au-md-input.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
declarations: [  AuFaInputComponent, InputRefDirective, AuMdInputComponent],
exports: [ AuFaInputComponent, InputRefDirective, AuMdInputComponent ]
})
export class AuInputModule {}
