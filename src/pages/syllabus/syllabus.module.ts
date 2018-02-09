import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyllabusPage } from './syllabus';

@NgModule({
  declarations: [
    SyllabusPage,
  ],
  imports: [
    IonicPageModule.forChild(SyllabusPage),
  ],
})
export class SyllabusPageModule {}
