import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingCompComponent } from './testing-comp/testing-comp.component';
import { PipelineComponent } from './pipeline/pipeline.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingCompComponent,
    PipelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
