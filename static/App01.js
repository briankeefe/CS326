"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var issues = [{
  category: "Food",
  budget: 20,
  flow: 0
}, {
  category: "Gas",
  budget: 20,
  flow: 0
}, {
  category: "Fun",
  budget: 20,
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
        "Your daily budget"
      );
    }
  }]);

  return Filter;
}(React.Component);

var IssueRow = function IssueRow(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.issue.category
    ),
    React.createElement(
      "td",
      null,
      props.issue.budget
    ),
    React.createElement(
      "td",
      null,
      props.issue.flow
    ),
    React.createElement(
      "td",
      null,
      props.issue.budget - props.issue.flow
    )
  );
};
function IssueTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return React.createElement(IssueRow, { key: issue.id, issue: issue });
  });
  return React.createElement(
    "div",
    null,
    React.createElement(
      "table",
      { className: "bordered-table", style: { float: "left" } },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Category"
          ),
          React.createElement(
            "th",
            null,
            "Budget"
          ),
          React.createElement(
            "th",
            null,
            "Flow"
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
        null,
        issueRows
      )
    )
  );
}

function BalanceTable(props) {
  var spent = 0;
  var budget = 0;
  var i = void 0;
  for (i in props.issues) {
    spent += parseInt(props.issues[i].flow);
    budget += parseInt(props.issues[i].budget);
  }
  return React.createElement(
    "table",
    { className: "bordered-table", style: { float: "left" } },
    React.createElement(
      "tbody",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Budget"
        ),
        React.createElement(
          "th",
          null,
          "Income"
        ),
        React.createElement(
          "th",
          null,
          "Outflow"
        ),
        React.createElement(
          "th",
          null,
          "Balance"
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          budget
        ),
        React.createElement(
          "td",
          null,
          props.asset
        ),
        React.createElement(
          "td",
          null,
          spent
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
      this.props.createIssue({
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
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { name: "BudgetAdd", onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "category", placeholder: "Category" }),
          React.createElement("input", { type: "number", name: "budget", placeholder: "Budget" }),
          React.createElement("input", { type: "number", name: "flow", placeholder: "Flow" }),
          React.createElement(
            "button",
            null,
            "Add"
          )
        )
      );
    }
  }]);

  return BudgetAdd;
}(React.Component);

var IncomeAdd = function (_React$Component3) {
  _inherits(IncomeAdd, _React$Component3);

  function IncomeAdd() {
    _classCallCheck(this, IncomeAdd);

    var _this3 = _possibleConstructorReturn(this, (IncomeAdd.__proto__ || Object.getPrototypeOf(IncomeAdd)).call(this));

    _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
    return _this3;
  }

  _createClass(IncomeAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.IncomeAdd;
      this.props.createInflow({ income: form.income.value });
      // Clear the form for the next input.
      form.income.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { name: "IncomeAdd", onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "income", placeholder: "Income" }),
          React.createElement(
            "button",
            null,
            "Add"
          )
        )
      );
    }
  }]);

  return IncomeAdd;
}(React.Component);

var IssueList = function (_React$Component4) {
  _inherits(IssueList, _React$Component4);

  function IssueList() {
    _classCallCheck(this, IssueList);

    var _this4 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

    _this4.state = { issues: [], asset: -1 };

    _this4.createIssue = _this4.createIssue.bind(_this4);
    _this4.createInflow = _this4.createInflow.bind(_this4);
    return _this4;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this5 = this;

      setTimeout(function () {
        _this5.setState({
          issues: issues,
          asset: asset
        });
      }, 500);
    }
  }, {
    key: "createIssue",
    value: function createIssue(newIssue) {
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
      newIssues.push(newIssue);
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
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "My Budget"
        ),
        React.createElement(Filter, null),
        React.createElement("hr", null),
        React.createElement(IssueTable, { issues: this.state.issues }),
        React.createElement("span", { style: { width: "10px" } }),
        React.createElement(BalanceTable, { asset: this.state.asset, issues: this.state.issues }),
        React.createElement(IncomeAdd, { createInflow: this.createInflow }),
        React.createElement("div", { style: { clear: "both" } }),
        React.createElement(BudgetAdd, { createIssue: this.createIssue })
      );
    }
  }]);

  return IssueList;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(IssueList, null), contentNode);