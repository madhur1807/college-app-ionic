import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SyllabusPage } from '../syllabus/syllabus';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the Modal2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal2',
  templateUrl: 'modal2.html',
})
export class Modal2Page {
  category:any;
  branch:any;
  year:any;
  constructor(public navCtrl: NavController, private iab: InAppBrowser, public navParams: NavParams, public viewCtrl : ViewController, public storage : Storage) {
    this.category = "syllabus";
    this.storage.get("branch").then((val)=>{
      this.branch = val;
      this.storage.get("year").then((val)=>{
        this.year = val;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal2Page');
    this.showpdf();
  }
  showpdf(){
    this.iab.create('https://drive.google.com/open?id=1RPL7I6C3TKVsxvUTSZDIbQnuj81cPPzQ');    
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
