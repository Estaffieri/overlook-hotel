let apiCalls = {
  checkData(userID) {
    return Promise.all([
      this.getUserData(userID),
      this.getRoomData(),
      this.getBookingData(),
      this.getRoomServiceData(),
    ])
      .then(data => data)
      .catch(error => console.log(error));
  },
  checkManagerData() {
    return Promise.all([
      this.getAllUserData(),
      this.getRoomData(),
      this.getBookingData(),
      this.getRoomServiceData(),
    ])
      .then(data => data)
      .catch(error => console.log(error));
  },
  getUserData(userID) {
    return fetch(
      "https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users"
    )
      .then(response => response.json())
      .then(data => data.users.find(user => user.id === userID))
      .catch(error => console.log(error));
  },
    getAllUserData() {
    return fetch(
      "https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users"
    )
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error));
  },


  getRoomData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
      .then(response => response.json())
      .then(data => data.rooms)
      .catch(error => console.log(error));
  },

  getBookingData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
      .then(response => response.json())
      .then(data => data.bookings)
      .catch(error => console.log(error));
  },
  getRoomServiceData() {
    return fetch(
      "https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices"
    )
      .then(response => response.json())
      .then(data => data.roomServices)
      .catch(error => console.log(error));
  },

  postNewBooking(booking) {
    return fetch(
      "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: booking.userId,
          date: booking.date,
          roomNumber: booking.roomNumber,
        }),
      }
    )
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error));
  },
};

export default apiCalls;