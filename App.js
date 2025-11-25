import React from "react";
import ReactDOM from "react-dom/client";
/**
 * <div class="parent">
 *      <div class="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div class="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 * 
 * ReactElements(object) =>HTML(Browser Understands)
 */




const parent = React.createElement(
    "div",
    { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ])]
);

// jsx

console.log(parent);

// const heading = React.createElement("h1", { id: "heading", xyz: "abc", }, "hello world from react!");


const root = ReactDOM.createRoot(document.getElementById("root"));// created root for react libraries


// root.render(heading); //take a object and converting to h1 tag 
root.render(parent);