const issues = [
  {
    category: "Food",
    budget: 20,
    flow: 0
  },
  {
    category: "Gas",
    budget: 20,
    flow: 0
  },
  {
    category: "Fun",
    budget: 20,
    flow: 0,
  }
];

const asset = 0;
var contentNode = document.getElementById("contents");

class Filter extends React.Component {
  render() {
    return <div>Your daily budget</div>;
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
    <div>
      <table className="bordered-table" style={{float: "left"}}>
        <thead>
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
  let i;
  for(i in props.issues){
    spent += parseInt(props.issues[i].flow);
    budget += parseInt(props.issues[i].budget);
  }
  return (
    <table className="bordered-table" style={{float: "left"}}>
      <tbody>
        <tr>
          <th>Budget</th>
          <th>Income</th>
          <th>Outflow</th>
          <th>Balance</th>
        </tr>
        <tr>
          <td>{budget}</td>
          <td>{props.asset}</td>
          <td>{spent}</td>
          <td>{props.asset-budget}</td>
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
    this.props.createIssue({
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
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="budget" placeholder="Budget" />
          <input type="number" name="flow" placeholder="Flow" />
          <button>Add</button>
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
          <input type="text" name="income" placeholder="Income" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [], asset: -1 };

    this.createIssue = this.createIssue.bind(this);
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

  createIssue(newIssue) {
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
    newIssues.push(newIssue);
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
        <span style={{width: "10px"}}/>
        <BalanceTable asset={this.state.asset} issues={this.state.issues}/>
        <IncomeAdd createInflow={this.createInflow}/>
        <div style={{clear: "both"}}/>
        <BudgetAdd createIssue={this.createIssue} />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<IssueList />, contentNode);
