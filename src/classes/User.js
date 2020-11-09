import Room from "./Room";


export default class User {
  constructor(users) {
    this.id = users.id;
    this.name = users.name;

  }
  getFirstName() {
    return this.name.split(" ")[0]
  }
  
}