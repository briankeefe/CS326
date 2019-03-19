const issues = [
  {
    category: "Savings",
    budget: 0,
    flow: 0
  },
  {
    category: "Food",
    budget: 0,
    flow: 0
  },
  {
    category: "Gas",
    budget: 0,
    flow: 0
  },
  {
    category: "Fun",
    budget: 0,
    flow: 0,
  },
  {
    category: "Rent",
    budget: 0,
    flow: 0
  },
  {
    category: "Emergency",
    budget: 0,
    flow: 0
  }
];

const asset = 0;
var contentNode = document.getElementById("contents");

class Filter extends React.Component {
  render() {
    return <div>Your Monthly Money Planner</div>;
  }
}
const IssueRow = (props) => (
  <tr>
    <td>{props.issue.category}</td>
    <td>{props.issue.budget}</td>
    <td>{props.issue.flow}</td>
    <td>{props.issue.budget - props.issue.flow}</td>
  </tr>
);
function IssueTable(props) {
  const issueRows = props.issues.map(issue => (
    <IssueRow key={issue.id} issue={issue} />
  ));
  return (
    <div class="form-group">
      <table className="table table-striped table-dark" style={{float: "left"}}>
        <thead className="thead-dark">
          <tr>
            <th>Category</th>
            <th>Budget</th>
            <th>Flow</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>  
    </div>
  );
}

function BalanceTable(props) {
  let spent = 0;
  let budget = 0;
  let savings = 0;
  let i;
  for(i in props.issues){
    spent += parseInt(props.issues[i].flow);
    budget += parseInt(props.issues[i].budget);
    if(props.issues[i].category === "Savings"){
      savings += parseInt(props.issues[i].budget);
    }
  }
  return (
    <table className="table table-light bordered-table">
      <thead className="thead-dark">
        <tr>
          <th>Budget</th>
          <th>Income</th>
          <th>Outflow</th>
          <th>Balance</th>
          <th>Savings</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{budget}</td>
          <td>{props.asset}</td>
          <td>{spent}</td>
          <td>{props.asset-budget}</td>
          <td>{savings}</td>
        </tr>
      </tbody>
    </table>
  );
}

class BudgetAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.BudgetAdd;
    this.props.enterInfo({
      category: form.category.value,
      budget: form.budget.value,
      flow: parseInt(form.flow.value),
    });
    // Clear the form for the next input.
    form.budget.value = '';
    form.flow.value = '';
  }

  render() {
    return (
      <div>
        <form name="BudgetAdd" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <input className="form-control" type="text" name="category" placeholder="Category" />
            </div>
            <div className="col-md-4 mb-3">
              <input className="form-control" type="number" name="budget" placeholder="Budget (*Optional*)" />
            </div>
            <div className="col-md-4 mb-3">
              <input className="form-control" type="number" name="flow" placeholder="Out-flow" />
            </div>
            <button className="form-control">Add</button>
          </div>
          
        </form>
      </div>
    );
  }
}

class IncomeAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.IncomeAdd;
    this.props.createInflow({income: form.income.value});
    // Clear the form for the next input.
    form.income.value = '';
  }

  render() {
    return (
      <div>
        <form name="IncomeAdd" onSubmit={this.handleSubmit}>
          <input className="form-control" type="text" name="income" placeholder="Income" />
          <button className="form-control">Add</button>
        </form>
      </div>
    );
  }
}

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [], asset: -1 };

    this.enterInfo = this.enterInfo.bind(this);
    this.createInflow = this.createInflow.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        issues: issues,
        asset: asset
      });
    }, 500);
  }

  enterInfo(newIssue) {
    const newIssues = this.state.issues.slice();
    if(isNaN(parseInt(newIssue.flow))){
      newIssue.flow = 0;
    }
    let i;
    for (i in newIssues) {
      if(newIssues[i].category === newIssue.category){
        if(newIssues[i].flow === undefined){
          newIssues[i].flow = parseInt(newIssue.flow);
        }else{
          newIssues[i].flow += parseInt(newIssue.flow);
        }
        if(isNaN(parseInt(newIssue.budget))){
        }else{
          newIssues[i].budget = newIssue.budget;
        }
        this.setState({ issues: newIssues });
        return;
      }
    }
    if(!isNaN(parseInt(newIssue.budget))){
      newIssues.push(newIssue);
    }
    this.setState({ issues: newIssues });
  }

  createInflow(newFlow) {
    let assets = this.state.asset;
    if(isNaN(parseInt(newFlow.income))){
      return;
    }
    let total = assets + parseInt(newFlow.income);
    this.setState({ asset: total});
  }

  render() {
    return (
      <div>
        <h1>My Budget</h1>
        <Filter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <IncomeAdd createInflow={this.createInflow} />
        <BalanceTable asset={this.state.asset} issues={this.state.issues}/>
        <div style={{clear: "both"}}/>
        <hr/>
        <BudgetAdd enterInfo={this.enterInfo} />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<IssueList />, contentNode);
