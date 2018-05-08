import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FoolComponent } from './fool/fool.component';
import { PizzaComponent } from './pizza/pizza.component';
import { CsecComponent } from './csec/csec.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WhatweofferComponent } from './whatweoffer/whatweoffer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FoolComponent,
    PizzaComponent,
    ContactusComponent,
    CsecComponent,
    WhatweofferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
