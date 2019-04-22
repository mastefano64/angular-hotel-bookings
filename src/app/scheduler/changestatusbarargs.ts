import { BookingDto } from '../model/bookingdto';

export class StatusbarArg {

  constructor(public type: string, public booking: BookingDto) { }

}
