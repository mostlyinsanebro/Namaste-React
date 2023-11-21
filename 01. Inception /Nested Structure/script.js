// Creating a nested structure in HTML document using React.

/*
<div id = 'parent>
  <div id = 'child>
      <h1> I am an H1 tag </h1>
  </div>
</div>
*/

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an H1 tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// This line first takes in the heading object as input and then converts in into HTML and then
// puts it up on the HTML page.
