import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(public platform: Platform,
              //public statusBar: StatusBar,
              //public androidPermissions: AndroidPermissions,
              //public splashScreen: SplashScreen
  ) {

    this.initializeApp();
    platform.ready().then(() => {/*
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );*/
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
  //    this.statusBar.styleDefault();
//      this.splashScreen.hide();


    });
  }
}
