import {Injectable, NgZone, ViewChild} from '@angular/core';
import {BackgroundGeolocation} from "@ionic-native/background-geolocation";
import {Geolocation,Geoposition} from "@ionic-native/geolocation";
import 'rxjs/add/operator/filter';
import {TabsPage} from "../../pages/tabs/tabs";
import {NavController} from "ionic-angular";

@Injectable()
export class LocationTrackerProvider {

  @ViewChild('myNav') nav: NavController;
  public rootPage: any = TabsPage;
  public watch: any;
  public lat: number=0;
  public lng: number=0;
  public jsond : any;
  public markers:any;

  constructor(public zone: NgZone,
              public geolocation: Geolocation,
              public backgroundGeolocation:BackgroundGeolocation
  ){
    this.markers =
      [{
        'latitude': '40.7274699',
        'longitude': '-74.0700856'
      },
        {
          'latitude': '41.000000',
          'longitude': '-10.100000'
        },
        {
          'latitude': '57.000000',
          'longitude': '-10.100000'
        },
        {
          'latitude': '61.000000',
          'longitude': '-20.100000'
        }
      ]
  }

  startTracking() {
    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true,
      interval: 2000
    };
    this.backgroundGeolocation.configure(config).subscribe((location) => {
      console.log('BackgroundGeolocation: ' + location.latitude + ',' +
        location.longitude);
      this.zone.run(() => {
        //this.lat = location.latitude;
        this.lat = this.markers[0].latitude;
        this.lng = this.markers[0].longitude;
      });

    }, (err) => {
      console.log(err);
    });
    this.backgroundGeolocation.start();

    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };
    this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
      console.log(position);
      this.zone.run(() => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    });

    return this.jsond =
      {
        "latitude": this.lat,
        "longitude": this.lng
      }
  }

  stopTracking(){
    console.log('stopTracking');
    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
  }
}
