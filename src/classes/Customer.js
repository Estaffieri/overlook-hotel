import { apiCalls } from "../apiCalls";
import User from "./User";

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
    let finalBill = this.viewAllMyBookings(bookingData).reduce((grandTotal, myBooking) => {
      let matchingRoom = roomData.find(room => room.number === myBooking.roomNumber)
      grandTotal += matchingRoom.costPerNight
      return grandTotal;
    }, 0).toFixed(2);
    return +finalBill

  }
  findVacencies(bookingData, roomData, date) {
    return roomData.reduce((availableRooms, room) => {
      let roomBookings = bookingData.filter(booking => {
        return booking.roomNumber === room.number
      })
      if (!roomBookings.length) {
        availableRooms.push(room)
      } else {
        let roomFound = roomBookings.find(booking => booking.date === date)
        if (!roomFound) {
          availableRooms.push(room)
        }
      }
      return availableRooms;
    }, []);
  }
  filterByRoomType(searchedRoomType, bookingData, roomData, date) {
    let availableRooms = this.findVacencies(bookingData, roomData, date)
    let filteredRooms = availableRooms.filter(room => {
      return room.roomType === searchedRoomType
    })
    if (filteredRooms.length) {
      return filteredRooms
    } else {
      return "Oops! Looks like we don't have any rooms of that type. Please try again."
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

