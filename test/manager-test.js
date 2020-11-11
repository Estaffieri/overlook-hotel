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
});

