import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CalendarComponent } from './calendar/calendar.component';
import { CalendarNavbarComponent } from './calendar-navbar/calendar-navbar.component';
import { CalendarReservationComponent } from './calendar-reservation/calendar-reservation.component';
import { CalendarSearchOutComponent } from './calendar-search/calendar-searchout.component';
import { CalendarSearchInComponent } from './calendar-search/calendar-searchin.component';

import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatDatepickerModule,
  NativeDateModule
} from '@angular/material';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarNavbarComponent,
    CalendarReservationComponent,
    CalendarSearchOutComponent,
    CalendarSearchInComponent
  ],
  entryComponents: [
    CalendarSearchInComponent
  ],
  exports: [
    CalendarComponent,
    CalendarNavbarComponent,
    CalendarReservationComponent,
    CalendarSearchOutComponent,
    CalendarSearchInComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    OverlayModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    NativeDateModule
  ]
})
export class ShedulerModule { }
