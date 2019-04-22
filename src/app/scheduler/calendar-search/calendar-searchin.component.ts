import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent, Observable } from 'rxjs';

import { PersonDto } from '../../model/persondto';
import { SelectReservationArg } from '../selectreservationarg';
import { SearchReservationArg } from '../searchreservationargs';
import { ReservationService } from 'src/app/service/reservation-service';

@Component({
  selector: 'app-calendarsearchover',
  templateUrl: './calendar-searchin.component.html',
  styleUrls: ['./calendar-searchin.component.css']
})
export class CalendarSearchInComponent implements OnInit, AfterViewInit {
  @Output() selectreservation = new EventEmitter<SelectReservationArg>();
  @ViewChild('fastsearch') fastsearch: ElementRef;
  persons$: Observable<object>;
  years = '0';
  months = '0';
  name = '';

  constructor(private service: ReservationService) {}

  ngOnInit() { }

  ngAfterViewInit() {
    fromEvent(this.fastsearch.nativeElement, 'keyup').pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(() => {
        this.name = this.fastsearch.nativeElement.value;
        const search = new SearchReservationArg(+this.years, +this.months, this.name);
        this.persons$ = this.service.getReservationByName(search);
      })
    ).subscribe();
  }

  onYearsChange(data) {
    this.years = data.value;
    const search = new SearchReservationArg(+this.years, +this.months, this.name);
    this.persons$ = this.service.getReservationByName(search);
  }

  onMonthsChange(data) {
    this.months = data.value;
    const search = new SearchReservationArg(+this.years, +this.months, this.name);
    this.persons$ = this.service.getReservationByName(search);
  }

  onSelect(person: PersonDto) {
    const roomId = person.roomId;
    const startDate = person.startDate;
    const endDate = person.endDate;
    const args = new SelectReservationArg(roomId, startDate, endDate);
    this.selectreservation.emit(args);
  }

}
