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
function BudgetTable(props) {
  const issueRows = props.issues.map(issue => (
    <IssueRow key={issue.id} issue={issue} />
  ));
  return (
    <div class="form-group" style={{margin:"2%"}}>
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
    <table style={{ width: "100px", margin: "2%", marginLeft: "2%", float: "left"}} className="table table-light striped-table">
      <thead className="text-white" style={{ backgroundColor: "black"}}> 
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
            <div className="col-md-4 mb-3" style={{float: "left"}}>
              <input className="form-control" style={{width: "80%", float: "left"}} type="number" name="flow" placeholder="Out-flow" />
              <button className="form-control btn-outline-success" style={{ float: "left", width: "15%", marginLeft: "3%" }}>Add</button>
            </div>
            
          </div>
          
        </form>
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props){
    super()
  }
  render() {
    return (
      <nav className="sticky-top navbar navbar-expand navbar-dark bg-dark">
          <div className="nav navbar-nav">
              <a className="nav-item nav-link active bg-success" href="/view02.html">Reports<span className="sr-only">(current)</span></a>
          </div>
      </nav>
    )
  }
}

class Jumbo extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">My Budget</h1>
        <p className="lead">Your personalized financial reports</p>
        <hr className="my-2"/>
        <p className="lead">
          <a className="btn btn-success btn-lg" href="/view02.html" role="button">Jump to My Reports</a>
        </p>
      </div>
    )
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
      <div style={{position: "static", top: "10rem", left: "-25rem", float: "left", width: "60%", marginLeft: "20%", marginTop: "3%"}}>
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
      <div className="bg-success">
        <Navbar/>
        <div style={{width: "600px", float: "left"}}>
          <BudgetTable issues={this.state.issues} />
        </div>
        <div style={{width: "400px", float: "left", marginTop: "2%"}}>
          <BalanceTable asset={this.state.asset} issues={this.state.issues} />
          <IncomeAdd createInflow={this.createInflow} />
        </div>
        <div style={{clear: "both"}}/>
        
        <BudgetAdd enterInfo={this.enterInfo} />
        <Jumbo />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<IssueList />, contentNode);
