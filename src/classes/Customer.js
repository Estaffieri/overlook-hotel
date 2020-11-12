import { apiCalls } from "../apiCalls";
import moment from "moment";
import User from "./User";

export default class Customer {
  constructor(userData) {
    this.currentBookings = [];
    this.upcomingBookings = [];
    this.pastBookings = [];
    this.allBookings = [];
    this.totalSpent = [];
  }
  determineBookingStatus(booking, currentDate) {
    let compareDate = moment(new Date(currentDate)).format("YYYY/MM/DD");
    if (moment(new Date(compareDate)).isAfter(moment(new Date(booking.date)),"day")) {
      this.pastBookings.push(booking);
    } 
    if (moment(new Date(compareDate)).isBefore(moment(new Date(booking.date)), "day")) {
      this.upcomingBookings.push(booking);
    };
    if (compareDate === booking.date) {
      this.currentBookings.push(booking);
    } 
    this.allBookings.push(booking)
  }

  findVacencies(bookingData, roomData, date) {
    return roomData.reduce((availableRooms, room) => {
      let roomBookings = bookingData.filter((booking) => {
        return booking.roomNumber === room.number;
      });
      if (!roomBookings.length) {
        availableRooms.push(room);
      } else {
        let roomFound = roomBookings.find((booking) => booking.date === date);
        if (!roomFound) {
          availableRooms.push(room);
        }
      }
      return availableRooms;
    }, []);
  }
  filterByRoomType(searchedRoomType, bookingData, roomData, date) {
    let availableRooms = this.findVacencies(bookingData, roomData, date);
    let filteredRooms = availableRooms.filter((room) => {
      return room.roomType === searchedRoomType;
    });
    if (filteredRooms.length) {
      return filteredRooms;
    } else {
      return "Oops! Looks like we don't have any rooms of that type. Please try again.";
    }
  }
  //   }
  //   filterByBedSize() {

  //   }
  //   sortByCost() {

  //   }
  //   sortByNumberOfBeds() {

  //   }
  //   bookARoom() {

  //   }
  //   callRoomService() {

  //   }
}

