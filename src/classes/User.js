import Room from "./Room";
import Booking from "./Booking";


export default class User {
  constructor(userDataObject) {
    this.id = userDataObject.id;
    this.name = userDataObject.name;
    this.currentBookings = [];
    this.totalBookings = [];
    this.pastBookings = [];
    this.upcomingBookings = [];
  
  }
  getFirstName() {
    return this.name.split(" ")[0]
  }
  getBookingStatus(rooms, currentDate, bookings) {
    rooms.forEach(room => {
      let roomBooking
      bookings.find(booking => {
        if (room.userID === booking.id) {
          roomBooking = booking
        }
      })
      if(room)
    })

  }

  
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