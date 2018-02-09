import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController  } from 'ionic-angular';
import { OlaCabBookingProvider } from '../../providers/ola-cab-booking/ola-cab-booking';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
declare var google:any;

@IonicPage()
@Component({
  selector: 'page-book-your-ride',
  templateUrl: 'book-your-ride.html',
})
export class BookYourRidePage { 
  @ViewChild('map') mapRef : ElementRef;
  @ViewChild('search') yourlocation : ElementRef;
  @ViewChild('infocontent') infodisplay : ElementRef;
  usercordinates:any;
  marker:any = new google.maps.Marker();
  disableSelector:boolean = true;
  disableSelector1:boolean = true;
  uberfromprices:any;
  response:any;
  map:any;
  chomudetails:any;
  uber:any;
  ola:any;
  uberFrom:any;
  userLat:any;
  userLong:any;
  uberdetails:any;
  oladetails:any;
  collegeLat :any = '28.531911' ;
  collegeLong :any = '77.0588622' ;
  olaCategory:any;
  uberCategory:any;
  uberFromCategory:any;
  selectedUberCategory:any;
  selectedOlaCategory:any;
  yourlocationvalue:any;
  ride:any;
  constructor(public navCtrl: NavController, public loadingController: LoadingController, private locationAccuracy: LocationAccuracy, public platform : Platform, public alertCtrl: AlertController, public navParams: NavParams, private storage: Storage, private olaBooking : OlaCabBookingProvider, private geolocation : Geolocation) {
    if (this.platform.is('cordova')) {
      this.locationAccuracy.canRequest().then((canRequest: boolean) => {
        if(canRequest) {
        // the accuracy option will be ignored by iOS
          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => console.log('Request successful'),
          error => console.log('Error requesting location permissions'+JSON.stringify(error))
          );
        }    
      });
    }
    
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookYourRidePage');   
    this.ride = "to";
    this.getUserCordinates();
  }

  getUserCordinates(){
    var asd = this;
    let loader = this.loadingController.create({
      content: "Please wait while we fetch your current location!"
    });  
    loader.present();
    let options = {timeout: 2000, enableHighAccuracy: true, maximumAge: 0};
    this.platform.ready().then(function repeat(){
      asd.geolocation.getCurrentPosition(options).then((resp) => {
        asd.userLat = resp.coords.latitude;
        asd.userLong = resp.coords.longitude;
        asd.olaBooking.getRideDetails(asd.userLat, asd.userLong, asd.collegeLat, asd.collegeLong).subscribe(response => {
          asd.uberdetails = response;
          asd.disableSelector1 = false;
          loader.dismiss();
        });
      }).catch((error) => {
        console.log('Error getting location', error);
        setTimeout(repeat, 2000);
      });        
    });       
  }

  // getFareUber(){
  //   this.selectedUberCategory = this.uberCategory;
  //   this.olaBooking.getRideDetails(this.userLat, this.userLong, this.collegeLat, this.collegeLong).subscribe(response => {
  //     this.uberdetails = response;
  //     // console.log(this.uberdetails);
  //     // console.log(this.uberdetails["prices"][2]);
  //     this.showDetailsUber();
  //   });     
  // }
  
 
  showDetailsUber(){
    for(let i=0; i<this.uberdetails["prices"].length; i++){
      if(this.uberdetails["prices"][i]["display_name"] == this.uberCategory){
        this.uber = this.uberdetails["prices"][i];
        return;
      }
    }
  }

  openUberApp(){
   let url = "https://m.uber.com/ul/?client_id=n1w2fu8nhFhys8FSj3pAx1NEPGKZ972Q&action=setPickup&pickup[latitude]="+this.userLat+"&pickup[longitude]="+this.userLong+"&dropoff[latitude]="+this.collegeLat+"&dropoff[longitude]"+this.collegeLong;
    window.open(url);
  }

  openUberAppFrom(){
    let userFromLatitude:any;
    let userFromLongitude:any;
    this.storage.get("userFromLat").then((val)=>{
      console.log("userFromLatitude" + val);
      this.storage.get("userFromLong").then((val) => {
        userFromLongitude = val;
        let url = "https://m.uber.com/ul/?client_id=n1w2fu8nhFhys8FSj3pAx1NEPGKZ972Q&action=setPickup&pickup[latitude]="+this.collegeLat+"&pickup[longitude]="+this.collegeLong+"&dropoff[latitude]="+userFromLatitude+"&dropoff[longitude]"+userFromLongitude;
        window.open(url);
      });
    });
    
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
    this.uberFrom = undefined;
    let storage : any = this.storage;
    storage.remove("uberfromprices");
    storage.remove("userFromLat");
    storage.remove("userFromLong");
    storage.remove("newformattedaddress");
    var callFunction = this.olaBooking;
    var userFormattedAddress:any;
    var gmap = this.map;
    var autocomplete;
    let lat = this.collegeLat;
    let long =  this.collegeLong;
    const location = new google.maps.LatLng(lat, long);    
    const options = {
      center: location,
      zoom : 17
    } 
    let marker = this.marker;
    let userFromCollegeLat:any;
    let userFromCollegeLong:any;  

    setTimeout( ()=>{ 
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
      gmap = this.map;
      this.addMarker(location, this.map);},1000);
    setTimeout( ()=>{  
      autocomplete = new google.maps.places.Autocomplete(this.yourlocation.nativeElement);
      let infowindow = new google.maps.InfoWindow();    
      infowindow.setContent(this.infodisplay);
      autocomplete.addListener('place_changed', function() {
        // infowindow.close();
        // marker.setVisible(false);
        var place = autocomplete.getPlace();
        userFormattedAddress = place["formatted_address"];
        storage.set("newformattedaddress",userFormattedAddress);
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }
        
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          gmap.fitBounds(place.geometry.viewport);
          callFunction.getFromCordinates(userFormattedAddress).subscribe(response => {
            userFromCollegeLong = response["results"][0]["geometry"]["location"]["lng"];
            userFromCollegeLat = response["results"][0]["geometry"]["location"]["lat"];
            storage.set("userFromLat", userFromCollegeLat);
            storage.set("userFromLong", userFromCollegeLong);
          });

          marker = new google.maps.Marker({
            map : gmap,
            position : place.geometry.location,
            title : "You are here!",
            draggable : true
          });
          google.maps.event.addListener(marker, 'dragend', function() 
          {
            storage.set("userFromLat", marker.getPosition().lat());
            storage.set("userFromLong", marker.getPosition().lng());
            let geocoder = new google.maps.Geocoder();
            let latlng = {lat: marker.getPosition().lat(), lng: marker.getPosition().lng()};
            geocoder.geocode({'location': latlng}, function(results, status) {
              if (status === 'OK') {
                if (results[0]) {
                  //
                  storage.set("newformattedaddress", results[0].formatted_address);
                  console.log(autocomplete);
                  console.log(results[0].formatted_address);
                } else {
                  window.alert('No results found');
                }
              } else {
                window.alert('Geocoder failed due to: ' + status);
              }
            });
          });
        } else {
          gmap.setCenter(place.geometry.location);
          gmap.setZoom(15);  // Why 17? Because it looks good. 
          callFunction.getFromCordinates(userFormattedAddress).subscribe(response => {
            userFromCollegeLong = response["results"][0]["geometry"]["location"]["lng"]
            userFromCollegeLat = response["results"][0]["geometry"]["location"]["lat"];
            storage.set("userFromLat", userFromCollegeLat);
            storage.set("userFromLong", userFromCollegeLong);
          }); 
          return new google.maps.Marker({
            map:gmap,
            position:place.geometry.location,
            title:"You are here!",
            draggable : true
          });
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
  getMarkerLocation(){
    let userFromLatitude:any;
    let userFromLongitude:any;
    this.storage.get("userFromLat").then((val)=>{
      if(val == null || val == undefined){
        let alert = this.alertCtrl.create({
          title: 'Location Missing!',
          subTitle: 'Please enter your destination location first!',
          buttons: ['OK']
        });
        alert.present();
        return;
      }
      this.disableSelector = false;
      userFromLatitude = val;
      this.storage.get("newformattedaddress").then((val) =>{
        this.yourlocationvalue = val;
        this.storage.get("userFromLong").then((val) => {
          userFromLongitude = val;
          this.olaBooking.getRideDetails(this.collegeLat, this.collegeLong, userFromLatitude, userFromLongitude).subscribe(response => {
            this.storage.set("uberfromprices", response);
          });
        });
      });
    });
  }

  uberfareFrom(){
    var uberfromprices:any;
    this.storage.get("uberfromprices").then((val)=>{
      uberfromprices = val;
      for(let i=0; i<uberfromprices["prices"].length; i++){
        if(uberfromprices["prices"][i]["display_name"] == this.uberFromCategory){
          this.uberFrom = uberfromprices["prices"][i];
          return;
        }
      }
    }).catch((error)=>{
      console.log("error");
    });
  }

  disabledOption(){
    if(this.disableSelector == true){
      let alert = this.alertCtrl.create({
        title: 'Location Missing!',
        subTitle: 'Please enter your destination location first and click Set Location button!',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
