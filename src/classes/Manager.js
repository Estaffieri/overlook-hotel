
export default class Manager extends User {
  constructor(users) {
    super(users)
  }
  allAvailableRooms(booking, rooms, date) {
    return this.showVacancies(booking, rooms, date).length
  }
  totalRevenueForToday(booking, rooms, date) {
    return Number(this.showBookedRooms(booking, rooms, date)
    .reduce(totalRevenueForToday, room) => {
      totalRevenueForToday += room.costPerNight;
      return totalRevenueForToday
    },0).toFixed(2));
  
}