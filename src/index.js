// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import "./css/base.scss";
import "./css/index.scss";
import "../dom-updates/All-Dom-Loader"
import UserRepository from "./src/classes/UserRepository.js";
let userData;
let userRepository;

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'



const userPromise = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users"
).then((resp) => resp.json());

Promise.all([userPromise])
  .then((data) => {
    userData = data[0].users;
    userRepository = new UserRepository(userData);
  })
  .then(() => {
    loadApp();
  });

function loadApp() {

}