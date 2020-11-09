import { expect } from "chai";
import Manager from "../src/classes/Manager.js";
import UserRepository from "../src/classes/UserRepository.js";
import sampleUserData from "../src/data/test-sample-data.js";

describe("Manager", function () {
  
    it('should be a function', function() {
    expect(Manager).to.be.a('function');
});