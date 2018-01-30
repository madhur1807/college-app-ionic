import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'; 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LocationPage } from '../pages/location/location';
import { DevelopersPage } from '../pages/developers/developers';
import {  BookYourRidePage } from '../pages/book-your-ride/book-your-ride';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OlaCabBookingProvider } from '../providers/ola-cab-booking/ola-cab-booking';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DevelopersPage,
    LocationPage,
    BookYourRidePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DevelopersPage,
    LocationPage,
    BookYourRidePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OlaCabBookingProvider
  ]
})
export class AppModule {}
