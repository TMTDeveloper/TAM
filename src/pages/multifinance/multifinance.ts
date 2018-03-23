import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,LoadingController, AlertController } from 'ionic-angular';
import { ReceiptPage} from '../../pages/receipt/receipt';
import { HttpReqProvider } from '../../providers/http-req/http-req';
import { AuthSingletonProvider } from '../../providers/auth-singleton/auth-singleton';



@IonicPage()
@Component({
  selector: 'page-multifinance',
  templateUrl: 'multifinance.html',
})
export class MultifinancePage {

  datatagihan: any;
  nomorpelanggan: any = '';
  datapost: any = {
    xuid: 'XPM1760832',
    xpass: 'root',
    xproductcode: '',
    xidpelanggan1: '',
    xidpelanggan2: '0',
    xidpelanggan3: '0',
    xnominal: '0',
    xref1: '0',
    xref2: '0',
    xref3: '0',
    xresponecode: 'FINANCE'
  }

  constructor(
    public navCtrl: NavController, 
    public httpreq: HttpReqProvider, 
    public auth: AuthSingletonProvider, 
    public alertctrl: AlertController, 
    public loadingCtrl: LoadingController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController
  ) {
  }

  SubmitCekTagihan(data) {
    this.datapost.xidpelanggan1 = this.nomorpelanggan;
    console.log('ini data yang akan segera  di kirim', this.datapost);

    var params = {
          xuid: 'XPM1760832',
          xpass: 'root',
          xproductcode: this.datapost.xproductcode,
          xidpelanggan1: this.datapost.xidpelanggan1,
          xidpelanggan2: this.datapost.xidpelanggan2,
          xidpelanggan3: this.datapost.xidpelanggan3,
          xnominal: '0',
          xref1: '0',
          xref2: '0',
          xref3: '0',
          xresponecode: 'FINANCE'
    }
    var query = "";
    for (let key in params) {
      query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
    }
    console.log(query);
    
    this.httpreq.postreqxpay("xpay.payment/payment?", query)
    .subscribe((response) => {
      console.log(response)
      if (response.STATUS == "OK") {
        this.datatagihan = response.DATA[0];
        console.log('Copy respon ke variable',this.datatagihan)
        this.navCtrl.push(ReceiptPage, {data : this.datatagihan,nomorpelanggan : this.nomorpelanggan})
      }}
      , 
      
      (error) => {

      })
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultifinancePage');
  }



}