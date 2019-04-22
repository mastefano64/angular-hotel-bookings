
export class PersonDto {
  bookingId: number;
  roomId: number;
  roomNumber: string;
  roomType: number;
  roomTypeName: string;
  startDate: Date;
  endDate: Date;
  stayDay: number;
  name: string;

  constructor() {
    this.bookingId = 0;
    this.roomId = 0;
    this.roomNumber = '';
    this.roomType = 0;
    this.roomTypeName = '';
    this.startDate = undefined;
    this.endDate = undefined;
    this.stayDay = 0;
    this.name = '';
  }

}
