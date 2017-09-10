import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDonorComponent } from './register-donor/register-donor.component';
import { RegisterBanksComponent } from './register-banks/register-banks.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RegisterDonorComponent, 
    RegisterBanksComponent,
  ]
})
export class RegisterModule { }
