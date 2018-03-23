import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeretaPage } from './kereta';
import { OrderBy } from './sortkereta';
import { ExpandableComponent } from './expandable';
import { MultiPickerModule } from 'ion-multi-picker';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { TujuanStasiunModal } from './kereta';
import { KeretaSearchPage } from './kereta';

@NgModule({
  declarations: [
    KeretaPage,ExpandableComponent,TujuanStasiunModal,KeretaSearchPage,OrderBy
  ],
  imports: [
    IonicPageModule.forChild(KeretaPage),MultiPickerModule,SlimLoadingBarModule.forRoot()
  ],
  entryComponents:[KeretaPage,TujuanStasiunModal,KeretaSearchPage],
  // exports:[SlimLoadingBarModule]
})
export class KeretaPageModule {}