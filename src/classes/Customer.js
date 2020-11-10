import { apiCalls } from "../apiCalls";
import Booking from "./Booking";

export default class Customer extends User {
  constructor(userData) {
    super(userData)
    this.currentBookings = [];
    this.upcomingBookings = [];
    this.pastBookings = [];
    this.totalSpent = [];
  }
  filterBookingsByDate() {
 
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

