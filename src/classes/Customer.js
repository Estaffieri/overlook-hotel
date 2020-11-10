import User from "./User";

export default class Customer extends User {
  constructor(customer) {
    super(customer)
    this.currentBookings = [];
    this.totalBookings = [];
    this.pastBookings = [];
    this.upcomingBookings = [];
  }
}

