
import User from "./User.js";

export default class UserRepository {
  constructor(userArray) {
    this.users = userArray.map(userJson => {
      return new User(userJson.id, userJson.name)
    })

  }
  findByUsername(username) {
    return this.users.find(user => {
      return username.toLowerCase() === `customer${user.id}`;
    });
  }
}