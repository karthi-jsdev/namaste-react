// const Heading = React.createElement("h1",{id:"heading"},"Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Heading);
import React  from "react";
import ReactDOM  from "react-dom/client";
const Heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "head-tag" }, "I am h1 Tag"),
    React.createElement("h2", { id: "head-tag" }, "I am h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head-tag" }, "I am h1 Tag"),
    React.createElement("h2", { id: "head-tag" }, "I am h2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);
