import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives';

export class DateManager {
  private dayname = [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato'
   ];

  private weekname = [
    'Prima settimana',
    'Seconda  settimana',
    'Terza  settimana',
    'Quarta  settimana',
    'Quinta settimana',
    'Sesta settimana'
   ];

  private monthname = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novmbre',
    'Dicembre'
  ];

  constructor() { }

  getPrevDay(date: Date): Date {
    const prev = new Date(date);
    prev.setDate(date.getDate() - 1);
    return prev;
  }

  getNextDay(date: Date): Date {
    const next = new Date(date);
    next.setDate(date.getDate() + 1);
    return next;
  }

  getPrevWeek(date: Date): Date {
    const prev = new Date(date);
    prev.setDate(date.getDate() - 7);
    return prev;
  }

  getNextWeek(date: Date): Date {
    const next = new Date(date);
    next.setDate(date.getDate() + 7);
    return next;
  }

  getPrevMonth(date: Date): Date {
    let dt;
    if (date.getMonth() === 0) {
      dt = new Date(date.getFullYear() - 1, 11, 1);
    } else {
      dt = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    }
    return dt;
  }

  getNextMonth(date: Date): Date {
    let dt;
    if (date.getMonth() === 11) {
      dt = new Date(date.getFullYear() + 1, 0, 1);
    } else {
      dt = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }
    return dt;
  }

  getDaysInTheMonth(date: Date): number {
    const dt = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return dt.getDate();
  }

  getDateAndWeekValues(date: Date): DateAndWeek {
    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const day = date.getDay() + 1;
    const daw = new DateAndWeek();
    daw.day = dd;
    daw.monthValue = mm;
    daw.monthName = this.monthname[mm - 1];
    daw.dayWeekValue = day;
    daw.dayWeekName = this.dayname[day - 1];
    daw.year = yy;
    daw.date = date;
    return daw;
  }

  getDaysOfWeek(date: Date): DateAndWeek[] {
    let value = date;
    let step = this.getDateAndWeekValues(value);
    const list = new Array<DateAndWeek>();
    list.push(step);
    for (let i = 1; i < 7; i++) {
      value = this.getNextDay(value);
      step = this.getDateAndWeekValues(value);
      list.push(step);
    }
    return list;
  }

  getWeekInMonth(date: Date): number { // ?
    const yy = date.getFullYear();
    const mm = date.getMonth();
    const date1 = new Date(yy, mm - 1, 1);
    const date2 = new Date(yy, mm, 0);
    const used = date1.getDay() + date2.getDate();
    return Math.ceil( used / 7);
  }

}

export class DateAndWeek {
  day: number;
  year: number;
  monthValue: number;
  monthName: string;
  dayWeekValue: number;
  dayWeekName: string;
  date: Date;
}

export class StepHours {
  startTime: string;
  endTime: string;
  stepTime: string;
}
