const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abhi",
  },
  "Hello World from React!"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// 1. Order of the js files in the html file matters. If we call app.js before importing react files to our project
// and then use react in app.js, then the browser will throw error.

// 2. If there exists an HTML tag or multiple tags already in the root element in which we are rendering any tag using render()
// method,then the existing tag will be replaced by the new tag that we pass in the render() method.

// 3. Also, React is a library and not a framework because React can be applied to even a small portion of our webpage.
// So, render() method will only affect the div element with id as 'root', all the other elements will be left untouched.
