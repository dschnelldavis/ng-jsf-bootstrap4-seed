import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { JsonSchemaFormModule } from 'angular2-json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, NoopAnimationsModule, JsonSchemaFormModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
