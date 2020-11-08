// import { itParam } from "mocha-param";
import { expect } from "chai";
import  LoginService   from "../src/classes/LoginService.js";



describe("Customer login validation", function () {
  it("these customer credentials should succeed to login", function() {
    let userRepository = {};
    let credentials = {username: "customer1", password: "overlook2020"};
    let loginService = new LoginService(userRepository);
    let didLogInSucceed = loginService.login(credentials);
    expect(didLogInSucceed).to.be.equal(true);
  }
  );
});