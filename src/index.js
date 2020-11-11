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
import { formLoginButton, formUsernameInput, formPasswordInput, formErrorMessage, loginView, customerDashboard, searchInput, domRender } from "./domLoader.js";
import apiCalls from "./apiCalls";
import User from "./classes/User";
import Customer from "./classes/Customer";

//****========= EVENT LISTENERS =========****}}>

formLoginButton.addEventListener("click", validateLogin);

//****========= GLOBAL VARIABLES =========****}}>

let bookingData;
let roomService;
let roomData;
let user; //holds userData
let date = moment().format("YYYY/MM/DD");

//****========= +++++++++++++++ =========****}}>

function validateLogin(event) {
  event.preventDefault()
  let userType = !formUsernameInput.value ? undefined : formUsernameInput.value.split(/([0-9])/)[0];
  let userNum = !formUsernameInput.value ? undefined : +formUsernameInput.value.split(/([0-9])/)[1];
  let password = formPasswordInput.value;
  if (userType === "customer" && userNum > 0 && userNum < 51 && password === "overlook2020") {
    loadCustomerInfo(userNum, event)
  // } else if (userType === "manager" && !userNum && password === "overlook2020") {
    //render MangerDashboard
  } else {
    console.log(userType, typeof userNum)
    alert("Please enter a valid username and password")
  }
}
//to-do: Render CustomerDashboard
//fetch information from the api by UserId
//use fetchedInfo to update global variables
//display dashboard


const changeView = (pageToHide, pageToShow) => {
  pageToHide.classList.add("hide");
  pageToShow.classList.remove("hide");
};

function showInfo(event) {
  if (event.target.classList.contains("login-button")) {
    changeView(loginView, customerDashboard);
    domRender()
  }
}

function loadCustomerInfo(userID, event) {
  apiCalls.checkData(userID).then(data => {
    user = new User(data[0])
    bookingData = data[2]
    roomData = data[1]
    roomService = data[3]
  })
  showInfo(event)
}

function createNewBooking(booking) { 
  let newPostObject = {
    userID: user.id,
    date: booking.date,
    roomNumber: roomData.roomNumber
  };
  apiCalls.postNewBooking(newPostObject)

}
