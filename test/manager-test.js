import { expect } from "chai";
import Manager from "../src/classes/Manager.js";
import {
  sampleUserData,
  sampleBookingData,
  sampleRoomData,
} from "../src/data/test-sample-data";


describe("Manager", () => {
  let manager;
  let date;

  before(() => {
    manager = new Manager(sampleUserData[0]);
  });

  it("should be a function", () => {
    expect(Manager).to.be.a("function");
  });

  it("should instantiate a manger object", () => {
    expect(manager).to.be.an.instanceOf(Manager);
  });

  it("should have an id", () => {
    expect(manager.id).to.equal(0);
  });

  it("should have a name", () => {
    expect(manager.name).to.equal("Manager");
  });
  it("should return an array of available rooms given a date", () => {
    expect(
      manager.allAvailableRooms(sampleBookingData, sampleRoomData, "2020/01/27")
    ).to.equal(10);
  });
  it("should return a percentage of occupied rooms", () => {
    expect(manager.calculateOccupancy(sampleBookingData, sampleRoomData, "2020/01/27")).to.equal(17)
  });
  it("should return an array of the booked rooms for a given date", () => {
    expect(
      manager.getBookedRooms(sampleBookingData, sampleRoomData, "2020/01/27")
    ).to.deep.equal([{
      bedSize: "queen",
      bidet: true,
      costPerNight: 358.4,
      numBeds: 1,
      number: 1,
      roomType: "residential suite"
    },
    {
      bedSize: "full",
      bidet: false,
      costPerNight: 477.38,
      numBeds: 2,
      number: 2,
      roomType: "suite"
    }]);
  });
  it("should return the summed revenue for a given date", () => {
    expect(
      manager.totalRevenueForToday(
        sampleBookingData,
        sampleRoomData,
        "2020/01/27"
      )
    ).to.equal(835.78);
  });
});

