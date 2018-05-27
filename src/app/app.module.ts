import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CsecComponent } from './csec/csec.component';
import { WhatweofferComponent } from './whatweoffer/whatweoffer.component';
import { SignupComponent } from './signup/signup.component';
import { GetincarComponent } from './getincar/getincar.component';
import { GotoschoolComponent } from './gotoschool/gotoschool.component';
import { DitchschoolComponent } from './ditchschool/ditchschool.component';
import { DuringcarComponent } from './duringcar/duringcar.component';
import { AtpoolComponent } from './atpool/atpool.component';
import { ContactusComponent } from '../webpages/contactus/contactus.component';
import { FormsModule}         from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ResourcesComponent } from './resources/resources.component';
import { StacyComponent } from './stacy/stacy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartingpointComponent } from './startingpoint/startingpoint.component';

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
    ResourcesComponent,
    StacyComponent,
    StartingpointComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
