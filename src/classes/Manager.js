import Customer from "./Customer";


export default class Manager {
  constructor(allUserInfo) {
    this.id = 0;
    this.name = "Manager";
   
  }
  allAvailableRooms(bookingData, roomData, date) {
    let customer = new Customer({id: this.id, name: this.name})
    return customer.findVacencies(bookingData, roomData, date).length;
  }

  
  totalRevenueForToday(booking, rooms, date) {
    return +this.showBookedRooms(booking, rooms, date)
      .reduce((totalRevenueForToday, room) => {
        totalRevenueForToday += room.costPerNight;
        return totalRevenueForToday
      }, 0).toFixed(2);
  }
  
}