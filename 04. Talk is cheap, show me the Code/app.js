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

const cardStyle = {
  backgroundColor: "#f0f0f0",
};

// The inline css can be added in jsx, just create a js object with style properties and give it to the
// style attribute of the div "res-card" container.
const CardContainer = (props) => {
  const { resName, cuisines, stars, time } = props;
  {
    /*In the above line, we are just destructuring the code and the names of variables must be same as passed in the props object.*/
  }
  return (
    <div className="res-card" style={cardStyle}>
      {/* The above liune can also be written as <div className = "res-card" style= {{backgroundColor: "#f0f0f0"}}>
          It means that we are giving js to the style attribute and in that js we are passing a js object in the internal {}
      */}
      <img
        className="res-logo"
        src="data:image/jpeg;base64,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"
        alt="res logo"
      ></img>
      <h3 className="res-name">{resName}</h3>
      <h5>{cuisines}</h5>
      <h5 className="">{stars}</h5>
      <h5>{time}</h5>
    </div>
  );
};
// Creating the body functional component now
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <CardContainer
          resName="Punjabi Angithi"
          cuisines="North Indian, Punjabi, Spicy"
          stars="4.4 ✨"
          time="40 minutes"
        />
        <CardContainer
          resName="Burger King"
          cuisines="Burger, Fast Food"
          stars="4.3 ✨"
          time="20 minutes"
        />
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

// Part-1:-
// In part 1 , we saw how to plan the app, how to make the header component, how to create the card-containetr and then
// add cards inside them using jsx and css.

// In jsx code, the style does not take the code directly, rather it takes in the input as {} js object.

// There are three ways to write css in your code
// 1. Use inline CSS in js file only. - demonstrated above
// 2. use classes and then give style to those classes in .css file
// 3. Use tailwind CSS -> we will learn that later.

// The problem right now is that all the cards as static i.e. hardcoded, we have to make them dynamic now.

// Part-2:-
// We are now going to make the cards as dynamic.

// For achieving this, we will make use of props i.e. properties. props are to functional components what arguments are to functions.
// So, we will pass props to the functional component for passing data dynamically to the card.
// When we add props while calling a functional component in jsx, then React will wrap all of that data in a single object
// and then pass that object to the functional component which can then be used for dynamic data.

// We can also destructure the object on the fly in the functional component like
// const CardContainer = ({resName,cuisines,stars})

// We can also do, const CardContainer = (props) => {
// const {resName,cuisines,stars} = props;
