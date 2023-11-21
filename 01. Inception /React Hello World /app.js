// In this script file, we will write our React.

// First, create an h1 tag with data 'Hello World from React' in it.It will be created using React.createElement()
// createElement() takes three arguments, (tagName,optionsObject,innerHtml of tag)

// The optionsObject takes in attributes of the tag, we can add css to our element using that.
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abhi",
  },
  "Hello World from React!"
);

// The React.createElement() method returns a React element i.e. a JS object which will be then stored in the
// heading variable.This isnot an HTML h1 tag as of yet.
// createElement(type, props, ...children)

console.log(heading);

// Now, create the root and we will render/add all of our data in that root.It will be created using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// createRoot takes in two parameters, domNode(a DOM element) and options.

// root is alos a DOM object.

// Now, add h1 tag to the root.
root.render(heading);

// The render() will take in that js object stored in heading, make the h1 tag out of it and then put it in the root element.
