import User from "./User";


export default class Manager extends User {
  constructor(userInfo) {
    super(userInfo)
    this.id = 0;
    this.name = "Manager";
  }
  allAvailableRooms(bookingData, roomData, date) {
    return this.showVacancies(booking, rooms, date).length

  }
  totalRevenueForToday(booking, rooms, date) {
    return +this.showBookedRooms(booking, rooms, date)
      .reduce((totalRevenueForToday, room) => {
        totalRevenueForToday += room.costPerNight;
        return totalRevenueForToday
      }, 0).toFixed(2);
  }
  
}