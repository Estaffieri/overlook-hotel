import  apiCalls  from "../apiCalls";

export default class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name
  }
  greetUser() {
    let userFirstName = this.name.split(" ")[0]
    return `Welcome, ${userFirstName}!`;
  }
}