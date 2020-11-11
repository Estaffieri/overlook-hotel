import Customer from "./Customer";

export default class User extends Customer {
  constructor(userData) {
    super(userData)
    this.id = userData.id;
    this.name = userData.name;
  }
  greetUser() {
    let userFirstName = this.name.split(" ")[0];
    return `Welcome, ${userFirstName}!`;
  }
  sortBookings(bookingData, currentDate) {
    let allBookings = this.viewAllMyBookings(bookingData)
    allBookings.forEach(booking => {
      this.determineBookingStatus(booking, currentDate)
    })

  }
  viewAllMyBookings(bookingData) {
    let myBookings = bookingData.filter((booking) => {
      return booking.userID === this.id;
    });
    return myBookings.sort((currentBooking, nextBooking) => {
      return currentBooking.date < nextBooking.date ? -1 : 1;
    });
  } 
  viewTotalBill(bookingData, roomData) {
    let finalBill = this.viewAllMyBookings(bookingData)
      .reduce((grandTotal, myBooking) => {
        let matchingRoom = roomData.find(
          (room) => room.number === +(myBooking.roomNumber)
        );
        grandTotal += matchingRoom.costPerNight;
        return grandTotal;
      }, 0)
      .toFixed(2);
    return +finalBill;
  }
}