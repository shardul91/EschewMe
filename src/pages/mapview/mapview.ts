import {Component, ViewChild,ElementRef} from '@angular/core';
import {NavController} from "ionic-angular";
import {LocationTrackerProvider} from "../../providers/location-tracker/location-tracker";
/**
 * Generated class for the MapviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google : any;
@Component({
  selector: 'page-mapview',
  templateUrl: 'mapview.html',
})


export class MapviewPage {
  map:any;
  @ViewChild('map') mapRef:ElementRef;
  constructor(public navCtrl: NavController,
              public locationtrackerprovider:LocationTrackerProvider
              ) {}

  ionViewDidLoad(){
    this.showMap();
    console.log(this.mapRef);
  }

  addNewMarker(){
    return new google.maps.LatLng(this.locationtrackerprovider.lat,this.locationtrackerprovider.lng);
  }
  refreshMap()
  {
    for (var i = 0; i < this.locationtrackerprovider.markers.length; i++) {
      const location2 = new google.maps.LatLng(this.locationtrackerprovider.markers[i].latitude, this.locationtrackerprovider.markers[i].longitude);
      console.log("ASDNNSAKDNAKSNDKSD"+this.locationtrackerprovider.markers[i].latitude,);
      this.addMarker(location2, this.map);
    }
  }
  showMap(){
    //const location=new google.maps.LatLng(51.000000,-0.100000);
    const location=new google.maps.LatLng(this.locationtrackerprovider.lat,this.locationtrackerprovider.lng);
    //const location1=this.addNewMarker();

    const options={
      center:location,
      zoom: 15,
      mapTypeId:'terrain'
    };
    this.map= new google.maps.Map(this.mapRef.nativeElement,options);
    //this.addMarker(location,this.map);
    //this.addMarker(location,this.map);
    this.refreshMap();
  }

  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    });
  }
}
