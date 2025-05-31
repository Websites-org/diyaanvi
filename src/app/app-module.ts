import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';
import { Services } from './services/services';
import { Home } from './home/home';
import { Doctor } from './doctor/doctor';
import { DoctorAbhiram } from './doctor-abhiram/doctor-abhiram';

@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,
    Contact,
    Services,
    Home,
    Doctor,
    DoctorAbhiram
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
