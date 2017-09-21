import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DonorsService {
  private url  = "http://127.0.0.1:8000"
  constructor(private _http:Http) { }

  getDonors(){
    return this._http.get(this.url+"/donors").map(res=>res.json());
  }
}
