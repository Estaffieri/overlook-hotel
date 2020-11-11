import { expect } from "chai";
import Manager from "../src/classes/Manager.js";
import {
  sampleUserData,
  sampleBookingData,
  sampleRoomData,
} from "../src/data/test-sample-data";


describe("Manager", () => {
  let manager;

  before(() => {
    manager = new Manager(sampleUserData[0]);
  });

  it("should be a function", () => {
    expect(Manager).to.be.a("function");
  });

  it("should instantiate a user object", () => {
    expect(manager).to.be.an.instanceOf(Manager);
  });

  it("should have an id", () => {
    expect(manager.id).to.equal(0);
  });

  it("should have a name", () => {
    expect(manager.name).to.equal("Manager");
  });
});

