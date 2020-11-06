import { expect } from "chai";
import  login  from "../src/scripts.js";

describe("manager login", function () {
  beforeEach(() => {});

  it("succeeds with correct credentials", function () {
    let credentials = {username: "manager", password: "overlook2020"};
    let didLogInSucceed = login(credentials);
    expect(didLogInSucceed).to.be.true;
  });

  it("fails with incorrect password", function () {
    let credentials = { username: "manager", password: "banana" };
    let didLogInSucceed = login(credentials);
    expect(didLogInSucceed).to.be.false;
  });

  it("fails with blank password", function () {
    let credentials = { username: "manager", password: "" };
    let didLogInSucceed = login(credentials);
    expect(didLogInSucceed).to.be.false;
  });

  it("fails with incorrectly formatted password", function () {
    let credentials = { username: "manager", password: "@thisIsTED" };
    let didLogInSucceed = login(credentials);
    expect(didLogInSucceed).to.be.false;
  });

  it("fails with incorrect username", function () {
    let credentials = { username: "Liv Tyler", password: "overlook2020" };
    let didLogInSucceed = login(credentials);
    expect(didLogInSucceed).to.be.false;
  });

  it("fails with blank usename", function () {
    let credentials = { username: "", password: "overlook2020" };
    let didLogInSucceed = login(credentials);
    expect(didLogInSucceed).to.be.false;
  });

  it("fails with incorrectly formatted usename", function () {
    let credentials = { username: "77Annie", password: "overlook2020" };
    let didLogInSucceed = login(credentials);
    expect(didLogInSucceed).to.be.false;
  });

  it("fails with incorrectly formatted usename", function () {
    let didLogInSucceed = login(null);
    expect(didLogInSucceed).to.be.false;
  });

});


