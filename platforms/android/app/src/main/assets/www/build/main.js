webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlaCabBookingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the OlaCabBookingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OlaCabBookingProvider = (function () {
    function OlaCabBookingProvider(http) {
        this.http = http;
        this.token = 'N1YezDlgeLsgrkEXITSmidPyP6LDuJPzywnsGXeW';
        console.log('Hello OlaCabBookingProvider Provider');
        this.skoch();
    }
    OlaCabBookingProvider.prototype.getRideDetails = function (userlat, userlong, collegelat, collegeLong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept-Language', 'en_US');
        headers.append('Authorization', 'Token ' + this.token);
        // headers.append('Origin','https://cors-anywhere.herokuapp.com');
        // headers.append('Origin','http://localhost:8100');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // let url = "https://cors-anywhere.herokuapp.com/https://api.uber.com/v1.2/estimates/price?start_latitude="+userlat+"&start_longitude="+userlong+"&end_latitude="+collegelat+"&end_longitude="+collegeLong;
        var url = "https://api.uber.com/v1.2/estimates/price?start_latitude=" + userlat + "&start_longitude=" + userlong + "&end_latitude=" + collegelat + "&end_longitude=" + collegeLong;
        return this.http.get(url, options)
            .map(function (response) { return response.json(); });
    };
    OlaCabBookingProvider.prototype.skoch = function () {
        return this.http.get("http://skochvoting.tk").map(function (response) { return response; });
    };
    // getRideOlaDetails(userlat, userlong, collegelat, collegeLong){
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   headers.append('Accept-Language', 'en_US');
    //   headers.append('Authorization', 'Token ' + this.token);
    //   console.log(headers);
    //   let options = new RequestOptions({ headers: headers });
    //   let url = "https://api.uber.com/v1.2/estimates/price?start_latitude="+userlat+"&start_longitude="+userlong+"&end_latitude="+collegelat+"&end_longitude="+collegeLong;
    //   return this.http.get(url, options)
    //     .map(response => response.json());
    // }
    OlaCabBookingProvider.prototype.getFromCordinates = function (userAddress) {
        var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + userAddress + "&key=AIzaSyDDWWUrScOOz9XiVe_NVYvsp5K1UO51DCI";
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    OlaCabBookingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], OlaCabBookingProvider);
    return OlaCabBookingProvider;
}());

//# sourceMappingURL=ola-cab-booking.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookYourRidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ola_cab_booking_ola_cab_booking__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookYourRidePage = (function () {
    function BookYourRidePage(navCtrl, loadingController, locationAccuracy, platform, alertCtrl, navParams, storage, olaBooking, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.locationAccuracy = locationAccuracy;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.olaBooking = olaBooking;
        this.geolocation = geolocation;
        this.marker = new google.maps.Marker();
        this.disableSelector = true;
        this.disableSelector1 = true;
        this.collegeLat = '28.531911';
        this.collegeLong = '77.0588622';
        if (this.platform.is('cordova')) {
            this.locationAccuracy.canRequest().then(function (canRequest) {
                if (canRequest) {
                    // the accuracy option will be ignored by iOS
                    _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { return console.log('Request successful'); }, function (error) { return console.log('Error requesting location permissions' + JSON.stringify(error)); });
                }
            });
        }
    }
    BookYourRidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookYourRidePage');
        this.ride = "to";
        this.getUserCordinates();
    };
    BookYourRidePage.prototype.getUserCordinates = function () {
        var asd = this;
        var loader = this.loadingController.create({
            content: "Please wait while we fetch your current location!"
        });
        loader.present();
        var options = { timeout: 2000, enableHighAccuracy: true, maximumAge: 0 };
        this.platform.ready().then(function repeat() {
            asd.geolocation.getCurrentPosition(options).then(function (resp) {
                asd.userLat = resp.coords.latitude;
                asd.userLong = resp.coords.longitude;
                asd.olaBooking.getRideDetails(asd.userLat, asd.userLong, asd.collegeLat, asd.collegeLong).subscribe(function (response) {
                    asd.uberdetails = response;
                    asd.disableSelector1 = false;
                    loader.dismiss();
                });
            }).catch(function (error) {
                console.log('Error getting location', error);
                setTimeout(repeat, 2000);
            });
        });
    };
    // getFareUber(){
    //   this.selectedUberCategory = this.uberCategory;
    //   this.olaBooking.getRideDetails(this.userLat, this.userLong, this.collegeLat, this.collegeLong).subscribe(response => {
    //     this.uberdetails = response;
    //     // console.log(this.uberdetails);
    //     // console.log(this.uberdetails["prices"][2]);
    //     this.showDetailsUber();
    //   });     
    // }
    BookYourRidePage.prototype.showDetailsUber = function () {
        for (var i = 0; i < this.uberdetails["prices"].length; i++) {
            if (this.uberdetails["prices"][i]["display_name"] == this.uberCategory) {
                this.uber = this.uberdetails["prices"][i];
                return;
            }
        }
    };
    BookYourRidePage.prototype.openUberApp = function () {
        var url = "https://m.uber.com/ul/?client_id=n1w2fu8nhFhys8FSj3pAx1NEPGKZ972Q&action=setPickup&pickup[latitude]=" + this.userLat + "&pickup[longitude]=" + this.userLong + "&dropoff[latitude]=" + this.collegeLat + "&dropoff[longitude]" + this.collegeLong;
        window.open(url);
    };
    BookYourRidePage.prototype.openUberAppFrom = function () {
        var _this = this;
        var userFromLatitude;
        var userFromLongitude;
        this.storage.get("userFromLat").then(function (val) {
            console.log("userFromLatitude" + val);
            _this.storage.get("userFromLong").then(function (val) {
                userFromLongitude = val;
                var url = "https://m.uber.com/ul/?client_id=n1w2fu8nhFhys8FSj3pAx1NEPGKZ972Q&action=setPickup&pickup[latitude]=" + _this.collegeLat + "&pickup[longitude]=" + _this.collegeLong + "&dropoff[latitude]=" + userFromLatitude + "&dropoff[longitude]" + userFromLongitude;
                window.open(url);
            });
        });
    };
    // getFareOla(olaCat){
    //   this.selectedOlaCategory = olaCat;
    //   this.olaBooking.getRideOlaDetails(this.userLat, this.userLong, this.collegeLat, this.collegeLong).subscribe(response => {
    //     this.oladetails = response;
    //     console.log(this.oladetails);
    //     // console.log(this.uberdetails["prices"][2]);
    //     // this.showDetailsUber();
    //   });    
    // }
    BookYourRidePage.prototype.autoComplete = function () {
        var _this = this;
        this.uberFrom = undefined;
        var storage = this.storage;
        storage.remove("uberfromprices");
        storage.remove("userFromLat");
        storage.remove("userFromLong");
        storage.remove("newformattedaddress");
        var callFunction = this.olaBooking;
        var userFormattedAddress;
        var gmap = this.map;
        var autocomplete;
        var lat = this.collegeLat;
        var long = this.collegeLong;
        var location = new google.maps.LatLng(lat, long);
        var options = {
            center: location,
            zoom: 17
        };
        var marker = this.marker;
        var userFromCollegeLat;
        var userFromCollegeLong;
        setTimeout(function () {
            _this.map = new google.maps.Map(_this.mapRef.nativeElement, options);
            gmap = _this.map;
            _this.addMarker(location, _this.map);
        }, 1000);
        setTimeout(function () {
            autocomplete = new google.maps.places.Autocomplete(_this.yourlocation.nativeElement);
            var infowindow = new google.maps.InfoWindow();
            infowindow.setContent(_this.infodisplay);
            autocomplete.addListener('place_changed', function () {
                // infowindow.close();
                // marker.setVisible(false);
                var place = autocomplete.getPlace();
                userFormattedAddress = place["formatted_address"];
                storage.set("newformattedaddress", userFormattedAddress);
                if (!place.geometry) {
                    // User entered the name of a Place that was not suggested and
                    // pressed the Enter key, or the Place Details request failed.
                    window.alert("No details available for input: '" + place.name + "'");
                    return;
                }
                // If the place has a geometry, then present it on a map.
                if (place.geometry.viewport) {
                    gmap.fitBounds(place.geometry.viewport);
                    callFunction.getFromCordinates(userFormattedAddress).subscribe(function (response) {
                        userFromCollegeLong = response["results"][0]["geometry"]["location"]["lng"];
                        userFromCollegeLat = response["results"][0]["geometry"]["location"]["lat"];
                        storage.set("userFromLat", userFromCollegeLat);
                        storage.set("userFromLong", userFromCollegeLong);
                    });
                    marker = new google.maps.Marker({
                        map: gmap,
                        position: place.geometry.location,
                        title: "You are here!",
                        draggable: true
                    });
                    google.maps.event.addListener(marker, 'dragend', function () {
                        storage.set("userFromLat", marker.getPosition().lat());
                        storage.set("userFromLong", marker.getPosition().lng());
                        var geocoder = new google.maps.Geocoder();
                        var latlng = { lat: marker.getPosition().lat(), lng: marker.getPosition().lng() };
                        geocoder.geocode({ 'location': latlng }, function (results, status) {
                            if (status === 'OK') {
                                if (results[0]) {
                                    //
                                    storage.set("newformattedaddress", results[0].formatted_address);
                                    console.log(autocomplete);
                                    console.log(results[0].formatted_address);
                                }
                                else {
                                    window.alert('No results found');
                                }
                            }
                            else {
                                window.alert('Geocoder failed due to: ' + status);
                            }
                        });
                    });
                }
                else {
                    gmap.setCenter(place.geometry.location);
                    gmap.setZoom(15); // Why 17? Because it looks good. 
                    callFunction.getFromCordinates(userFormattedAddress).subscribe(function (response) {
                        userFromCollegeLong = response["results"][0]["geometry"]["location"]["lng"];
                        userFromCollegeLat = response["results"][0]["geometry"]["location"]["lat"];
                        storage.set("userFromLat", userFromCollegeLat);
                        storage.set("userFromLong", userFromCollegeLong);
                    });
                    return new google.maps.Marker({
                        map: gmap,
                        position: place.geometry.location,
                        title: "You are here!",
                        draggable: true
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
        }, 100);
    };
    BookYourRidePage.prototype.addMarker = function (loc, mymap) {
        return new google.maps.Marker({
            map: mymap,
            position: loc,
            title: "You are here!"
        });
    };
    BookYourRidePage.prototype.getMarkerLocation = function () {
        var _this = this;
        var userFromLatitude;
        var userFromLongitude;
        this.storage.get("userFromLat").then(function (val) {
            if (val == null || val == undefined) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Location Missing!',
                    subTitle: 'Please enter your destination location first!',
                    buttons: ['OK']
                });
                alert_1.present();
                return;
            }
            _this.disableSelector = false;
            userFromLatitude = val;
            _this.storage.get("newformattedaddress").then(function (val) {
                _this.yourlocationvalue = val;
                _this.storage.get("userFromLong").then(function (val) {
                    userFromLongitude = val;
                    _this.olaBooking.getRideDetails(_this.collegeLat, _this.collegeLong, userFromLatitude, userFromLongitude).subscribe(function (response) {
                        _this.storage.set("uberfromprices", response);
                    });
                });
            });
        });
    };
    BookYourRidePage.prototype.uberfareFrom = function () {
        var _this = this;
        var uberfromprices;
        this.storage.get("uberfromprices").then(function (val) {
            uberfromprices = val;
            for (var i = 0; i < uberfromprices["prices"].length; i++) {
                if (uberfromprices["prices"][i]["display_name"] == _this.uberFromCategory) {
                    _this.uberFrom = uberfromprices["prices"][i];
                    return;
                }
            }
        }).catch(function (error) {
            console.log("error");
        });
    };
    BookYourRidePage.prototype.disabledOption = function () {
        if (this.disableSelector == true) {
            var alert_2 = this.alertCtrl.create({
                title: 'Location Missing!',
                subTitle: 'Please enter your destination location first and click Set Location button!',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BookYourRidePage.prototype, "mapRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BookYourRidePage.prototype, "yourlocation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('infocontent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BookYourRidePage.prototype, "infodisplay", void 0);
    BookYourRidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book-your-ride',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\book-your-ride\book-your-ride.html"*/'<!--\n\n  Generated template for the BookYourRidePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Book Your Ride</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n<div padding>\n\n  <ion-segment [(ngModel)]="ride">\n\n    <ion-segment-button value="to" class="segment-activated">\n\n     To College\n\n    </ion-segment-button>\n\n    <ion-segment-button (click)="autoComplete()" value="from">\n\n     From College\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</div>\n\n<div [ngSwitch]="ride">\n\n  <ion-list *ngSwitchCase="\'to\'">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-label>\n\n           <strong>From : </strong>Your Location\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <strong>To : </strong>Amity School Of Engineering & Technology, Bijwasan\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-card>\n\n          <ion-card-header text-center>UBER</ion-card-header>\n\n          <ion-card-content>\n\n            <ion-item>\n\n              <ion-label>Category</ion-label>\n\n              <ion-select [(ngModel)]="uberCategory" interface="action-sheet" (ionChange)="showDetailsUber()" [disabled]="disableSelector1">\n\n                <ion-option value="uberPOOL">POOL</ion-option>\n\n                <ion-option value="GO">GO</ion-option>\n\n                <ion-option value="PREMIER">PREMEIR</ion-option>\n\n                <ion-option value="XL">XL</ion-option>\n\n                <ion-option value="BLACK">BLACK</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-row>\n\n      <ion-row *ngIf="uber">\n\n        <ion-card> \n\n            <ion-card-content>\n\n              <ion-item class="uberDetailsCard">\n\n                <ion-thumbnail item-start>\n\n                  <img src="assets/imgs/uber.jpg" alt="Uber">\n\n                </ion-thumbnail>\n\n                  <p><strong>Estimated Fare: </strong>{{uber.estimate}}</p> \n\n                <p><strong>Estimted Duration: </strong>{{uber.duration/60}}min</p>\n\n                <p><strong>Distance: </strong>{{uber.distance}}km</p>\n\n                <button ion-button clear item-end (click)="openUberApp()" class="bookCab">Book</button>\n\n              </ion-item>\n\n            </ion-card-content>\n\n          </ion-card>\n\n      </ion-row>\n\n        <ion-row>\n\n          <ion-card>\n\n            <ion-card-header text-center>OLA</ion-card-header>\n\n            <ion-card-content>\n\n              <ion-item>\n\n                <ion-label>Category</ion-label>\n\n                <ion-select [(ngModel)]="olaCategory" #C interface="action-sheet" (ionChange)="getFareOla(C.value)">  \n\n                  <ion-option value="share">Share</ion-option>\n\n                  <ion-option value="micro">MICRO</ion-option>\n\n                  <ion-option value="mini">MINI</ion-option>\n\n                  <ion-option value="prime">PRIME</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-card-content>\n\n          </ion-card>\n\n      </ion-row>\n\n    </ion-grid>\n\n    \n\n    \n\n  </ion-list>\n\n\n\n  <ion-list *ngSwitchCase="\'from\'">\n\n    <ion-item>\n\n      <ion-label>\n\n          <strong>From : </strong>Amity School Of Engineering & Technology, Bijwasan\n\n      </ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n        <input type="text" #search id="placeInput" [(ngModel)]="yourlocationvalue"/>\n\n    </ion-item>      \n\n    <ion-item>\n\n      <div #map id="map"></div>\n\n    </ion-item>\n\n    <br/>\n\n    <button ion-button id="setLocation" block (click)="getMarkerLocation()">Set Location</button>\n\n    <ion-card (click)="disabledOption();">\n\n      <ion-card-header text-center>UBER</ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-label>Category</ion-label>\n\n          <ion-select [(ngModel)]="uberFromCategory" interface="action-sheet"  (ionChange)="uberfareFrom()" [disabled]="disableSelector"> \n\n            <ion-option value="uberPOOL">POOL</ion-option>\n\n            <ion-option value="GO">GO</ion-option>\n\n            <ion-option value="PREMIER">PREMEIR</ion-option>\n\n            <ion-option value="XL">XL</ion-option>\n\n            <ion-option value="BLACK">BLACK</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-row *ngIf="uberFrom">\n\n        <ion-card> \n\n          <ion-card-content>\n\n            <ion-item class="uberDetailsCard">\n\n              <ion-thumbnail item-start>\n\n                <img src="assets/imgs/uber.jpg" alt="Uber" id="fromUberLogo">\n\n              </ion-thumbnail>\n\n              <p><strong>Estimated Fare: </strong>{{uberFrom.estimate}}</p> \n\n              <p><strong>Estimted Duration: </strong>{{(uberFrom.duration/60)}}min</p>\n\n              <p><strong>Distance: </strong>{{uberFrom.distance}}km</p>             \n\n              <button ion-button clear item-end (click)="openUberAppFrom()" class="bookCab">Book</button>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-row>\n\n  </ion-list>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\college-app-ionic\src\pages\book-your-ride\book-your-ride.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_ola_cab_booking_ola_cab_booking__["a" /* OlaCabBookingProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], BookYourRidePage);
    return BookYourRidePage;
}());

//# sourceMappingURL=book-your-ride.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevelopersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DevelopersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevelopersPage = (function () {
    function DevelopersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DevelopersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevelopersPage');
    };
    DevelopersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-developers',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\developers\developers.html"*/'<!--\n\n  Generated template for the DevelopersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Developers</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n      <img src="assets/imgs/madhur.jpg" alt="">\n\n      <ion-card-content>\n\n        <ion-card-title>Madhur Mittal</ion-card-title>\n\n        <p>\n\n          Frontend Designer & Developer<br/>\n\n          Reach me at : madhurmittal1807@gmail.com<br/>\n\n          Contact : 9714367388\n\n        </p> \n\n      </ion-card-content>\n\n  </ion-card>  \n\n  <ion-card>\n\n      <img src="assets/imgs/img-2.jpg" alt="">\n\n          <ion-card-content>\n\n            <ion-card-title>Mahesh Pratap</ion-card-title>\n\n            <p>\n\n              Frontend Designer & Developer<br/>\n\n              Reach me at : mp1995singh@gmail.com<br/>\n\n              Contact : 9873088432\n\n            </p>\n\n          </ion-card-content>\n\n  </ion-card>      \n\n  <ion-card>\n\n    <img src="assets/imgs/vijayant.jpg" alt="">\n\n    <ion-card-content>\n\n      <ion-card-title>Vijayant Saini</ion-card-title>\n\n      <p>\n\n        Full Stack Developer<br/>\n\n        Reach me at : vijayant.saini123@gmail.com<br/>\n\n        Contact : 8802553203\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>Working For : ForYou IT Solutions</ion-card-title>\n\n      <p>\n\n        Reach us at : foryouitsolution@gmail.com <br/>\n\n        To know more about us: <br/>\n\n      <a ion-button small href="http://foryouitsolutions.github.io">Click Here</a></p>\n\n    </ion-card-content>\n\n  </ion-card>      \n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"C:\college-app-ionic\src\pages\developers\developers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], DevelopersPage);
    return DevelopersPage;
}());

//# sourceMappingURL=developers.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LocationPage.prototype, "mapRef", void 0);
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\location\location.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2>Amity School Of Enginering & Technology</h2>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2627971539637!2d77.05675561446384!3d28.531819695384172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bcc8a698d51%3A0x77c4732fc0a625d8!2sAmity+School+Of+Engineering+And+Technology!5e0!3m2!1sen!2sin!4v1517221825638" width="330" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-grid>\n\n    <!-- <ion-row>\n\n      <div id="map" #map></div>\n\n    </ion-row> -->\n\n    <ion-row>\n\n      <ion-col width-100>\n\n        <ion-list>\n\n          <ion-item>\n\n            <strong>Contact: </strong>011-28062106\n\n          </ion-item>\n\n          <ion-item>\n\n              <strong>Landmark: </strong>Golok Dham Mandir\n\n          </ion-item>\n\n          <ion-item>\n\n              <strong>Nearest Metro Station: </strong>Dwarka Sec-21\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\college-app-ionic\src\pages\location\location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPage = (function () {
    function ModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        var characters = [
            {
                name: 'First Year',
                image: 'assets/imgs/cse-1.png'
                // items: [
                //   { title: 'Race', note: 'Hobbit' },
                //   { title: 'Culture', note: 'River Folk' },
                //   { title: 'Alter Ego', note: 'Smeagol' }
                // ]
            },
            {
                name: 'Second Year',
                image: 'assets/imgs/cse-1.png'
            },
            {
                name: 'Third Year',
                image: 'assets/imgs/cse-1.png'
            },
            {
                name: 'Fourth Year',
                image: 'assets/imgs/cse-1.png'
            }
        ];
        this.character = characters[this.navParams.get('charNum')];
    }
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ModalPage');
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\modal\modal.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Time-Table\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n        <ion-item>\n          <!-- <ion-avatar item-start>\n            <img src="{{character.image}}">\n          </ion-avatar> -->\n          <h2>{{character.name}}</h2>\n          <!-- <p>{{character.quote}}</p> -->\n        </ion-item>\n        <ion-item >\n          <!-- <a href="{{character.image}}"></a>  -->\n            <img src="{{character.image}}" imageViewer>\n        </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"C:\college-app-ionic\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TimeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeTablePage = (function () {
    function TimeTablePage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
    }
    TimeTablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimeTablePage');
    };
    TimeTablePage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], characterNum);
        modal.present();
    };
    TimeTablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-time-table',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\time-table\time-table.html"*/'<!--\n  Generated template for the TimeTablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Time-Table</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <button ion-button block (click)="openModal({charNum: 0});">\n    First Year\n  </button>\n  <button ion-button block (click)="openModal({charNum: 1});">\n    Second Year\n  </button>\n  <button ion-button block (click)="openModal({charNum: 2});">\n    Third Year\n  </button>\n  <button ion-button block (click)="openModal({charNum: 3});">\n    Fourth Year\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\college-app-ionic\src\pages\time-table\time-table.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], TimeTablePage);
    return TimeTablePage;
}());

//# sourceMappingURL=time-table.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Modal2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Modal2Page = (function () {
    function Modal2Page(navCtrl, iab, navParams, viewCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.category = "syllabus";
        this.storage.get("branch").then(function (val) {
            _this.branch = val;
            _this.storage.get("year").then(function (val) {
                _this.year = val;
            });
        });
    }
    Modal2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Modal2Page');
        this.showpdf();
    };
    Modal2Page.prototype.showpdf = function () {
        this.iab.create('https://drive.google.com/open?id=1RPL7I6C3TKVsxvUTSZDIbQnuj81cPPzQ');
    };
    Modal2Page.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Modal2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal2',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\modal2\modal2.html"*/'<!--\n  Generated template for the Modal2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{year}}, {{branch}}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div padding>\n    <ion-segment [(ngModel)]="category">\n      <ion-segment-button value="syllabus">\n        Syllabus\n      </ion-segment-button>\n      <ion-segment-button value="experiments">\n        Experiments\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [ngSwitch]="category">\n    <ion-list *ngSwitchCase="\'syllabus\'">\n      \n    </ion-list>\n    \n    <ion-list *ngSwitchCase="\'experiments\'">\n        \n    </ion-list>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\college-app-ionic\src\pages\modal2\modal2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Modal2Page);
    return Modal2Page;
}());

//# sourceMappingURL=modal2.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyllabusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal2_modal2__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SyllabusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SyllabusPage = (function () {
    function SyllabusPage(navCtrl, navParams, actionSheetCtrl, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
    }
    SyllabusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SyllabusPage');
    };
    SyllabusPage.prototype.presentActionSheet = function (year) {
        var _this = this;
        this.storage.set("year", year);
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select your branch',
            buttons: [
                {
                    text: 'CSE',
                    role: 'cse',
                    handler: function () {
                        _this.openModal();
                        _this.storage.set("branch", "CSE");
                    }
                }, {
                    text: 'IT',
                    role: 'it',
                    handler: function () {
                        _this.openModal();
                        _this.storage.set("branch", "IT");
                    }
                }, {
                    text: 'ECE',
                    role: 'ece',
                    handler: function () {
                        _this.openModal();
                        _this.storage.set("branch", "ECE");
                    }
                }, {
                    text: 'MAE',
                    role: 'mae',
                    handler: function () {
                        _this.openModal();
                        _this.storage.set("branch", "MAE");
                    }
                }, {
                    text: 'ICE',
                    role: 'ice',
                    handler: function () {
                        _this.openModal();
                        _this.storage.set("branch", "ICE");
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SyllabusPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal2_modal2__["a" /* Modal2Page */]);
        modal.present();
    };
    SyllabusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-syllabus',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\syllabus\syllabus.html"*/'<!--\n  Generated template for the SyllabusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Syllabus</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button block (click)="presentActionSheet(\'First Year\');">\n    First Year\n  </button>\n  <button ion-button block (click)="presentActionSheet(\'Second Year\');">\n    Second Year\n  </button>\n  <button ion-button block (click)="presentActionSheet(\'Third Year\');">\n    Third Year\n  </button>\n  <button ion-button block (click)="presentActionSheet(\'Fourth Year\');">\n    Fourth Year\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\college-app-ionic\src\pages\syllabus\syllabus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], SyllabusPage);
    return SyllabusPage;
}());

//# sourceMappingURL=syllabus.js.map

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/book-your-ride/book-your-ride.module": [
		424,
		6
	],
	"../pages/developers/developers.module": [
		425,
		5
	],
	"../pages/location/location.module": [
		426,
		4
	],
	"../pages/modal/modal.module": [
		427,
		2
	],
	"../pages/modal2/modal2.module": [
		429,
		3
	],
	"../pages/syllabus/syllabus.module": [
		430,
		1
	],
	"../pages/time-table/time-table.module": [
		428,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\college-app-ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\college-app-ionic\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_location_location__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_time_table_time_table__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_developers_developers__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_syllabus_syllabus__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_book_your_ride_book_your_ride__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modal2_modal2__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_ola_cab_booking_ola_cab_booking__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_img_viewer__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_location_accuracy__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_developers_developers__["a" /* DevelopersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_book_your_ride_book_your_ride__["a" /* BookYourRidePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_time_table_time_table__["a" /* TimeTablePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_syllabus_syllabus__["a" /* SyllabusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal2_modal2__["a" /* Modal2Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/book-your-ride/book-your-ride.module#BookYourRidePageModule', name: 'BookYourRidePage', segment: 'book-your-ride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/developers/developers.module#DevelopersPageModule', name: 'DevelopersPage', segment: 'developers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-table/time-table.module#TimeTablePageModule', name: 'TimeTablePage', segment: 'time-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal2/modal2.module#Modal2PageModule', name: 'Modal2Page', segment: 'modal2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/syllabus/syllabus.module#SyllabusPageModule', name: 'SyllabusPage', segment: 'syllabus', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_developers_developers__["a" /* DevelopersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_book_your_ride_book_your_ride__["a" /* BookYourRidePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_time_table_time_table__["a" /* TimeTablePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_syllabus_syllabus__["a" /* SyllabusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal2_modal2__["a" /* Modal2Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_ola_cab_booking_ola_cab_booking__["a" /* OlaCabBookingProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_developers_developers__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_location_location__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_time_table_time_table__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_book_your_ride_book_your_ride__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_syllabus_syllabus__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_ola_cab_booking_ola_cab_booking__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */] },
            { title: 'Time-Table', component: __WEBPACK_IMPORTED_MODULE_8__pages_time_table_time_table__["a" /* TimeTablePage */] },
            { title: 'Syllabus', component: __WEBPACK_IMPORTED_MODULE_10__pages_syllabus_syllabus__["a" /* SyllabusPage */] },
            { title: 'Location', component: __WEBPACK_IMPORTED_MODULE_5__pages_location_location__["a" /* LocationPage */] },
            { title: 'Book Your Ride', component: __WEBPACK_IMPORTED_MODULE_9__pages_book_your_ride_book_your_ride__["a" /* BookYourRidePage */] },
            { title: 'Developers', component: __WEBPACK_IMPORTED_MODULE_4__pages_developers_developers__["a" /* DevelopersPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\college-app-ionic\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\college-app-ionic\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_11__providers_ola_cab_booking_ola_cab_booking__["a" /* OlaCabBookingProvider */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[258]);
//# sourceMappingURL=main.js.map