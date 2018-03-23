import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
// import { DatePicker } from '@ionic-native/date-picker';
// import { MultiPickerModule } from 'ion-multi-picker';
import  moment  from 'moment';

/**
 * Generated class for the HotelPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class HotelPage {

  datasearch: any = {
    xlocation: '',
    checkindate: moment().format("YYYY-MM-DD"),
    nightduration:  '',
    checkoutdate: moment().format("YYYY-MM-DD"),
    xroom: '',
    xadult: 0,
    xchild: 0,
    xsort: '',
    xminprice: '',
    xmaxprice: '',
    minstar:'',
    maxstar:'',
    xlatitude: '',
    xlongitude: ''
  }



  destinations: string = '';
  duration: any='';
  room: any='';
  guest: any='';
  pricemin: any='';
  pricemax: any='';


  simpleColumns: any = [{
    name: 'Guest(s)',
      options: [{
          text: '1 Guest',
          value: '1'
        }, 
        {
          text: '2 Guest',
          value: '2'
        },
        {
          text: '3 Guest',
          value: '3'
        },
        {
          text: '4 Guest',
          value: '4'
        },
        {
          text: '5 Guest',
          value: '5'
        },
        {
          text: '6 Guest',
          value: '6'
        },
        {
          text: '7 Guest',
          value: '7'
        },
        {
          text: '8 Guest',
          value: '8'
        },
        {
          text: '9 Guest',
          value: '9'
        },
        {
          text: '10 Guest',
          value: '10'
        },
        {
          text: '11 Guest',
          value: '11'
        },
        {
          text: '12 Guest',
          value: '12'
        },
        {
          text: '13 Guest',
          value: '13'
        },
        {
          text: '14 Guest',
          value: '14'
        },
        {
          text: '15 Guest',
          value: '15'
        },
        {
          text: '16 Guest',
          value: '16'
        },
        {
          text: '17 Guest',
          value: '17'
        },
        {
          text: '18 Guest',
          value: '18'
        },
        {
          text: '19 Guest',
          value: '19'
        },
        {
          text: '20 Guest',
          value: '20'
        },
        {
          text: '21 Guest',
          value: '21'
        },
        {
          text: '22 Guest',
          value: '22'
        },
        {
          text: '23 Guest',
          value: '23'
        },
        {
          text: '24 Guest',
          value: '24'
        },
        {
          text: '25 Guest',
          value: '25'
        },
        {
          text: '26 Guest',
          value: '26'
        },
        {
          text: '27 Guest',
          value: '27'
        },
        {
          text: '28 Guest',
          value: '28'
        },
        {
          text: '29 Guest',
          value: '29'
        },
        {
          text: '30 Guest',
          value: '30'
        },
        {
          text: '31 Guest',
          value: '31'
        },
        {
          text: '32 Guest',
          value: '32'
        }
      ]
  }, {
    name: 'Room(s)',
      options: [{
          text: '1 Room',
          value: '1'
        },
        {
          text: '2 Room',
          value: '2'
        },
        {
          text: '3 Room',
          value: '3'
        },
        {
          text: '4 Room',
          value: '4'
        },
        {
          text: '5 Room',
          value: '5'
        },
        {
          text: '6 Room',
          value: '6'
        },
        {
          text: '7 Room',
          value: '7'
        },
        {
          text: '8 Room',
          value: '8'
        },
        {
          text: '9 Room',
          value: '8'
        },
        
      ]
  
  }];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  event: any = {
    datefrom: moment().format("YYYY-MM-DD"),
    dateto: moment().format("YYYY-MM-DD"),
    today: moment(new Date()).format("YYYY-MM-DD"),
    maxdate: moment(new Date()).add(400, 'days').format("YYYY-MM-DD")
  }

  openModal() {
    let myModal = this.modalCtrl.create(ModalHotelPage);
    myModal.present();
  }

  openModalDestination() {
    const myModal = this.modalCtrl.create(ModalHotelDestinationPage);
    myModal.onDidDismiss(data => {
      console.log(data)
    this.destinations = data;
    })
    myModal.present();
  }

  openModalSearch() {
    let myModal = this.modalCtrl.create(ModalHotelSearch);
    myModal.present();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelPage');
  }


}

@Component({
  templateUrl: 'modalhotel.html',
})
export class ModalHotelPage {

  price: any = { lower: 0, upper: 15000000 };
  priceMin: any = 0;
  priceMax: any = 15000000;
  priceMin2: any;
  priceMax2: any;
  button1col: string = 'light';
  button2col: string = 'light';
  button3col: string = 'light';
  button4col: string = 'light';
  button5col: string = 'light';
  hotelbintang: any = '';
  butval1: any = '1';
  butval2: any = '2';
  butval3: any = '3';
  butval4: any = '4';
  butval5: any = '5';
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.priceMin2 = this.priceMin;
    this.priceMax2 = this.priceMax;
  }

  setInputPrice(price) {
    this.priceMin2 = price.lower;
    this.priceMax2 = price.upper;
}

  resetValue(price) {
    price.lower = 0;
    price.upper = 15000000;
  }

  buttonselected1(): void {
    if(this.button1col === 'primary') { 
      this.button1col = 'light';
      this.hotelbintang = ''
    } else {
      this.button1col = 'primary';
      this.hotelbintang = this.hotelbintang+this.butval1
    }
  }

    buttonselected2(): void {
      if(this.button2col === 'primary') { 
        this.button2col = 'light'
      } else {
        this.button2col = 'primary'
      }
    }
    
    buttonselected3(): void {
      if(this.button3col === 'primary') { 
        this.button3col = 'light'
      } else {
        this.button3col = 'primary'
      }
    }

    buttonselected4(): void {
      if(this.button4col === 'primary') { 
        this.button4col = 'light'
      } else {
        this.button4col = 'primary'
      }
    }

    buttonselected5(): void {
      if(this.button5col === 'primary') { 
        this.button5col = 'light'
      } else {
        this.button5col = 'primary'
      }
    }

  


  closeModal() {
    this.viewCtrl.dismiss();
  }

}


@Component({
  templateUrl: 'modaldestination.html',
})
export class ModalHotelDestinationPage {

  searchQuery: any = '';
  items: any[];

  constructor(private viewCtrl: ViewController) {
    this.initializeItems();
  }

  closeModal(name) {
    console.log("ini disini"+name)
    this.viewCtrl.dismiss(name);
  }


  initializeItems() {
    this.items = [{
      "code": "JKT",
      "name": "Jakarta",
      "group": "Domestik"
    }, {
      "code": "BDG",
      "name": "Bandung",
      "group": "Domestik"
    }, {
      "code": "BGR",
      "name": "Bogor",
      "group": "Domestik"
    }]
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
  @Component({
    selector: 'page-searchhotel',
    templateUrl: 'hotelsearch.html',
  })
  export class ModalHotelSearch {
  
   destination: '';
   checkindate: '';
   duration: '';
   guest: '';
   room: '';

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    
    }

    ionViewDidLoad(){}


    closeModal() {
      console.log
      this.viewCtrl.dismiss();
    }

    openModalDetails() {
      let myModal = this.modalCtrl.create(ModalHotelDetails);
      myModal.present();
    }

  }

  @Component({
    templateUrl: 'hoteldetails.html',
  })
  export class ModalHotelDetails {
  

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    }

    closeModal() {
      this.viewCtrl.dismiss();
    }

    

  }