webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(43);

var _App = __webpack_require__(120);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var asset = 0;
var contentNode = document.getElementById("contents");

var IssueRow = function IssueRow(props) {
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      null,
      props.issue.category
    ),
    React.createElement(
      'td',
      null,
      props.issue.budget
    ),
    React.createElement(
      'td',
      null,
      props.issue.flow
    ),
    React.createElement(
      'td',
      null,
      props.issue.budget - props.issue.flow
    )
  );
};
function BudgetTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return React.createElement(IssueRow, { key: issue.id, issue: issue });
  });
  return React.createElement(
    'div',
    { className: 'form-group', style: { margin: "2%", border: "3px solid white" } },
    React.createElement(
      'table',
      { className: 'table table-striped table-dark', style: { float: "left" } },
      React.createElement(
        'thead',
        { className: 'thead-dark' },
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'Category'
          ),
          React.createElement(
            'th',
            null,
            'Budget'
          ),
          React.createElement(
            'th',
            null,
            'Flow'
          ),
          React.createElement(
            'th',
            null,
            'Balance'
          )
        )
      ),
      React.createElement(
        'tbody',
        null,
        issueRows
      )
    )
  );
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
    'table',
    { style: { width: "100px", margin: "auto" }, className: 'table table-light striped-table' },
    React.createElement(
      'thead',
      { className: 'text-white', style: { backgroundColor: "darkGreen" } },
      React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          null,
          'Budget'
        ),
        React.createElement(
          'th',
          null,
          'Income'
        ),
        React.createElement(
          'th',
          null,
          'Outflow'
        ),
        React.createElement(
          'th',
          null,
          'Balance'
        ),
        React.createElement(
          'th',
          null,
          'Savings'
        )
      )
    ),
    React.createElement(
      'tbody',
      { className: 'table-dark' },
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          budget
        ),
        React.createElement(
          'td',
          null,
          props.asset
        ),
        React.createElement(
          'td',
          null,
          spent
        ),
        React.createElement(
          'td',
          null,
          props.asset - budget
        ),
        React.createElement(
          'td',
          null,
          savings
        )
      )
    )
  );
}

var BudgetAdd = function (_React$Component) {
  _inherits(BudgetAdd, _React$Component);

  function BudgetAdd() {
    _classCallCheck(this, BudgetAdd);

    var _this = _possibleConstructorReturn(this, (BudgetAdd.__proto__ || Object.getPrototypeOf(BudgetAdd)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(BudgetAdd, [{
    key: 'handleSubmit',
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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: { width: "100%", marginTop: "3%" } },
        React.createElement(
          'form',
          { name: 'BudgetAdd', onSubmit: this.handleSubmit },
          React.createElement(
            'div',
            { className: 'form-row' },
            React.createElement(
              'div',
              { className: 'col-md-4 mb-3' },
              React.createElement('input', { className: 'form-control', type: 'text', name: 'category', placeholder: 'Category' })
            ),
            React.createElement(
              'div',
              { className: 'col-md-4 mb-3' },
              React.createElement('input', { className: 'form-control', type: 'number', name: 'budget', placeholder: 'Budget (*Optional*)' })
            ),
            React.createElement(
              'div',
              { className: 'col-md-3 mb-3', style: { float: "left" } },
              React.createElement('input', { className: 'form-control', style: { width: "100%", float: "left" }, type: 'number', name: 'flow', placeholder: 'Out-flow' })
            ),
            React.createElement(
              'div',
              { className: 'col ' },
              React.createElement(
                'button',
                { className: 'form-control text-white btn-success', style: { backgroundColor: "darkGreen", border: "1px solid white", float: "right", width: "100%", margin: "auto" } },
                'Add'
              )
            )
          )
        )
      );
    }
  }]);

  return BudgetAdd;
}(React.Component);

var Navbar = function (_React$Component2) {
  _inherits(Navbar, _React$Component2);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'nav',
        { className: 'sticky-top navbar navbar-expand navbar-dark bg-dark' },
        React.createElement(
          'div',
          { className: 'nav navbar-nav' },
          React.createElement(
            'a',
            { className: 'btn btn-success', href: '#/', style: { marginRight: "1vh" } },
            'Home',
            React.createElement(
              'span',
              { className: 'sr-only' },
              '(current)'
            )
          ),
          React.createElement(
            'a',
            { className: 'btn btn-success', href: '#/reports' },
            'Reports',
            React.createElement(
              'span',
              { className: 'sr-only' },
              '(current)'
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(React.Component);

var Jumbo = function (_React$Component3) {
  _inherits(Jumbo, _React$Component3);

  function Jumbo() {
    _classCallCheck(this, Jumbo);

    return _possibleConstructorReturn(this, (Jumbo.__proto__ || Object.getPrototypeOf(Jumbo)).apply(this, arguments));
  }

  _createClass(Jumbo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'jumbotron', style: { margin: "auto", padding: "5%" } },
        React.createElement(
          'div',
          { className: 'container', style: { border: "1px solid black", borderStyle: "dotted", padding: "5%", backgroundColor: "darkGreen", color: "white" } },
          React.createElement(
            'h1',
            { className: 'display-3' },
            'My Budget'
          ),
          React.createElement(
            'p',
            { className: 'lead' },
            'Your Budgeting Calculator'
          ),
          React.createElement('hr', { className: 'my-2', style: { border: "1px white dotted" } }),
          React.createElement(
            'p',
            { className: 'lead', style: { paddingTop: "6px" } },
            React.createElement(
              'a',
              { className: 'btn btn-success btn-lg', href: '#/reports', role: 'button' },
              'Jump to My Reports'
            )
          )
        )
      );
    }
  }]);

  return Jumbo;
}(React.Component);

var IncomeAdd = function (_React$Component4) {
  _inherits(IncomeAdd, _React$Component4);

  function IncomeAdd() {
    _classCallCheck(this, IncomeAdd);

    var _this4 = _possibleConstructorReturn(this, (IncomeAdd.__proto__ || Object.getPrototypeOf(IncomeAdd)).call(this));

    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
    return _this4;
  }

  _createClass(IncomeAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.IncomeAdd;
      this.props.createInflow({ income: form.income.value });
      // Clear the form for the next input.
      form.income.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: { width: "50%", paddingTop: "3%", margin: "2% auto", backgroundColor: "greenYellow", border: "3px solid white", borderRadius: "1vh" } },
        React.createElement(
          'form',
          { name: 'IncomeAdd', onSubmit: this.handleSubmit },
          React.createElement('input', { style: { width: "90%", margin: "auto" }, className: 'form-control', type: 'text', name: 'income', placeholder: 'Income' }),
          React.createElement(
            'button',
            { style: { width: "auto", margin: "3% auto", backgroundColor: "darkGreen" }, className: 'form-control btn-success' },
            'Add'
          )
        )
      );
    }
  }]);

  return IncomeAdd;
}(React.Component);

var IssueList = function (_React$Component5) {
  _inherits(IssueList, _React$Component5);

  function IssueList() {
    _classCallCheck(this, IssueList);

    var _this5 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

    _this5.state = { issues: [], asset: -1 };

    _this5.enterInfo = _this5.enterInfo.bind(_this5);
    _this5.createInflow = _this5.createInflow.bind(_this5);
    return _this5;
  }

  _createClass(IssueList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this6 = this;

      // Note: React Router automatically adds a "location" property to a react
      //       object's "props". The object that the "location" property refers
      //       to also has a "search" property which is the query string of the
      //       URL, including the '?' character  -  which is why we do not need
      //       to add it to the string in the `fetch()` call.
      fetch('/api/SaveMe' + this.props.location.search).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log("Total count of records:", data._metadata.total_count);
            _this6.setState({ issues: data.assets });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch issues:" + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }
  }, {
    key: 'update',
    value: function update(newIssue) {
      fetch('/api/SaveMe', {
        method: 'POST',
        body: JSON.stringify(newIssue),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res;
      }).catch(function (err) {
        return err;
      });
    }
  }, {
    key: 'enterInfo',
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
      this.update(newIssue);
    }
  }, {
    key: 'createInflow',
    value: function createInflow(newFlow) {
      var assets = this.state.asset;
      if (isNaN(parseInt(newFlow.income))) {
        return;
      }
      var total = assets + parseInt(newFlow.income);
      this.setState({ asset: total });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'bg-success' },
        React.createElement(Navbar, null),
        React.createElement(
          'div',
          { className: 'container', style: { margin: "2% auto" } },
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col', style: { backgroundColor: "lightGreen", border: "3px solid white", borderRadius: "3vh" } },
              React.createElement(BudgetTable, { issues: this.state.issues })
            ),
            React.createElement(
              'div',
              { className: 'col', style: { margin: "auto" } },
              React.createElement(BalanceTable, { asset: this.state.asset, issues: this.state.issues }),
              React.createElement(IncomeAdd, { createInflow: this.createInflow })
            )
          )
        ),
        React.createElement('div', { style: { clear: "both" } }),
        React.createElement(
          'div',
          { className: 'container', style: { margin: "auto" } },
          React.createElement(BudgetAdd, { enterInfo: this.enterInfo })
        ),
        React.createElement(Jumbo, null)
      );
    }
  }]);

  return IssueList;
}(React.Component);

exports.default = IssueList;


IssueList.propTypes = {
  location: React.PropTypes.object.isRequired,
  router: React.PropTypes.object
};
// This renders the JSX component inside the content node:

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(43);

var _App = __webpack_require__(119);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            { className: "btn btn-success", href: "#/budget", style: { marginRight: "1vh" } },
            "Budget",
            React.createElement(
              "span",
              { className: "sr-only" },
              "(current)"
            )
          ),
          React.createElement(
            "a",
            { className: "btn btn-success", href: "#/reports" },
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

var HomePage = function (_React$Component6) {
  _inherits(HomePage, _React$Component6);

  function HomePage() {
    _classCallCheck(this, HomePage);

    var _this6 = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this));

    _this6.state = { issues: [], asset: -1 };

    _this6.enterInfo = _this6.enterInfo.bind(_this6);
    _this6.createInflow = _this6.createInflow.bind(_this6);
    _this6.createOutflow = _this6.createOutflow.bind(_this6);
    return _this6;
  }

  _createClass(HomePage, [{
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
          issues: _this7.state.issues,
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

  return HomePage;
}(React.Component);

// This renders the JSX component inside the content node:


exports.default = HomePage;
ReactDOM.render(React.createElement(HomePage, null), contentNode);

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(56);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(43);

var _App = __webpack_require__(119);

var _App2 = _interopRequireDefault(_App);

var _App3 = __webpack_require__(120);

var _App4 = _interopRequireDefault(_App3);

var _App5 = __webpack_require__(237);

var _App6 = _interopRequireDefault(_App5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById("contents");

// A simple component to indicate that a page was not found.
var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'p',
    null,
    'Page Not Found'
  );
};

// This defines the main application layout that can be used
// across nested routes. The `props.children` property is received
// by the parent route. See the route definitions below.
var App = function App(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'header' },
      _react2.default.createElement(
        'h1',
        null,
        'Issue Tracker'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/' },
          'Logout'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'contents' },
      props.children
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer' },
      'COMPSCI 326'
    )
  );
};

// For safety, we specify that the prop types received by the
// App component must require a "children" property. If we do
// not include this it will not compile.
App.propTypes = {
  children: _react2.default.PropTypes.object.isRequired
};

// The "routed app" that defines the different routes that
// are supposed in this application. As you can see, If the
// URL path is '/' we will render the IssueList component,
// if the path is '/issues/:id' we render the IssueEdit component,
// and if we get anything else we render the NoMatch view.
// This router uses the "hash history" approach to implement
// single-page apps with multiple views.
var RoutedApp = function RoutedApp() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _App4.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/budget', component: _App2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/reports', component: _App6.default })
  );
};

// This renders the JSX router inside the content node:
_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(56);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var contents = {
  totalIncome: 0,
  totalSpent: 0,
  totalSave: 0
};
var totalIncome = 0;
var totalSpent = 0;
var totalSave = 0;

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-expand navbar-dark bg-dark' },
          _react2.default.createElement(
            'div',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'a',
              { name: '', id: '', className: 'btn btn-primary', href: '#/', role: 'button', style: { marginRight: "1vh" } },
              'Home'
            ),
            _react2.default.createElement(
              'a',
              { name: '', id: '', className: 'btn btn-primary', href: '#/budget', role: 'button' },
              'Budget'
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(_react2.default.Component);

// This grabs the DOM element to be used to mount React components.


var contentNode = document.getElementById("contents");
function Graph(props) {
  var name = props.name;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'table',
      { style: { backgroundColor: "lightBlue", margin: "auto", color: "white" } },
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            { className: 'center', style: { margin: "auto" } },
            _react2.default.createElement(
              'i',
              null,
              'Graph of ',
              name
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement('img', { src: 'https://via.placeholder.com/300', alt: '', style: { maxWidth: "100%", height: "auto" } })
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(Graph, { name: 'Income' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(Graph, { name: 'Outflow' })
          )
        )
      );
    }
  }]);

  return GraphGrid;
}(_react2.default.Component);

function Stats(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'table',
      { className: 'table bg-white' },
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement('th', null),
          _react2.default.createElement(
            'th',
            null,
            'Total Income'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Total Expenditures'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Total Savings'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement('td', null),
          _react2.default.createElement(
            'td',
            null,
            props.totalIncome
          ),
          _react2.default.createElement(
            'td',
            null,
            props.contents.totalSpent
          ),
          _react2.default.createElement(
            'td',
            null,
            props.contents.totalSave
          )
        )
      )
    ),
    _react2.default.createElement(IncomeAdd, { contents: props.contents, createInflow: props.createInflow })
  );
}

var IncomeAdd = function (_React$Component3) {
  _inherits(IncomeAdd, _React$Component3);

  function IncomeAdd() {
    _classCallCheck(this, IncomeAdd);

    var _this3 = _possibleConstructorReturn(this, (IncomeAdd.__proto__ || Object.getPrototypeOf(IncomeAdd)).call(this));

    _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
    return _this3;
  }

  _createClass(IncomeAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.IncomeAdd;
      this.props.createInflow({ income: form.income.value, expense: form.expense.value, save: form.save.value });
      // Clear the form for the next input.
      form.income.value = '';
      form.expense.value = '';
      form.save.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { width: "50%", paddingTop: "3%", margin: "2% auto", backgroundColor: "lightBlue", border: "3px solid white" } },
        _react2.default.createElement(
          'form',
          { name: 'IncomeAdd', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { style: { width: "90%", margin: "auto" }, className: 'form-control', type: 'text', name: 'income', placeholder: 'Income' }),
          _react2.default.createElement('input', { style: { width: "90%", margin: "auto" }, className: 'form-control', type: 'text', name: 'expense', placeholder: 'Expenses' }),
          _react2.default.createElement('input', { style: { width: "90%", margin: "auto" }, className: 'form-control', type: 'text', name: 'save', placeholder: 'Saved' }),
          _react2.default.createElement(
            'button',
            { style: { width: "auto", margin: "3% auto", backgroundColor: "navy" }, className: 'form-control btn-primary' },
            'Add'
          )
        )
      );
    }
  }]);

  return IncomeAdd;
}(_react2.default.Component);

var Jumbo = function (_React$Component4) {
  _inherits(Jumbo, _React$Component4);

  function Jumbo() {
    _classCallCheck(this, Jumbo);

    return _possibleConstructorReturn(this, (Jumbo.__proto__ || Object.getPrototypeOf(Jumbo)).apply(this, arguments));
  }

  _createClass(Jumbo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'jumbotron', style: { marignTop: "5%", marginBottom: "0%", padding: "5%", borderRadius: "1rem", border: "3px groove navy" } },
        _react2.default.createElement(
          'div',
          { className: 'container', style: { border: "1px solid black", borderStyle: "dotted", padding: "5%", backgroundColor: "navy", color: "white" } },
          _react2.default.createElement(
            'h1',
            { className: 'display-3' },
            'My Reports'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lead' },
            'Your personalized financial reports'
          ),
          _react2.default.createElement('hr', { className: 'my-2', style: { border: "1px dotted white" } }),
          _react2.default.createElement(
            'p',
            { className: 'lead', style: { paddingTop: "6px" } },
            _react2.default.createElement(
              'a',
              { className: 'btn btn-primary btn-lg', href: '/view01.html', role: 'button' },
              'Jump to My \'Budget\''
            )
          )
        )
      );
    }
  }]);

  return Jumbo;
}(_react2.default.Component);

var Data = function (_React$Component5) {
  _inherits(Data, _React$Component5);

  function Data() {
    _classCallCheck(this, Data);

    return _possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).apply(this, arguments));
  }

  _createClass(Data, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'table',
          { className: 'bordered-table', style: { border: "1px white dotted", margin: "3% auto" } },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'i',
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Placeholder for reports'
                )
              ),
              _react2.default.createElement('hr', null)
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement('img', { src: 'https://via.placeholder.com/200', alt: '' })
              )
            )
          )
        )
      );
    }
  }]);

  return Data;
}(_react2.default.Component);

var Results = function (_React$Component6) {
  _inherits(Results, _React$Component6);

  function Results() {
    _classCallCheck(this, Results);

    return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
  }

  _createClass(Results, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'b',
          null,
          _react2.default.createElement(
            'i',
            null,
            _react2.default.createElement(
              'u',
              null,
              'Table Of Recorded Purchases'
            )
          )
        ),
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Place of Purchase'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Amount'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Date'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'McDonald\'s'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'i',
                  null,
                  _react2.default.createElement(
                    'b',
                    null,
                    '$4.28'
                  )
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                '3/11/19'
              )
            )
          )
        )
      );
    }
  }]);

  return Results;
}(_react2.default.Component);

var Reports = function (_React$Component7) {
  _inherits(Reports, _React$Component7);

  function Reports() {
    _classCallCheck(this, Reports);

    var _this7 = _possibleConstructorReturn(this, (Reports.__proto__ || Object.getPrototypeOf(Reports)).call(this));

    _this7.state = { contents: [] };
    _this7.createInflow = _this7.createInflow.bind(_this7);
    return _this7;
  }

  _createClass(Reports, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this8 = this;

      setTimeout(function () {
        _this8.setState({
          contents: contents
        });
      }, 500);
    }
  }, {
    key: 'createInflow',
    value: function createInflow(newFlow) {
      var newIssues = this.state.contents;
      if (!isNaN(parseInt(newFlow.income))) {
        newIssues.totalIncome = this.state.contents.totalIncome + parseInt(newFlow.income);
      }if (!isNaN(parseInt(newFlow.expense))) {
        newIssues.totalSpent = this.state.contents.totalSpent + parseInt(newFlow.expense);
      }if (!isNaN(parseInt(newFlow.save))) {
        newIssues.totalSave = this.state.contents.totalSave + parseInt(newFlow.save);
      }

      this.setState({ contents: newIssues });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { backgroundImage: "url('dark-honeycomb.png')" } },
        _react2.default.createElement(
          'div',
          { style: { float: "center", marginLeft: "12%", marginRight: "12%", paddingBottom: "3%", backgroundImage: "require('../images/1200px-Sunset_2007-1.jpg')" } },
          _react2.default.createElement(Nav, null),
          _react2.default.createElement(
            'div',
            { className: 'container', style: { marginTop: "2%" } },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'card', style: { border: "2px groove black", borderRadius: "4px" } },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-body', style: { marginBottom: "5%" } },
                    _react2.default.createElement(Graph, { name: 'Income' }),
                    _react2.default.createElement(
                      'h4',
                      { className: 'card-title', style: { margin: "0 auto", textAlign: "center" } },
                      'Graph #1'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'card-text', style: { margin: "0 auto", textAlign: "center" } },
                      'Graph of Income'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'card', style: { border: "2px groove black" } },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-body', style: { marginBottom: "5%" } },
                    _react2.default.createElement(Graph, { name: 'Expenses' }),
                    _react2.default.createElement(
                      'h4',
                      { className: 'card-title', style: { margin: "0 auto", textAlign: "center" } },
                      'Graph #2'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'card-text', style: { margin: "0 auto", textAlign: "center" } },
                      'Graph of Expenses'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { marginTop: "2%" } },
            _react2.default.createElement(
              'div',
              { className: 'container', style: { marginBottom: "2%" } },
              _react2.default.createElement(
                'div',
                { className: 'row', style: { backgroundColor: "royalBlue", color: "white", borderRadius: "1rem", border: "2px solid white" } },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6' },
                  _react2.default.createElement(
                    'div',
                    null,
                    ' ',
                    _react2.default.createElement(Data, null)
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6' },
                  _react2.default.createElement(
                    'div',
                    { style: { marginTop: "15%" } },
                    _react2.default.createElement(Stats, { contents: this.state.contents, totalIncome: this.state.contents.totalIncome, createInflow: this.createInflow })
                  )
                )
              )
            ),
            _react2.default.createElement(Jumbo, null)
          )
        )
      );
    }
  }]);

  return Reports;
}(_react2.default.Component);

//
// /* IM trying to mske navbar happen


exports.default = Reports;

var Navbar = function (_React$Component8) {
  _inherits(Navbar, _React$Component8);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'sticky-top navbar navbar-expand navbar-dark bg-dark' },
        _react2.default.createElement(
          'div',
          { className: 'nav navbar-nav' },
          _react2.default.createElement(
            'a',
            { className: 'nav-item nav-link active bg-success', href: '#/' },
            'Home',
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              '(current)'
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'nav-item nav-link active bg-success', href: '#/budget' },
            'Budget',
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              '(current)'
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

// This renders the JSX component inside the content node:


_reactDom2.default.render(_react2.default.createElement(Reports, null), contentNode);

/***/ })

},[121]);
//# sourceMappingURL=app.bundle.js.map