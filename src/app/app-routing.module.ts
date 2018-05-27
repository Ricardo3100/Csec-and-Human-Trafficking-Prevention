import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';

import { CsecComponent } from './csec/csec.component';
import { WhatweofferComponent } from './whatweoffer/whatweoffer.component';
import { SignupComponent } from './signup/signup.component';
import { GetincarComponent } from './getincar/getincar.component';
import { DitchschoolComponent } from './ditchschool/ditchschool.component';
import { GotoschoolComponent } from './gotoschool/gotoschool.component';
import { DuringcarComponent } from './duringcar/duringcar.component';
import { AtpoolComponent } from './atpool/atpool.component';
import { StacyComponent } from './stacy/stacy.component';
import { StartingpointComponent } from './startingpoint/startingpoint.component';
import { StayinschoolComponent } from './stayinschool/stayinschool.component';
import { StudytogetherComponent } from './studytogether/studytogether.component';




const routes: Routes = [

  { path: 'csec', component: CsecComponent },
  { path: 'whatweoffer', component: WhatweofferComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'getincar', component: GetincarComponent },
  { path: 'gotoschool', component: GotoschoolComponent },
  { path: 'ditchschool', component: DitchschoolComponent },
  { path: 'duringcar', component: DuringcarComponent },
  { path: 'atpool', component: AtpoolComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'stacy', component: StacyComponent },
  { path: 'startingpoint', component: StartingpointComponent},
  { path: 'stayinschool', component: StayinschoolComponent}  ,
  { path:'studytogether', component: StudytogetherComponent} ,
  
    
   { path: '**',
    redirectTo: '/csec'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
