import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PinPage } from '../pages/pin/pin';
import {TabsPage} from '../pages/tabs/tabs';
import { HelpPage } from '../pages/help/help';
import { ProfilePage } from '../pages/profile/profile';
import { HistoryPage } from '../pages/history/history';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import {ReceiptPage} from '../pages/receipt/receipt';
// import {LakupandaiPage} from '../pages/lakupandai/lakupandai';
import { CurrencyPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { HttpReqProvider } from '../providers/http-req/http-req';
import { AuthSingletonProvider } from '../providers/auth-singleton/auth-singleton';
import { HttpModule } from '@angular/http';
import { QRCodeModule } from 'angular2-qrcode';
import {ExpandableComponent} from '../components/expandable/expandable';
// import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {SaldomodalPage} from '../pages/saldomodal/saldomodal'
import {RegistrationPage} from '../pages/registration/registration'
import {ChangepassPage} from '../pages/changepass/changepass'
import {SortgridPipe} from '../pipes/sortgrid/sortgrid';
import { DatePicker } from '@ionic-native/date-picker';
import {NotSame} from '../pages/changepass/changepass';
import { Geolocation } from '@ionic-native/geolocation';
import {MaskapaiPageModule} from '../pages/maskapai/maskapai.module';
import {HotelPageModule} from '../pages/hotel/hotel.module';
import {KeretaPageModule} from '../pages/kereta/kereta.module';
import {NumberToWordsPipe} from '../pipes/numbertowords/numbertowords'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    HelpPage,
    ProfilePage,
    HistoryPage,
    ExpandableComponent,
    LoginPage,
    SaldomodalPage,
    RegistrationPage,
    ChangepassPage,
    SortgridPipe,
    NotSame,
    PinPage,
    ReceiptPage,
    NumberToWordsPipe


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    QRCodeModule,
    MaskapaiPageModule,
    HotelPageModule,
    KeretaPageModule,

   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    HelpPage,
    ProfilePage,
    HistoryPage,
    LoginPage,
    SaldomodalPage,
    RegistrationPage,
    ChangepassPage,
    PinPage,
    ReceiptPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CurrencyPipe,
    DecimalPipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpReqProvider,
    AuthSingletonProvider,
    BarcodeScanner,
    DatePicker,SortgridPipe,Geolocation

  ]
})
export class AppModule {}
