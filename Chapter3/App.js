import React from "react";
import ReactDOM from "react-dom"

const heading = React.createElement("h1", {}, "Heading from react");
const heading2 = React.createElement("h2", {}, "Heading2 from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
const subHeading = React.createElement("h2", {}, "This is subheading");

const container = React.createElement("div", { id: "container" }, [
  heading,heading2,
  subHeading,
]);

console.log(heading);
root.render(container);
