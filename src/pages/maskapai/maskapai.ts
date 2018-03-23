import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
// import { DatePicker } from '@ionic-native/date-picker';
import moment from 'moment';
/**
 * Generated class for the MaskapaiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maskapai',
  templateUrl: 'maskapai.html',
})
export class MaskapaiPage {

  airports: any;

  datasearch: any = {
    arrival: '',
    departure: '',
    datedeparture: moment().format("YYYY-MM-DD"),
    datereturn: moment().format("YYYY-MM-DD"),
    adult: 0,
    infant: 0,
    child: 0
  }

  origin: string = '';
  destination: string = '';
  roundtrip: boolean = false;
  event: any = {
    datefrom: moment().format("YYYY-MM-DD"),
    dateto: moment().format("YYYY-MM-DD"),
    today: moment(new Date()).format("YYYY-MM-DD"),
    maxdate: moment(new Date()).add(400, 'days').format("YYYY-MM-DD"),
    roundtrip: false
  }
  simpleColumns: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.simpleColumns = [{
      name: 'adult',
      options: [{
          text: '1 Adult',
          value: '1'
        },
        {
          text: '2 Adult',
          value: '2'
        },
        {
          text: '3 Adult',
          value: '3'
        },
        {
          text: '4 Adult',
          value: '3'
        },
        {
          text: '5 Adult',
          value: '3'
        },
        {
          text: '6 Adult',
          value: '3'
        },
        {
          text: '7 Adult',
          value: '3'
        }
      ]
    }, {
      name: 'child',
      options: [{
          text: '0 Child',
          value: '1-1'
        },
        {
          text: '1 Child',
          value: '1-1'
        },
        {
          text: '2 Child',
          value: '1-2'
        },
        {
          text: '3 Child',
          value: '2-1'
        },
        {
          text: '4 Child',
          value: '2-2'
        },
        {
          text: '5 Child',
          value: '3-1'
        },
        {
          text: '6 Child',
          value: '3-1'
        },
      ]
    }, {
      name: 'infant',
      options: [{
          text: '0 Infant',
          value: '1-1-1'
        },
        {
          text: '1 Infant',
          value: '1-1-2'
        },
        {
          text: '2 Infant',
          value: '1-1-2'
        },
        {
          text: '3 Infant',
          value: '1-1-2'
        },
        {
          text: '4 Infant',
          value: '1-1-2'
        },
      ]
    }];
  }





  openModal(obj) {
    let myModal = this.modalCtrl.create(AirportsPage);
    myModal.onDidDismiss(data => {
      obj == "origin" ? this.datasearch.departure = data : this.datasearch.arrival = data;
    })
    myModal.present();
  }

  searchflight() {
    this.navCtrl.push(SearchPage, {
      'data': this.datasearch
    });
  }

  caripesawat() {
    this.navCtrl.push(MaskapaiSearchPage, {
      'data': this.datasearch
    });
  }

  
}

@Component({
  selector: 'page-airports',
  templateUrl: 'airports.html'
})
export class AirportsPage {

  data: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.setData();
  }

  setData() {
    this.data = [{
      "code": "DUS",
      "name": "Dusseldorf (DUS), Germany",
      "group": "Internasional"
    }, {
      "code": "TRZ",
      "name": "Tiruchirappalli (TRZ), India",
      "group": "Internasional"
    }, {
      "code": "BKI",
      "name": "Kota Kinabalu (BKI), Malaysia",
      "group": "Internasional"
    }, {
      "code": "TRV",
      "name": "Trivandrum (TRV), India",
      "group": "Internasional"
    }, {
      "code": "PVG",
      "name": "Shanghai Pudong (PVG), China",
      "group": "Internasional"
    }, {
      "code": "KWE",
      "name": "Guiyang (KWE), China",
      "group": "Internasional"
    }, {
      "code": "PHS",
      "name": "Phitsanulok (PHS), Thailand",
      "group": "Internasional"
    }, {
      "code": "PUM",
      "name": "Kolaka (PUM)",
      "group": "Domestik"
    }, {
      "code": "LSW",
      "name": "Lhokseumawe (LSW)",
      "group": "Domestik"
    }, {
      "code": "KNY",
      "name": "Kenyam (KNY), Nduga",
      "group": "Domestik"
    }, {
      "code": "DJB",
      "name": "Jambi (DJB)",
      "group": "Domestik"
    }, {
      "code": "BEJ",
      "name": "Berau (BEJ)",
      "group": "Domestik"
    }, {
      "code": "FKQ",
      "name": "Fakfak (FKQ)",
      "group": "Domestik"
    }, {
      "code": "TRK",
      "name": "Tarakan (TRK)",
      "group": "Domestik"
    }, {
      "code": "MRB",
      "name": "Muara Bungo (MRB)",
      "group": "Domestik"
    }, {
      "code": "TLI",
      "name": "Tolitoli (TLI)",
      "group": "Domestik"
    }, {
      "code": "TTE",
      "name": "Ternate (TTE)",
      "group": "Domestik"
    }, {
      "code": "LKA",
      "name": "Larantuka (LKA), Flores Timur",
      "group": "Domestik"
    }, {
      "code": "BWX",
      "name": "Banyuwangi (BWX)",
      "group": "Domestik"
    }, {
      "code": "TJS",
      "name": "Tanjung Selor (TJS), Bulungan",
      "group": "Domestik"
    }, {
      "code": "TNJ",
      "name": "Tanjungpinang (TNJ)",
      "group": "Domestik"
    }, {
      "code": "KNO",
      "name": "Medan (KNO)",
      "group": "Domestik"
    }, {
      "code": "SUP",
      "name": "SUMENEP (SUP)",
      "group": "Domestik"
    }, {
      "code": "SWQ",
      "name": "Sumbawa (SWQ)",
      "group": "Domestik"
    }, {
      "code": "SOC",
      "name": "Solo (SOC), Surakarta",
      "group": "Domestik"
    }, {
      "code": "SNK",
      "name": "Sinak (SNK), Puncak",
      "group": "Domestik"
    }, {
      "code": "SMG",
      "name": "Simeuleu (SMG)",
      "group": "Domestik"
    }, {
      "code": "SXK",
      "name": "Saumlaki (SXK), Maluku Tenggara Barat",
      "group": "Domestik"
    }, {
      "code": "SBG",
      "name": "Sabang (SBG)",
      "group": "Domestik"
    }, {
      "code": "WNI",
      "name": "Wakatobi (WNI)",
      "group": "Domestik"
    }, {
      "code": "LAH",
      "name": "Labuha (LAH), Halmahera Selatan",
      "group": "Domestik"
    }, {
      "code": "OTI",
      "name": "Morotai (OTI), Halmahera Utara",
      "group": "Domestik"
    }, {
      "code": "KEP",
      "name": "Kepi (KEP), Mappi",
      "group": "Domestik"
    }, {
      "code": "FLZ",
      "name": "Sibolga (FLZ)",
      "group": "Domestik"
    }, {
      "code": "BTJ",
      "name": "Banda Aceh (BTJ)",
      "group": "Domestik"
    }, {
      "code": "VPM",
      "name": "Ampana (VPM)",
      "group": "Domestik"
    }, {
      "code": "RAQ",
      "name": "RAHA (RAQ)",
      "group": "Domestik"
    }, {
      "code": "AMQ",
      "name": "Ambon (AMQ)",
      "group": "Domestik"
    }, {
      "code": "RTG",
      "name": "Ruteng (RTG), Manggarai",
      "group": "Domestik"
    }, {
      "code": "BDJ",
      "name": "Banjarmasin (BDJ)",
      "group": "Domestik"
    }, {
      "code": "BJW",
      "name": "Bajawa (BJW), Ngada",
      "group": "Domestik"
    }, {
      "code": "MNA",
      "name": "Melongguane (MNA), Kep Talaud",
      "group": "Domestik"
    }, {
      "code": "NPO",
      "name": "Nanga Pinoh (NPO), Melawi",
      "group": "Domestik"
    }, {
      "code": "LUW",
      "name": "Luwuk (LUW), Banggai",
      "group": "Domestik"
    }, {
      "code": "LOP",
      "name": "Lombok (LOP)",
      "group": "Domestik"
    }, {
      "code": "BTH",
      "name": "Batam (BTH)",
      "group": "Domestik"
    }, {
      "code": "BUW",
      "name": "Baubau (BUW)",
      "group": "Domestik"
    }, {
      "code": "BKS",
      "name": "Bengkulu (BKS)",
      "group": "Domestik"
    }, {
      "code": "BIK",
      "name": "Biak (BIK)",
      "group": "Domestik"
    }, {
      "code": "BMU",
      "name": "Bima (BMU)",
      "group": "Domestik"
    }, {
      "code": "DUM",
      "name": "Dumai (DUM)",
      "group": "Domestik"
    }, {
      "code": "ENE",
      "name": "Ende (ENE)",
      "group": "Domestik"
    }, {
      "code": "GLX",
      "name": "Galela (GLX), Halmahera Utara",
      "group": "Domestik"
    }, {
      "code": "GTO",
      "name": "Gorontalo (GTO)",
      "group": "Domestik"
    }, {
      "code": "KTG",
      "name": "Ketapang (KTG)",
      "group": "Domestik"
    }, {
      "code": "KOX",
      "name": "Kokonau (KOX), Mimika",
      "group": "Domestik"
    }, {
      "code": "KBU",
      "name": "Kotabaru (KBU)",
      "group": "Domestik"
    }, {
      "code": "DVO",
      "name": "Davao (DVO), Philippines",
      "group": "Internasional"
    }, {
      "code": "ATQ",
      "name": "Amritsar (ATQ), India",
      "group": "Internasional"
    }, {
      "code": "THD",
      "name": "Thanh Hoa (THD), Vietnam",
      "group": "Internasional"
    }, {
      "code": "AMD",
      "name": "Ahmedabad (AMD), India",
      "group": "Internasional"
    }, {
      "code": "KBR",
      "name": "Kota Bharu (KBR), Malaysia",
      "group": "Internasional"
    }, {
      "code": "GAU",
      "name": "Guwahati (GAU), India",
      "group": "Internasional"
    }, {
      "code": "KTM",
      "name": "Kathmandu (KTM), Nepal",
      "group": "Internasional"
    }, {
      "code": "KMG",
      "name": "Kunming (KMG), China",
      "group": "Internasional"
    }, {
      "code": "TGG",
      "name": "Kuala Terengganu (TGG), Malaysia",
      "group": "Internasional"
    }, {
      "code": "MAN",
      "name": "Manchester (MAN), UK",
      "group": "Internasional"
    }, {
      "code": "TBB",
      "name": "Tuy Hoa (TBB), Vietnam",
      "group": "Internasional"
    }, {
      "code": "SBW",
      "name": "Sibu (SBW), Malaysia",
      "group": "Internasional"
    }, {
      "code": "NYT",
      "name": "Nay Pyi Taw (NYT), Myanmar",
      "group": "Internasional"
    }, {
      "code": "LBU",
      "name": "Labuan (LBU), Malaysia",
      "group": "Internasional"
    }, {
      "code": "ITM",
      "name": "Osaka Itami (ITM), Japan",
      "group": "Internasional"
    }, {
      "code": "MDL",
      "name": "Mandalay (MDL), Myanmar",
      "group": "Internasional"
    }, {
      "code": "HLP",
      "name": "Halim PK (HLP), Jakarta",
      "group": "Domestik"
    }, {
      "code": "MRW",
      "name": "Morowali",
      "group": "Domestik"
    }, {
      "code": "SRI",
      "name": "Samarinda (SRI)",
      "group": "Domestik"
    }, {
      "code": "WMX",
      "name": "Wamena (WMX), Jayawijaya",
      "group": "Domestik"
    }, {
      "code": "BDO",
      "name": "Bandung (BDO)",
      "group": "Domestik"
    }, {
      "code": "WGP",
      "name": "Waingapu (WGP), Sumba Timur",
      "group": "Domestik"
    }, {
      "code": "YKR",
      "name": "Selayar (YKR)",
      "group": "Domestik"
    }, {
      "code": "PLW",
      "name": "Palu (PLW)",
      "group": "Domestik"
    }, {
      "code": "WUB",
      "name": "Buli (WUB), Halmahera Timur",
      "group": "Domestik"
    }, {
      "code": "TIM",
      "name": "Timika (TIM), Mimika",
      "group": "Domestik"
    }, {
      "code": "TAC",
      "name": "Tacloban (TAC), Philippines",
      "group": "Internasional"
    }, {
      "code": "SNO",
      "name": "Sakon Nakhon (SNO), Thailand",
      "group": "Internasional"
    }, {
      "code": "NAW",
      "name": "Narathiwat (NAW), Thailand",
      "group": "Internasional"
    }, {
      "code": "BTW",
      "name": "BATU LICIN (BTW)",
      "group": "Domestik"
    }, {
      "code": "DOB",
      "name": "Dobo (DOB)",
      "group": "Domestik"
    }, {
      "code": "PSU",
      "name": "Putussibau (PSU), Kapuas Hulu",
      "group": "Domestik"
    }, {
      "code": "PNK",
      "name": "Pontianak (PNK)",
      "group": "Domestik"
    }, {
      "code": "AEG",
      "name": "Tapanuli Selatan(AEG)",
      "group": "Domestik"
    }, {
      "code": "SNB",
      "name": "Sinabang (SNB)",
      "group": "Domestik"
    }, {
      "code": "TXE",
      "name": "Takengon (TXE)",
      "group": "Domestik"
    }, {
      "code": "SUB",
      "name": "Surabaya (SUB)",
      "group": "Domestik"
    }, {
      "code": "MLK",
      "name": "Melak (MLK), Kutai Barat",
      "group": "Domestik"
    }, {
      "code": "RTI",
      "name": "Rote (RTI)",
      "group": "Domestik"
    }, {
      "code": "NAH",
      "name": "Tahuna (NAH), Kep Sangihe",
      "group": "Domestik"
    }, {
      "code": "PKY",
      "name": "Palangkaraya (PKY)",
      "group": "Domestik"
    }, {
      "code": "RJM",
      "name": "Raja Ampat (RJM)",
      "group": "Domestik"
    }, {
      "code": "KOE",
      "name": "Kupang (KOE)",
      "group": "Domestik"
    }, {
      "code": "JBB",
      "name": "Jember (JBB)",
      "group": "Domestik"
    }, {
      "code": "KDI",
      "name": "Kendari (KDI)",
      "group": "Domestik"
    }, {
      "code": "JOG",
      "name": "Yogyakarta (JOG)",
      "group": "Domestik"
    }, {
      "code": "SRG",
      "name": "Semarang (SRG)",
      "group": "Domestik"
    }, {
      "code": "CKG",
      "name": "Chongqing (CKG), China",
      "group": "Internasional"
    }, {
      "code": "TWU",
      "name": "Tawau (TWU), Malaysia",
      "group": "Internasional"
    }, {
      "code": "TAK",
      "name": "Takamatsu (TAK), Japan",
      "group": "Internasional"
    }, {
      "code": "CTS",
      "name": "Sapporo (CTS), Japan",
      "group": "Internasional"
    }, {
      "code": "NNT",
      "name": "Nan (NNT), Thailand",
      "group": "Internasional"
    }, {
      "code": "SDK",
      "name": "Sandakan (SDK), Malaysia",
      "group": "Internasional"
    }, {
      "code": "TST",
      "name": "Trang (TST), Thailand",
      "group": "Internasional"
    }, {
      "code": "AOR",
      "name": "Alor Setar (AOR), Malaysia",
      "group": "Internasional"
    }, {
      "code": "ATH",
      "name": "Athens (ATH), Greece",
      "group": "Internasional"
    }, {
      "code": "BAH",
      "name": "Bahrain (BAH)",
      "group": "Internasional"
    }, {
      "code": "HKG",
      "name": "Hong Kong (HKG)",
      "group": "Internasional"
    }, {
      "code": "SDJ",
      "name": "Sendai (SDJ), Japan",
      "group": "Internasional"
    }, {
      "code": "PEK",
      "name": "Beijing (PEK), China",
      "group": "Internasional"
    }, {
      "code": "LOE",
      "name": "Loei (LOE), Thailand",
      "group": "Internasional"
    }, {
      "code": "KOP",
      "name": "Nakhon Phanom (KOP), Thailand",
      "group": "Internasional"
    }, {
      "code": "NST",
      "name": "Nakhon Si Thammarat (NST), Thailand",
      "group": "Internasional"
    }, {
      "code": "ROI",
      "name": "Roi Et (ROI), Thailand",
      "group": "Internasional"
    }, {
      "code": "TAG",
      "name": "Tagbilaran (TAG), Philippines",
      "group": "Internasional"
    }, {
      "code": "BWN",
      "name": "Brunei (BWN), Brunei",
      "group": "Internasional"
    }, {
      "code": "BRU",
      "name": "Brussels (BRU), Belgium",
      "group": "Internasional"
    }, {
      "code": "PUS",
      "name": "Busan (PUS), South Korea",
      "group": "Internasional"
    }, {
      "code": "UBP",
      "name": "Ubon Ratchathani (UBP), Thailand",
      "group": "Internasional"
    }, {
      "code": "CGP",
      "name": "Chittagong (CGP), Bangladesh",
      "group": "Internasional"
    }, {
      "code": "FUK",
      "name": "Fukuoka (FUK), Japan",
      "group": "Internasional"
    }, {
      "code": "KMQ",
      "name": "Komatsu (KMQ), Japan",
      "group": "Internasional"
    }, {
      "code": "MYY",
      "name": "Miri (MYY), Malaysia",
      "group": "Internasional"
    }, {
      "code": "PNQ",
      "name": "Pune (PNQ), India",
      "group": "Internasional"
    }, {
      "code": "PPS",
      "name": "Puerto Princesa (PPS), Philippines",
      "group": "Internasional"
    }, {
      "code": "BCN",
      "name": "Barcelona (BCN), Spain",
      "group": "Internasional"
    }, {
      "code": "HHQ",
      "name": "Huahin (HHQ), Thailand",
      "group": "Internasional"
    }, {
      "code": "FCO",
      "name": "Rome (FCO), Italy",
      "group": "Internasional"
    }, {
      "code": "LLO",
      "name": "PALOPO (LLO)",
      "group": "Domestik"
    }, {
      "code": "DPS",
      "name": "Denpasar (DPS)",
      "group": "Domestik"
    }, {
      "code": "CGK",
      "name": "Jakarta (CGK)",
      "group": "Domestik"
    }, {
      "code": "ABU",
      "name": "Atambua (ABU), Belu",
      "group": "Domestik"
    }, {
      "code": "OKL",
      "name": "OKSIBIL(OKL)",
      "group": "Domestik"
    }, {
      "code": "DEX",
      "name": "DEKAI(DEX)",
      "group": "Domestik"
    }, {
      "code": "PDG",
      "name": "Padang (PDG)",
      "group": "Domestik"
    }, {
      "code": "EWE",
      "name": "Ewer (EWE), Asmat",
      "group": "Domestik"
    }, {
      "code": "MDC",
      "name": "Manado (MDC)",
      "group": "Domestik"
    }, {
      "code": "SOQ",
      "name": "Sorong (SOQ)",
      "group": "Domestik"
    }, {
      "code": "KRC",
      "name": "KERINCI",
      "group": "Domestik"
    }, {
      "code": "TKG",
      "name": "Bandar Lampung (TKG)",
      "group": "Domestik"
    }, {
      "code": "JED",
      "name": "Jeddah (JED), Saudi Arabia",
      "group": "Internasional"
    }, {
      "code": "KUA",
      "name": "Kuantan (KUA), Malaysia",
      "group": "Internasional"
    }, {
      "code": "KTE",
      "name": "Kerteh (KTE), Malaysia",
      "group": "Internasional"
    }, {
      "code": "NKM",
      "name": "Nagoya (NKM), Japan",
      "group": "Internasional"
    }, {
      "code": "CAN",
      "name": "Guangzhou (CAN), China",
      "group": "Internasional"
    }, {
      "code": "REP",
      "name": "Siem Reap (REP), Cambodia",
      "group": "Internasional"
    }, {
      "code": "WUX",
      "name": "Wuxi (WUX), China",
      "group": "Internasional"
    }, {
      "code": "WUH",
      "name": "Wuhan (WUH), China",
      "group": "Internasional"
    }, {
      "code": "DMK",
      "name": "Bangkok Don Mueang (DMK), Thailand",
      "group": "Internasional"
    }, {
      "code": "VTZ",
      "name": "Visakhapatnam (VTZ), India",
      "group": "Internasional"
    }, {
      "code": "FRA",
      "name": "Frankfurt (FRA), Germany",
      "group": "Internasional"
    }, {
      "code": "IST",
      "name": "Istanbul (IST), Turkey",
      "group": "Internasional"
    }, {
      "code": "CEB",
      "name": "Cebu (CEB), Philippines",
      "group": "Internasional"
    }, {
      "code": "ORD",
      "name": "Chicago (ORD), USA",
      "group": "Internasional"
    }, {
      "code": "VCE",
      "name": "Venice (VCE), Italy",
      "group": "Internasional"
    }, {
      "code": "BLR",
      "name": "Bengaluru (BLR), India",
      "group": "Internasional"
    }, {
      "code": "CRK",
      "name": "Clark (CRK), Philippines",
      "group": "Internasional"
    }, {
      "code": "IMF",
      "name": "Imphal (IMF), India",
      "group": "Internasional"
    }, {
      "code": "UTH",
      "name": "Udon Thani (UTH), Thailand",
      "group": "Internasional"
    }, {
      "code": "DAC",
      "name": "Dhaka (DAC), Bangladesh",
      "group": "Internasional"
    }, {
      "code": "USM",
      "name": "Koh Samui (USM), Thailand",
      "group": "Internasional"
    }, {
      "code": "HAN",
      "name": "Hanoi (HAN), Vietnam",
      "group": "Internasional"
    }, {
      "code": "UTP",
      "name": "Pattaya (UTP), Thailand",
      "group": "Internasional"
    }, {
      "code": "LPT",
      "name": "Lampang (LPT), Thailand",
      "group": "Internasional"
    }, {
      "code": "MFM",
      "name": "Macau (MFM)",
      "group": "Internasional"
    }, {
      "code": "ORY",
      "name": "Paris Orly (ORY), France",
      "group": "Internasional"
    }, {
      "code": "OOL",
      "name": "Gold Coast (OOL), Australia",
      "group": "Internasional"
    }, {
      "code": "TXL",
      "name": "Berlin (TXL), Germany",
      "group": "Internasional"
    }, {
      "code": "HAK",
      "name": "Haikou (HAK), China",
      "group": "Internasional"
    }, {
      "code": "HDY",
      "name": "Hat Yai (HDY), Thailand",
      "group": "Internasional"
    }, {
      "code": "JHB",
      "name": "Johor Bahru (JHB), Malaysia",
      "group": "Internasional"
    }, {
      "code": "KLO",
      "name": "Kalibo (KLO), Philippines",
      "group": "Internasional"
    }, {
      "code": "XMN",
      "name": "Xiamen (XMN), China",
      "group": "Internasional"
    }, {
      "code": "CDG",
      "name": "Paris Charles DG (CDG), France",
      "group": "Internasional"
    }, {
      "code": "CEI",
      "name": "Chiang Rai (CEI), Thailand",
      "group": "Internasional"
    }, {
      "code": "VTE",
      "name": "Vientiane (VTE), Laos",
      "group": "Internasional"
    }, {
      "code": "ARN",
      "name": "Stockholm (ARN), Sweden",
      "group": "Internasional"
    }, {
      "code": "SVO",
      "name": "Moscow Sheremetyevo (SVO), Russia",
      "group": "Internasional"
    }, {
      "code": "SZX",
      "name": "Shenzhen (SZX), China",
      "group": "Internasional"
    }, {
      "code": "SQG",
      "name": "Sintang (SQG)",
      "group": "Domestik"
    }, {
      "code": "KNG",
      "name": "Kaimana (KNG)",
      "group": "Domestik"
    }, {
      "code": "BPN",
      "name": "Balikpapan (BPN)",
      "group": "Domestik"
    }, {
      "code": "MOF",
      "name": "Maumere (MOF), Sikka",
      "group": "Domestik"
    }, {
      "code": "PKU",
      "name": "Pekanbaru (PKU)",
      "group": "Domestik"
    }, {
      "code": "PLM",
      "name": "Palembang (PLM)",
      "group": "Domestik"
    }, {
      "code": "COK",
      "name": "Kochi (COK), India",
      "group": "Internasional"
    }, {
      "code": "DIL",
      "name": "Dili (DIL), Timor Leste",
      "group": "Internasional"
    }, {
      "code": "DRW",
      "name": "Darwin (DRW), Australia",
      "group": "Internasional"
    }, {
      "code": "CGY",
      "name": "Cagayan de Oro (CGY), Philippines",
      "group": "Internasional"
    }, {
      "code": "VII",
      "name": "Vinh (VII), Vietnam",
      "group": "Internasional"
    }, {
      "code": "MAD",
      "name": "Madrid (MAD), Spain",
      "group": "Internasional"
    }, {
      "code": "KCH",
      "name": "Kuching (KCH), Malaysia",
      "group": "Internasional"
    }, {
      "code": "MUC",
      "name": "Munich (MUC), Germany",
      "group": "Internasional"
    }, {
      "code": "MCT",
      "name": "Muscat (MCT), Oman",
      "group": "Internasional"
    }, {
      "code": "SLL",
      "name": "Salalah (SLL), Oman",
      "group": "Internasional"
    }, {
      "code": "DUB",
      "name": "Dublin (DUB), Ireland",
      "group": "Internasional"
    }, {
      "code": "CMB",
      "name": "Colombo (CMB), Sri Lanka",
      "group": "Internasional"
    }, {
      "code": "CPH",
      "name": "Copenhagen (CPH), Denmark",
      "group": "Internasional"
    }, {
      "code": "DAD",
      "name": "Da Nang (DAD), Vietnam",
      "group": "Internasional"
    }, {
      "code": "CTU",
      "name": "Chengdu (CTU), China",
      "group": "Internasional"
    }, {
      "code": "OSL",
      "name": "Oslo (OSL), Norway",
      "group": "Internasional"
    }, {
      "code": "CSX",
      "name": "Changsha (CSX), China",
      "group": "Internasional"
    }, {
      "code": "BTU",
      "name": "Bintulu (BTU), Malaysia",
      "group": "Internasional"
    }, {
      "code": "HGH",
      "name": "Hangzhou (HGH), China",
      "group": "Internasional"
    }, {
      "code": "KWL",
      "name": "Guilin (KWL), China",
      "group": "Internasional"
    }, {
      "code": "DXB",
      "name": "Dubai (DXB), United Arab Emirates",
      "group": "Internasional"
    }, {
      "code": "HND",
      "name": "Tokyo Haneda (HND), Japan",
      "group": "Internasional"
    }, {
      "code": "IPH",
      "name": "Ipoh (IPH), Malaysia",
      "group": "Internasional"
    }, {
      "code": "KBV",
      "name": "Krabi (KBV), Thailand",
      "group": "Internasional"
    }, {
      "code": "LAX",
      "name": "Los Angeles (LAX), USA",
      "group": "Internasional"
    }, {
      "code": "DEL",
      "name": "New Delhi (DEL), India",
      "group": "Internasional"
    }, {
      "code": "JFK",
      "name": "New York (JFK), USA",
      "group": "Internasional"
    }, {
      "code": "PER",
      "name": "Perth (PER), Australia",
      "group": "Internasional"
    }, {
      "code": "PEN",
      "name": "Penang (PEN), Malaysia",
      "group": "Internasional"
    }, {
      "code": "KUL",
      "name": "Kuala Lumpur (KUL), Malaysia",
      "group": "Internasional"
    }, {
      "code": "SEA",
      "name": "Seattle (SEA), USA",
      "group": "Internasional"
    }, {
      "code": "LKO",
      "name": "Lucknow (LKO), India",
      "group": "Internasional"
    }, {
      "code": "TPE",
      "name": "Taipei (TPE), Taiwan",
      "group": "Internasional"
    }, {
      "code": "TSN",
      "name": "Tianjin (TNA), China",
      "group": "Internasional"
    }, {
      "code": "LGK",
      "name": "Langkawi (LGK), Malaysia",
      "group": "Internasional"
    }, {
      "code": "NKG",
      "name": "Nanjing (NKG), China",
      "group": "Internasional"
    }, {
      "code": "LJG",
      "name": "Lijiang (LJG), China",
      "group": "Internasional"
    }, {
      "code": "MLE",
      "name": "Male (MLE), Maldives",
      "group": "Internasional"
    }, {
      "code": "SIN",
      "name": "Singapore (SIN)",
      "group": "Internasional"
    }, {
      "code": "LGW",
      "name": "London Gatwick (LGW), United Kingdom",
      "group": "Internasional"
    }, {
      "code": "NNG",
      "name": "Nanning (NNG), China",
      "group": "Internasional"
    }, {
      "code": "HYD",
      "name": "Hyderabad (HYD), India",
      "group": "Internasional"
    }, {
      "code": "SYD",
      "name": "Sydney (SYD), Australia",
      "group": "Internasional"
    }, {
      "code": "MNL",
      "name": "Manila (MNL), Philippines",
      "group": "Internasional"
    }, {
      "code": "TNA",
      "name": "Jinan (TNA), China",
      "group": "Internasional"
    }, {
      "code": "JJN",
      "name": "Jinjiang (JJN), China",
      "group": "Internasional"
    }, {
      "code": "BOM",
      "name": "Mumbai (BOM), India",
      "group": "Internasional"
    }, {
      "code": "SFO",
      "name": "San Francisco (SFO), USA",
      "group": "Internasional"
    }, {
      "code": "AUH",
      "name": "Abu Dhabi (AUH), United Arab Emirates",
      "group": "Internasional"
    }, {
      "code": "KAZ",
      "name": "Tobelo (KAZ), Halmahera Utara",
      "group": "Domestik"
    }, {
      "code": "UOL",
      "name": "Buol (UOL)",
      "group": "Domestik"
    }, {
      "code": "DJJ",
      "name": "Jayapura (DJJ)",
      "group": "Domestik"
    }, {
      "code": "TJQ",
      "name": "Tanjung Pandan (TJQ), Belitung",
      "group": "Domestik"
    }, {
      "code": "PKN",
      "name": "Pangkalanbun (PKN), Kotawaringin Barat",
      "group": "Domestik"
    }, {
      "code": "MKY",
      "name": "Mackay (MKY), Australia",
      "group": "Internasional"
    }, {
      "code": "MCY",
      "name": "Sunshine Coast (MCY), Australia",
      "group": "Internasional"
    }, {
      "code": "MYJ",
      "name": "Matsuyama (MYJ), Japan",
      "group": "Internasional"
    }, {
      "code": "KKC",
      "name": "Khon Kaen (KKC), Thailand",
      "group": "Internasional"
    }, {
      "code": "PMR",
      "name": "Palmerston North (PMR), New Zealand",
      "group": "Internasional"
    }, {
      "code": "HIS",
      "name": "Hayman Island (HIS), Australia",
      "group": "Internasional"
    }, {
      "code": "AVV",
      "name": "Melbourne Avalon (AVV), Australia",
      "group": "Internasional"
    }, {
      "code": "NAN",
      "name": "Nadi (NAN), Fiji",
      "group": "Internasional"
    }, {
      "code": "SWA",
      "name": "Shantou (SWA), China",
      "group": "Internasional"
    }, {
      "code": "CCU",
      "name": "Kolkata (CCU), India",
      "group": "Internasional"
    }, {
      "code": "MKZ",
      "name": "Malacca (MKZ), Malaysia",
      "group": "Internasional"
    }, {
      "code": "URT",
      "name": "Surat Thani (URT), Thailand",
      "group": "Internasional"
    }, {
      "code": "SZB",
      "name": "Subang (SZB), Malaysia",
      "group": "Internasional"
    }, {
      "code": "MXP",
      "name": "Milan (MXP), Italy",
      "group": "Internasional"
    }, {
      "code": "DME",
      "name": "Moscow Domodedovo (DME), Russia",
      "group": "Internasional"
    }, {
      "code": "UIH",
      "name": "Quy Nhon (UIH), Vietnam",
      "group": "Internasional"
    }, {
      "code": "KHN",
      "name": "Nanchang (KHN), China",
      "group": "Internasional"
    }, {
      "code": "CXR",
      "name": "Nha Trang (CXR), Vietnam",
      "group": "Internasional"
    }, {
      "code": "PXU",
      "name": "Pleiku (PXU), Vietnam",
      "group": "Internasional"
    }, {
      "code": "PNH",
      "name": "Phnom Penh (PNH), Cambodia",
      "group": "Internasional"
    }, {
      "code": "OIT",
      "name": "Oita (OIT), Japan",
      "group": "Internasional"
    }, {
      "code": "ADL",
      "name": "Adelaide (ADL), Australia",
      "group": "Internasional"
    }, {
      "code": "AMS",
      "name": "Amsterdam (AMS), Netherlands",
      "group": "Internasional"
    }, {
      "code": "BNK",
      "name": "Ballina Byron (BNK), Australia",
      "group": "Internasional"
    }, {
      "code": "BKK",
      "name": "Bangkok (BKK), Thailand",
      "group": "Internasional"
    }, {
      "code": "BNE",
      "name": "Brisbane (BNE), Australia",
      "group": "Internasional"
    }, {
      "code": "CNS",
      "name": "Cairns (CNS), Australia",
      "group": "Internasional"
    }, {
      "code": "CAI",
      "name": "Cairo (CAI), Egypt",
      "group": "Internasional"
    }, {
      "code": "CBR",
      "name": "Canberra (CBR), Australia",
      "group": "Internasional"
    }, {
      "code": "CNX",
      "name": "Chiang Mai (CNX), Thailand",
      "group": "Internasional"
    }, {
      "code": "DYG",
      "name": "Zhangjiajie (DYG), China",
      "group": "Internasional"
    }, {
      "code": "KHH",
      "name": "Kaohsiung (KHH), Taiwan",
      "group": "Internasional"
    }, {
      "code": "XIY",
      "name": "Xian (XIY), China",
      "group": "Internasional"
    }, {
      "code": "LHR",
      "name": "London Heathrow (LHR), United Kingdom",
      "group": "Internasional"
    }, {
      "code": "MEL",
      "name": "Melbourne (MEL), Australia",
      "group": "Internasional"
    }, {
      "code": "SHE",
      "name": "Shenyang (SHE), China",
      "group": "Internasional"
    }, {
      "code": "GNS",
      "name": "Nias (GNS), Gunungsitoli",
      "group": "Domestik"
    }, {
      "code": "NGB",
      "name": "Ningbo (NGB), China",
      "group": "Internasional"
    }, {
      "code": "HKT",
      "name": "Phuket (HKT), Thailand",
      "group": "Internasional"
    }, {
      "code": "MAA",
      "name": "Chennai (MAA), India",
      "group": "Internasional"
    }, {
      "code": "GOI",
      "name": "Goa (GOI), India",
      "group": "Internasional"
    }, {
      "code": "JAI",
      "name": "Jaipur (JAI), India",
      "group": "Internasional"
    }, {
      "code": "AKL",
      "name": "Auckland (AKL), New Zealand",
      "group": "Internasional"
    }, {
      "code": "VCL",
      "name": "Chu Lai (VCL), Vietnam",
      "group": "Internasional"
    }, {
      "code": "DLI",
      "name": "Da Lat (DLI), Vietnam",
      "group": "Internasional"
    }, {
      "code": "NGO",
      "name": "Nagoya (NGO), Japan",
      "group": "Internasional"
    }, {
      "code": "NPE",
      "name": "Napier (NPE), New Zealand",
      "group": "Internasional"
    }, {
      "code": "VDH",
      "name": "Dong Hoi (VDH), Vietnam",
      "group": "Internasional"
    }, {
      "code": "ZQN",
      "name": "Queenstown (ZQN), New Zealand",
      "group": "Internasional"
    }, {
      "code": "RAR",
      "name": "Rarotonga (RAR), Cook Islands",
      "group": "Internasional"
    }, {
      "code": "DUD",
      "name": "Dunedin (DUD), New Zealand",
      "group": "Internasional"
    }, {
      "code": "HUI",
      "name": "Hue (HUI), Vietnam",
      "group": "Internasional"
    }, {
      "code": "HPH",
      "name": "Hai Phong (HPH), Vietnam",
      "group": "Internasional"
    }, {
      "code": "BMV",
      "name": "Buon Ma Thuot (BMV), Vietnam",
      "group": "Internasional"
    }, {
      "code": "CHC",
      "name": "Christchurch (CHC), New Zealand",
      "group": "Internasional"
    }, {
      "code": "NSN",
      "name": "Nelson (NSN), New Zealand",
      "group": "Internasional"
    }, {
      "code": "NTL",
      "name": "Newcastle (NTL), Australia",
      "group": "Internasional"
    }, {
      "code": "NPL",
      "name": "New Plymouth (NPL), New Zealand",
      "group": "Internasional"
    }, {
      "code": "PPP",
      "name": "Proserpine (PPP), Australia",
      "group": "Internasional"
    }, {
      "code": "OKA",
      "name": "Okinawa (OKA), Japan",
      "group": "Internasional"
    }, {
      "code": "HTI",
      "name": "Hamilton Island (HTI), Australia",
      "group": "Internasional"
    }, {
      "code": "HBA",
      "name": "Hobart (HBA), Australia",
      "group": "Internasional"
    }, {
      "code": "SGN",
      "name": "Ho Chi Minh (SGN), Vietnam",
      "group": "Internasional"
    }, {
      "code": "HNL",
      "name": "Honolulu (HNL), USA",
      "group": "Internasional"
    }, {
      "code": "KOJ",
      "name": "Kagoshima (KOJ), Japan",
      "group": "Internasional"
    }, {
      "code": "RGN",
      "name": "Yangon (RGN), Myanmar",
      "group": "Internasional"
    }, {
      "code": "LBJ",
      "name": "Labuan Bajo (LBJ), Manggarai Barat",
      "group": "Domestik"
    }, {
      "code": "LWE",
      "name": "Lewoleba (LWE), Lembata",
      "group": "Domestik"
    }, {
      "code": "LKI",
      "name": "Lubuklinggau (LKI)",
      "group": "Domestik"
    }, {
      "code": "LLG",
      "name": "Lubuklinggau (LLG)",
      "group": "Domestik"
    }, {
      "code": "TMC",
      "name": "Tambolaka (TMC), Sumba Barat Daya",
      "group": "Domestik"
    }, {
      "code": "UPG",
      "name": "Makassar (UPG)",
      "group": "Domestik"
    }, {
      "code": "MLG",
      "name": "Malang (MLG)",
      "group": "Domestik"
    }, {
      "code": "MLN",
      "name": "Malinau (MLN)",
      "group": "Domestik"
    }, {
      "code": "MJU",
      "name": "Mamuju (MJU)",
      "group": "Domestik"
    }, {
      "code": "MKW",
      "name": "Manokwari (MKW)",
      "group": "Domestik"
    }, {
      "code": "MWK",
      "name": "Matak (MWK), Kep Anambas",
      "group": "Domestik"
    }, {
      "code": "LUV",
      "name": "Tual (LUV)",
      "group": "Domestik"
    }, {
      "code": "MKQ",
      "name": "Merauke (MKQ)",
      "group": "Domestik"
    }, {
      "code": "MEQ",
      "name": "Meulaboh (MEQ)",
      "group": "Domestik"
    }, {
      "code": "DTB",
      "name": "Silangit (DTB), Tapanuli Utara",
      "group": "Domestik"
    }, {
      "code": "NBX",
      "name": "Nabire (NBX)",
      "group": "Domestik"
    }, {
      "code": "NTX",
      "name": "Natuna (NTX)",
      "group": "Domestik"
    }, {
      "code": "SMQ",
      "name": "Sampit (SMQ)",
      "group": "Domestik"
    }, {
      "code": "NNX",
      "name": "Nunukan (NNX)",
      "group": "Domestik"
    }, {
      "code": "PSJ",
      "name": "Poso (PSJ)",
      "group": "Domestik"
    }, {
      "code": "PXA",
      "name": "Pagar Alam (PXA)",
      "group": "Domestik"
    }, {
      "code": "PGK",
      "name": "Pangkalpinang (PGK)",
      "group": "Domestik"
    }, {
      "code": "BUA",
      "name": "PALOPO",
      "group": "Domestik"
    }, {
      "code": "PTW",
      "name": "Potowaiburu (PTW), Mimika",
      "group": "Domestik"
    }, {
      "code": "BIL",
      "name": "Bilogai (BIL), Intan Jaya",
      "group": "Domestik"
    }, {
      "code": "ARD",
      "name": "Alor (ARD)",
      "group": "Domestik"
    }, {
      "code": "ICN",
      "name": "Seoul (ICN), South Korea",
      "group": "Internasional"
    }, {
      "code": "NBO",
      "name": "Nairobi (NBO), Kenya",
      "group": "Internasional"
    }, {
      "code": "TAO",
      "name": "Qingdao (TAO), China",
      "group": "Internasional"
    }, {
      "code": "WLG",
      "name": "Wellington (WLG), New Zealand",
      "group": "Internasional"
    }, {
      "code": "AYQ",
      "name": "Uluru (AYQ), Australia",
      "group": "Internasional"
    }, {
      "code": "TSV",
      "name": "Townsville (TSV), Australia",
      "group": "Internasional"
    }, {
      "code": "NRT",
      "name": "Tokyo Narita (NRT), Japan",
      "group": "Internasional"
    }, {
      "code": "KMJ",
      "name": "Kumamoto (KMJ), Japan",
      "group": "Internasional"
    }, {
      "code": "LST",
      "name": "Launceston (LST), Australia",
      "group": "Internasional"
    }, {
      "code": "PQC",
      "name": "Phu Quoc (PQC), Vietnam",
      "group": "Internasional"
    }, {
      "code": "KIX",
      "name": "Osaka Kansai (KIX), Japan",
      "group": "Internasional"
    }]
  }

  closeModal(name) {
    this.viewCtrl.dismiss(name == '' ? '' : name);
  }

  filterItems(ev: any) {
    this.setData();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.data = this.data.filter(function (item) {
        return item.name.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
}

import { SlimLoadingBarService } from 'ng2-slim-loading-bar'
import { HttpReqProvider } from '../../providers/http-req/http-req';
// import { AuthSingletonProvider } from '../../providers/auth-singleton/auth-singleton';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public slimLoadingBarService: SlimLoadingBarService, public httpreq: HttpReqProvider) {
    this.datasearch = this.navParams.get('data');

    console.log(JSON.stringify(this.datasearch))
    this.loaddata();
    this.startLoading();
  }


  dataflight: any=
  {
    "output_type": "json",
    "round_trip": true,
    "search_queries": {
      "from": "BPN",
      "to": "MES",
      "date": "2013-02-05",
      "ret_date": "2013-02-10",
      "adult": 1,
      "child": 0,
      "infant": 0
    },
    "go_det": {
      "dep_airport": {
        "airport_code": "BPN",
        "international": "1",
        "trans_name_id": "7565",
        "business_name": "SEPINGGAN",
        "business_name_trans_id": "5924",
        "business_id": "20350",
        "country_name": "Indonesia ",
        "city_name": "Balikpapan",
        "province_name": "Kalimantan Timur",
        "location_name": "BalikPapan"
      },
      "arr_airport": {
        "airport_code": "MES",
        "international": "1",
        "trans_name_id": "7585",
        "business_name": "POLONIA",
        "business_name_trans_id": "5949",
        "business_id": "20375",
        "country_name": "Indonesia ",
        "city_name": "Medan",
        "province_name": "Sumatera Utara",
        "location_name": "Medan"
      },
      "date": "2013-02-05",
      "formatted_date": "05 February 2013"
    },
    "ret_det": {
      "dep_airport": {
        "airport_code": "MES",
        "international": "1",
        "trans_name_id": "7585",
        "business_name": "POLONIA",
        "business_name_trans_id": "5949",
        "business_id": "20375",
        "country_name": "Indonesia ",
        "city_name": "Medan",
        "province_name": "Sumatera Utara",
        "location_name": "Medan"
      },
      "arr_airport": {
        "airport_code": "BPN",
        "international": "1",
        "trans_name_id": "7565",
        "business_name": "SEPINGGAN",
        "business_name_trans_id": "5924",
        "business_id": "20350",
        "country_name": "Indonesia ",
        "city_name": "Balikpapan",
        "province_name": "Kalimantan Timur",
        "location_name": "BalikPapan"
      },
      "date": "2013-02-10",
      "formatted_date": "10 February 2013"
    },
    "diagnostic": {
      "status": 200,
      "elapsetime": "1.5670",
      "memoryusage": "20.37MB",
      "confirm": "success",
      "lang": "en",
      "currency": "IDR"
    },
    "departures": {
      "result": [{
        "flight_id": "3789714",
        "airlines_name": "LION",
        "flight_number": "JT-763\/JT-382",
        "price_value": "1126500.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1126500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "06:00",
        "simple_arrival_time": "15:10",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (06:00 - 07:10), CGK - MES (12:50 - 15:10)",
        "duration": "10 h 10 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-763",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "06:00",
            "simple_arrival_time": "07:10"
          }, {
            "flight_number": "JT-382",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "12:50",
            "simple_arrival_time": "15:10"
          }]
        }
      }, {
        "flight_id": "3789712",
        "airlines_name": "LION",
        "flight_number": "JT-673\/JT-382",
        "price_value": "1126500.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1126500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "07:45",
        "simple_arrival_time": "15:10",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (07:45 - 08:55), CGK - MES (12:50 - 15:10)",
        "duration": "8 h 25 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-673",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "07:45",
            "simple_arrival_time": "08:55"
          }, {
            "flight_number": "JT-382",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "12:50",
            "simple_arrival_time": "15:10"
          }]
        }
      }, {
        "flight_id": "3789711",
        "airlines_name": "LION",
        "flight_number": "JT-763\/JT-398",
        "price_value": "1126500.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1126500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "06:00",
        "simple_arrival_time": "14:40",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (06:00 - 07:10), CGK - MES (12:20 - 14:40)",
        "duration": "9 h 40 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-763",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "06:00",
            "simple_arrival_time": "07:10"
          }, {
            "flight_number": "JT-398",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "12:20",
            "simple_arrival_time": "14:40"
          }]
        }
      }, {
        "flight_id": "3789715",
        "airlines_name": "LION",
        "flight_number": "JT-673\/JT-384",
        "price_value": "1126500.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1126500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "07:45",
        "simple_arrival_time": "16:20",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (07:45 - 08:55), CGK - MES (14:00 - 16:20)",
        "duration": "9 h 35 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-673",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "07:45",
            "simple_arrival_time": "08:55"
          }, {
            "flight_number": "JT-384",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "14:00",
            "simple_arrival_time": "16:20"
          }]
        }
      }, {
        "flight_id": "4755478",
        "airlines_name": "SRIWIJAYA",
        "flight_number": "SJ-231\/SJ-020",
        "price_value": "2690000.00",
        "timestamp": "2013-01-14 16:57:55",
        "price_adult": "2690000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "09:00",
        "simple_arrival_time": "15:40",
        "stop": "3 Stops",
        "long_via": "Yogyakarta (JOG) - Jakarta (CGK) - Padang (PDG)",
        "full_via": "BPN - CGK (09:00 - 11:20), CGK - MES (12:30 - 15:40)",
        "duration": "7 h 40 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_sriwijaya_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "SJ-231",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "09:00",
            "simple_arrival_time": "11:20"
          }, {
            "flight_number": "SJ-020",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "12:30",
            "simple_arrival_time": "15:40"
          }]
        }
      }, {
        "flight_id": "3789719",
        "airlines_name": "LION",
        "flight_number": "JT-367\/JT-973",
        "price_value": "1814000.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1814000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "06:50",
        "simple_arrival_time": "16:00",
        "stop": "2 Stops",
        "long_via": "Surabaya (SUB)",
        "full_via": "BPN - SUB (06:50 - 07:20), SUB - MES (11:50 - 16:00)",
        "duration": "10 h 10 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-367",
            "departure_city": "BPN",
            "arrival_city": "SUB",
            "simple_departure_time": "06:50",
            "simple_arrival_time": "07:20"
          }, {
            "flight_number": "JT-973",
            "departure_city": "SUB",
            "arrival_city": "MES",
            "simple_departure_time": "11:50",
            "simple_arrival_time": "16:00"
          }]
        }
      }, {
        "flight_id": "3789718",
        "airlines_name": "LION",
        "flight_number": "JT-361\/JT-973",
        "price_value": "1550000.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1550000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "09:15",
        "simple_arrival_time": "16:00",
        "stop": "2 Stops",
        "long_via": "Surabaya (SUB)",
        "full_via": "BPN - SUB (09:15 - 09:45), SUB - MES (11:50 - 16:00)",
        "duration": "7 h 45 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-361",
            "departure_city": "BPN",
            "arrival_city": "SUB",
            "simple_departure_time": "09:15",
            "simple_arrival_time": "09:45"
          }, {
            "flight_number": "JT-973",
            "departure_city": "SUB",
            "arrival_city": "MES",
            "simple_departure_time": "11:50",
            "simple_arrival_time": "16:00"
          }]
        }
      }, {
        "flight_id": "3789717",
        "airlines_name": "LION",
        "flight_number": "JT-761\/JT-384",
        "price_value": "1126500.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1126500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "09:45",
        "simple_arrival_time": "16:20",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (09:45 - 10:55), CGK - MES (14:00 - 16:20)",
        "duration": "7 h 35 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-761",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "09:45",
            "simple_arrival_time": "10:55"
          }, {
            "flight_number": "JT-384",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "14:00",
            "simple_arrival_time": "16:20"
          }]
        }
      }, {
        "flight_id": "3789709",
        "airlines_name": "LION",
        "flight_number": "JT-673\/JT-398",
        "price_value": "1126500.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1126500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "07:45",
        "simple_arrival_time": "14:40",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (07:45 - 08:55), CGK - MES (12:20 - 14:40)",
        "duration": "7 h 55 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-673",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "07:45",
            "simple_arrival_time": "08:55"
          }, {
            "flight_number": "JT-398",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "12:20",
            "simple_arrival_time": "14:40"
          }]
        }
      }, {
        "flight_id": "3789703",
        "airlines_name": "LION",
        "flight_number": "JT-763\/JT-200",
        "price_value": "1126500.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1126500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "06:00",
        "simple_arrival_time": "12:10",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (06:00 - 07:10), CGK - MES (09:50 - 12:10)",
        "duration": "7 h 10 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-763",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "06:00",
            "simple_arrival_time": "07:10"
          }, {
            "flight_number": "JT-200",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "09:50",
            "simple_arrival_time": "12:10"
          }]
        }
      }, {
        "flight_id": "3789702",
        "airlines_name": "LION",
        "flight_number": "JT-763\/JT-214",
        "price_value": "1126500.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1126500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "06:00",
        "simple_arrival_time": "11:40",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (06:00 - 07:10), CGK - MES (09:20 - 11:40)",
        "duration": "6 h 40 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-763",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "06:00",
            "simple_arrival_time": "07:10"
          }, {
            "flight_number": "JT-214",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "09:20",
            "simple_arrival_time": "11:40"
          }]
        }
      }, {
        "flight_id": "2765018",
        "airlines_name": "SRIWIJAYA",
        "flight_number": "SJ-161\/SJ-014",
        "price_value": "1510000.00",
        "timestamp": "2013-01-14 16:57:55",
        "price_adult": "1510000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "13:20",
        "simple_arrival_time": "21:05",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (13:20 - 14:20), CGK - MES (18:50 - 21:05)",
        "duration": "8 h 45 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_sriwijaya_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "SJ-161",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "13:20",
            "simple_arrival_time": "14:20"
          }, {
            "flight_number": "SJ-014",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "18:50",
            "simple_arrival_time": "21:05"
          }]
        }
      }, {
        "flight_id": "3789704",
        "airlines_name": "LION",
        "flight_number": "JT-763\/JT-204",
        "price_value": "1126500.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1126500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "06:00",
        "simple_arrival_time": "13:10",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (06:00 - 07:10), CGK - MES (10:50 - 13:10)",
        "duration": "8 h 10 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-763",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "06:00",
            "simple_arrival_time": "07:10"
          }, {
            "flight_number": "JT-204",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "10:50",
            "simple_arrival_time": "13:10"
          }]
        }
      }, {
        "flight_id": "3789705",
        "airlines_name": "LION",
        "flight_number": "JT-945\/JT-911",
        "price_value": "1638000.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1638000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "07:35",
        "simple_arrival_time": "12:35",
        "stop": "2 Stops",
        "long_via": "Bandung (BDO)",
        "full_via": "BPN - BDO (07:35 - 09:30), BDO - MES (10:15 - 12:35)",
        "duration": "6 h 0 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-945",
            "departure_city": "BPN",
            "arrival_city": "BDO",
            "simple_departure_time": "07:35",
            "simple_arrival_time": "09:30"
          }, {
            "flight_number": "JT-911",
            "departure_city": "BDO",
            "arrival_city": "MES",
            "simple_departure_time": "10:15",
            "simple_arrival_time": "12:35"
          }]
        }
      }, {
        "flight_id": "3789708",
        "airlines_name": "LION",
        "flight_number": "JT-763\/JT-306",
        "price_value": "1154000.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1154000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "06:00",
        "simple_arrival_time": "14:10",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (06:00 - 07:10), CGK - MES (11:50 - 14:10)",
        "duration": "9 h 10 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-763",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "06:00",
            "simple_arrival_time": "07:10"
          }, {
            "flight_number": "JT-306",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "11:50",
            "simple_arrival_time": "14:10"
          }]
        }
      }, {
        "flight_id": "3789706",
        "airlines_name": "LION",
        "flight_number": "JT-673\/JT-306",
        "price_value": "1154000.00",
        "timestamp": "2013-01-14 16:58:00",
        "price_adult": "1154000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "07:45",
        "simple_arrival_time": "14:10",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (07:45 - 08:55), CGK - MES (11:50 - 14:10)",
        "duration": "7 h 25 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-673",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "07:45",
            "simple_arrival_time": "08:55"
          }, {
            "flight_number": "JT-306",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "11:50",
            "simple_arrival_time": "14:10"
          }]
        }
      }, {
        "flight_id": "2765017",
        "airlines_name": "SRIWIJAYA",
        "flight_number": "SJ-161\/SJ-016",
        "price_value": "1440000.00",
        "timestamp": "2013-01-14 16:57:55",
        "price_adult": "1440000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "13:20",
        "simple_arrival_time": "18:45",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "BPN - CGK (13:20 - 14:20), CGK - MES (16:30 - 18:45)",
        "duration": "6 h 25 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_sriwijaya_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "SJ-161",
            "departure_city": "BPN",
            "arrival_city": "CGK",
            "simple_departure_time": "13:20",
            "simple_arrival_time": "14:20"
          }, {
            "flight_number": "SJ-016",
            "departure_city": "CGK",
            "arrival_city": "MES",
            "simple_departure_time": "16:30",
            "simple_arrival_time": "18:45"
          }]
        }
      }]
    },
    "returns": {
      "result": [{
        "flight_id": "724202",
        "airlines_name": "LION",
        "flight_number": "JT-972\/JT-730",
        "price_value": "1357500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1357500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "12:55",
        "simple_arrival_time": "20:35",
        "stop": "2 Stops",
        "long_via": "Surabaya (SUB)",
        "full_via": "MES - SUB (12:55 - 17:05), SUB - BPN (18:05 - 20:35)",
        "duration": "6 h 40 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-972",
            "departure_city": "MES",
            "arrival_city": "SUB",
            "simple_departure_time": "12:55",
            "simple_arrival_time": "17:05"
          }, {
            "flight_number": "JT-730",
            "departure_city": "SUB",
            "arrival_city": "BPN",
            "simple_departure_time": "18:05",
            "simple_arrival_time": "20:35"
          }]
        }
      }, {
        "flight_id": "724201",
        "airlines_name": "LION",
        "flight_number": "JT-397\/JT-766",
        "price_value": "1110000.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1110000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "07:50",
        "simple_arrival_time": "19:15",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (07:50 - 10:15), CGK - BPN (16:10 - 19:15)",
        "duration": "10 h 25 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-397",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "07:50",
            "simple_arrival_time": "10:15"
          }, {
            "flight_number": "JT-766",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "16:10",
            "simple_arrival_time": "19:15"
          }]
        }
      }, {
        "flight_id": "724200",
        "airlines_name": "LION",
        "flight_number": "JT-395\/JT-766",
        "price_value": "1082500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1082500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "11:00",
        "simple_arrival_time": "19:15",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (11:00 - 13:25), CGK - BPN (16:10 - 19:15)",
        "duration": "7 h 15 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-395",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "11:00",
            "simple_arrival_time": "13:25"
          }, {
            "flight_number": "JT-766",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "16:10",
            "simple_arrival_time": "19:15"
          }]
        }
      }, {
        "flight_id": "5085425",
        "airlines_name": "SRIWIJAYA",
        "flight_number": "SJ-017\/SJ-160",
        "price_value": "1360000.00",
        "timestamp": "2013-01-11 10:08:19",
        "price_adult": "1360000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "19:30",
        "simple_arrival_time": "09:10",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (19:30 - 21:50), CGK - BPN (06:10 - 09:10)",
        "duration": "12 h 40 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_sriwijaya_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "SJ-017",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "19:30",
            "simple_arrival_time": "21:50"
          }, {
            "flight_number": "SJ-160",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "06:10",
            "simple_arrival_time": "09:10"
          }]
        }
      }, {
        "flight_id": "5085424",
        "airlines_name": "LION",
        "flight_number": "JT-960\/JT-940",
        "price_value": "1396000.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1396000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "09:00",
        "simple_arrival_time": "20:10",
        "stop": "2 Stops",
        "long_via": "Bandung (BDO)",
        "full_via": "MES - BDO (09:00 - 11:20), BDO - BPN (16:10 - 20:10)",
        "duration": "10 h 10 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-960",
            "departure_city": "MES",
            "arrival_city": "BDO",
            "simple_departure_time": "09:00",
            "simple_arrival_time": "11:20"
          }, {
            "flight_number": "JT-940",
            "departure_city": "BDO",
            "arrival_city": "BPN",
            "simple_departure_time": "16:10",
            "simple_arrival_time": "20:10"
          }]
        }
      }, {
        "flight_id": "5085423",
        "airlines_name": "LION",
        "flight_number": "JT-902\/JT-940",
        "price_value": "1451000.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1451000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "13:15",
        "simple_arrival_time": "20:10",
        "stop": "2 Stops",
        "long_via": "Bandung (BDO)",
        "full_via": "MES - BDO (13:15 - 15:35), BDO - BPN (16:10 - 20:10)",
        "duration": "5 h 55 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-902",
            "departure_city": "MES",
            "arrival_city": "BDO",
            "simple_departure_time": "13:15",
            "simple_arrival_time": "15:35"
          }, {
            "flight_number": "JT-940",
            "departure_city": "BDO",
            "arrival_city": "BPN",
            "simple_departure_time": "16:10",
            "simple_arrival_time": "20:10"
          }]
        }
      }, {
        "flight_id": "724199",
        "airlines_name": "LION",
        "flight_number": "JT-301\/JT-766",
        "price_value": "1082500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1082500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "10:00",
        "simple_arrival_time": "19:15",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (10:00 - 12:25), CGK - BPN (16:10 - 19:15)",
        "duration": "8 h 15 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-301",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "10:00",
            "simple_arrival_time": "12:25"
          }, {
            "flight_number": "JT-766",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "16:10",
            "simple_arrival_time": "19:15"
          }]
        }
      }, {
        "flight_id": "724198",
        "airlines_name": "LION",
        "flight_number": "JT-207\/JT-766",
        "price_value": "1027500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1027500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "08:40",
        "simple_arrival_time": "19:15",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (08:40 - 11:05), CGK - BPN (16:10 - 19:15)",
        "duration": "9 h 35 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-207",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "08:40",
            "simple_arrival_time": "11:05"
          }, {
            "flight_number": "JT-766",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "16:10",
            "simple_arrival_time": "19:15"
          }]
        }
      }, {
        "flight_id": "724192",
        "airlines_name": "LION",
        "flight_number": "JT-397\/JT-764",
        "price_value": "1110000.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1110000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "07:50",
        "simple_arrival_time": "15:55",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (07:50 - 10:15), CGK - BPN (12:50 - 15:55)",
        "duration": "7 h 5 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-397",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "07:50",
            "simple_arrival_time": "10:15"
          }, {
            "flight_number": "JT-764",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "12:50",
            "simple_arrival_time": "15:55"
          }]
        }
      }, {
        "flight_id": "724191",
        "airlines_name": "LION",
        "flight_number": "JT-381\/JT-764",
        "price_value": "1082500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1082500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "06:45",
        "simple_arrival_time": "15:55",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (06:45 - 09:10), CGK - BPN (12:50 - 15:55)",
        "duration": "8 h 10 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-381",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "06:45",
            "simple_arrival_time": "09:10"
          }, {
            "flight_number": "JT-764",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "12:50",
            "simple_arrival_time": "15:55"
          }]
        }
      }, {
        "flight_id": "724190",
        "airlines_name": "LION",
        "flight_number": "JT-211\/JT-764",
        "price_value": "1027500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1027500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "05:45",
        "simple_arrival_time": "15:55",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (05:45 - 08:10), CGK - BPN (12:50 - 15:55)",
        "duration": "9 h 10 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-211",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "05:45",
            "simple_arrival_time": "08:10"
          }, {
            "flight_number": "JT-764",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "12:50",
            "simple_arrival_time": "15:55"
          }]
        }
      }, {
        "flight_id": "724189",
        "airlines_name": "LION",
        "flight_number": "JT-381\/JT-756",
        "price_value": "1082500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1082500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "06:45",
        "simple_arrival_time": "15:00",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (06:45 - 09:10), CGK - BPN (11:55 - 15:00)",
        "duration": "7 h 15 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-381",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "06:45",
            "simple_arrival_time": "09:10"
          }, {
            "flight_number": "JT-756",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "11:55",
            "simple_arrival_time": "15:00"
          }]
        }
      }, {
        "flight_id": "724193",
        "airlines_name": "LION",
        "flight_number": "JT-207\/JT-768",
        "price_value": "1027500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1027500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "08:40",
        "simple_arrival_time": "17:50",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (08:40 - 11:05), CGK - BPN (14:45 - 17:50)",
        "duration": "8 h 10 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-207",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "08:40",
            "simple_arrival_time": "11:05"
          }, {
            "flight_number": "JT-768",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "14:45",
            "simple_arrival_time": "17:50"
          }]
        }
      }, {
        "flight_id": "724194",
        "airlines_name": "LION",
        "flight_number": "JT-301\/JT-768",
        "price_value": "1082500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1082500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "10:00",
        "simple_arrival_time": "17:50",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (10:00 - 12:25), CGK - BPN (14:45 - 17:50)",
        "duration": "6 h 50 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-301",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "10:00",
            "simple_arrival_time": "12:25"
          }, {
            "flight_number": "JT-768",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "14:45",
            "simple_arrival_time": "17:50"
          }]
        }
      }, {
        "flight_id": "724197",
        "airlines_name": "LION",
        "flight_number": "JT-970\/JT-366",
        "price_value": "1313500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1313500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "07:00",
        "simple_arrival_time": "17:15",
        "stop": "2 Stops",
        "long_via": "Surabaya (SUB)",
        "full_via": "MES - SUB (07:00 - 11:10), SUB - BPN (14:45 - 17:15)",
        "duration": "9 h 15 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-970",
            "departure_city": "MES",
            "arrival_city": "SUB",
            "simple_departure_time": "07:00",
            "simple_arrival_time": "11:10"
          }, {
            "flight_number": "JT-366",
            "departure_city": "SUB",
            "arrival_city": "BPN",
            "simple_departure_time": "14:45",
            "simple_arrival_time": "17:15"
          }]
        }
      }, {
        "flight_id": "724196",
        "airlines_name": "LION",
        "flight_number": "JT-397\/JT-768",
        "price_value": "1110000.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1110000.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "07:50",
        "simple_arrival_time": "17:50",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (07:50 - 10:15), CGK - BPN (14:45 - 17:50)",
        "duration": "9 h 0 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-397",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "07:50",
            "simple_arrival_time": "10:15"
          }, {
            "flight_number": "JT-768",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "14:45",
            "simple_arrival_time": "17:50"
          }]
        }
      }, {
        "flight_id": "724195",
        "airlines_name": "LION",
        "flight_number": "JT-381\/JT-768",
        "price_value": "1082500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1082500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "06:45",
        "simple_arrival_time": "17:50",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (06:45 - 09:10), CGK - BPN (14:45 - 17:50)",
        "duration": "10 h 5 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-381",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "06:45",
            "simple_arrival_time": "09:10"
          }, {
            "flight_number": "JT-768",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "14:45",
            "simple_arrival_time": "17:50"
          }]
        }
      }, {
        "flight_id": "724188",
        "airlines_name": "LION",
        "flight_number": "JT-211\/JT-756",
        "price_value": "1027500.00",
        "timestamp": "2013-01-11 10:08:26",
        "price_adult": "1027500.00",
        "price_child": "0.00",
        "price_infant": "0.00",
        "simple_departure_time": "05:45",
        "simple_arrival_time": "15:00",
        "stop": "1 Stop",
        "long_via": "Jakarta (CGK)",
        "full_via": "MES - CGK (05:45 - 08:10), CGK - BPN (11:55 - 15:00)",
        "duration": "8 h 15 m",
        "image": "http:\/\/www.sandbox.tiket.com\/images\/tiket2\/icon_lion_2.jpg",
        "flight_infos": {
          "flight_info": [{
            "flight_number": "JT-211",
            "departure_city": "MES",
            "arrival_city": "CGK",
            "simple_departure_time": "05:45",
            "simple_arrival_time": "08:10"
          }, {
            "flight_number": "JT-756",
            "departure_city": "CGK",
            "arrival_city": "BPN",
            "simple_departure_time": "11:55",
            "simple_arrival_time": "15:00"
          }]
        }
      }]
    },
    "nearby_go_date": {
      "nearby": [{
        "date": "2013-01-31",
        "price": "1000000.00"
      }, {
        "date": "2013-02-01",
        "price": "1027500.00"
      }, {
        "date": "2013-02-02",
        "price": "1027500.00"
      }, {
        "date": "2013-02-03",
        "price": "1027500.00"
      }, {
        "date": "2013-02-04",
        "price": "1027500.00"
      }, {
        "date": "2013-02-05",
        "price": "1126500.00"
      }, {
        "date": "2013-02-06",
        "price": "1126500.00"
      }, {
        "date": "2013-02-07",
        "price": "1209000.00"
      }, {
        "date": "2013-02-08",
        "price": "1374000.00"
      }, {
        "date": "2013-02-09",
        "price": "1319000.00"
      }, {
        "date": "2013-02-10",
        "price": "1027500.00"
      }]
    },
    "nearby_ret_date": {
      "nearby": [{
        "date": "2013-02-05",
        "price": "1126500.00"
      }, {
        "date": "2013-02-06",
        "price": "1126500.00"
      }, {
        "date": "2013-02-07",
        "price": "1209000.00"
      }, {
        "date": "2013-02-08",
        "price": "1374000.00"
      }, {
        "date": "2013-02-09",
        "price": "1319000.00"
      }, {
        "date": "2013-02-10",
        "price": "1027500.00"
      }, {
        "date": "2013-02-11",
        "price": "1027500.00"
      }, {
        "date": "2013-02-12",
        "price": "1027500.00"
      }, {
        "date": "2013-02-13",
        "price": "1027500.00"
      }, {
        "date": "2013-02-14",
        "price": "1027500.00"
      }, {
        "date": "2013-02-15",
        "price": "1027500.00"
      }]
    },
    "token": "7f6ba5da47c3a36159463ddddfa530ab"
  }
  
  doneload: boolean = false;

  datasearch: any = {
    arrival: '',
    departure: '',
    datedeparture: moment().format("YYYY-MM-DD"),
    datereturn: moment().format("YYYY-MM-DD"),
    adult: 0,
    infant: 0,
    child: 0
  }

  startLoading() {
    this.slimLoadingBarService.start(() => {
      console.log('Loading complete');
    });
  }

  stopLoading() {
    this.slimLoadingBarService.stop();
  }

  completeLoading() {
    this.slimLoadingBarService.complete();
  }
  loaddata() {


    var params = {
      xuid: 'XPM1760832',
      xpass: 'root',
      xdepartureairportcode: this.datasearch.departure.code,
      xarrivalairportcode: this.datasearch.arrival.code,
      xdatedeparture: this.datasearch.datedeparture,
      xdatereturn: this.datasearch.datedeparture,
      xadult: 1,
      xinfant: 0,
      xchild: 0
    }
    var query = "";

    for (let key in params) {
      query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";

    }
    console.log(query)
    this.httpreq.postreqxpay("xpay.flight/search?", query)
      .subscribe((response) => {
          console.log(JSON.stringify(response))
          this.doneload = true
          console.log('haha')
          this.completeLoading();
        }, (error) => {
          console.log(JSON.stringify(error))
        }

      )
  }
}

@Component({
  templateUrl: 'searchmaskapai.html'
})
export class MaskapaiSearchPage {
  constructor(public navCtrl: NavController, public navParams: NavParams ) {

  }
}

