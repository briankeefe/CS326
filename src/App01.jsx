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
    <table className="bordered-table" style="float:left">
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
      flow: form.flow.value,
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

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };

    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        issues: issues
      });
    }, 500);
  }

  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    if(isNaN(parseInt(newIssue.flow))){
      console.log("Test");
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
        if(newIssue.budget === undefined){
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

  render() {
    return (
      <div>
        <h1>My Budget</h1>
        <Filter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <BudgetAdd createIssue={this.createIssue} />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<IssueList />, contentNode);
