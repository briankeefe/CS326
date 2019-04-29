webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(44);

var _App = __webpack_require__(120);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById("contents");

var IssueRow = function IssueRow(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      { contentEditable: true },
      props.issue.category
    ),
    _react2.default.createElement(
      'td',
      { contentEditable: true },
      props.issue.budget
    ),
    _react2.default.createElement(
      'td',
      { contentEditable: true },
      props.issue.flow
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.budget - props.issue.flow
    )
  );
};
function BudgetTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return _react2.default.createElement(IssueRow, { key: issue.id, issue: issue });
  });
  return _react2.default.createElement(
    'div',
    { className: 'form-group', style: { margin: "2%", border: "3px solid white" } },
    _react2.default.createElement(
      'table',
      { className: 'table table-striped table-dark', style: { float: "left" } },
      _react2.default.createElement(
        'thead',
        { className: 'thead-dark' },
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'Category'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Budget'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Flow'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Balance'
          )
        )
      ),
      _react2.default.createElement(
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
  return _react2.default.createElement(
    'table',
    { style: { width: "100px", margin: "auto" }, className: 'table table-light striped-table' },
    _react2.default.createElement(
      'thead',
      { className: 'text-white', style: { backgroundColor: "darkGreen" } },
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Budget'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Income'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Outflow'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Balance'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Savings'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      { className: 'table-dark' },
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          budget
        ),
        _react2.default.createElement(
          'td',
          null,
          props.asset
        ),
        _react2.default.createElement(
          'td',
          null,
          spent
        ),
        _react2.default.createElement(
          'td',
          null,
          props.asset - budget
        ),
        _react2.default.createElement(
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
      return _react2.default.createElement(
        'div',
        { style: { width: "100%", marginTop: "3%" } },
        _react2.default.createElement(
          'form',
          { name: 'BudgetAdd', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-4 mb-3' },
              _react2.default.createElement('input', { className: 'form-control', type: 'text', name: 'category', placeholder: 'Category' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-4 mb-3' },
              _react2.default.createElement('input', { className: 'form-control', type: 'number', name: 'budget', placeholder: 'Budget (*Optional*)' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-3 col-md-4 mb-3', style: { float: "left" } },
              _react2.default.createElement('input', { className: 'form-control', style: { width: "100%", float: "left" }, type: 'number', name: 'flow', placeholder: 'Out-flow' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-1 col-md-12 mb-3 ' },
              _react2.default.createElement(
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
}(_react2.default.Component);

var Navbar = function (_React$Component2) {
  _inherits(Navbar, _React$Component2);

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
            { className: 'btn btn-success', href: '#/', style: { marginRight: "1vh" } },
            'Home',
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              '(current)'
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'btn btn-success', href: '#/reports' },
            'Reports',
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

var Jumbo = function (_React$Component3) {
  _inherits(Jumbo, _React$Component3);

  function Jumbo() {
    _classCallCheck(this, Jumbo);

    return _possibleConstructorReturn(this, (Jumbo.__proto__ || Object.getPrototypeOf(Jumbo)).apply(this, arguments));
  }

  _createClass(Jumbo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container', style: { padding: "5%", backgroundColor: "darkGreen", color: "white", border: "3px solid white", borderRadius: "3rem" } },
        _react2.default.createElement(
          'h1',
          { className: 'display-3' },
          'My Budget'
        ),
        _react2.default.createElement(
          'p',
          { className: 'lead' },
          'Your Budgeting Calculator'
        ),
        _react2.default.createElement('hr', { className: 'my-2', style: {} }),
        _react2.default.createElement(
          'p',
          { className: 'lead', style: { paddingTop: "6px" } },
          _react2.default.createElement(
            'a',
            { className: 'btn btn-success btn-lg', href: '#/reports', role: 'button' },
            'Jump to My Reports'
          )
        )
      );
    }
  }]);

  return Jumbo;
}(_react2.default.Component);

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
      return _react2.default.createElement(
        'div',
        { style: { width: "50%", paddingTop: "3%", margin: "2% auto", backgroundColor: "greenYellow", border: "3px solid white", borderRadius: "1vh" } },
        _react2.default.createElement(
          'form',
          { name: 'IncomeAdd', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { style: { width: "90%", margin: "auto" }, className: 'form-control', type: 'text', name: 'income', placeholder: 'Income' }),
          _react2.default.createElement(
            'button',
            { style: { width: "auto", margin: "3% auto", backgroundColor: "darkGreen" }, className: 'form-control btn-success' },
            'Add'
          )
        )
      );
    }
  }]);

  return IncomeAdd;
}(_react2.default.Component);

var IssueList = function (_React$Component5) {
  _inherits(IssueList, _React$Component5);

  function IssueList() {
    _classCallCheck(this, IssueList);

    var _this5 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

    _this5.state = { issues: [], asset: 0 };

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
            _this6.setState({ issues: data.assets, income: data.income });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch issues:" + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });

      fetch('/api/Money').then(function (res) {
        if (res.ok) {
          console.log("Processing Money");
          res.json().then(function (data) {
            _this6.setState({ asset: data.money });
            console.log("Spotting: ", data.money);
          });
        } else {
          alert("Failure to fetch");
        }
      }).catch(function (err) {
        alert("Error in fetching data from the server:", err);
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
    key: 'paid',
    value: function paid(income) {
      var total = parseInt(this.state.asset) + parseInt(income);
      var obj = {
        "money": total
      };
      console.log("here is obj: ", JSON.stringify(obj));
      fetch('/api/Money', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        console.log("RES: ", res);
        return res;
      }).catch(function (err) {
        return err;
      });
      this.setState({ asset: total });
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
          if (isNaN(parseInt(newIssue.budget))) {
            console.log("Not Int");
          } else {
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
      this.paid(newFlow.income);
      console.log("Inflow created for: ", newFlow.income);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'bg-success', style: { backgroundImage: "url('images/dark-honeycomb.png')", backgroundSize: "auto", paddingBottom: "2%", height: "100vh" } },
        _react2.default.createElement(Navbar, null),
        _react2.default.createElement(
          'div',
          { className: 'container', style: { margin: "2% auto" } },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col', style: { backgroundColor: "lightGreen", border: "3px solid white", borderRadius: "3vh" } },
              _react2.default.createElement(BudgetTable, { issues: this.state.issues })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col', style: { margin: "auto" } },
              _react2.default.createElement(
                'div',
                { style: { backgroundColor: "greenYellow", padding: "8px", border: "3px solid white", borderRadius: "3vh" } },
                _react2.default.createElement(BalanceTable, { asset: this.state.asset, issues: this.state.issues })
              ),
              _react2.default.createElement(IncomeAdd, { createInflow: this.createInflow })
            )
          )
        ),
        _react2.default.createElement('div', { style: { clear: "both" } }),
        _react2.default.createElement(
          'div',
          { className: 'container', style: { margin: "auto" } },
          _react2.default.createElement(BudgetAdd, { enterInfo: this.enterInfo })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(Jumbo, null)
        )
      );
    }
  }]);

  return IssueList;
}(_react2.default.Component);

exports.default = IssueList;


IssueList.propTypes = {
  location: _react2.default.PropTypes.object.isRequired,
  router: _react2.default.PropTypes.object
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

var _reactRouter = __webpack_require__(44);

var _App = __webpack_require__(119);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(37);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById("contents");

var Filter = function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter() {
    _classCallCheck(this, Filter);

    return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).apply(this, arguments));
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Your Monthly Money Planner'
      );
    }
  }]);

  return Filter;
}(_react2.default.Component);

var IssueRow = function IssueRow(props) {
  return _react2.default.createElement('tr', null);
};
function BudgetTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return _react2.default.createElement(IssueRow, { key: issue.id, issue: issue });
  });
  return _react2.default.createElement('div', { className: 'form-group', style: { margin: "2%" } });
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
  return _react2.default.createElement(
    'div',
    { style: { textAlign: "center" } },
    _react2.default.createElement(
      'table',
      { style: { width: "100px", margin: "auto", float: "center" }, className: 'table table-light striped-table' },
      _react2.default.createElement(
        'thead',
        { className: 'text-white', style: { backgroundColor: "#4d4d4d" } },
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'Income'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Balance'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        { className: 'table-dark' },
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            props.asset
          ),
          _react2.default.createElement(
            'td',
            null,
            props.asset - budget
          )
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
      return _react2.default.createElement('div', null);
    }
  }]);

  return BudgetAdd;
}(_react2.default.Component);

var Navbar = function (_React$Component3) {
  _inherits(Navbar, _React$Component3);

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
            { className: 'btn btn-success', href: '#/budget', style: { marginRight: "1vh" } },
            'Budget',
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              '(current)'
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'btn btn-success', href: '#/reports' },
            'Reports',
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
    key: 'handleSubmit',
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
    key: 'render',
    value: function render() {
      return (
        // let in this button is income

        _react2.default.createElement(
          'div',
          { style: { position: "static", top: "10rem", left: "-25rem", float: "left", width: "60%", marginLeft: "20%", marginTop: "3%" } },
          _react2.default.createElement(
            'form',
            { name: 'IncomeAdd', onSubmit: this.handleSubmit },
            _react2.default.createElement('input', { className: 'form-control', type: 'text', name: 'income', placeholder: 'Income' }),
            _react2.default.createElement(
              'button',
              { className: 'form-control btn-success' },
              'Quick Add'
            )
          )
        )
      );
    }
  }]);

  return IncomeAdd;
}(_react2.default.Component);
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
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.IncomeSubtract;

      this.props.createOutflow({ spend: form.spend.value });
      // Clear the form for the next input.
      form.spend.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { position: "static", top: "10rem", left: "-25rem", float: "left", width: "60%", marginLeft: "20%", marginTop: "3%" } },
        _react2.default.createElement(
          'form',
          { name: 'IncomeSubtract', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { className: 'form-control', type: 'text', name: 'spend', placeholder: 'Spend' }),
          _react2.default.createElement(
            'button',
            { className: 'form-control btn-success' },
            'Quick Spend'
          )
        )
      );
    }
  }]);

  return IncomeSubtract;
}(_react2.default.Component);

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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this7 = this;

      fetch('/api/Money', {
        method: 'GET'
      }).then(function (res) {
        console.log("Got money app00:");
        res.json().then(function (data) {
          _this7.setState({ asset: data.money });
          console.log(data.money);
        });
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
          if (isNaN(parseInt(newIssue.budget))) {
            var a = void 0;
          } else {
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
    key: 'createInflow',
    value: function createInflow(newFlow) {
      var assets = this.state.asset;

      if (isNaN(parseInt(newFlow.income))) {
        return;
      }

      var total = assets + parseInt(newFlow.income);
      this.money(total);
    }
  }, {
    key: 'money',
    value: function money(cash) {
      var obj = {
        "money": cash
      };
      console.log("here is obj: ", JSON.stringify(obj));
      fetch('/api/Money', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        console.log("RES: ", res);
        return res;
      }).catch(function (err) {
        return err;
      });
      this.setState({ asset: cash });
    }
  }, {
    key: 'createOutflow',
    value: function createOutflow(newFlow) {
      var assets = this.state.asset;

      if (isNaN(parseInt(newFlow.spend))) {
        return;
      }

      var total = assets - parseInt(newFlow.spend);
      this.money(total);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'bg-success', style: { backgroundImage: "url('images/green-wave.png')", backgroundSize: "cover", paddingBottom: "2%", height: "100vh" } },
        _react2.default.createElement(Navbar, null),
        _react2.default.createElement(
          'div',
          { style: { width: "400px", margin: "auto", paddingTop: "2%" } },
          _react2.default.createElement(
            'div',
            { style: { margin: "auto", width: "70%", backgroundColor: "green", color: "white", borderRadius: "1rem", paddingTop: "4px", paddingBottom: "4px" } },
            _react2.default.createElement(BalanceTable, { asset: this.state.asset, issues: this.state.issues, style: {} })
          ),
          _react2.default.createElement(
            'div',
            { className: 'card', style: { marginTop: "10%", padding: "1vh", width: "80%", margin: "auto", borderRadius: "1rem" } },
            _react2.default.createElement(
              'div',
              { className: 'card-body', style: { margin: "auto" } },
              _react2.default.createElement(IncomeAdd, { createInflow: this.createInflow }),
              _react2.default.createElement(IncomeSubtract, { createOutflow: this.createOutflow })
            )
          )
        ),
        _react2.default.createElement('div', { style: { clear: "both" } }),
        _react2.default.createElement(BudgetAdd, { enterInfo: this.enterInfo })
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

// This renders the JSX component inside the content node:


exports.default = HomePage;
_reactDom2.default.render(_react2.default.createElement(HomePage, null), contentNode);

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(37);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(44);

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

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(37);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

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
            { className: 'btn btn-success', href: '#/', style: { marginRight: "1vh", backgroundColor: "royalBlue", border: "1px groove royalBlue", color: "white" } },
            'Home',
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              '(current)'
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'btn btn-success', href: '#/budget', style: { marginRight: "1vh", backgroundColor: "royalBlue", border: "1px groove royalBlue", color: "white" } },
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
  var spent = 0;
  var budget = 0;
  var savings = 0;
  var i = void 0;
  for (i in props.contents) {
    spent += parseInt(props.contents[i].flow);
    budget += parseInt(props.contents[i].budget);
    if (props.contents[i].category === "Savings") {
      savings += parseInt(props.contents[i].budget);
    }
  }
  return _react2.default.createElement(
    'div',
    { style: { padding: "6%", backgroundColor: "navy", color: "white", borderRadius: "3rem", margin: "5% auto" } },
    _react2.default.createElement(
      'table',
      { className: 'table bg-white', style: { borderRadius: ".5rem" } },
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
            spent
          ),
          _react2.default.createElement(
            'td',
            null,
            savings
          )
        )
      )
    ),
    _react2.default.createElement(IncomeAdd, { contents: props.contents, createInflow: props.createInflow })
  );
}

var IncomeAdd = function (_React$Component3) {
  _inherits(IncomeAdd, _React$Component3);

  function IncomeAdd(props) {
    _classCallCheck(this, IncomeAdd);

    var _this3 = _possibleConstructorReturn(this, (IncomeAdd.__proto__ || Object.getPrototypeOf(IncomeAdd)).call(this));

    _this3.createInflow = props.createInflow;
    _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
    return _this3;
  }

  _createClass(IncomeAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.IncomeAdd;
      this.props.createInflow({ income: form.income.value });
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
        { className: 'container', style: { padding: "5%", backgroundColor: "navy", color: "white", borderRadius: "3rem" } },
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
            { className: 'btn btn-primary btn-lg', href: '#/budget', role: 'button' },
            'Jump to My \'Budget\''
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
        { style: { padding: "5%", backgroundColor: "navy", color: "white", borderRadius: "3rem", margin: "5% auto" } },
        _react2.default.createElement(
          'table',
          { className: 'bordered-table', style: { marginLeft: "auto", marginRight: "auto" } },
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

function randQuote() {
  var quotebucket = ["You've got this!", "We believe in you!", "You will meet your goal!", "A dollar a day adds up!", "Have a great day!"];
  var picked = "";
  picked = quotebucket[Math.floor(Math.random() * quotebucket.length)];
  return picked;
}

var Quote = function (_React$Component6) {
  _inherits(Quote, _React$Component6);

  function Quote() {
    _classCallCheck(this, Quote);

    return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).apply(this, arguments));
  }

  _createClass(Quote, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { padding: "1%", backgroundColor: "navy", color: "white", borderRadius: "3rem" } },
        _react2.default.createElement(
          'p',
          { style: { textAlign: "center", paddingTop: "1%" } },
          'Inspirational Quote: " ',
          randQuote(),
          ' "'
        )
      );
    }
  }]);

  return Quote;
}(_react2.default.Component);

var Results = function (_React$Component7) {
  _inherits(Results, _React$Component7);

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

var Reports = function (_React$Component8) {
  _inherits(Reports, _React$Component8);

  function Reports() {
    _classCallCheck(this, Reports);

    var _this8 = _possibleConstructorReturn(this, (Reports.__proto__ || Object.getPrototypeOf(Reports)).call(this));

    _this8.state = { contents: [] };
    _this8.createInflow = _this8.createInflow.bind(_this8);
    return _this8;
  }

  _createClass(Reports, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this9 = this;

      fetch('/api/Money', {
        method: 'GET'
      }).then(function (res) {
        console.log("Got money app00:");
        res.json().then(function (data) {
          _this9.setState({ asset: data.money, contents: data.issues });
          console.log(data.money);
        });
      }).catch(function (err) {
        return err;
      });
    }
  }, {
    key: 'money',
    value: function money(cash) {
      var obj = {
        "money": cash
      };
      console.log("here is obj: ", JSON.stringify(obj));
      fetch('/api/Money', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        console.log("RES: ", res);
        return res;
      }).catch(function (err) {
        return err;
      });
      this.setState({ asset: cash });
    }
  }, {
    key: 'createInflow',
    value: function createInflow(newFlow) {
      var current = this.state.asset;
      if (isNaN(parseInt(newFlow.income))) {
        console.log("ISNAN");
      }
      var totalIncome = this.state.asset + parseInt(newFlow.income);
      this.money(totalIncome);
    }
    //        <div style={{ float: "center", marginLeft: "12%", marginRight: "12%", paddingBottom: "3%", backgroundImage: "require('../images/1200px-Sunset_2007-1.jpg')"}}>
    //../images/dark-honeycomb.png

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'bg-success', style: { backgroundImage: "url('images/blue-wave.png')", backgroundSize: "cover", paddingBottom: "2%" } },
        _react2.default.createElement(Navbar, null),
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
                { className: 'card', style: { borderRadius: "3rem" } },
                _react2.default.createElement(
                  'div',
                  { className: 'card-body', style: { marginBottom: "5%", borderRadius: "3rem" } },
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
                { className: 'card', style: { borderRadius: "3rem" } },
                _react2.default.createElement(
                  'div',
                  { className: 'card-body', style: { marginBottom: "5%", borderRadius: "3rem" } },
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
            { className: 'container', style: { marginBottom: "2%", borderRadius: "3rem" } },
            _react2.default.createElement(
              'div',
              { className: 'row', style: { backgroundColor: "royalBlue", color: "white", borderRadius: "3rem", border: "2px solid white" } },
              _react2.default.createElement(
                'div',
                { className: 'col-md-6', style: { marginBottom: "2%", borderRadius: "3rem" } },
                _react2.default.createElement(
                  'div',
                  { style: {} },
                  _react2.default.createElement(Data, null)
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(Quote, null)
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-6', style: {} },
                _react2.default.createElement(
                  'div',
                  { style: { borderRadius: "3rem" } },
                  _react2.default.createElement(Stats, { contents: this.state.contents, totalIncome: this.state.asset, createInflow: this.createInflow })
                )
              )
            )
          ),
          _react2.default.createElement(Jumbo, null)
        )
      );
    }
  }]);

  return Reports;
}(_react2.default.Component);

// This renders the JSX component inside the content node:


exports.default = Reports;
_reactDom2.default.render(_react2.default.createElement(Reports, null), contentNode);

/***/ })

},[121]);
//# sourceMappingURL=app.bundle.js.map