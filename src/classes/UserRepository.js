
import User from "./User.js";

export default class UserRepository {
  constructor(userArray) {
    this.users = userArray.map(user => {
      return new User(user.id, user.name)
    })

  }
  findByUsername(username) {
    return this.users.find(user => {
      return username.toLowerCase() === `customer${user.id}`;
    });
  }
}