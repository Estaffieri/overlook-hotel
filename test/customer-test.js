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
    customer1 = new Customer(sampleUserData[0]);
    customer2 = new Customer(sampleUserData[1]);
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
  it("should be able to return a welcome message", function () {
    expect(customer1.greetUser()).to.equal("Welcome, Leatha!");
  });
  it("should be able to return a customer's booking history", function () {
    expect(customer2.viewAllMyBookings(sampleBookingData)).to.equal([{
      id: "5fwrgu4i7k55hl7td",
      userID: 2,
      date: "2020/01/27",
      roomNumber: 20,
      roomServiceCharges: [],
    },
    {
      id: "5fwrgu4i7k56hl7td",
      userID: 2,
      date: "2020/01/27",
      roomNumber: 21,
      roomServiceCharges: [],
    }
    ]);
  });
  it("should be able to return a customer's past bookings", function () {
    expect(customer2.pastBookings).to.deep.equal([]);
  });
  it("should be able to return a customer's present bookings", function () {
    expect(customer2.currentBookings).to.deep.equal([]);
  });
});