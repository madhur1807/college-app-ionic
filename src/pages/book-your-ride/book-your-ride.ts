import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OlaCabBookingProvider } from '../../providers/ola-cab-booking/ola-cab-booking';
import { Geolocation } from '@ionic-native/geolocation';
declare var google:any;
@IonicPage()
@Component({
  selector: 'page-book-your-ride',
  templateUrl: 'book-your-ride.html',
})
export class BookYourRidePage {
  @ViewChild('search') yourlocation : ElementRef;
  @ViewChild('infocontent') infodisplay : ElementRef;
  @ViewChild('map') mymap : ElementRef;
  map:any;
  resp:any;
  chomudetails:any;
  uber:any;
  ola:any;
  userLat:any;
  userLong:any;
  uberdetails:any;
  oladetails:any;
  collegeLat :any = '28.531815' ;
  collegeLong :any = '77.0567556' ;
  olaCategory:any;
  uberCategory:any;
  selectedUberCategory:any;
  selectedOlaCategory:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private olaBooking : OlaCabBookingProvider, private geolocation : Geolocation) {
    this.getUserLatLong();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookYourRidePage');
    this.skochvoting();
    this.autoComplete();
  }
  getUserLatLong(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.userLat = resp.coords.latitude;
      this.userLong = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  getFareUber(){
    this.selectedUberCategory = this.uberCategory;
    this.olaBooking.getRideDetails(this.userLat, this.userLong, this.collegeLat, this.collegeLong).subscribe(response => {
      this.uberdetails = response;
      // console.log(this.uberdetails);
      // console.log(this.uberdetails["prices"][2]);
      this.showDetailsUber();
    });     
  }
  
  skochvoting(){
    this.olaBooking.skoch().subscribe(response => {
      this.resp = response;
      console.log(this.resp);
    });
  }
  showDetailsUber(){
    if(this.selectedUberCategory == "premeir"){
      this.uber = this.uberdetails["prices"][2];
      return;
    } else if(this.selectedUberCategory == "pool"){
      this.uber = this.uberdetails["prices"][6];
      return;
    }  else if(this.selectedUberCategory == "go"){
      this.uber = this.uberdetails["prices"][8];
      return;
    } else if(this.selectedUberCategory == "xl"){
      this.uber = this.uberdetails["prices"][3];
      return;
    } else if(this.selectedUberCategory == "black"){
      this.uber = this.uberdetails["prices"][9];
    }
  }

  openUberApp(){
   let url = "https://m.uber.com/ul/?client_id=n1w2fu8nhFhys8FSj3pAx1NEPGKZ972Q&action=setPickup&pickup[latitude]="+this.userLat+"&pickup[longitude]="+this.userLong+"&dropoff[latitude]="+this.collegeLat+"&dropoff[longitude]"+this.collegeLong;
    window.open(url);
  }
 
  // getFareOla(olaCat){
  //   this.selectedOlaCategory = olaCat;
  //   this.olaBooking.getRideOlaDetails(this.userLat, this.userLong, this.collegeLat, this.collegeLong).subscribe(response => {
  //     this.oladetails = response;
  //     console.log(this.oladetails);
  //     // console.log(this.uberdetails["prices"][2]);
  //     // this.showDetailsUber();
  //   });    
  // }
  autoComplete(){
    let map:any;
    let location = new google.maps.LatLng( -33.8688, 151.2195);
    let options = {
      center: location,
      zoom : 10
    }
    this.map = new google.maps.Map(this.mymap.nativeElement, options);
    let autocomplete = new google.maps.places.Autocomplete(this.yourlocation);
    let infowindow = new google.maps.InfoWindow();    
    infowindow.setContent(this.infodisplay);
  }
}
