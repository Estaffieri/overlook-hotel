import User from "./User";

export default class Customer extends User {
  constructor(userDataObject) {
    this.id = userDataObject.id;
    this.name = userDataObject.name;
    this.currentBookings = [];
    this.totalBookings = [];
    this.pastBookings = [];
    this.upcomingBookings = [];
  }
//   getFirstName() {
//     return this.name.split(" ")[0];
//   }
//   getBookingStatus(rooms, currentDate, bookings) {
//     rooms.forEach((room) => {
//       let roomBooking;
//       bookings.find((booking) => {
//         if (room.id === booking.id) {
//           roomBooking = booking;
//         }
//       });
//       if (room.userID === this.id) {
//         this.totalBookings.push(new Booking(room, roomBooking));
//       }
//     });
//     this.sortBookings(currentDate);
//   }

//   sortBookings() {
//     this.allBookings.forEach((booking) => {
//       if (booking.getBookingState(currentDate) === "past") {
//         this.pastBookings.push(booking);
//       } else if (booking.getBookState(currentDate) === "upcoming") {
//         this.upcomingBookings.push(booking);
//       } else if (booking.getBookingState(currentDate) === "present") {
//       }
//     });
//   }
}
