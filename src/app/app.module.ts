import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { AppMaterialModule } from './app.material.module';

import { AppComponent } from './app.component';
import { PageSchedulerComponent } from './components/page-scheduler/page-scheduler.component';
import { FormReservationComponent } from './components/form-reservation/form-reservation.component';
import { ReservationService } from './service/reservation-service';
import { ShedulerModule } from './scheduler/scheduler.module';

@NgModule({
  declarations: [
    AppComponent,
    PageSchedulerComponent,
    FormReservationComponent
  ],
  entryComponents: [
    FormReservationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    ShedulerModule,
    AppRoutingModule
  ],
  providers: [
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
