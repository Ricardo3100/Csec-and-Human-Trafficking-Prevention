import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoolComponent } from './fool/fool.component';
import { TestComponent } from './test/test.component';
import { PizzaComponent } from './pizza/pizza.component';
import { CsecComponent } from './csec/csec.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WhatweofferComponent } from './whatweoffer/whatweoffer.component';

const routes: Routes = [
  { path: 'pizza', component: PizzaComponent},
{ path: 'csec', component: CsecComponent},
{ path: 'contactus' , component: ContactusComponent},
{ path: 'whatweoffer', component: WhatweofferComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
