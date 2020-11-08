import { expect } from "chai";
import UserRepository from "../src/classes/UserRepository.js";
import sampleUserData from "../src/data/test-sample-data.js";

describe("Testing stuff and things", function () {
    
  it("Good god there is something that needs to work here", function() {
    console.log(sampleUserData);
    let userRepository = new UserRepository(sampleUserData);
    let user = userRepository.findByUsername("customer2");
    expect(user.id).to.be.equal(2);
  });
});