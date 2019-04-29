import React from 'react';
import ReactDOM from 'react-dom';

// This is a place holder for the initial application state.
const contents = {
  totalIncome: 0,
  totalSpent: 0,
  totalSave: 0
}
const totalIncome = 0
const totalSpent = 0
const totalSave = 0


class Navbar extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <nav className="sticky-top navbar navbar-expand navbar-dark bg-dark">
          <div className="nav navbar-nav">  
          <a className="btn btn-success" href="#/" style={{ marginRight: "1vh" ,backgroundColor: "royalBlue",border: "1px groove royalBlue" , color: "white"}}>Home<span className="sr-only">(current)</span></a>
          <a className="btn btn-success" href="#/budget" style={{ marginRight: "1vh" ,backgroundColor: "royalBlue",border: "1px groove royalBlue" , color: "white"}}>Budget<span className="sr-only">(current)</span></a>
          </div>
        </nav>
    )
  }
}
// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
function Graph(props) {
  let name = props.name;
  return (
    <div>
      <table style={{ backgroundColor: "lightBlue", margin: "auto", color: "white" }}>
        <tbody>
          <tr>
            <td className="center" style={{ margin: "auto" }}><i>Graph of {name}</i></td>
          </tr>
          <tr>
            <td><img src="https://via.placeholder.com/300" alt="" style={{ maxWidth: "100%", height: "auto" }} /></td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

class GraphGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Graph name="Income" />
          </div>
          <div className="col-md-6">
            <Graph name="Outflow" />
          </div>
        </div>
      </div>
    )
  }
}

function Stats(props) {
  return (
    <div style={{ padding: "6%", backgroundColor: "navy", color: "white", borderRadius: "3rem", margin: "5% auto"  }}>
      <table className="table bg-white"style={{  borderRadius: ".5rem" }}>
        <thead>
          <tr>
            <th></th>
            <th>Total Income</th>
            <th>Total Expenditures</th>
            <th>Total Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{props.totalIncome}</td>
            <td>{props.contents.totalSpent}</td>
            <td>{props.contents.totalSave}</td>
          </tr>
        </tbody>
      </table>
      <IncomeAdd contents={props.contents} createInflow={props.createInflow} />
    </div>
  )
}
class IncomeAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.IncomeAdd;
    this.props.createInflow({ income: form.income.value, expense: form.expense.value, save: form.save.value });
    // Clear the form for the next input.
    form.income.value = '';
    form.expense.value = '';
    form.save.value = '';
  }

  render() {
    return (
      <div style={{ width: "50%", paddingTop: "3%", margin: "2% auto", backgroundColor: "lightBlue", border: "3px solid white" }}>
        <form name="IncomeAdd" onSubmit={this.handleSubmit}>
          <input style={{ width: "90%", margin: "auto" }} className="form-control" type="text" name="income" placeholder="Income" />
          <input style={{ width: "90%", margin: "auto" }} className="form-control" type="text" name="expense" placeholder="Expenses" />
          <input style={{ width: "90%", margin: "auto" }} className="form-control" type="text" name="save" placeholder="Saved" />
          <button style={{ width: "auto", margin: "3% auto", backgroundColor: "navy" }} className="form-control btn-primary">Add</button>
        </form>
      </div>
    );
  }
}


class Jumbo extends React.Component {
  render() {
    return (
      
        <div className="container" style={{ padding: "5%", backgroundColor: "navy", color: "white", borderRadius: "3rem" }}>
          <h1 className="display-3">My Reports</h1>
          <p className="lead">Your personalized financial reports</p>
          <hr className="my-2" style={{ border: "1px dotted white" }} />
          <p className="lead" style={{ paddingTop: "6px" }}>
            <a className="btn btn-primary btn-lg" href="#/budget" role="button" >Jump to My 'Budget'</a>
          </p>
        </div>
  
    )
  }
}
class Data extends React.Component {
  render() {
    return (
        <div style={{ padding: "5%", backgroundColor: "navy", color: "white", borderRadius: "3rem", margin: "5% auto"  }}>
        <table className="bordered-table" style={{ marginLeft:"auto", marginRight:"auto" }}>
          <thead>
            <tr>
              <i><b>Placeholder for reports</b></i>
              <hr />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="https://via.placeholder.com/200" alt="" /></td>
            </tr>
          </tbody>
        </table>
        </div>
    )
  }
}
function randQuote(){
  let quotebucket = ["You've got this!","We beleive in you!","You will meet your goal!","A dollar a day adds up!","Have a great day!","You miss 100% if the shots you don't take- Wayne Gretzky- Micheal Scott","Everybody Stay Calm"];
  let picked = "";
  picked = quotebucket[Math.floor(Math.random() * quotebucket.length)];
  return picked;
}
class Quote extends React.Component {
  
  
  render() {
    return(
      <div style={{ padding: "1%", backgroundColor: "navy", color: "white", borderRadius: "3rem"  }}>
        <p style={{textAlign:"center", paddingTop:"1%"}}>Inspirational Quote: " {randQuote()} "</p>
      </div>
    )
  }
}

class Results extends React.Component {
  render() {
    return (
      <div>
        <b><i><u>Table Of Recorded Purchases</u></i></b>
        <table>
          <thead>
            <tr>
              <th>Place of Purchase</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>McDonald's</td>
              <td><i><b>$4.28</b></i></td>
              <td>3/11/19</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default class Reports extends React.Component {
  constructor() {
    super();
    this.state = { contents: [] };
    this.createInflow = this.createInflow.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        contents: contents,
      });
    }, 500);
  }

  createInflow(newFlow) {
    const newIssues = this.state.contents;
    if (!isNaN(parseInt(newFlow.income))) {
      newIssues.totalIncome = this.state.contents.totalIncome + parseInt(newFlow.income);
    } if (!isNaN(parseInt(newFlow.expense))) {
      newIssues.totalSpent = this.state.contents.totalSpent + parseInt(newFlow.expense);
    } if (!isNaN(parseInt(newFlow.save))) {
      newIssues.totalSave = this.state.contents.totalSave + parseInt(newFlow.save);
    }

    this.setState({ contents: newIssues });
  }
//        <div style={{ float: "center", marginLeft: "12%", marginRight: "12%", paddingBottom: "3%", backgroundImage: "require('../images/1200px-Sunset_2007-1.jpg')"}}>
//../images/dark-honeycomb.png

  render() {
    return (
      <div className="bg-success" style={{backgroundImage: "url('images/blue-wave.png')" , backgroundSize: "cover", paddingBottom: "2%",  }}>
          <Navbar />
          <div className="container" style={{ marginTop: "2%" }}>
            <div className="row">
              <div className="col-md-6">
                <div className="card" style={{  borderRadius: "3rem" }}>
                  <div className="card-body" style={{ marginBottom: "5%" ,borderRadius: "3rem"}}>
                    <Graph name="Income" />
                    <h4 className="card-title" style={{ margin: "0 auto", textAlign: "center" }}>Graph #1</h4>
                    <p className="card-text" style={{ margin: "0 auto", textAlign: "center" }}>Graph of Income</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card" style={{ borderRadius: "3rem"}}>
                  <div className="card-body" style={{ marginBottom: "5%" ,borderRadius: "3rem"}}>
                    <Graph name="Expenses" />
                    <h4 className="card-title" style={{ margin: "0 auto", textAlign: "center" }}>Graph #2</h4>
                    <p className="card-text" style={{ margin: "0 auto", textAlign: "center" }}>Graph of Expenses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "2%"}}>
            <div className="container" style={{ marginBottom: "2%" , borderRadius: "3rem" }}>
              <div className="row" style={{ backgroundColor: "royalBlue", color: "white", borderRadius: "3rem", border: "2px solid white" }}>
                <div className="col-md-6" style={{ marginBottom: "2%" , borderRadius: "3rem" }}>
                  <div style={{ }}> 
                    <Data />
                  </div>
                  <div>
                  <Quote />
                </div>
                </div>
                
                <div className="col-md-6" style={{  }}>
                  <div style={{ borderRadius: "3rem" }}>
                  <Stats contents={this.state.contents} totalIncome={this.state.contents.totalIncome} createInflow={this.createInflow} />
                  </div>
                </div>
                
              </div>
            </div>
            <Jumbo />
          </div>

        </div>
      
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<Reports />, contentNode);
