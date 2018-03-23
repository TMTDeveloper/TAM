import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html',
})
export class ReceiptPage {

  datatagihan: any;
  dateview: any;
  nomorpelanggan: any;


  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datatagihan = navParams.get('data');
    this.nomorpelanggan = navParams.get('nomorpelanggan');
    console.log(this.nomorpelanggan)
    this.dateview=moment(this.datatagihan.waktu,"YYYYMMDDHHmmss").format("DD-MM-YYYY HH:mm:ss");
    console.log(this.dateview)
  }

  

  ionViewDidLoad() {
    console.log('Ini data berasal dari cektagihan', this.datatagihan);

  }

}
