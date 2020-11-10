import { expect } from "chai";
import {
  sampleUserData,
  sampleRoomData,
  sampleBookingData,
} from "../src/data/test-sample-data";
import User from "../src/classes/User";
import Customer from "../src/classes/Customer";
import Room from "../src/classes/Room";

describe.only("Room", function () {
  let customer1;
  let customer2;
  let rooms;
  let booking;
  let currentDate;
  beforeEach(() => {
    currentDate = "2020/05/02";
    rooms = new Room(sampleRoomData)
    booking = sampleBookingData
    customer1 = new Customer(sampleUserData.users[0]);
    customer2 = new Customer(sampleUserData.users[1]);
  });
  it("should be a function", function () {
    expect(Room).to.be.a("function");
  });
  it("should be an instance of Room", function () {
    expect(customer1).to.be.an.instanceof(User);
  });
  it("should be able to find available rooms for a given day", function () {
    const roomsAvailable = rooms.getAvailableRooms(sampleBookingData, currentDate);
    expect(roomsAvailable).to.deep.equal([
      {
        number: 1,
        roomType: "residential suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 358.4,
      },
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38,
      },
      {
        number: 3,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14,
      },
      {
        number: 4,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 429.44,
      },
      {
        number: 5,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17,
      },
      {
        number: 6,
        roomType: "junior suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 397.02,
      },
      {
        number: 7,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 231.46,
      },
      {
        number: 8,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 261.26,
      },
      {
        number: 9,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 200.39,
      },
      {
        number: 10,
        roomType: "suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 1,
        costPerNight: 497.64,
      },
    ]);
  })
  it("should be able to return the occupancy rate for a given day as a percentage", function () {
    const currentOccupancyPercent = rooms.getOccupancyRate(
      sampleBookingData,
      currentDate
    );
    console.log(currentOccupancyPercent)
    expect(currentOccupancyPercent).to.equal(32)
  })
});
