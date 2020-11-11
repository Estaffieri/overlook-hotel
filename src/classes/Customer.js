import { apiCalls } from "../apiCalls";
import User from "./User";

export default class Customer {
  constructor(userData) {
    this.currentBookings = [];
    this.upcomingBookings = [];
    this.pastBookings = [];
    this.totalSpent = [];
  }
  determineBooking(roomData, date, bookingData) {
    trips.forEach((trip) => {
      let hotelBookings;
      bookingData.find(() => {});
      if (bookingData.userID === this.id) {
        this.allTrips.push(new Trip(trip, tripDestination));
      }
    });
    this.sortTrips(currentDate);
  }

  sortBookings(currentDate) {
    this.blueBird.forEach((booking) => {
      if (trip.determineTripStatus(currentDate) === "pending") {
        this.pendingTrips.push(trip);
      } else if (trip.determineTripStatus(currentDate) === "past") {
        this.pastTrips.push(trip);
      } else if (trip.determineTripStatus(currentDate) === "upcoming") {
        this.futureTrips.push(trip);
      } else if (trip.determineTripStatus(currentDate) === "present") {
        this.currentLocation = trip.destinationData.destination;
      }
    });
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

