import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelPage } from './hotel';
import { MultiPickerModule } from 'ion-multi-picker';
import { ModalHotelPage } from './hotel';
import { ModalHotelDestinationPage } from './hotel';
import { ModalHotelSearch } from './hotel';
import { ModalHotelDetails } from './hotel';

@NgModule({
  declarations: [
    HotelPage,ModalHotelPage,ModalHotelDestinationPage,ModalHotelSearch,ModalHotelDetails
  ],
  imports: [
    IonicPageModule.forChild(HotelPage),MultiPickerModule,
  ],
  entryComponents:[
    ModalHotelPage,ModalHotelDestinationPage,ModalHotelSearch,ModalHotelDetails
  ],
})
export class HotelPageModule {}
