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

  totalRevenueForToday(booking, rooms, date) {
    return +this.showBookedRooms(booking, rooms, date)
      .reduce((totalRevenueForToday, room) => {
        totalRevenueForToday += room.costPerNight;
        return totalRevenueForToday;
      }, 0)
      .toFixed(2);
  }
}