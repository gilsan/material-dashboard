import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgTapComponent } from './ag-tap.component';
 import { AuTapComponent } from './au-tap/au-tap.component';
 import { AuTapPanelComponent } from './au-tap-panel/au-tap-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AgTapComponent,
    AuTapComponent,
    AuTapPanelComponent
],
  exports: [
    AuTapComponent,
    AuTapPanelComponent
  ]
})
export class AgTapModule { }
