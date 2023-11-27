import React from "react";
import ReactDOM from "react-dom/client";

// jsx => babel transpiles it to React.createElement => React => ReactElement => HTMLElement(render()).

// Code to add a tag or img to root element
// <a href="https://www.google.com">Google Link</a>
// <img src="https://reactjs.org/logo-og.png" alt="React Image" />

// babel is used by parcel to convert jsx to code which react understands.
// use camelCase in jsx.
//. use () for multi lines in jsx.

const HeadingComponent = () => (
  <div id="container">
    {Title}
    <h1> Namaste from Functional Component 🚀</h1>
  </div>
);

const Title = (
  <h1>
    <HeadingComponent />
    This is the Title!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Title);
// This line replaces all the elements that are previously in the root element.

// Note -> A React element can be converted to a React Component in the following way.
// const heading = <h1> Abhinav </h1>; // React Element

// const Heading = ()=> {
//  return <h1> Abhinav </h1>;
//};

// We can render element in a React element - done
// Component in a react element - done
// component in a component - done
// element in a component. - done
