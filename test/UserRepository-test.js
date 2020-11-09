import { expect } from "chai";
import UserRepository from "../src/classes/UserRepository.js";
import sampleUserData from "../src/data/test-sample-data.js";

describe("User Repository", function () {
    
  it("If a customer exists and enters the username correctly they should succeed to login", function() {
    let userRepository = new UserRepository(sampleUserData);
    let user = userRepository.findByUsername("customer2");
    expect(user.id).to.be.equal(2);
  });

  it("findByUsername should return the correct user information", function () {
    let userRepository = new UserRepository([{ id: 3, name: "Estelle Staffieri"}]);
    let user = userRepository.findByUsername("customer3");
    expect(user.id).to.be.equal(3);
  });

});