// var itParam = require("mocha-param");
// // We have used chai as an assertion library but you can use any.
// var expect = require("chai").expect;
// import login from "../src/scripts.js"

// // A Simple sync example taking an array as a parameter.
// // 'value' is each value in the array
// describe("basic mocha test with data", function () {
//   itParam(
//     "test value ${value.username} is the incorrect username",
//     [
//       { username: "", password: "overlook2020" },
//       { username: "77", password: "overlook2020" },
//       { username: "username", password: "overlook2020" },
//       { username: "manager ", password: "overlook2020" },
//       { username: "13p9sdvnlni", password: "overlook2020" },
//       { username: null, password: "overlook2020" },
//     ],
//     function (credentials) {
//       let didLogInSucceed = login(credentials);
//       expect(didLogInSucceed).to.be.false;
//     }
//   );

//   itParam(
//     "test value ${value.password} is the incorrect password",
//     [
//       { username: "manager", password: "overlook  2020" },
//       { username: "manager", password: "BANANA" },
//       { username: "manager", password: "" },
//       { username: "manager", password: "7@#SFGDBNHSCDSVascs" },
//       { username: "manager", password: null },
//     ],
//     function (credentials) {
//       let didLogInSucceed = login(credentials);
//       expect(didLogInSucceed).to.be.false;
//     }
//   );

//   itParam(
//     "test value ${value.username} is the correct login",
//     [
//       { username: "manager", password: "overlook2020" },
//     ],
//     function (credentials) {
//       let didLogInSucceed = login(credentials);
//       expect(didLogInSucceed).to.be.true;
//     }
//   );
// });
