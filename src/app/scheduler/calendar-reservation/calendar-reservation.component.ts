import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { RoomDto } from 'src/app/model/roomdto';
import { DateAndWeek } from '../datemanager';
import { BookingDto } from 'src/app/model/bookingdto';
import { StatusbarArg } from '../changestatusbarargs';
import { ReservationArg } from '../reservationargs';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-reservation',
  templateUrl: './calendar-reservation.component.html',
  styleUrls: ['./calendar-reservation.component.css']
})
export class CalendarReservationComponent implements OnInit, OnChanges  {
  @Input() room: RoomDto;
  @Input() day: DateAndWeek;
  @Input() bookings: BookingDto[];
  @Output() changestatusbar = new EventEmitter<StatusbarArg>();
  @Output() reservation = new EventEmitter<ReservationArg>();
  isreserved = false;
  isreservedSx = false;
  isreservedCx = false;
  isreservedDx = false;
  booking: BookingDto;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.bookings) {
      this.datasourceChanged();
    }
  }

  onMouseEnter(b: BookingDto) {
    const args = new StatusbarArg('enter', b);
    this.changestatusbar.emit(args);
  }

  onMouseLeave(b: BookingDto) {
    const args = new StatusbarArg('leave', b);
    this.changestatusbar.emit(args);
  }

  onDayReservation(mouse: MouseEvent) {
    const b = new BookingDto();
    if (this.booking) {
      b.bookingId = this.booking.bookingId;
      b.roomId = this.booking.roomId;
      b.roomType = this.booking.roomType;
      b.startDate = new Date(this.booking.startDate);
      b.endDate = new Date(this.booking.endDate);
      b.stayDay = this.booking.stayDay;
      b.name = this.booking.name;
    }
    const args = new ReservationArg(this.room.roomId, this.day.date, b);
    this.reservation.emit(args);
  }

  private datasourceChanged() {
    this.isreserved = false;
    this.isreservedDx = false;
    this.isreservedCx = false;
    this.isreservedSx = false;
    this.booking = undefined;
    const list = this.bookings.filter(b => b.roomId === this.room.roomId);
    for (const b of list) {
      if (this.day.date >= b.startDate &&  this.day.date <= b.endDate) {
        this.isreserved = true;
        const d = this.day.date.getTime();
        if (d === b.startDate.getTime() && d !== b.endDate.getTime()) {
          this.booking = b;
          this.isreservedDx = true;
        }
        if (d !== b.startDate.getTime() && d !== b.endDate.getTime()) {
          this.booking = b;
          this.isreservedCx = true;
        }
        if (d !== b.startDate.getTime() && d === b.endDate.getTime()) {
          this.isreservedSx = true;
        }
      }
    }
  }

}
