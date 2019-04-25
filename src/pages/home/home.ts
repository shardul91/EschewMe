import {Component} from '@angular/core';
import {AlertController, NavParams} from 'ionic-angular';
import {LocationTrackerProvider} from "../../providers/location-tracker/location-tracker";
import { ToastController } from 'ionic-angular';
import {SMS} from "@ionic-native/sms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  locations:any;
  error: any;
  json:any;
  result:any;
  markers:any;

  constructor(
              private toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public navParams:NavParams,
              public sms:SMS,
              public locationTracker: LocationTrackerProvider
              ) {

  }


  ngOnInit() {
    this.start();
    this.markers=this.locationTracker.markers;
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'GPS already tracking your current location',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  start(){
    this.result = this.locationTracker.startTracking();
    console.log(this.result);
    this.json=this.locationTracker.jsond;
    console.log(this.json);
    console.log(this.json.latitude);
    console.log(this.json.longitude);
    //this.locations.push(this.json);
    this.locationTracker.markers.push(this.json);
  }

  stopLocationTracking(){
    this.locationTracker.stopTracking();
  }

  addLocation(){
    let prompt = this.alertCtrl.create({
      title: 'Add Location',
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.locations.push(location);
          }
        }
      ]
    });
    prompt.present();
  }
  sendSMS(){
    this.sms.send('+18155272470', 'Help. Current co-ordinates: ' +'https://maps.google.com/maps?q='+this.json.latitude+','+this.json.longitude);
  }
}
