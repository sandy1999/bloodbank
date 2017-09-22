import { Injectable } from '@angular/core';
import { Http , Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DonorsService {
  private url  = "http://127.0.0.1:8000/api";
  constructor(private _http:Http) { }

  getDonors(){
    let _headers = new Headers();
    _headers.append('Access-Control-Allow-Origin','*');
    return this._http.get(this.url+"/donors")
    .map(res=>res.json());
    // .catch(()=>{
    //   window.confirm('You are not Conected to our servers please try again later on!!')
    // });
  }
}
