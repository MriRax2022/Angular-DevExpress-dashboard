import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDashboardControlModule } from 'devexpress-dashboard-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDashboardControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
