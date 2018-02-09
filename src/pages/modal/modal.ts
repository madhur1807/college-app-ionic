import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  character;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController ) {
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
  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ModalPage');
  }
  
}
