import {expect} from 'chai';
import {
  sampleUserData,
  sampleRoomData,
  sampleBookingData,
} from "../src/data/test-sample-data";
import User from "../src/classes/User";
import Customer from "../src/classes/Customer";

describe("Customer", function () {
  let customer1;
  let customer2;
  let date;
  beforeEach(() => {
    date = "2020/06/01";
    customer1 = new Customer(sampleUserData[0]);
    customer2 = new Customer(sampleUserData[1]);
  });
  it("should be a function", function () {
    expect(Customer).to.be.a("function");
  });
  it("should be an instance of Customer", function () {
    expect(customer1).to.be.an.instanceof(User);
  });
  it("should have an id", function () {
    expect(customer1.id).to.equal(1);
  });
  it("should have a name", function () {
    expect(customer1.name).to.equal("Leatha Ullrich");
  });
  it("should be able to return a welcome message", function () {
    expect(customer1.greetUser()).to.equal("Welcome, Leatha!");
  });
  it("should be able to return a customer's booking history", function () {
    expect(customer2.viewAllMyBookings(sampleBookingData)).to.deep.equal([{
      id: "5fwrgu4i7k55hl7td",
      userID: 2,
      date: "2020/01/27",
      roomNumber: 1,
      roomServiceCharges: [],
    },
    {
      id: "5fwrgu4i7k56hl7td",
      userID: 2,
      date: "2020/01/27",
      roomNumber: 2,
      roomServiceCharges: [],
    }
    ]);
  });
  it("should be able to return a customer's total bill", function () {
    expect(customer2.viewTotalBill(sampleBookingData, sampleRoomData)).to.equal(
      835.78
    );
  });
  it("Should only see rooms that are available upon search", function () {
    let date = "2021/01/27";
    expect(
      customer2.findVacencies(sampleBookingData, sampleRoomData, date)
    ).to.deep.equal([
      {
        number: 1,
        roomType: "residential suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 358.4,
      },
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38,
      },
      {
        number: 3,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14,
      },
      {
        number: 4,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 429.44,
      },
      {
        number: 5,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17,
      },
      {
        number: 6,
        roomType: "junior suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 397.02,
      },
      {
        number: 7,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 231.46,
      },
      {
        number: 8,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 261.26,
      },
      {
        number: 9,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 200.39,
      },
      {
        number: 10,
        roomType: "suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 1,
        costPerNight: 497.64,
      },
      {
        number: 11,
        roomType: "suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 1,
        costPerNight: 497.64,
      },
      {
        number: 12,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 429.44,
      }
    ]);
  });
});