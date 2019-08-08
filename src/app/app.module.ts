import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheapFlightsComponent } from './cheap-flights/cheap-flights.component';
import { ExploreWorldComponent } from './explore-world/explore-world.component';
import { SignUpBenefitsComponent } from './sign-up-benefits/sign-up-benefits.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlightSearchComponent,
    SpecialOffersComponent,
    CheapFlightsComponent,
    ExploreWorldComponent,
    SignUpBenefitsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
  BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
  BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

