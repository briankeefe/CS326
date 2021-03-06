import { Router, Route, hashHistory, withRouter, IndexRoute, Link } from 'react-router';
import IssueList from "./App01.jsx"
import React from 'react'
import ReactDOM from 'react-dom'

var contentNode = document.getElementById("contents");

class Filter extends React.Component {
  render() {
    return <div>Your Monthly Money Planner</div>;
  }
}

const IssueRow = (props) => (
  <tr>

  </tr>
);
function BudgetTable(props) {
  const issueRows = props.issues.map(issue => (
    <IssueRow key={issue.id} issue={issue} />
  ));
  return (
    <div className="form-group" style={{ margin: "2%" }}>

    </div>
  );
}
function BalanceTable(props) {
  let spent = 0;
  let budget = 0;
  let savings = 0;
  let i;
  for (i in props.issues) {
    spent += parseInt(props.issues[i].flow);
    budget += parseInt(props.issues[i].budget);
    if (props.issues[i].category === "Savings") {
      savings += parseInt(props.issues[i].budget);
    }
  }
  return (

    <div style={{textAlign:"center"}} >
    <table style={{ width: "100px", margin: "auto", float: "center" }} className="table table-light striped-table">
      <thead className="text-white" style={{ backgroundColor: "#4d4d4d" ,}}>
        <tr>

          <th>Income</th>

          <th>Balance</th>

        </tr>
      </thead>
      <tbody className="table-dark">
        <tr>

          <td>{props.asset}</td>

          <td>{props.asset - budget}</td>

        </tr>
      </tbody>
    </table>
    </div>
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

      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <nav className="sticky-top navbar navbar-expand navbar-dark bg-dark">
        <div className="nav navbar-nav">
          <a className="btn btn-success" href="#/budget" style={{marginRight: "1vh"}}>Budget<span className="sr-only">(current)</span></a>
          <a className="btn btn-success" href="#/reports">Reports<span className="sr-only">(current)</span></a>
        </div>
      </nav>
      
    )
  }
}



//incomeAdd
class IncomeAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.IncomeAdd;

    this.props.createInflow({ income: form.income.value });
    //this.props.createOutflow({income: form.spend.value});

    // Clear the form for the next input.
    form.income.value = '';
    // form.spend.value = '';
  }

  render() {
    return (
      // let in this button is income

      <div style={{ position: "static", top: "10rem", left: "-25rem", float: "left", width: "60%", marginLeft: "20%", marginTop: "3%" }}>
        <form name="IncomeAdd" onSubmit={this.handleSubmit}>
          <input className="form-control" type="text" name="income" placeholder="Income" />
          <button className="form-control btn-success" >Quick Add</button>
        </form>
      </div>

    );

  }
}
//incomesubtract
class IncomeSubtract extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.IncomeSubtract;

    this.props.createOutflow({ spend: form.spend.value });
    // Clear the form for the next input.
    form.spend.value = '';
  }

  render() {
    return (
      <div style={{ position: "static", top: "10rem", left: "-25rem", float: "left", width: "60%", marginLeft: "20%", marginTop: "3%" }}>
        <form name="IncomeSubtract" onSubmit={this.handleSubmit}>
          <input className="form-control" type="text" name="spend" placeholder="Spend" />
          <button className="form-control btn-success">Quick Spend</button>
        </form>
      </div>

    );

  }
}

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { issues: [], asset: -1 };

    this.enterInfo = this.enterInfo.bind(this);
    this.createInflow = this.createInflow.bind(this);
    this.createOutflow = this.createOutflow.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('/api/Money', {
      method: 'GET'
    }).then(res => {
      console.log("Got money app00:")
      res.json().then(data => {
        this.setState({ asset: data.money })
        console.log(data.money)
      });
    }).catch(err => err);
  }

  enterInfo(newIssue) {
    const newIssues = this.state.issues.slice();
    if (isNaN(parseInt(newIssue.flow))) {
      newIssue.flow = 0;
    }
    let i;
    for (i in newIssues) {
      if (newIssues[i].category === newIssue.category) {
        if (newIssues[i].flow === undefined) {
          newIssues[i].flow = parseInt(newIssue.flow);
        } else {
          newIssues[i].flow += parseInt(newIssue.flow);
        }
        if (isNaN(parseInt(newIssue.budget))) {
          let a;
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

  createInflow(newFlow) {
    let assets = this.state.asset;

    if (isNaN(parseInt(newFlow.income))) {
      return;
    }

    let total = assets + parseInt(newFlow.income);
    this.money(total);
  }

  money(cash) {
    let obj = {
      "money": cash
    }
    console.log("here is obj: ", JSON.stringify(obj))
    fetch('/api/Money', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log("RES: ", res)
      return res;
    }).catch(err => err)
    this.setState({ asset: cash })
  }

  createOutflow(newFlow) {
    let assets = this.state.asset;

    if (isNaN(parseInt(newFlow.spend))) {
      return;
    }

    let total = assets - parseInt(newFlow.spend);
    this.money(total)
  }

  render() {
    return (
      <div className="bg-success" style={{backgroundImage: "url('images/green-wave.png')" , backgroundSize: "cover", paddingBottom: "2%", height: "100vh"  }}>
        <Navbar />
        <div style={{ width: "400px",  margin: "auto", paddingTop: "2%" }}>
          <div style={{ margin:"auto", width: "70%",backgroundColor: "green", color: "white", borderRadius: "1rem", paddingTop:"4px",paddingBottom:"4px"}}>
            <BalanceTable asset={this.state.asset} issues={this.state.issues}style={{ }}/>
          </div>
          <div className="card" style={{ marginTop: "10%", padding: "1vh",width:"80%" ,margin:"auto",borderRadius: "1rem" }}>
            <div className="card-body" style={{ margin:"auto"}}>
              <IncomeAdd createInflow={this.createInflow} />
              <IncomeSubtract createOutflow={this.createOutflow} />
            </div>
          </div>

        </div>
        <div style={{ clear: "both" }} />

        <BudgetAdd enterInfo={this.enterInfo} />

      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<HomePage />, contentNode);

