import { expect } from "chai";
import {
  sampleUserData,
  sampleBookingData,
  sampleRoomData
} from "../src/data/test-sample-data";
import User from "../src/classes/User";
import Customer from "../src/classes/Customer";

describe("User", () => {
  let user;
  let user1;
  let user2;

  before(() => {
    user = new User(sampleUserData[0]);
    user1 = new User(sampleUserData[1]);
    user2 = new User({id: 0, name: "Manager"});
  });

  it("should be a function", () => {
    expect(User).to.be.a("function");
  });

  it("should instantiate a user object", () => {
    expect(user).to.be.an.instanceOf(User);
  });
  it("should be an instance of Customer", function () {
    expect(user1).to.be.an.instanceof(Customer);
  });
  it("should have an id", () => {
    expect(user1.id).to.equal(2);
  });
  it("should have a name", () => {
    expect(user1.name).to.equal("Rocio Schuster");
  });
  it("should have booking arrays", function () {
    expect(user1.currentBookings).to.deep.equal([]);
    expect(user1.pastBookings).to.deep.equal([]);
    expect(user1.upcomingBookings).to.deep.equal([]);
  });
  it("should be able to have a different id and name", () => {
    user = new User(sampleUserData[0]);
    expect(user.id).to.equal(1);
    expect(user.name).to.equal("Leatha Ullrich");
  });

  it("should be able to return a string with the name", () => {
    expect(user.greetUser()).to.equal("Welcome, Leatha!");
    expect(user1.greetUser()).to.equal("Welcome, Rocio!");
    expect(user2.greetUser()).to.equal("Welcome, Manager!");
  });
  it("should be able to return a user's booking history", function () {
    expect(user1.viewAllMyBookings(sampleBookingData)).to.deep.equal([
      {
        id: "5fwrgu4i7k55hl7td",
        userID: 2,
        date: "2020/01/27",
        roomNumber: 1,
        roomServiceCharges: [],
      },
      {
        id: "5fwrgu4i7k56hl7td",
        userID: 2,
        date: "2020/01/27",
        roomNumber: 2,
        roomServiceCharges: [],
      },
    ]);
  });
  it("should be able to return a users's total bill", function () {
    expect(
      user1.viewTotalBill(sampleBookingData, sampleRoomData)
    ).to.equal(835.78);
  });

});