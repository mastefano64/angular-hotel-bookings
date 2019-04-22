import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';

import { CalendarNavbarComponent } from '../calendar-navbar/calendar-navbar.component';
import { DateManager, DateAndWeek, StepHours } from '../datemanager';
import { ChangeReservationArg } from '../changereservationarg';
import { ChangeDateArg } from '../changedatearg';
import { RoomDto } from 'src/app/model/roomdto';
import { BookingDto } from 'src/app/model/bookingdto';
import { HeaderDays } from '../model/headerdays';
import { StatusbarArg } from '../changestatusbarargs';
import { ReservationArg } from '../reservationargs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() year: number;
  @Input() month: number;
  @Input() day: number;
  @Input() rooms: RoomDto[];
  @Input() bookings: BookingDto[];
  @Output() changereservation = new EventEmitter<ChangeReservationArg>();
  @Output() reservation = new EventEmitter<ReservationArg>();
  @ViewChild(CalendarNavbarComponent) navbar;
  stepdays: DateAndWeek[] = [];
  stephours: StepHours[] = [];
  headerdays: HeaderDays;
  statusbar: BookingDto;
  manager: DateManager;

  constructor() {
    this.manager = new DateManager();
    this.rooms = [];
    this.bookings = [];
  }

  get currentYMD(): Date {
    if (this.navbar) {
      return this.navbar.currymd;
    } else {
      return undefined;
    }
  }

  ngOnInit() { }

  onDaysChanged(data: ChangeDateArg) {
    this.headerdays = data.days;
    const startDate = data.days.startDate;
    const endDate = data.days.endDate;
    const roomtype = data.roomtype;
    const args = new ChangeReservationArg(data.type, data.operation, roomtype, startDate, endDate);
    this.changereservation.emit(args);
  }

  onStatusbarChanged(args: StatusbarArg) {
    if (args.type === 'enter') {
      this.statusbar = args.booking;
    } else {
      this.statusbar = undefined;
    }
  }

  onDayReservation(args: ReservationArg) {
    this.reservation.emit(args);
  }

}
