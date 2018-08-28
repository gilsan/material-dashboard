 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { MaterialModule } from './material.module';


@NgModule({
  imports: [
    BrowserModule,
  // BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
     MaterialModule,
  //   BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
