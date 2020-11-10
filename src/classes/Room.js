export default class Room {
  constructor(rooms) {
    this.rooms = rooms.rooms;
    // this.roomNumber = rooms.roomNumber;
    // this.roomType = rooms.roomType;
    // this.bidet = rooms.bidet;
    // this.bedSize = rooms.bedSize;
    // this.numbeds = rooms.numBeds;
    // this.costPerNight = rooms.costPerNight;
  }
  getAvailableRooms(bookings, date) {
    return this.rooms.filter(room => {
      return bookings.bookings.reduce((availableRooms, booking) => {
        if (room.number === booking.roomNumber && date === booking.date) {
          return false;
        } else {
          return availableRooms;
        }
      }, true)
    }) 
  }
  getOccupancyPercent(bookings, date) {
    return Math.round(((this.getAvailableRooms(bookings, date).length)
   / this.rooms.length) - 1 * -100);
  }
  getRoomType(type, bookings, date) {
    return this.rooms.filter(room => {
      const roomsAvailable = this.getAvailableRooms(bookings, date);
      return (room.roomType === type && roomsAvailable.includes(room));
    })
  }
}