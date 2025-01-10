import { createElement } from "react";
import ReactDOM from "react-dom";

const heading = createElement(
  "h3",
  {},
  "old method of creating heading using createElement"
);
const heading2 = <h1>Hello from JSX</h1>; //this is react element

const HeaderComponent = () => {
  //this is a function component
  return <h1>Header component</h1>;
};

// const container = createElement("div", { id: "container" }, [
//   heading,
//   heading2,
// ]);

const Container = function () {
  return (
    <div>
      {/* we can call function component inside JSX */}
      <HeaderComponent />
      {HeaderComponent()}

      {/* we can call react element like this */}
      {heading}
      <h1>Hello from container jsx</h1>
      <h2>This is heading 2</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
// root.render(heading2);   //render react element
root.render(<Container />); //render react component
