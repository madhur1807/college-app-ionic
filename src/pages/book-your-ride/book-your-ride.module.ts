import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookYourRidePage } from './book-your-ride';

@NgModule({
  declarations: [
    BookYourRidePage,
  ],
  imports: [
    IonicPageModule.forChild(BookYourRidePage),
  ],
})
export class BookYourRidePageModule {}
