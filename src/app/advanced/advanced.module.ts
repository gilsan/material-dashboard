import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { BoxModule, TabsModule, DropdownModule } from 'angular-admin-lte';

import { AdvancedRoutingModule } from './advanced.routing';

import { AgInputComponent } from './ag-input/ag-input.component';
import { AdvancedComponent } from './advanced.component';
import { AuInputModule } from './ag-input/lib/au-input.module';
import { AgTapModule } from './ag-tap/ag-tap.module';
import { AgModalModule } from './ag-modal/ag-modal.module';
import { AgModelService } from './ag-modal/ag-model.service';
import { AgMaskModule } from './ag-mask/ag-mask.module';
import { AnimationsModule } from './animations/animations.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    MaterialModule,
    BoxModule, TabsModule, DropdownModule,
    AuInputModule, AgTapModule,
    AgModalModule, AgMaskModule,
    AnimationsModule,
  //  BrowserAnimationsModule


  ],
  declarations: [
    AgInputComponent,
    AdvancedComponent,
  ],
  providers: [AgModelService]
})
export class AdvancedModule { }
