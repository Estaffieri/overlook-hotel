export default class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name
  }
  greetUser() {
    let userFirstName = this.name.split(" ")[0]
    return `Welcome, ${userFirstName}!`;

  }
}