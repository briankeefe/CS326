import React from 'react';
import ReactDOM from 'react-dom';

import Plot from 'react-plotly.js';

class App extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'bar',
            marker: {color: 'red'},
          },
         
        ]}
        layout={ {width: 300, height: 300, title: 'A Fancy Plot'} }
      />
    );
  }
}
class App2 extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            values: [19, 26, 55],
            labels: ['Residential', 'Non-Residential', 'Utility'],
            type: 'pie'
          },
         
        ]}
        layout={ {width: 300, height: 300, title: 'Pie', autosize:true} }
      />
    );
  }
}
class Goalgraph extends React.Component {
  render() {
    return (
      <Plot style={{borderRadius:"3rem"}}
        data={[
          {
            x: [3, 2],
            y: ["Budget", "Savings"],
            type: 'bar',
          },   
        ]}
        layout={ {width: 300, height: 200, title: 'Your Goal'} }
      />
    );
  }
}


// This is a place holder for the initial application state.
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
function Graph2(props){
  return(
    <App/>
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
  let spent = 0;
  let savings = 0;
  let i;
  for (i in props.contents) {
    spent += parseInt(props.contents[i].flow);
    if (props.contents[i].category === "Savings") {
      savings += parseInt(props.contents[i].budget);
    }
  }
  return (
    <div className="card" style={{ padding: "5%", backgroundColor: "navy", color: "white", borderRadius: "3rem", margin: "5% auto" }}>
      <div className="table-responsive" style={{borderRadius: "1rem"}} >
        <table className="table table-bordered table-striped bg-white">
          <thead>
            <tr>
              <th>Total Income</th>
              <th>Total Expenditures</th>
              <th>Total Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.totalIncome}</td>
              <td>{spent}</td>
              <td>{savings}</td>
            </tr>
          </tbody>
        </table>
        <IncomeAdd contents={props.contents} createInflow={props.createInflow} />
      </div>
    </div>
    
  )
}
class IncomeAdd extends React.Component {
  constructor(props) {
    super();
    this.createInflow = props.createInflow;
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.IncomeAdd;
    this.props.createInflow({ income: form.income.value });
    // Clear the form for the next input.
    form.income.value = '';
  }

  render() {
    return (
      <div style={{ width: "50%", paddingTop: "3%", margin: "2% auto", backgroundColor: "lightBlue", border: "3px solid white" }}>
        <form name="IncomeAdd" onSubmit={this.handleSubmit}>
          <input style={{ width: "90%", margin: "auto" }} className="form-control" type="text" name="income" placeholder="Income" />
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
//may go away
class Data extends React.Component {
  render() {
    return (
        <div style={{ padding: "5%", backgroundColor: "navy", color: "white", borderRadius: "3rem", margin: "5% auto"  }}>
       <Goalgraph/>
        </div>
    )
  }
}
function randQuote(){
  let quotebucket = ["You've got this!","We beleive in you!","You will meet your goal!","A dollar a day adds up!","Have a great day!"];
  let picked = "";
  picked = quotebucket[Math.floor(Math.random() * quotebucket.length)];
  return picked;
}
class Quote extends React.Component {
  
  
  render() {
    return(
      <div style={{ padding: "1%", backgroundColor: "navy", color: "white", borderRadius: "3rem"  }}>
        <p style={{textAlign:"center", paddingTop:"1%"}}>Insperational Quote: " {randQuote()} "</p>
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
    fetch('/api/Money', {
      method: 'GET'
    }).then(res => {
      console.log("App02 loading")
      console.log("Got money app00:")
      res.json().then(data => {
        this.setState({ asset: data.money })
        console.log(data.money)
      });
    }).catch(err => {
      console.log("ERROR: ", err);
    });
    fetch('/api/SaveMe', {
      method: 'GET'
    }).then(res => {
      console.log("Getting SaveMe Data")
      res.json().then(data => {
        this.setState({contents: data.assets})
      });
    }).catch(err => {
      console.log("ERROR: ", err);
    })
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

  createInflow(newFlow) {
    const current = parseInt(this.state.asset);
    if (isNaN(parseInt(newFlow.income))) {
      console.log("ISNAN");
    }
    let totalIncome = current + parseInt(newFlow.income);
    this.money(totalIncome);
  }
//        <div style={{ float: "center", marginLeft: "12%", marginRight: "12%", paddingBottom: "3%", backgroundImage: "require('../images/1200px-Sunset_2007-1.jpg')"}}>
//../images/dark-honeycomb.png
//
  render() {
    return (
      <div className="bg-success" style={{backgroundImage: "url('images/blue-wave.png')" , backgroundSize: "cover", paddingBottom: "2%",  }}>
          <Navbar />
          <div className="container" style={{ marginTop: "2%" }}>
            <div className="row">
              <div className="col-md-6">
                <div className="card" style={{  borderRadius: "3rem" }}>
                  <div className="card-body" style={{ marginBottom: "5%" ,borderRadius: "3rem"}}>
                    <App name="Income" />
                    <h4 className="card-title" style={{ margin: "0 auto", textAlign: "center" }}>Graph #1</h4>
                    <p className="card-text" style={{ margin: "0 auto", textAlign: "center" }}>Graph of Income</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card" style={{ borderRadius: "3rem"}}>
                  <div className="card-body" style={{ marginBottom: "5%" ,borderRadius: "3rem"}}>
                  <App2 name="Expenses" />
                    
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
                  <Stats contents={this.state.contents} totalIncome={this.state.asset} createInflow={this.createInflow} />
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
