import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppBpmnComponent } from './components/app-bpmn/app-bpmn.component';
import { AppBpmnModelerComponent } from './components/app-bpmn-modeler/app-bpmn-modeler.component';
@NgModule({
  declarations: [
    AppComponent,
    AppBpmnComponent,
    AppBpmnModelerComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
