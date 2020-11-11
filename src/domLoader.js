import moment from "moment";
//========== Login View =========>
export const formErrorMessage = document.querySelector(".login-error-message");
export const formUsernameInput = document.querySelector("#username-input");
export const formPasswordInput = document.querySelector("#password-input");
export const formLoginButton = document.querySelector(".login-button");
export const loginView = document.querySelector(".login-view");
export const dashboard = document.querySelector(".dashboard-view");
export const searchInput = document.querySelector(".search-input");

export const domRender = (user, roomData, bookingData) => {
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
                <article class="total-spend">
                  <h4>Total Spend: $${user.viewTotalBill(bookingData, roomData)}</h4>
                </article>
                <button type="submit" name="log-Out-button" class="log-Out-button" aria-label="log-out-as-a-customer-or-manager">LOG OUT</button>
           </div>
          </section>
          </div>
           <label tabindex="0" for="search-input">Search:</label>
            <input id="search-input" type="date"  aria-label="search-field-for-rooms-or-bookings-input" placeholder="search by date"></input>-
        </header>
`;

}