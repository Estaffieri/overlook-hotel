import { itParam } from "mocha-param";
import { expect } from "chai";
import LoginService from "../src/classes/LoginService.js";

describe("Manager login validation", function () {
  itParam(
    "this username: ${value.username} should fail to login",
    [
      { username: "77", password: "overlook2020" },
      { username: "", password: "overlook2020" },
      { username: "username", password: "overlook2020" },
      { username: "manager ", password: "overlook2020" },
      { username: "13p9sdvnlni", password: "overlook2020" },
      { username: null, password: "overlook2020" },
    ],
    function (credentials) {
      let loginService = new LoginService();

      return loginService
        .login(credentials)
        .then(didLogInSucceed => expect(didLogInSucceed).to.be.equal(false));
    }
  );

  itParam(
    "this password: ${value.password} should fail to login",
    [
      { username: "manager", password: "overlook  2020" },
      { username: "manager", password: "BANANA" },
      { username: "manager", password: "" },
      { username: "manager", password: "7@#SFGDBNHSCDSVascs" },
      { username: "manager", password: null },
    ],
    function (credentials) {
      let loginService = new LoginService();

      return loginService
        .login(credentials)
        .then((didLogInSucceed) => expect(didLogInSucceed).to.be.equal(false));

    }
  );

  itParam(
    "These credentials ${value.username}, ${value.password} succeed to login",
    [{ username: "manager", password: "overlook2020" }],
    function (credentials) {
      let loginService = new LoginService();

      return loginService
        .login(credentials)
        .then((didLogInSucceed) => expect(didLogInSucceed).to.be.equal(true));

    }
  );
});
