import Customer from "./Customer";


export default class Manager {
  constructor(allUserInfo) {
    this.id = 0;
    this.name = "Manager";
  }
  allAvailableRooms(bookingData, roomData, date) {
    let customer = new Customer({ id: this.id, name: this.name });
    return customer.findVacencies(bookingData, roomData, date).length;
  }

  calculateOccupancy(bookingData, roomData, date) {
    let totalRooms = roomData.length
    let availableRooms = this.allAvailableRooms(bookingData, roomData, date)
    let occupiedRooms = totalRooms - availableRooms
    return +(occupiedRooms / totalRooms).toFixed(2) * 100
  }
  getBookedRooms(bookingData, roomData, date) {
    return roomData.reduce((occupiedRooms, room) => {
      let roomBookings = bookingData.filter(booking => {
        return booking.roomNumber === room.number
      })
      if (roomBookings) {
        let roomFound = roomBookings.find(booking => booking.date === date)
        if (roomFound) {
          occupiedRooms.push(room)
        }
      }
      return occupiedRooms;
    }, []);
  }

  totalRevenueForToday(bookingData, roomData, date) {
    let bookedRooms = this.getBookedRooms(bookingData, roomData, date)
    return +bookedRooms
      .reduce((totalRevenue, room) => {
        totalRevenue += room.costPerNight;

        return totalRevenue;
      }, 0)
      .toFixed(2);
  }
}