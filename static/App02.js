"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "navbar navbar-expand navbar-dark bg-dark" },
          React.createElement(
            "div",
            { className: "nav navbar-nav" },
            React.createElement(
              "a",
              { name: "", id: "", className: "btn btn-primary", href: "./view01.html", role: "button" },
              "Budget"
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(React.Component);

// This grabs the DOM element to be used to mount React components.


var contentNode = document.getElementById("contents");
function Graph(props) {
  var name = props.name;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "table",
      { style: { backgroundColor: "lightBlue", margin: "auto", color: "white" } },
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            { className: "center", style: { margin: "auto" } },
            React.createElement(
              "i",
              null,
              "Graph of ",
              name
            )
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            React.createElement("img", { src: "https://via.placeholder.com/300", alt: "", style: { maxWidth: "100%", height: "auto" } })
          )
        )
      )
    )
  );
}

var GraphGrid = function (_React$Component2) {
  _inherits(GraphGrid, _React$Component2);

  function GraphGrid() {
    _classCallCheck(this, GraphGrid);

    return _possibleConstructorReturn(this, (GraphGrid.__proto__ || Object.getPrototypeOf(GraphGrid)).apply(this, arguments));
  }

  _createClass(GraphGrid, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-6" },
            React.createElement(Graph, { name: "Income" })
          ),
          React.createElement(
            "div",
            { className: "col-md-6" },
            React.createElement(Graph, { name: "Outflow" })
          )
        )
      );
    }
  }]);

  return GraphGrid;
}(React.Component);

var Stats = function (_React$Component3) {
  _inherits(Stats, _React$Component3);

  function Stats() {
    _classCallCheck(this, Stats);

    return _possibleConstructorReturn(this, (Stats.__proto__ || Object.getPrototypeOf(Stats)).apply(this, arguments));
  }

  _createClass(Stats, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "table",
        null,
        React.createElement(
          "tbody",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("th", null),
            React.createElement(
              "th",
              null,
              "Total Income"
            ),
            React.createElement(
              "th",
              null,
              "Total Expenditures"
            ),
            React.createElement(
              "th",
              null,
              "Total Savings"
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement("td", null),
            React.createElement(
              "td",
              null,
              "Answer"
            ),
            React.createElement(
              "td",
              null,
              "Answer"
            ),
            React.createElement(
              "td",
              null,
              "Answer"
            )
          )
        )
      );
    }
  }]);

  return Stats;
}(React.Component);

var Jumbo = function (_React$Component4) {
  _inherits(Jumbo, _React$Component4);

  function Jumbo() {
    _classCallCheck(this, Jumbo);

    return _possibleConstructorReturn(this, (Jumbo.__proto__ || Object.getPrototypeOf(Jumbo)).apply(this, arguments));
  }

  _createClass(Jumbo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "jumbotron", style: { marignTop: "5%", marginBottom: "0%", padding: "5%", borderRadius: "1rem", border: "3px groove navy" } },
        React.createElement(
          "div",
          { className: "container", style: { border: "1px solid black", borderStyle: "dotted", padding: "5%", backgroundColor: "navy", color: "white" } },
          React.createElement(
            "h1",
            { className: "display-3" },
            "My Reports"
          ),
          React.createElement(
            "p",
            { className: "lead" },
            "Your personalized financial reports"
          ),
          React.createElement("hr", { className: "my-2", style: { border: "1px dotted white" } }),
          React.createElement(
            "p",
            { className: "lead", style: { paddingTop: "6px" } },
            React.createElement(
              "a",
              { className: "btn btn-primary btn-lg", href: "/view01.html", role: "button" },
              "Jump to My 'Budget'"
            )
          )
        )
      );
    }
  }]);

  return Jumbo;
}(React.Component);

var Data = function (_React$Component5) {
  _inherits(Data, _React$Component5);

  function Data() {
    _classCallCheck(this, Data);

    return _possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).apply(this, arguments));
  }

  _createClass(Data, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "table",
          { className: "bordered-table", style: { border: "1px white dotted", margin: "3% auto" } },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "i",
                null,
                React.createElement(
                  "b",
                  null,
                  "Placeholder for reports"
                )
              ),
              React.createElement("hr", null)
            )
          ),
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement("img", { src: "https://via.placeholder.com/200", alt: "" })
              )
            )
          )
        )
      );
    }
  }]);

  return Data;
}(React.Component);

var Results = function (_React$Component6) {
  _inherits(Results, _React$Component6);

  function Results() {
    _classCallCheck(this, Results);

    return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
  }

  _createClass(Results, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "b",
          null,
          React.createElement(
            "i",
            null,
            React.createElement(
              "u",
              null,
              "Table Of Recorded Purchases"
            )
          )
        ),
        React.createElement(
          "table",
          null,
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                null,
                "Place of Purchase"
              ),
              React.createElement(
                "th",
                null,
                "Amount"
              ),
              React.createElement(
                "th",
                null,
                "Date"
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "McDonald's"
              ),
              React.createElement(
                "td",
                null,
                React.createElement(
                  "i",
                  null,
                  React.createElement(
                    "b",
                    null,
                    "$4.28"
                  )
                )
              ),
              React.createElement(
                "td",
                null,
                "3/11/19"
              )
            )
          )
        )
      );
    }
  }]);

  return Results;
}(React.Component);

var MyComponent = function (_React$Component7) {
  _inherits(MyComponent, _React$Component7);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this));
  }

  _createClass(MyComponent, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { style: { float: "center", marginLeft: "12%", marginRight: "12%" } },
        React.createElement(Nav, null),
        React.createElement(
          "div",
          { className: "container", style: { marginTop: "2%" } },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-6" },
              React.createElement(
                "div",
                { className: "card", style: { border: "2px groove black" } },
                React.createElement(
                  "div",
                  { className: "card-body", style: { marginBottom: "5%" } },
                  React.createElement(Graph, { name: "Income" }),
                  React.createElement(
                    "h4",
                    { className: "card-title", style: { margin: "0 auto", textAlign: "center" } },
                    "Graph #1"
                  ),
                  React.createElement(
                    "p",
                    { className: "card-text", style: { margin: "0 auto", textAlign: "center" } },
                    "Graph of Income"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "col-md-6" },
              React.createElement(
                "div",
                { className: "card", style: { border: "2px groove black" } },
                React.createElement(
                  "div",
                  { className: "card-body", style: { marginBottom: "5%" } },
                  React.createElement(Graph, { name: "Expenses" }),
                  React.createElement(
                    "h4",
                    { className: "card-title", style: { margin: "0 auto", textAlign: "center" } },
                    "Graph #2"
                  ),
                  React.createElement(
                    "p",
                    { className: "card-text", style: { margin: "0 auto", textAlign: "center" } },
                    "Graph of Expenses"
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { style: { marginTop: "2%" } },
          React.createElement(
            "div",
            { className: "container", style: { marginBottom: "2%" } },
            React.createElement(
              "div",
              { className: "row", style: { backgroundColor: "royalBlue", color: "white", borderRadius: "1rem", border: "2px solid white" } },
              React.createElement(
                "div",
                { className: "col-md-6" },
                React.createElement(
                  "div",
                  null,
                  " ",
                  React.createElement(Data, null)
                )
              ),
              React.createElement(
                "div",
                { className: "col-md-6" },
                React.createElement(
                  "div",
                  { style: { marginTop: "15%" } },
                  React.createElement(Stats, null)
                )
              )
            )
          ),
          React.createElement(Jumbo, null)
        )
      );
    }
  }]);

  return MyComponent;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);