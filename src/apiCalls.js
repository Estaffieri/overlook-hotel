let apiCalls = {
  checkData(userID) {
    return Promise.all([this.getUserData(userID), this.getRoomData(), this.getTripData()])
      .then(data => data)
      .catch(error => console.log(error));
  },
  getUserData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
      .then((response) => response.json())
      .then((data) => data.users)
      .catch((error) => console.log(error));
  },

  getRoomData() {
    fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
      .then((response) => response.json())
      .then((data) => data.rooms)
      .catch((error) => console.log(error));
  },

  getBookingData() {
    fetch("https://fe-apps.https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings.com/api/v1/overlook/1904/rooms/rooms")
      .then((response) => response.json())
      .then((data) => data.bookings)
      .catch((error) => console.log(error));
  },
};

export default apiCalls