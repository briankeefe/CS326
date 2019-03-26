"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var issues = [{
  category: "Savings",
  budget: 0,
  flow: 0
}, {
  category: "Food",
  budget: 0,
  flow: 0
}, {
  category: "Gas",
  budget: 0,
  flow: 0
}, {
  category: "Fun",
  budget: 0,
  flow: 0
}, {
  category: "Rent",
  budget: 0,
  flow: 0
}, {
  category: "Emergency",
  budget: 0,
  flow: 0
}];

var asset = 0;
var contentNode = document.getElementById("contents");

var Filter = function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter() {
    _classCallCheck(this, Filter);

    return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).apply(this, arguments));
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Your Monthly Money Planner"
      );
    }
  }]);

  return Filter;
}(React.Component);

var IssueRow = function IssueRow(props) {
  return React.createElement("tr", null);
};
function BudgetTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return React.createElement(IssueRow, { key: issue.id, issue: issue });
  });
  return React.createElement("div", { className: "form-group", style: { margin: "2%" } });
}
function BalanceTable(props) {
  var spent = 0;
  var budget = 0;
  var savings = 0;
  var i = void 0;
  for (i in props.issues) {
    spent += parseInt(props.issues[i].flow);
    budget += parseInt(props.issues[i].budget);
    if (props.issues[i].category === "Savings") {
      savings += parseInt(props.issues[i].budget);
    }
  }
  return React.createElement(
    "table",
    { style: { width: "100px", margin: "2%", marginLeft: "2%", float: "center" }, className: "table table-light striped-table" },
    React.createElement(
      "thead",
      { className: "text-white", style: { backgroundColor: "#4d4d4d" } },
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Income"
        ),
        React.createElement(
          "th",
          null,
          "Balance"
        )
      )
    ),
    React.createElement(
      "tbody",
      { className: "table-dark" },
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          props.asset
        ),
        React.createElement(
          "td",
          null,
          props.asset - budget
        )
      )
    )
  );
}

var BudgetAdd = function (_React$Component2) {
  _inherits(BudgetAdd, _React$Component2);

  function BudgetAdd() {
    _classCallCheck(this, BudgetAdd);

    var _this2 = _possibleConstructorReturn(this, (BudgetAdd.__proto__ || Object.getPrototypeOf(BudgetAdd)).call(this));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(BudgetAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.BudgetAdd;
      this.props.enterInfo({
        category: form.category.value,
        budget: form.budget.value,
        flow: parseInt(form.flow.value)
      });
      // Clear the form for the next input.
      form.budget.value = '';
      form.flow.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null);
    }
  }]);

  return BudgetAdd;
}(React.Component);

var Navbar = function (_React$Component3) {
  _inherits(Navbar, _React$Component3);

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
            { className: "btn btn-success", href: "/view01.html" },
            "Budget",
            React.createElement(
              "span",
              { className: "sr-only" },
              "(current)"
            )
          ),
          React.createElement(
            "a",
            { className: "btn btn-success", href: "/view02.html" },
            "Reports",
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

//incomeAdd


var IncomeAdd = function (_React$Component4) {
  _inherits(IncomeAdd, _React$Component4);

  function IncomeAdd() {
    _classCallCheck(this, IncomeAdd);

    var _this4 = _possibleConstructorReturn(this, (IncomeAdd.__proto__ || Object.getPrototypeOf(IncomeAdd)).call(this));

    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
    return _this4;
  }

  _createClass(IncomeAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.IncomeAdd;

      this.props.createInflow({ income: form.income.value });
      //this.props.createOutflow({income: form.spend.value});

      // Clear the form for the next input.
      form.income.value = '';
      // form.spend.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return (
        // let in this button is income

        React.createElement(
          "div",
          { style: { position: "static", top: "10rem", left: "-25rem", float: "left", width: "60%", marginLeft: "20%", marginTop: "3%" } },
          React.createElement(
            "form",
            { name: "IncomeAdd", onSubmit: this.handleSubmit },
            React.createElement("input", { className: "form-control", type: "text", name: "income", placeholder: "Income" }),
            React.createElement(
              "button",
              { className: "form-control btn-primary" },
              "Quick Add"
            )
          )
        )
      );
    }
  }]);

  return IncomeAdd;
}(React.Component);
//incomesubtract


var IncomeSubtract = function (_React$Component5) {
  _inherits(IncomeSubtract, _React$Component5);

  function IncomeSubtract() {
    _classCallCheck(this, IncomeSubtract);

    var _this5 = _possibleConstructorReturn(this, (IncomeSubtract.__proto__ || Object.getPrototypeOf(IncomeSubtract)).call(this));

    _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
    return _this5;
  }

  _createClass(IncomeSubtract, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.IncomeSubtract;

      this.props.createOutflow({ spend: form.spend.value });
      // Clear the form for the next input.
      form.spend.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { style: { position: "static", top: "10rem", left: "-25rem", float: "left", width: "60%", marginLeft: "20%", marginTop: "3%" } },
        React.createElement(
          "form",
          { name: "IncomeSubtract", onSubmit: this.handleSubmit },
          React.createElement("input", { className: "form-control", type: "text", name: "spend", placeholder: "Spend" }),
          React.createElement(
            "button",
            { className: "form-control btn-primary" },
            "Quick Spend"
          )
        )
      );
    }
  }]);

  return IncomeSubtract;
}(React.Component);

var IssueList = function (_React$Component6) {
  _inherits(IssueList, _React$Component6);

  function IssueList() {
    _classCallCheck(this, IssueList);

    var _this6 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

    _this6.state = { issues: [], asset: -1 };

    _this6.enterInfo = _this6.enterInfo.bind(_this6);
    _this6.createInflow = _this6.createInflow.bind(_this6);
    _this6.createOutflow = _this6.createOutflow.bind(_this6);
    return _this6;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this7 = this;

      setTimeout(function () {
        _this7.setState({
          issues: issues,
          asset: asset
        });
      }, 500);
    }
  }, {
    key: "enterInfo",
    value: function enterInfo(newIssue) {
      var newIssues = this.state.issues.slice();
      if (isNaN(parseInt(newIssue.flow))) {
        newIssue.flow = 0;
      }
      var i = void 0;
      for (i in newIssues) {
        if (newIssues[i].category === newIssue.category) {
          if (newIssues[i].flow === undefined) {
            newIssues[i].flow = parseInt(newIssue.flow);
          } else {
            newIssues[i].flow += parseInt(newIssue.flow);
          }
          if (isNaN(parseInt(newIssue.budget))) {} else {
            newIssues[i].budget = newIssue.budget;
          }
          this.setState({ issues: newIssues });
          return;
        }
      }
      if (!isNaN(parseInt(newIssue.budget))) {
        newIssues.push(newIssue);
      }
      this.setState({ issues: newIssues });
    }
  }, {
    key: "createInflow",
    value: function createInflow(newFlow) {
      var assets = this.state.asset;

      if (isNaN(parseInt(newFlow.income))) {
        return;
      }

      var total = assets + parseInt(newFlow.income);

      this.setState({ asset: total });
      //this.setState({ asset: total2})
    }
  }, {
    key: "createOutflow",
    value: function createOutflow(newFlow) {
      var assets = this.state.asset;

      if (isNaN(parseInt(newFlow.spend))) {
        return;
      }

      var total = assets - parseInt(newFlow.spend);
      this.setState({ asset: total });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "bg-success", style: { paddingBottom: "2%", height: "100vh" } },
        React.createElement(Navbar, null),
        React.createElement(
          "div",
          { style: { width: "400px", float: "center", marginTop: "2%", margin: "auto", paddingTop: "2%" } },
          React.createElement(
            "div",
            { style: { marginLeft: "27%" } },
            React.createElement(BalanceTable, { asset: this.state.asset, issues: this.state.issues })
          ),
          React.createElement(
            "div",
            { className: "card", style: { marginTop: "10%", padding: "1vh" } },
            React.createElement(
              "div",
              { className: "card-body" },
              React.createElement(IncomeAdd, { createInflow: this.createInflow }),
              React.createElement(IncomeSubtract, { createOutflow: this.createOutflow })
            )
          )
        ),
        React.createElement("div", { style: { clear: "both" } }),
        React.createElement(BudgetAdd, { enterInfo: this.enterInfo })
      );
    }
  }]);

  return IssueList;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(IssueList, null), contentNode);