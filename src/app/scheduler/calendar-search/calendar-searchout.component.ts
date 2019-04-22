import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { SelectReservationArg } from '../selectreservationarg';

@Component({
  selector: 'app-calendarsearchbtn',
  templateUrl: './calendar-searchout.component.html',
  styleUrls: ['./calendar-searchout.component.css']
})
export class CalendarSearchOutComponent implements OnInit {
  @Output() selectreservation = new EventEmitter<SelectReservationArg>();
  isopen = false;

  constructor() { }

  ngOnInit() { }

  onReservationSelected(args: SelectReservationArg) {
    this.isopen = false;
    this.selectreservation.emit(args);
  }

  onOpenClose() {
    this.isopen = !this.isopen;
  }

}
