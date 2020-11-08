export default class LoginService {
  constructor(userRepository) {
    this.userRepository = userRepository;

  }
  login(credentials) {
    if (credentials && credentials.username === "manager"
     && credentials.password === "overlook2020") {
      return true;
    } else {
      let user = this.userRepository.findByUsername(credentials.username);
      if (user && credentials.password === "overlook2020") {
        return true;
      } else {
        return false;
      }
    }    
  }
}