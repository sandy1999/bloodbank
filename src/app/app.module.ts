import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { DonorsComponent } from './donors/donors.component';
import { BanksComponent } from './banks/banks.component';

import { DonorsService } from './services/donors.service';
import { BanksService } from './services/banks.service';

import { appRoutes } from './routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { DonorsThumbnailComponent } from './donors-thumbnail/donors-thumbnail.component';
import { BanksThumbnailComponent } from './banks-thumbnail/banks-thumbnail.component';
import { InputDirectiveDirective } from './input-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    HomeComponent,
    DonorsComponent,
    BanksComponent,
    NotFoundComponent,
    DonorsThumbnailComponent,
    BanksThumbnailComponent,
    InputDirectiveDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BanksService,
    DonorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
