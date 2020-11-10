//****========= IMPORTED FILES =========****}}>
import "./css/base.scss";
import "./css/index.scss";
import "./images/bed.svg";
import "./images/bidet.svg";
import "./images/desk-bell.svg";
import "./images/hotel.svg";
import "./images/search.svg";
import "./images/warning.svg";
import {formLoginButton, formUsernameInput, formPasswordInput, formErrorMessage, loginView} from "./domLoader.js";
import apiCalls from "./apiCalls";
import User from "./classes/User";

//****========= EVENT LISTENERS =========****}}>

formLoginButton.addEventListener("click", validateLogin);

//****========= GLOBAL VARIABLES =========****}}>

let userData;
let bookingData;
let roomData;
let user;
let date;

//****========= +++++++++++++++ =========****}}>

function validateLogin(event) {
  event.preventDefault()
  let errorMessage = formErrorMessage;
  let usernameInput = formUsernameInput.value;
  let passwordInput = formPasswordInput.value;
  let userType = !usernameInput ? undefined : usernameInput.split(/[0-9]/)[0]
  let userID = parseInt(usernameInput.value[8] + usernameInput.value[9]);

  if (usernameInput.value.includes("customer") &&
      passwordInput.value === "overlook2020") {
 
}
loadCustomerInfo(userID)
}

const changeView = (pageToHide, pageToShow) => {
  pageToHide.classList.add("hide");
  pageToShow.classList.remove("hide");
};

function showInfo() {
  if (event.target.classList.contains("steps-info-button")) {
    changeView(loginView, customerDashboard);
  }
}

loadCustomerInfo(userID) {
    apiCalls.checkData(userID).then(data => {
        currentUser = new User(data[0])
    })
    showInfo()
}