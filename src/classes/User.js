import Room from "./Room";
import Booking from "./Booking";


export default class User {
  constructor(userDataObject) {
    this.id = userDataObject.id;
    this.name = userDataObject.name;
    this.totalBookings = [];
    this.pastBookings = [];
    this.upcomingBookings = [];
  }
  getFirstName() {
    return this.name.split(" ")[0]
  }
  // getBookingState(bookings, currentDate, allBookings) {
  //   bookings.forEach(booking => {
  //     let
  //   })

  // }
  sortBookings() {
    this.allBookings.forEach(booking => {
      if (booking.getBookingState(currentDate) === "past") {
        this.pastBookings.push(booking)
      } else if (booking.getBookState(currentDate) === "upcoming") {
        this.upcomingBookings.push(booking)
      } else if (booking.getBookingState(currentDate) === "present"){
      }
    })
  }
}