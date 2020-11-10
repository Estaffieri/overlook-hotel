import {expect} from 'chai';
import {
  sampleUserData,
  sampleRoomData,
  sampleBookingData,
} from "../src/data/test-sample-data";
import User from "../src/classes/User";
import Customer from "../src/classes/Customer";

describe("Customer", function () {
  let customer1;
  let customer2;
  let currentDate;
  beforeEach(() => {
    currentDate = "06/01/2020";
    customer1 = new Customer(sampleUserData.users[0]);
    customer2 = new Customer(sampleUserData.users[1]);
  });
  it("should be a function", function () {
    expect(Customer).to.be.a("function");
  });
  it("should be an instance of Customer", function () {
    expect(customer1).to.be.an.instanceof(User);
  });
  it("should have an id", function () {
    expect(customer1.id).to.equal(1);
  });
  it("should have a name", function () {
    expect(customer1.name).to.equal("Leatha Ullrich");
  });
  it("should be able to return a customer's total bookings", function () {
    expect(customer1.totalBookings).to.deep.equal([]);
  });
  it("should be able to return a customer's past bookings", function () {
    expect(customer2.pastBookings).to.deep.equal([]);
  });
  it("should be able to return a customer's present bookings", function () {
    expect(customer2.currentBookings).to.deep.equal([]);
  });
  it("should be able to return a customer's present bookings", function () {
    expect(customer2.currentBookings).to.deep.equal([]);
  });
  it("should be able to return just a customer's first name", function () {
    expect(customer1.getFirstName()).to.equal("Leatha");
  });
  it("should be able sort bookings into the correct arrays", function () {
      customer1.getBookingStatus(sampleRoomData.rooms, currentDate, sampleBookingData.bookings)
      expect(customer1.currentBookings.length).to.equal()
    
  });
});