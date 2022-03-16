import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 Venus
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
 master

@NgModule({
  declarations: [
    AppComponent,
 Venus
    HomeComponent
    LoginComponent
master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
