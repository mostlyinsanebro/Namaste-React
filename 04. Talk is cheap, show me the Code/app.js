// Episode 4 Code

import React from "react";
import ReactDOM from "react-dom/client";

// We are going to build a food ordering app now. For that, the first phase is to plan the app.
// What all components are we going to have in the app and how do we place them on the webpage. - ex. in notes

/*
* Header
  - Logo
  - NavBar
* Body
 - Search
 - CardContainer
   - Restaurant Cards 
      - name
      - cuisine, star rating and ETA.
* Footer
 - Copyright
 - Links
 - Address
*/

// Now, we are going to code it.

// Create the header
const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Address</li>
          <li>
            <img
              className="cart-logo"
              src="https://freepngimg.com/thumb/categories/1325.png"
              alt="Cart Image"
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="res-card">
      <h3 className="res-name">Punjabi Angeethi</h3>
    </div>
  );
};
// Creating the body functional component now
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <CardContainer />
      </div>
    </div>
  );
};
// Create an AppLayout in which all the components will be there.
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
