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

const elem = <span>React elements</span>;
// react Elements
const Title = () => (
  <h1 id="heading" className="hello">
    {elem} 
    <br />
    Namaste react using Jsx 🚀
    <br />
  </h1>
);

const numbers = 10000;

// React functional components
const HeadingComponent = () => (
  <div className="container">
    <Title />
    <h2>{numbers}</h2>
    <h2>{100 + 200}</h2>
    <h1 className="heading">Namaste React functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(headingComponent2); // you can not render like this because this is component not react element
// if you render functional component then do this

root.render(<HeadingComponent />);
