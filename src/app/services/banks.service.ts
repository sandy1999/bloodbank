import { Http , Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class BanksService {
  private _url = "http://127.0.0.1:8000/api";
  constructor(private _http:Http ) { }

  getBanks(){
   return this._http.get(this._url+"/banks")
     .map((response: Response) => response.json());
  }
  registerBank(bank_details){
    bank_details = {
      "name":bank_details.name,
      "ownername":bank_details.ownerName,
      "type":bank_details.type,
      "street":bank_details.address.street,
      "city":bank_details.address.city,
      "state":bank_details.address.state
    };
    return this._http.post(this._url+"/banks", JSON.stringify(bank_details))
    .map((response:Response)=>response.json());
  }
}
