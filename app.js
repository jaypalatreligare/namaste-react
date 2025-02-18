const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);
console.log(heading); ///  will return object "heading" is React element or Javascript Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); /// render is responsible for take this onject and put it up convert it into that heading tag and put it up into DOM
