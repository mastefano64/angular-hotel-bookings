import { BookingDto } from './bookingdto';
import { RoomDto } from './roomdto';

export class ReservationDto {
  rooms: RoomDto[];
  bookings: BookingDto[];
}
