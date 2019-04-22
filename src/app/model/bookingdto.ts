
export class BookingDto {
  bookingId: number;
  roomId: number;
  roomType: number;
  startDate: Date;
  endDate: Date;
  stayDay: number;
  name: string;

  constructor() {
    this.bookingId = 0;
    this.roomId = 0;
    this.roomType = 0;
    this.startDate = undefined;
    this.endDate = undefined;
    this.stayDay = 0;
    this.name = '';
  }

}
