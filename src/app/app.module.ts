import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {MapviewPage} from "../pages/mapview/mapview";

import { StatusBar } from '@ionic-native/status-bar';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import {BackgroundGeolocation} from "@ionic-native/background-geolocation";
import {Geolocation} from "@ionic-native/geolocation";
import {SMS} from "@ionic-native/sms";


@NgModule({
  declarations: [
    MyApp,
    MapviewPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapviewPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SMS,
    LocationTrackerProvider,
    BackgroundGeolocation,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
