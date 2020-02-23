import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router } from '@angular/router';

import { HeaderComponent } from  './shared/components/header/header.component'
import {ClientloginComponent} from './modules/clientlogin/clientlogin.component';
import { MusicianloginComponent } from './modules/musicianlogin/musicianlogin.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { ContactusComponent } from './modules/contactus/contactus.component';

const routes: Routes = [
  {
    path: 'home',
    component: HeaderComponent

  },
  {
    path: 'clientlogin',
component: ClientloginComponent
},
{
  path:'musicianlogin',
  component: MusicianloginComponent

},
{
  path:'aboutus',
  component: AboutusComponent,
  
},
{
  path:'contactus',
  component: ContactusComponent
},
 {
   path: '',
   redirectTo: '/home',
   pathMatch: 'full'
 }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
