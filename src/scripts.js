import "./css/base.scss";
import "./css/index.scss";

function login(credentials) {
  if (credentials && credentials.username === "manager"
   && credentials.password === "overlook2020"
  ) {
    return true;
  } else {
    return false;
  }
}
export default login;