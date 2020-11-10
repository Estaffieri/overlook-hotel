import { apiCalls } from "../apiCalls";
import User from "./User";
import Booking from "./Booking";

export default class Customer extends User {
  constructor(userData) {
    super(userData)
    this.currentBookings = [];
    this.upcomingBookings = [];
    this.pastBookings = [];
    this.totalSpent = [];
  }
  viewAllMyBookings(bookingData) {
    let myBookings = bookingData.filter(booking => {
      return booking.userID === this.id
    })
    return myBookings.sort((currentBooking, nextBooking) => {
      return currentBooking.date < nextBooking.date ? -1 : 1;
    })
  }
  viewTotalBill(bookingData, roomData) {
    let finalBill = this.viewTotalBill(bookingData).reduce((grandTotal, mybooking) => {
      let matchingRoom = roomData.find(room => room.number === myBooking.roomNumber)
      grandTotal += matchingRoom.costPerNight
      return grandTotal;
    }, 0).toFixed(2);
    return Number(finalBill)

  }
  filterBookingsByDate(bookingData, roomData, date) {
    
  }
  filterByRoomType() {

  }
  filterByBedSize() {

  }
  sortByCost() {

  }
  sortByNumberOfBeds() {

  }
  bookARoom() {

  }
  callRoomService() {

  }
}

