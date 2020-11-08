export default class LoginService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  login(credentials) {

    if (!credentials) {
      return false;
    }
    if (this.areManagerCredentialsValid(credentials)) {
      return true;
    } else {
      let user = this.userRepository.findByUsername(credentials.username);
      return user !== null && this.isPasswordValid(credentials.password);
    }    
  }
  areManagerCredentialsValid(credentials) {
    return (
      credentials.username === "manager" &&
      this.isPasswordValid(credentials.password)
    );
  }
  isPasswordValid(password) {
    return password === "overlook2020";
  }

}