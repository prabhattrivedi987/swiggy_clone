const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
<div>
  <div>
    <h1>I am H1 tag</h1>
  </div>
</div>
*/

const Parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  "hello from parent",
  React.createElement(
    "div",
    { id: "child1" },
    "Hello from first Child",
    React.createElement("h1", { id: "child2" }, "Hello from h1 Tag")
  )
);

/*
<div>
  <div>
    <h1>I am H1 tag</h1>
    <h2>I am H2</h2>
  </div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am h1 tag"),
    React.createElement("h2", { id: "h2" }, "I am h2 tag"),
  ])
);

root.render(parent);
//this render will replace all the tag from the "root"
