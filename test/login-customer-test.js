// import { itParam } from "mocha-param";
import { expect } from "chai";
import  LoginService   from "../src/classes/LoginService.js";
import User from "../src/classes/User.js";



describe("Customer login validation", function () {
    
  it("these customer credentials should succeed to login", function() {
    let userRepository = {findByUsername (username) {
      return new User(1, "Letha");
    } };
    let credentials = {username: "customer1", password: "overlook2020"};
    let loginService = new LoginService(userRepository);
    let didLogInSucceed = loginService.login(credentials);
    expect(didLogInSucceed).to.be.equal(true);
  }
  );

  it("if customer doesn't exist they should fail to login", function () {
    let userRepository = {
      findByUsername (username) {
        return null
      },
    };
    let credentials = { username: "customer1", password: "overlook2020" };
    let loginService = new LoginService(userRepository);
    let didLogInSucceed = loginService.login(credentials);
    expect(didLogInSucceed).to.be.equal(false);
  });

  it("if customer enters wrong password they should fail to login", function () {
    let userRepository = {
      findByUsername(username) {
        return new User(1, "Letha");
      },
    };
    let credentials = { username: "customer1", password: "BANANA" };
    let loginService = new LoginService(userRepository);
    let didLogInSucceed = loginService.login(credentials);
    expect(didLogInSucceed).to.be.equal(false);
  });
});