import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OlaCabBookingProvider } from '../../providers/ola-cab-booking/ola-cab-booking';
import { Geolocation } from '@ionic-native/geolocation';
// import { QueryList } from '@angular/core/src/linker/query_list';
declare var google:any;
@IonicPage()
@Component({
  selector: 'page-book-your-ride',
  templateUrl: 'book-your-ride.html',
})
export class BookYourRidePage { 
  // @ViewChildren('map', { read: ElementRef })  mapRef :ElementRef;
  @ViewChild('map') mapRef : ElementRef;
  @ViewChild('search') yourlocation : ElementRef;
  @ViewChild('infocontent') infodisplay : ElementRef;
  

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
    var autocomplete;
    let lat = -33.8688;
    let long =  151.2195;
    const location = new google.maps.LatLng(lat, long);    
    const options = {
      center: location,
      zoom : 13
    }    
    setTimeout( ()=>{ 
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);      
      this.addMarker(location, this.map);},1000);
    setTimeout( ()=>{ 
      autocomplete = new google.maps.places.Autocomplete(this.yourlocation.nativeElement);
      let infowindow = new google.maps.InfoWindow();    
      infowindow.setContent(this.infodisplay);
      autocomplete.addListener('place_changed', function() {
        // infowindow.close();
        // marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          console.log("here");
          this.map.fitBounds(place.geometry.viewport);
        } else {
          this.map.setCenter(place.geometry.location);
          this.map.setZoom(17);  // Why 17? Because it looks good.
        }
        // marker.setPosition(place.geometry.location);
        // marker.setVisible(true);

        // var address = '';
        // if (place.address_components) {
        //   address = [
        //     (place.address_components[0] && place.address_components[0].short_name || ''),
        //     (place.address_components[1] && place.address_components[1].short_name || ''),
        //     (place.address_components[2] && place.address_components[2].short_name || '')
        //   ].join(' ');
        // }

        // infowindowContent.children['place-icon'].src = place.icon;
        // infowindowContent.children['place-name'].textContent = place.name;
        // infowindowContent.children['place-address'].textContent = address;
        // infowindow.open(map, marker);
      });
    },100); 
    
  }
  addMarker(loc, mymap){
    return new google.maps.Marker({
      map:mymap,
      position:loc,
      title:"You are here!"
    });
  }  
}
