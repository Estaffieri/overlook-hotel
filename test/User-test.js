import { expect } from "chai";
import {
  sampleUserData,
} from "../src/data/test-sample-data";
import User from "../src/classes/User";

describe("User", () => {
  let user;
  let user1;
  let user2;

  before(() => {
    user = new User(sampleUserData.users[0]);
    user1 = new User(sampleUserData.users[1]);
    user2 = new User({id : 0, name: "Manager"});
  });

  it("should be a function", () => {
    expect(User).to.be.a("function");
  });

  it("should instantiate a user object", () => {
    expect(user).to.be.an.instanceOf(User);
  });

  it("should have an id", () => {
    expect(user1.id).to.equal(2);
  });

  it("should have a name", () => {
    expect(user1.name).to.equal("Rocio Schuster");
  });

  it("should be able to have a different id and name", () => {
    user = new User(sampleUserData.users[0]);
    expect(user.id).to.equal(1);
    expect(user.name).to.equal("Leatha Ullrich");
  });

  it("should be able to return a string with the name", () => {
    expect(user.greetUser()).to.equal("Welcome, Leatha!");
    expect(user1.greetUser()).to.equal("Welcome, Rocio!");
    expect(user2.greetUser()).to.equal("Welcome, Manager!");
  });
});