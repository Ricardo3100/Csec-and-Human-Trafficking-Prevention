import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsecComponent } from './csec/csec.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WhatweofferComponent } from './whatweoffer/whatweoffer.component';
import { SignupComponent } from './signup/signup.component';
import { GetincarComponent} from './getincar/getincar.component';
import { DitchschoolComponent } from './ditchschool/ditchschool.component';
import { GotoschoolComponent } from './gotoschool/gotoschool.component';
import { DuringcarComponent} from './duringcar/duringcar.component';
import { AtpoolComponent } from './atpool/atpool.component';

const routes: Routes = [

{ path: 'csec', component: CsecComponent},
{ path: 'contactus' , component: ContactusComponent},
{ path: 'whatweoffer', component: WhatweofferComponent},
{ path: 'signup' , component: SignupComponent},
{ path: 'getincar', component: GetincarComponent},
{ path: 'gotoschool', component: GotoschoolComponent},
{ path: 'ditchschool', component: DitchschoolComponent},
{ path: 'duringcar', component: DuringcarComponent},
{ path: 'atpool', component: AtpoolComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
