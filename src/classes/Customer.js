import User from "./User";

export default class Customer extends User {
  constructor(customer) {
    super(customer)
    this.currentBookings = [];
    this.totalBookings = [];
    this.pastBookings = [];
    this.upcomingBookings = [];
  }
  //need to find booked rooms
  returnBookings(bookings) {
    this.totalBookings.push(bookings.filter(booking => {
      return this.id === booking.userID;
    }))
  }


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
