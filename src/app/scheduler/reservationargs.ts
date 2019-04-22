import { BookingDto } from '../model/bookingdto';

export class ReservationArg {

  constructor(public roomid: number, public date: Date, public booking: BookingDto) { }

}
