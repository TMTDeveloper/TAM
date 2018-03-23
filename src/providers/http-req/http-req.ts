import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpReqProvider {
  //baseurlxpay:string='http://202.158.20.141:5001/xpay-service/api/'
  baseurlxpay:string='http://101.255.120.109:8080/xpayws/rest/'
  // baseurl: string = 'http://113.20.29.95:8080/semetapro/api/'

  baseurl: string = 'http://101.255.120.109:8080/semetapro/api/'
  
  constructor(public http: Http) {}

  getreq(url: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({
      headers: headers
    });
    let obs = this.http.get(this.baseurl + url,options).map(res => res.json())
    return obs;
  };

  postreq(url: string, body) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({
      headers: headers
    });
    let obs = this.http.post(this.baseurl + url, body,options).map(res => res.json())
    return obs;
  };

  postreqxpay(url: string, body) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({
      headers: headers
    });
    let obs = this.http.post(this.baseurlxpay + url+body,body,options).map(res => res.json())
    return obs;
  };

}
