"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
function Graph(props) {
  var name = props.name;
  return React.createElement(
    "span",
    null,
    React.createElement(
      "table",
      { style: { float: "left" } },
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            "Graph of ",
            name
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            React.createElement("img", { src: "https://via.placeholder.com/300", alt: "" })
          )
        )
      )
    )
  );
}

var GraphGrid = function (_React$Component) {
  _inherits(GraphGrid, _React$Component);

  function GraphGrid() {
    _classCallCheck(this, GraphGrid);

    return _possibleConstructorReturn(this, (GraphGrid.__proto__ || Object.getPrototypeOf(GraphGrid)).apply(this, arguments));
  }

  _createClass(GraphGrid, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "span",
        null,
        React.createElement(Graph, { name: "Income" }),
        React.createElement(Graph, { name: "Outflows" })
      );
    }
  }]);

  return GraphGrid;
}(React.Component);

var Stats = function (_React$Component2) {
  _inherits(Stats, _React$Component2);

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

var Data = function (_React$Component3) {
  _inherits(Data, _React$Component3);

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
          "h3",
          null,
          React.createElement(
            "table",
            { className: "bordered-table", style: { border: "1px black solid" } },
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

var Results = function (_React$Component4) {
  _inherits(Results, _React$Component4);

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

var MyComponent = function (_React$Component5) {
  _inherits(MyComponent, _React$Component5);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this));
  }

  _createClass(MyComponent, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(NavBar, null),
        React.createElement(GraphGrid, null),
        React.createElement(Stats, null),
        React.createElement(Data, null),
        React.createElement("div", { style: { "clear": "both" } }),
        React.createElement("hr", null),
        React.createElement(Results, null)
      );
    }
  }]);

  return MyComponent;
}(React.Component);

//
// /* IM trying to mske navbar happen


var Navbar = function (_React$Component6) {
  _inherits(Navbar, _React$Component6);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { className: "sticky-top navbar navbar-expand navbar-dark bg-dark" },
        React.createElement(
          "div",
          { className: "nav navbar-nav" },
          React.createElement(
            "a",
            { className: "nav-item nav-link active bg-success", href: "/index.html" },
            "Home",
            React.createElement(
              "span",
              { className: "sr-only" },
              "(current)"
            )
          ),
          React.createElement(
            "a",
            { className: "nav-item nav-link active bg-success", href: "/view01.html" },
            "Budget",
            React.createElement(
              "span",
              { className: "sr-only" },
              "(current)"
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);