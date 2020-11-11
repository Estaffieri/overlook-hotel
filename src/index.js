//****========= IMPORTED FILES =========****}}>
import "./css/base.scss";
import "./css/index.scss";
import "./images/bed.svg";
import "./images/bidet.svg";
import "./images/desk-bell.svg";
import "./images/hotel.svg";
import "./images/search.svg";
import "./images/warning.svg";
import moment from "moment";
import {
  formLoginButton,
  formUsernameInput,
  formPasswordInput,
  formErrorMessage,
  loginView,
  dashboard,
  searchInput,
  domRender,
  displayBookingCards,
  searchButton,
  searchOptions,
  searchResultsView,
  populateResults,
} from "./domLoader.js";
import apiCalls from "./apiCalls";
import User from "./classes/User";
import Customer from "./classes/Customer";
import Manager from "./classes/Manager";

//****========= EVENT LISTENERS =========****}}>

formLoginButton.addEventListener("click", validateLogin);
searchButton.addEventListener("click", displayResults);

//****========= GLOBAL VARIABLES =========****}}>
let allUsers;
let bookingData;
let roomService;
let roomData;
let user; //holds userData
let date = moment().format("YYYY/MM/DD");

//****========= +++++++++++++++ =========****}}>

function validateLogin(event) {
  event.preventDefault()
  let userType = !formUsernameInput.value ? undefined : formUsernameInput.value.split(/([0-9])/)[0];
  let userNum = userType === "manager" ? undefined : +formUsernameInput.value.substring(8, 11);
  let password = formPasswordInput.value;
  if (userType === "customer" && userNum > 0 && userNum < 51 && password === "overlook2020") {
    loadCustomerInfo(userNum, event, userType)
  } else if (userType === "manager" && !userNum && password === "overlook2020") {
    loadCustomerInfo(userNum, event, userType);
  } else {
    alert("Please enter a valid username and password")
  }
}

const changeView = (pageToHide, pageToShow) => {
  pageToHide.classList.add("hide");
  pageToShow.classList.remove("hide");
};

function showInfo(event) {
  if (event.target.classList.contains("login-button")) {
    changeView(loginView, dashboard);
    searchOptions.classList.remove("hide")
    user.sortBookings(bookingData, date)
    domRender(user, roomData, bookingData)
    displayBookingCards("current", user.currentBookings)
    displayBookingCards("past", user.pastBookings);
    displayBookingCards("upcoming", user.upcomingBookings);
  }
}

function loadCustomerInfo(userID, event, userType) {
  if (userType === "customer") {
    apiCalls.checkData(userID).then((data) => {
      user = new User(data[0]);
      bookingData = data[2];
      roomData = data[1];
      roomService = data[3];
      showInfo(event);
    });
  } else {
    apiCalls.checkManagerData().then((data) => {
      user = new Manager({id: 0, name: "manager"});
      allUsers = data[0];
      bookingData = data[2];
      roomData = data[1];
      roomService = data[3];
      showInfo(event);
    });

  }
}

function displayResults(event) {
  event.preventDefault()
  changeView(dashboard, searchResultsView)
  let searchDate = moment(searchInput.value).format('YYYY/MM/DD')
  let results = user.findVacencies(bookingData, roomData, searchDate)
  populateResults(results)
}

function createNewBooking(booking) { 
  let newPostObject = {
    userID: user.id,
    date: booking.date,
    roomNumber: roomData.roomNumber
  };
  apiCalls.postNewBooking(newPostObject)

}
