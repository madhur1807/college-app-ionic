import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Modal2Page } from '../modal2/modal2';
/**
 * Generated class for the SyllabusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syllabus',
  templateUrl: 'syllabus.html',
})
export class SyllabusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public storage: Storage, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyllabusPage');
  }
  presentActionSheet(year) {
    this.storage.set("year", year);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select your branch',
      buttons: [
        {
          text: 'CSE',
          role: 'cse',
          handler: () => {
            this.openModal();
            this.storage.set("branch","CSE");
          }
        },{
          text: 'IT',
          role : 'it',
          handler: () => {
            this.openModal();
            this.storage.set("branch","IT");
          }
        },{
          text: 'ECE',
          role: 'ece',
          handler: () => {
            this.openModal();
            this.storage.set("branch","ECE");
          }
        },{
          text: 'MAE',
          role: 'mae',
          handler: () => {
            this.openModal();
            this.storage.set("branch","MAE");
          }
        },{
          text: 'ICE',
          role: 'ice',
          handler: () => {
            this.openModal();
            this.storage.set("branch","ICE");
          }
        }
      ]
    });
    actionSheet.present();
  }
  openModal() {
    let modal = this.modalCtrl.create(Modal2Page);
    modal.present();
  }
}
