// import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpReqProvider } from '../../providers/http-req/http-req';
import { AuthSingletonProvider } from '../../providers/auth-singleton/auth-singleton';
// import { stringify } from '@angular/core/src/util';



@IonicPage()
@Component({
  selector: 'page-pulsapaketdata',
  templateUrl: 'pulsapaketdata.html',
})
export class PulsapaketdataPage {
  authInfo: any;
  loading: any;
  pulsapaket: any;
  vendordata: any;
  vendordetail: any;
  selectedvendor: string;
  selecteddetail: any = undefined;
  listavailable: string[];
  doneload: boolean = false;
  handphoneno: string = '';
  pin: string = '';
  vendorlength: number = 0;
  vresponse: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public httpreq: HttpReqProvider, public auth: AuthSingletonProvider, public alertctrl: AlertController) {
    this.authInfo = this.auth.authInfo;
    this.pulsapaket = navParams.get("pulsapaket");
    this.startFunc();
  }



  startFunc() {
    this.showloading();
    this.loading.present().then(() => {
      this.getVendorData()
    })
  }

  getVendorDetail() {
    var vresponse = [];
    var params = {
      xtoken: this.authInfo.token,
      xusername: this.authInfo.username,
      xaction: this.pulsapaket,
      xtype: this.pulsapaket,
      xvendorcode: this.vendordata[this.vendorlength].vendorCode,
      xpulsatype: this.pulsapaket == 'PULSA' ? 'P' : 'D'
    }
    var query = "";
    for (let key in params) {
      query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";

    }
    console.log(query)
    this.httpreq.postreq("semstvendorpulsa?", query)
      .subscribe((response) => {
          if (response.STATUS == "OK" && response.DATA.length !== 0) {
            // console.log("response");
            // console.log(response.DATA);
            // vresponse[this.vendordata[vendor].vendorCode] = response.DATA;
            let responsedata = this.vresponse;
            responsedata[response.DATA[0].vendorCode] = response.DATA;
            this.vresponse = responsedata;
            console.log(JSON.stringify(this.vendordata[this.vendorlength].vendorCode))
            console.log(this.vresponse)
            this.vendorlength++;
            if (this.vendorlength == this.vendordata.length) {
              this.vendordetail = this.vresponse;
              this.selectedvendor = this.vendordata[0].vendorCode;
              this.doneload = true;
              console.log("hasilakhir")
              console.log(this.vendordetail)
              if (this.loading !== 'nothing') {
                this.loading.dismiss();
                this.loading = 'nothing'

              }
              return;
            }
            this.getVendorDetail();
          } else if (response.STATUS == "OK" && response.DATA.length == 0) {
            this.selectedvendor = this.vendordata[0].vendorCode;

            ++this.vendorlength;
            this.getVendorDetail();
          }
          if (response.STATUS != "OK") {
            if (this.loading !== 'nothing') {
              this.loading.dismiss();
              this.loading = 'nothing'

            }
            this.showalert(response.MESSAGE);
          }

        }, (error) => {
          if (this.loading !== 'nothing') {
            this.loading.dismiss();
            this.loading = 'nothing'

          }

          this.showalert("KONEKSI BERMASALAH, HARAP ULANGI BEBERAPA SAAT LAGI");
        }

      )


  }


  existornot = (x): boolean => {
    for (let key in this.vendordetail) {
      if (x === key) {
        return true;
      } else {
        return false;
      }
    }
  }
  getVendorData() {

    var params = {
      xtoken: this.authInfo.token,
      xusername: this.authInfo.username,
      xaction: 'vendor',
      xtype: 'PULSA'
    }
    var query = "";
    for (let key in params) {
      query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
    }
    console.log(query);
    this.httpreq.postreq("semstvendorpulsa?", query)
      .subscribe((response) => {
          console.log(response);
          if (response.STATUS == "OK") {
            this.vendordata = response.DATA;
            console.log(this.vendordata);
            for (let vendor in this.vendordata) {
              if (this.vendordata[vendor].vendorCode == "BOLT" && this.pulsapaket == 'PULSA') {
                this.vendordata.splice(vendor, 1)
              }
            }
            this.getVendorDetail();
          } else if (response.STATUS != "OK") {
            this.loading.dismiss();
            this.showalert(response.MESSAGE);
            console.log(response)
          }

        }, (error) => {
          this.loading.dismiss();

          this.showalert("KONEKSI BERMASALAH, HARAP ULANGI BEBERAPA SAAT LAGI");
        }

      )
  }

  submitPulsa() {
    var paramsxpay = {
      xuid: 'XPM1760832',
      xpass: 'root',
      xprodukcode: this.selecteddetail.pulsaCode,
      xnomertelepon: this.handphoneno,
      xref1: 'tes'
    }
    var paramspulsa = {
      xtoken: this.authInfo.token,
      xusername: this.authInfo.username,
      xaccountnumber: this.authInfo.accountno,
      xpin: this.pin,
      xpulsacode: this.selecteddetail.pulsaCode,
      xnominal: this.selecteddetail.price,
      xphonenumber: this.handphoneno,
      xlocation: this.authInfo.location,
      xtranfrom: 'M'
    }
    var paramspaket = {
      xtoken: this.authInfo.token,
      xusername: this.authInfo.username,
      xaccountnumber: this.authInfo.accountno,
      xpin: this.pin,
      xpaketdata: this.selecteddetail.pulsaCode,
      xnominal: this.selecteddetail.price,
      xphonenumber: this.handphoneno,
      xlocation: this.authInfo.location,
      xtranfrom: 'M'
    }
    var query = "";
    for (let key in this.pulsapaket == 'PULSA' ? paramspulsa : paramspaket) {
      query += encodeURIComponent(key) + "=" + encodeURIComponent(
        this.pulsapaket == 'PULSA' ? paramspulsa[key] : paramspaket[key]) + "&";
    }
    var queryxpay = "";
    for (let key in paramsxpay) {
      queryxpay += encodeURIComponent(key) + "=" + encodeURIComponent(paramsxpay[key]) + "&";
    }
    console.log(JSON.stringify(this.selecteddetail))
    console.log(queryxpay)
    console.log(query)
    this.httpreq.postreq(this.pulsapaket == 'PULSA' ? "setrnpulsa?" : "setrnpaketdata?", query)
      .subscribe((response) => {

          if (response.STATUS == "OK") {
            this.httpreq.postreqxpay("setopuppulsa?", queryxpay).subscribe((response) => {
              console.log(JSON.stringify(response));
              if (response.STATUS == "OK") {
                this.loading.dismiss();
                this.showalert(response.DATA[0].keterangan);
              } else if (response.STATUS != "OK") {
                this.loading.dismiss();
                this.showalert("PENGISIAN PULSA GAGAL");
              }
            }, (error) => {
              this.showalert("KONEKSI BERMASALAH, HARAP ULANGI BEBERAPA SAAT LAGI");
            })

          } else if (response.STATUS != "OK") {

            this.loading.dismiss();
            this.showalert(response.MESSAGE);
          }
        }, (error) => {

          this.showalert("KONEKSI BERMASALAH, HARAP ULANGI BEBERAPA SAAT LAGI");
        }

      )
  }

  inputCheck() {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (this.handphoneno == '' || this.selecteddetail == undefined || this.selecteddetail.vendorCode !== this.selectedvendor) {
      this.showalert2("Harap Isi Nomor HP dan Pilihan Nominal");
    } else if (this.handphoneno !== '' && this.selecteddetail !== undefined) {

      this.showPrompt();

    }
  }

  showalert(msg) {
    let alert = this.alertctrl.create({
      title: 'NOTIFICATION',
      subTitle: msg,
      buttons: [{
        text: 'Ok',
        role: 'ok',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });

    alert.present();

  }


  showalert2(msg) {
    let alert = this.alertctrl.create({
      title: 'NOTIFICATION',
      subTitle: msg,
      buttons: [{
        text: 'Ok',
        role: 'ok',
        handler: () => {}
      }]
    });

    alert.present();

  }


  showloading(msg ? ) {
    this.loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Please Wait...'
    });
  }

  checklength(): boolean {
    var found = 0;
    if (this.doneload == true) {
      for (let vendor in this.vendordetail) {
        if (vendor === this.selectedvendor) {
          found++
        }
      }
    }
    return found > 0 ? true : false
  }
  cekavailable = () => {
    var found = [];
    for (let vendor in this.vendordata) {
      found.push(vendor);

    }
    this.listavailable = found;
  }

  showPrompt() {
    let prompt = this.alertctrl.create({
      title: 'PIN',
      message: "Enter Your PIN",
      inputs: [{
        name: 'PIN',
        placeholder: '123456',
        type: 'password',
        max: 6,
        min: 6
      }, ],
      buttons: [{
          text: 'Confirm',
          handler: data => {
            this.pin = data.PIN;
            this.showloading();
            this.loading.present();
            this.submitPulsa();
          }
        },
        {
          text: 'Cancel',
          handler: data => {}
        }

      ]
    });
    prompt.present();
  }
}
