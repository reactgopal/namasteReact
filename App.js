import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement = this is create basically object
// when we render this element onto DOM then it's become a html

// React.createElement => object => HTMLElement(render);
// React.createElement => reactElement-js object => HTMLElement(render);

// how to be rendered on DOM => ReactDOM.render

// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Namaste React 🚀"
// );

// JSX = is not html in javascript ,
// JSX = html-like or XML-like syntax
// JSX (transpiled before it reaches the JS engine) - parcel - Babel

// how is this code running?

// JSX => Babel transpiles it to React.createElement => reactElement-js object => HTMLElement(render);
const jsxHeading = (
  <h1 id="heading" className="hello">
    Namaste react using Jsx 🚀
  </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
