import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CsecComponent } from './csec/csec.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WhatweofferComponent } from './whatweoffer/whatweoffer.component';
import { SignupComponent } from './signup/signup.component';
import { GetincarComponent } from './getincar/getincar.component';
import { GotoschoolComponent } from './gotoschool/gotoschool.component';
import { DitchschoolComponent } from './ditchschool/ditchschool.component';
import { DuringcarComponent } from './duringcar/duringcar.component';
import { AtpoolComponent } from './atpool/atpool.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    CsecComponent,
    WhatweofferComponent,
    SignupComponent,
    GetincarComponent,
    GotoschoolComponent,
    DitchschoolComponent,
    DuringcarComponent,
    AtpoolComponent,
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
