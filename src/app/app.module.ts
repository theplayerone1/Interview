import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './modules/footer/footer.component';
import { ClientloginComponent } from './modules/clientlogin/clientlogin.component';
import { MusicianloginComponent } from './modules/musicianlogin/musicianlogin.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { ContactusComponent } from './modules/contactus/contactus.component';
import { SearchComponent } from './modules/search/search.component';
import { MdashboardComponent } from './modules/mdashboard/mdashboard.component';
import { GenresComponent } from './shared/components/genres/genres.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientloginComponent,
    MusicianloginComponent,
    AboutusComponent,
    ContactusComponent,
    SearchComponent,
    MdashboardComponent,
    GenresComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
