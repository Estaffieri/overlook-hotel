export default class LoginService {
  constructor(userRepository) {
    this.userRepository = userRepository;

  }
  login(credentials) {
    if (credentials && credentials.username === "manager"
     && credentials.password === "overlook2020") {
      return true;
    } else {
      return false;
    }

    //     this.userRepository.findByUsername(credentials.username)
    //   .then(user => {
    //     if (credentials && credentials.username === "manager"
    //  && credentials.password === "overlook2020") {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   })
    
    //   .catch()
    // return Promise.reject("This is very weird")
    
  }

}