import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaskapaiPage } from './maskapai';
import {AirportsPage} from './maskapai'
import { OrderBy } from './sortflight';
import { ExpandableComponent } from './expandable';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    MaskapaiPage, AirportsPage,OrderBy,ExpandableComponent
  ],
  imports: [
    IonicPageModule.forChild(MaskapaiPage),MultiPickerModule
  ],
  entryComponents:[MaskapaiPage,AirportsPage]
})
export class MaskapaiPageModule {}
