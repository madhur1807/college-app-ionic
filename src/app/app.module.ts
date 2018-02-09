import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'; 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LocationPage } from '../pages/location/location';
import { TimeTablePage } from '../pages/time-table/time-table';
import { DevelopersPage } from '../pages/developers/developers';
import { SyllabusPage } from '../pages/syllabus/syllabus';
import {  BookYourRidePage } from '../pages/book-your-ride/book-your-ride';
import { StatusBar } from '@ionic-native/status-bar';
import { ModalPage } from '../pages/modal/modal';
import { Modal2Page } from '../pages/modal2/modal2'; 
import { SplashScreen } from '@ionic-native/splash-screen';
import { OlaCabBookingProvider } from '../providers/ola-cab-booking/ola-cab-booking';
import { IonicStorageModule } from '@ionic/storage';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DevelopersPage,
    LocationPage,
    BookYourRidePage,
    TimeTablePage,
    ModalPage,
    SyllabusPage,
    Modal2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DevelopersPage,
    LocationPage,
    BookYourRidePage,
    TimeTablePage,
    ModalPage,
    SyllabusPage,
    Modal2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OlaCabBookingProvider,
    Geolocation,
    LocationAccuracy,
    InAppBrowser
  ]
})
export class AppModule {}
