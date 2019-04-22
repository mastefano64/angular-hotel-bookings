import { DateAndWeek } from '../datemanager';

export class HeaderDays {
  startDate: Date;
  endDate: Date;
  headDaysAll: DateAndWeek[];
  headDays1: DateAndWeek[];
  headDays2: DateAndWeek[];
  months: MonthsDay[];

  constructor() {
    this.headDaysAll = [];
    this.headDays1 = [];
    this.headDays2 = [];
    this.months = [];
  }

}

export class MonthsDay {

  constructor(public monthName: string, public days: number) { }

}
