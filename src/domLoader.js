import moment from "moment";
//========== Login View =========>
export const formErrorMessage = document.querySelector(".login-error-message");
export const formUsernameInput = document.querySelector("#username-input");
export const formPasswordInput = document.querySelector("#password-input");
export const formLoginButton = document.querySelector(".login-button");
export const loginView = document.querySelector(".login-view");
export const dashboard = document.querySelector(".dashboard-view");
export const searchInput = document.querySelector(".search-input");
export const upcoming = document.querySelector(".upcoming-bookings");
export const current = document.querySelector(".current-bookings");
export const past = document.querySelector(".past-bookings");


export const displayBookingCards = (element, bookings) => {
  let section
  if (element === "past") {
    section = document.querySelector(".past-bookings");
  }
  if (element === "upcoming") {
    section = document.querySelector(".upcoming-bookings");
  }
  if (element === "current") {
    section = document.querySelector(".current-bookings");
  }
  if(bookings.length) {
    bookings.forEach((booking) => {
      section.innerHTML += `
      <section class="booking">
        <h4>${booking.date},room number: ${booking.roomNumber}</h4>
      </section>`;
    });
  } else {
    section.innerHTML += `
      <section class="booking">
        <h4>No bookings to show</h4>
      </section>`;
  }
}
export const domRender = (user, roomData, bookingData) => {
  if (user.id !== 0) {
    dashboard.innerHTML = `      <div class="customer-dashboard-view">
        <header tabindex="0" class="customer-dashboard">
          <img tabindex="0" class="hotel-icon" id="icon" src="./images/hotel.svg" alt="vector-image-of-a-square-hotel-with-windows">
          <div class="date-container">
            <h2>Today's Date:${moment().format("MM/DD/YYYY")}</h2>
          </div>
          <section tabindex="0" class="welcome-banner" aria-label="Welcome-to-the-Overlook-Hotel-this-is-your-dashboard">
            <div class="welcome-wrapper">
                <img tabindex="0" class="user-icon" id="icon" src="./images/user.svg" alt="vector-image-of-a-old-fashion-suitcase">
                <h3>${user.greetUser()}</h3>
                <article class="upcoming-bookings">
                  <h4>Upcoming Bookings: </h4>
                </article>
               <article class="current-bookings">
                  <h4>Current Bookings: </h4>
                </article>
                <article class="past-bookings">
                  <h4>Past Bookings: </h4>
                </article>


                <button type="submit" name="log-Out-button" class="log-Out-button" aria-label="log-out-as-a-customer-or-manager">LOG OUT</button>
           </div>
          </div>
           <label tabindex="0" for="search-input">Search:</label>
            <input id="search-input" type="date"  aria-label="search-field-for-rooms-or-bookings-input" placeholder="search by date"></input>-
        </header>
`;
  } else {
    dashboard.innerHTML = `      <div class="manager-dashboard-view">
        <header tabindex="0" class="manager-dashboard">
          <img tabindex="0" class="hotel-icon" id="icon" src="./images/hotel.svg" alt="vector-image-of-a-square-hotel-with-windows">
          <div class="date-container">
            <h2>Today's Date:${moment().format("MM/DD/YYYY")}</h2>
          </div>
          <section tabindex="0" class="welcome-banner" aria-label="Welcome-to-the-Overlook-Hotel-this-is-your-dashboard">
            <div class="welcome-wrapper">
                <img tabindex="0" class="user-icon" id="icon" src="./images/user.svg" alt="vector-image-of-a-old-fashion-suitcase">
                <h3>Welcome, Manager!</h3>
                <article class="total-spend">
                </article>
                <button type="submit" name="log-Out-button" class="log-Out-button" aria-label="log-out-as-a-customer-or-manager">LOG OUT</button>
           </div>
           <section class="overlook-overview">
                <article class="total-rooms-avail">
                <h4>Total rooms availiable today: ${user.allAvailableRooms(
    bookingData,
    roomData,
    moment().format("YYYY/MM/DD")
  )}</h4>
                </article>
                <article class="todays-revenue">
                <h4> Total revenue for today: ${user.totalRevenueForToday(
    bookingData,
    roomData,
    moment().format("YYYY/MM/DD")
  )} </h4>
                </article>
                <article class="percent-occupied">
                <h4>We are at ${user.calculateOccupancy(
    bookingData,
    roomData,
    moment().format("YYYY/MM/DD")
  )}% occupancy</h4>
                </article>
           </section>
          </section>
          </div>
           <label tabindex="0" for="search-input">Search:</label>
            <input id="search-input" type="date"  aria-label="search-field-for-rooms-or-bookings-input" placeholder="search by date"></input>-
        </header>`;

  }

}