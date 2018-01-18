import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JsonSchemaFormModule, Bootstrap4FrameworkModule } from 'angular2-json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule, Bootstrap4FrameworkModule, JsonSchemaFormModule.forRoot(Bootstrap4FrameworkModule)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
