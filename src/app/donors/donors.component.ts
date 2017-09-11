import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  constructor() { }
  numbers = [1,2,3,4,5,6];
  ngOnInit() {
  }

}
