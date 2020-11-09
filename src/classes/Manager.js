
export default class Manager {
  constructor(rooms, bookings) {
    this.rooms = rooms;
    this.booking = bookings;
    this.totalRevenue = 0;
  }
  getUserByName(name) {
    return UserRepository.user.name === name;
  }
}