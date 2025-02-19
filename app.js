import React from "react";
import ReactDOM from "react-dom/client";
// React Element
const Heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log("Heading", Heading);
// JSX react Element

// JSX react Component
const ReactComponent = () => (
  <>
    {/* {jsxHeading} */}
    {console.log("this will log in console")}
    {1 + 1111}
    <Title />
    <NormalFunction> </NormalFunction>
    <NormalFunction />
    {NormalFunction()}
  
    <h1 className="jsxClass">ReactComponent</h1>
  </>
);
function NormalFunction() {
  return <h1>NormalFunction</h1>;
}
//console.log("jsxHeading", jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () => {
  return <h1>HeadingComponent</h1>;
};

const Title = function () {
  return <div>NormalFunction in the varible</div>;
};
const HeadingComponent2 = () => (
  <div>
    <h1>HeadingComponent2 Text q</h1>
  </div>
);
const HeadingComponent1 = () => <h1>HeadingComponent1</h1>;

const jsxHeading = (
  <>
    <h1 className="jsxClass">ReactElement</h1>
    <ReactComponent />
  </>
);
//root.render(Heading);
root.render(<ReactComponent />);
// React Element => Object
// React.createElement => Object => root.render convert it into HTMLElement and render into HTML and push into the page
// jsxHeading ==== Heading both will retunn object
// JS engine doen't understant JSX
// Babel is converting JSX to React.creatElement

//JSX Code =>Babel transpiles to => React.createElement => JS Object => HTMLElement(render)

// jsx (transpiled before it reached to the js engine) => PARCEL => BABEL
// Babel is javascript compiler
