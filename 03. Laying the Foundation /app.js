import React from "react";
import ReactDOM from "react-dom/client";

// jsx => babel transpiles it to React.createElement => React => ReactElement => HTMLElement(render()).

// Code to add a tag or img to root element
// <a href="https://www.google.com">Google Link</a>
// <img src="https://reactjs.org/logo-og.png" alt="React Image" />

// babel is used by parcel to convert jsx to code which react understands.
// use camelCase in jsx.
//. use () for multi lines in jsx.

const title = <h1>This is the Title!</h1>;

const headingElement = (
  <div id="container">
    {title}
    <h1> Namaste from Functional Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingElement);
// This line replaces all the elements that are previously in the root element.

// Note -> A React element can be converted to a React Component in the following way.
// const heading = <h1> Abhinav </h1>; // React Element

// const Heading = ()=> {
//  return <h1> Abhinav </h1>;
//};

// 1. Component in a react element - done

/*
const HeadingComponent = () => (
  <div id="container">
    <h1> Namaste from Functional Component 🚀</h1>
  </div>
);

const title = (
  <h1>
    This is the Title!
    <HeadingComponent />
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
*/

// 2. Component in a component - done

/*
const HeadingComponent = () => (
  <div id="container">
    <h1> Namaste from Functional Component 🚀</h1>
  </div>
);


const Title = () => (
  <h1>
    This is the Title!
    <HeadingComponent />
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);
*/

// 3. Element in a component. - done

/*
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1> Namaste from Functional Component 🚀</h1>
  </div>
);

const title = <h1>This is the Title!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
*/

// 4. We can render element in a React element - done

/*
const title = <h1>This is the Title!</h1>;

const headingElement = (
  <div id="container">
    {title}
    <h1> Namaste from Functional Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingElement);
*/
