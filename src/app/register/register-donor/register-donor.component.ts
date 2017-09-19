import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']
})
export class RegisterDonorComponent implements OnInit {

  public registerDonorsForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.registerDonorsForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      age: new FormControl('',[
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.min(18)
      ]),
      bloodGroup: new FormControl('',[
        Validators.required,
        Validators.pattern('[aboABO]{1,2}[+-]')
      ]),
      contactNumber: new FormControl('',[
        Validators.required,
        Validators.pattern('[789][0-9]*'),
        Validators.maxLength(10)
      ]),
      address:new FormGroup({
        street: new FormControl('',[
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50)
        ]),
        city: new FormControl('',[
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]),
        state: new FormControl('',[
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ])
      })
    });
  }
  get name(){
    return this.registerDonorsForm.get('name');
  }
  get age(){
    return this.registerDonorsForm.get('age');
  }
  get bloodGroup(){
    return this.registerDonorsForm.get('bloodGroup');
  }
  get contactNumber(){
    return this.registerDonorsForm.get('contactNumber');
  }
  get street(){
    return this.registerDonorsForm.get('address.street');
  }
  get city(){
    return this.registerDonorsForm.get('address.city');
  }
  get state(){
    return this.registerDonorsForm.get('address.state');
  }
  registerDonor(){
    let value =  this.registerDonorsForm.value
    console.log(value);
  }
}
