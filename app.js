// var GroceryList =()=>(<ul><li>Red Bul</li><li>Ben and Jerrys</li></ul>);

// ReactDOM.render(<GroceryList />, document.getElementById("app"))

var GroceryList = function GroceryList() {
  return React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "Red Bul"
    ),
    React.createElement(
      "li",
      null,
      "Ben and Jerrys"
    )
  );
};

ReactDOM.render(React.createElement(GroceryList, null), document.getElementById("app"));