export default class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name
  }
  greetUser() {
    return 'Welcome, ${this.name}!'

  }
}