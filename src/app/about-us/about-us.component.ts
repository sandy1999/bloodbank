import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  contactForm:FormGroup;
  constructor() { }

  get name(){
    return this.contactForm.get('name');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get feedBack(){
    return this.contactForm.get('feedBack');
  }
  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.maxLength(30)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]) ,
      feedBack: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

}
