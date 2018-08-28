import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgInputComponent } from './ag-input/ag-input.component';
import { AgTapComponent } from './ag-tap/ag-tap.component';
import { AgModalComponent } from './ag-modal/ag-modal.component';
import { AgMaskComponent } from './ag-mask/ag-mask.component';
import { AnimationsComponent } from './animations/animations.component';

const routes: Routes = [
  { path: 'aginput' , data: { title: 'Input 예' }, component: AgInputComponent },
  { path: 'agtap', data: { title: 'Tap 예'}, component: AgTapComponent},
  { path: 'agmodal', data: { title: 'Modal 예'}, component: AgModalComponent},
  { path: 'agmask', data: { title: 'Mask 예'}, component: AgMaskComponent},
  { path: 'animations', data: { title: '애니메이션'}, component: AnimationsComponent }
];


@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class AdvancedRoutingModule {}
