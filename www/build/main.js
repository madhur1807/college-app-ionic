webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevelopersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
            selector: 'page-developers',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\developers\developers.html"*/'<!--\n\n  Generated template for the DevelopersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Developers</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n      <img src="../assets/imgs/img-1.jpg" alt="">\n\n      <ion-card-content>\n\n        <ion-card-title>Madhur Mittal</ion-card-title>\n\n        <p>\n\n          Frontend Designer & Developer<br/>\n\n          Reach me at : madhurmittal1807@gmail.com<br/>\n\n          Contact : 9714367388\n\n        </p> \n\n      </ion-card-content>\n\n  </ion-card>  \n\n  <ion-card>\n\n      <img src="../assets/imgs/img-2.jpg" alt="">\n\n          <ion-card-content>\n\n            <ion-card-title>Mahesh Pratap</ion-card-title>\n\n            <p>\n\n              Frontend Designer & Developer<br/>\n\n              Reach me at : mp1995singh@gmail.com<br/>\n\n              Contact : 9873088432\n\n            </p>\n\n          </ion-card-content>\n\n  </ion-card>      \n\n  \n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>Working For : ForYou IT Solutions</ion-card-title>\n\n      <p>To know more about us: <br/>\n\n      <a ion-button small href="http://foryouitsolutions.github.io">Click Here</a></p>\n\n    </ion-card-content>\n\n  </ion-card>      \n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"C:\college-app-ionic\src\pages\developers\developers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DevelopersPage);
    return DevelopersPage;
}());

//# sourceMappingURL=developers.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookYourRidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ola_cab_booking_ola_cab_booking__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(158);
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
    function BookYourRidePage(navCtrl, navParams, olaBooking, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.olaBooking = olaBooking;
        this.geolocation = geolocation;
        this.collegeLat = '28.531815';
        this.collegeLong = '77.0567556';
        this.getUserLatLong();
    }
    BookYourRidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookYourRidePage');
        this.skochvoting();
        this.autoComplete();
    };
    BookYourRidePage.prototype.getUserLatLong = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.userLat = resp.coords.latitude;
            _this.userLong = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    BookYourRidePage.prototype.getFareUber = function () {
        var _this = this;
        this.selectedUberCategory = this.uberCategory;
        this.olaBooking.getRideDetails(this.userLat, this.userLong, this.collegeLat, this.collegeLong).subscribe(function (response) {
            _this.uberdetails = response;
            // console.log(this.uberdetails);
            // console.log(this.uberdetails["prices"][2]);
            _this.showDetailsUber();
        });
    };
    BookYourRidePage.prototype.skochvoting = function () {
        var _this = this;
        this.olaBooking.skoch().subscribe(function (response) {
            _this.resp = response;
            console.log(_this.resp);
        });
    };
    BookYourRidePage.prototype.showDetailsUber = function () {
        if (this.selectedUberCategory == "premeir") {
            this.uber = this.uberdetails["prices"][2];
            return;
        }
        else if (this.selectedUberCategory == "pool") {
            this.uber = this.uberdetails["prices"][6];
            return;
        }
        else if (this.selectedUberCategory == "go") {
            this.uber = this.uberdetails["prices"][8];
            return;
        }
        else if (this.selectedUberCategory == "xl") {
            this.uber = this.uberdetails["prices"][3];
            return;
        }
        else if (this.selectedUberCategory == "black") {
            this.uber = this.uberdetails["prices"][9];
        }
    };
    BookYourRidePage.prototype.openUberApp = function () {
        var url = "https://m.uber.com/ul/?client_id=n1w2fu8nhFhys8FSj3pAx1NEPGKZ972Q&action=setPickup&pickup[latitude]=" + this.userLat + "&pickup[longitude]=" + this.userLong + "&dropoff[latitude]=" + this.collegeLat + "&dropoff[longitude]" + this.collegeLong;
        window.open(url);
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
        var map;
        var location = new google.maps.LatLng(-33.8688, 151.2195);
        var options = {
            center: location,
            zoom: 10
        };
        this.map = new google.maps.Map(this.mymap.nativeElement, options);
        var autocomplete = new google.maps.places.Autocomplete(this.yourlocation);
        var infowindow = new google.maps.InfoWindow();
        infowindow.setContent(this.infodisplay);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('search'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], BookYourRidePage.prototype, "yourlocation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('infocontent'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _b || Object)
    ], BookYourRidePage.prototype, "infodisplay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _c || Object)
    ], BookYourRidePage.prototype, "mymap", void 0);
    BookYourRidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book-your-ride',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\book-your-ride\book-your-ride.html"*/'<!--\n\n  Generated template for the BookYourRidePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Book Your Ride</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n<div padding>\n\n  <ion-segment [(ngModel)]="ride">\n\n    <ion-segment-button value="to">\n\n     To College\n\n    </ion-segment-button>\n\n    <ion-segment-button value="from">\n\n     From College\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</div>\n\n<div [ngSwitch]="ride">\n\n  <ion-list *ngSwitchCase="\'to\'">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-label>\n\n           <strong>From : </strong>Your Location\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <strong>To : </strong>Amity School Of Engineering & Technology, Bijwasan\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-card>\n\n          <ion-card-header text-center>UBER</ion-card-header>\n\n          <ion-card-content>\n\n            <ion-item>\n\n              <ion-label>Category</ion-label>\n\n              <ion-select [(ngModel)]="uberCategory" interface="action-sheet" (ionChange)="getFareUber()" > \n\n                <ion-option value="pool">Pool</ion-option>\n\n                <ion-option value="go">GO</ion-option>\n\n                <ion-option value="premeir">PREMEIR</ion-option>\n\n                <ion-option value="xl">XL</ion-option>\n\n                <ion-option value="black">BLACK</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-row>\n\n      <ion-row *ngIf="uber">\n\n        <ion-card> \n\n            <ion-card-content>\n\n              <ion-item>\n\n                <ion-thumbnail item-start>\n\n                  <img src="../assets/imgs/uber.jpg" alt="Uber">\n\n                </ion-thumbnail>\n\n                  <p><strong>Estimated Fare : </strong>{{uber.estimate}}</p> \n\n                <p><strong>Estimted Duration : </strong>{{uber.duration}}</p>\n\n                <p><strong>Distance : </strong>{{uber.distance}}</p>\n\n                <button ion-button clear item-end (click)="openUberApp()">Book</button>\n\n              </ion-item>\n\n            </ion-card-content>\n\n          </ion-card>\n\n      </ion-row>\n\n        <ion-row>\n\n          <ion-card>\n\n            <ion-card-header text-center>OLA</ion-card-header>\n\n            <ion-card-content>\n\n              <ion-item>\n\n                <ion-label>Category</ion-label>\n\n                <ion-select [(ngModel)]="olaCategory" #C interface="action-sheet" (ionChange)="getFareOla(C.value)">  \n\n                  <ion-option value="share">Share</ion-option>\n\n                  <ion-option value="micro">MICRO</ion-option>\n\n                  <ion-option value="mini">MINI</ion-option>\n\n                  <ion-option value="prime">PRIME</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-card-content>\n\n          </ion-card>\n\n      </ion-row>\n\n    </ion-grid>\n\n    \n\n    \n\n  </ion-list>\n\n\n\n  <ion-list *ngSwitchCase="\'from\'">\n\n    <ion-item>\n\n      <ion-input #search type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item #infocontent id="infowindow-content">\n\n      <img src="" width="16" height="16" id="place-icon">\n\n      <span id="place-name"  class="title"></span><br>\n\n      <span id="place-address"></span>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div #map id="map"></div>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\college-app-ionic\src\pages\book-your-ride\book-your-ride.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_ola_cab_booking_ola_cab_booking__["a" /* OlaCabBookingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_ola_cab_booking_ola_cab_booking__["a" /* OlaCabBookingProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _g || Object])
    ], BookYourRidePage);
    return BookYourRidePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=book-your-ride.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"C:\college-app-ionic\src\pages\location\location.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2>Amity School Of Enginering & Technology</h2>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2627971539637!2d77.05675561446384!3d28.531819695384172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bcc8a698d51%3A0x77c4732fc0a625d8!2sAmity+School+Of+Engineering+And+Technology!5e0!3m2!1sen!2sin!4v1517221825638" width="330" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col width-100>\n\n        <ion-list>\n\n          <ion-item>\n\n            <strong>Contact: </strong>011-28062106\n\n          </ion-item>\n\n          <ion-item>\n\n              <strong>Landmark: </strong>Golok Dham Mandir\n\n          </ion-item>\n\n          <ion-item>\n\n              <strong>Nearest Metro Station: </strong>Dwarka Sec-21\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\college-app-ionic\src\pages\location\location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/book-your-ride/book-your-ride.module": [
		280,
		2
	],
	"../pages/developers/developers.module": [
		279,
		1
	],
	"../pages/location/location.module": [
		281,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_location_location__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_developers_developers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_book_your_ride_book_your_ride__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_ola_cab_booking_ola_cab_booking__ = __webpack_require__(77);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_developers_developers__["a" /* DevelopersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_book_your_ride_book_your_ride__["a" /* BookYourRidePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/developers/developers.module#DevelopersPageModule', name: 'DevelopersPage', segment: 'developers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/book-your-ride/book-your-ride.module#BookYourRidePageModule', name: 'BookYourRidePage', segment: 'book-your-ride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_developers_developers__["a" /* DevelopersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_book_your_ride_book_your_ride__["a" /* BookYourRidePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_ola_cab_booking_ola_cab_booking__["a" /* OlaCabBookingProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_developers_developers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_location_location__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_book_your_ride_book_your_ride__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_ola_cab_booking_ola_cab_booking__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(158);
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
            { title: 'Location', component: __WEBPACK_IMPORTED_MODULE_5__pages_location_location__["a" /* LocationPage */] },
            { title: 'Book Your Ride', component: __WEBPACK_IMPORTED_MODULE_8__pages_book_your_ride_book_your_ride__["a" /* BookYourRidePage */] },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\college-app-ionic\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\college-app-ionic\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_9__providers_ola_cab_booking_ola_cab_booking__["a" /* OlaCabBookingProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlaCabBookingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(252);
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
    OlaCabBookingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], OlaCabBookingProvider);
    return OlaCabBookingProvider;
}());

//# sourceMappingURL=ola-cab-booking.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map