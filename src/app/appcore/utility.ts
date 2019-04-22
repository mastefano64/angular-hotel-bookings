import { isMoment } from 'moment';

export class Utility {
  public static toString(value: any): string {
    let valret = '';
    if (value === undefined) {
      return valret;
    }
    valret = value.toString().trim();
    return valret;
  }

  public static toInteger(value: any): number {
    let valret = 0;
    if (value === undefined) {
      return valret;
    }
    const str = value.toString().trim();
    valret = parseInt(str, 10);
    return valret;
  }

  public static toDecimal(value: any, removecomma = true): number {
    let valret = 0;
    if (value === undefined) {
      return valret;
    }
    const str = value.toString().trim();
    if (removecomma === true) {
      valret = parseFloat(str.replace(',', '.'));
    } else {
      valret = str;    }
    return valret;
  }

  public static toDateString(value: any, sep: string = '/'): string {
    if (!value) {
      return '';
    }
    let amg = value;
    if (isMoment(value)) {
      const d = value.date();
      const m = value.months() + 1;
      const y = value.year();
      amg = y + sep + m + sep + d;
    } else if (value instanceof Date) {
      const d = value.getDate();
      const m = value.getMonth() + 1;
      const y = value.getFullYear();
      amg = y + sep + m + sep + d;
    } else {
      const index = amg.indexOf('T');
      if (index !== -1) {
        amg = amg.substring(0, index);
      }
    }
    return amg;
  }

  public static toDate(value: any): Date {
    let date = value;
    if (isMoment(value)) {
      const d = value.date();
      const m = value.months();
      const y = value.year();
      date = new Date(y, m, d);
    }
    return date;
  }
}
