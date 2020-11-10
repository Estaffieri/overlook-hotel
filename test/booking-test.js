import { expect } from "chai";
import {
  sampleUserData,
  sampleRoomData,
  sampleBookingData,
} from "../src/data/test-sample-data";
import Booking from "../src/classes/Booking";
import User from "../src/classes/User";

describe("Booking", function () {
  let user1;
  let user2;
  let currentDate;
  beforeEach(() => {
    currentDate = "11/09/2020";
    user1 = new User(sampleUserData.users[0]);
    user2 = new User(sampleUserData.users[1]);
  });
  it("should be a function", function () {
    expect(User).to.be.a("function");
  });
  it("should be an instance of User", function () {
    expect(user1).to.be.an.instanceof(User);
  });
  it("should have an id", function () {
    expect(user1.id).to.equal(1);
  });
  it("should have a name", function () {
    expect(user1.name).to.equal("Leatha Ullrich");
  });
  // it("should be able to return a user's total bookings", function () {
  //   expect(user2.totalBookings).to.deep.equal([]);
  // });
  // it("should be able to return just a user's first name", function () {
  //   expect(user1.getFirstName()).to.equal("Leatha");
  // });
});
