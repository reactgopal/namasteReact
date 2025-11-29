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
/*
// react Elements
const Title = () => (
  <h1 id="heading" className="hello">
    Namaste react using Jsx 🚀
  </h1>
);

const numbers = 10000;

// React functional components
const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title> </Title>
    <h1 className="heading">Namaste React functional Component </h1>
  </div>
);
*/
const heading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { id: "heading" }, "heading by createElement 🚀"),
  React.createElement("h2", { id: "heading" }, "Namaste React 🚀"),
  React.createElement("h3", { id: "heading" }, "Namaste React 🚀"),
]);
const HeaderElements = (
  <div className="title">
    <h1>HeaderElements using jsx 🚀</h1>
    <h2>Namaste React 🚀</h2>
    <h3>Namaste React 🚀</h3>
  </div>
);
const HeaderFunComponent = () => (
  <div className="title">
    <h1>heading created by functional components 🚀</h1>
    <h2>Namaste React 🚀</h2>
    {20 + 2000}
    <h3>Namaste React 🚀</h3>
  </div>
);
const HeaderComponent = () => (
  <>
    <div className="header-area">
      <div className="container">
        <div className="header-main">
          <div>
            <h1>LOGO</h1>
          </div>
          <div className="search-container">
            <form>
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
          <div>USER ICON</div>
        </div>
      </div>
    </div>
    {heading}
    {HeaderElements}
    {<HeaderFunComponent />}
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(headingComponent2); // you can not render like this because this is component not react element
// if you render functional component then do this

root.render(<HeaderComponent />);
