import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaskapaiPage, SearchPage } from './maskapai';
import {AirportsPage} from './maskapai'
import { OrderBy } from './sortflight';
import { ExpandableComponent } from './expandable';
import { MultiPickerModule } from 'ion-multi-picker';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {MaskapaiSearchPage} from './maskapai';

@NgModule({
  declarations: [
    MaskapaiPage, AirportsPage,OrderBy,ExpandableComponent,SearchPage,MaskapaiSearchPage
  ],
  imports: [
    IonicPageModule.forChild(MaskapaiPage),MultiPickerModule,SlimLoadingBarModule.forRoot()
  ],
  entryComponents:[MaskapaiPage,AirportsPage,SearchPage,MaskapaiSearchPage],
  exports:[SlimLoadingBarModule]
})
export class MaskapaiPageModule {}
