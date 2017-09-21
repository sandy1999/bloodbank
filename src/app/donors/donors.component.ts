import { Component, OnInit } from '@angular/core';
import { DonorsService } from './../services/donors.service';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  constructor(private _donorService:DonorsService , private _http:Http) { }
  numbers = [1,2,3,4,5,6];
  donors = []
  ngOnInit() {
    // console.log("onInit");
    this._http.get("http://127.0.0.1:8000/api/donors").subscribe(res=>{
      this.donors = res.json();
      console.log(this.donors);
    });
    // this._donorService.getDonors().subscribe(response=>{
    //   console.log(response)
    // });
  }

}
