// This is a place holder for the initial application state.
const state = [

];

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="nav navbar-nav">
            <a name="" id="" className="btn btn-primary" href="./view01.html" role="button">Budget</a>
          </div>
        </nav>
      </div>
    )
  }
}


// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
function Graph(props) {
  let name = props.name;
  return (
    <div>
      <table style={{backgroundColor: "lightBlue", margin: "auto", color: "white"}}>
        <tbody>
          <tr>
            <td className="center"  style={{margin: "auto"}}><i>Graph of {name}</i></td>
          </tr>
          <tr>
            <td><img src="https://via.placeholder.com/300" alt="" style={{maxWidth: "100%", height: "auto"}} /></td>
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

class Stats extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Total Income</th>
            <th>Total Expenditures</th>
            <th>Total Savings</th>
          </tr>
          <tr>
            <td></td>
            <td>Answer</td>
            <td>Answer</td>
            <td>Answer</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

class Jumbo extends React.Component {
  render() {
    return (
      <div className="jumbotron" style={{ marignTop: "5%", marginBottom:"0%", padding: "5%", borderRadius: "1rem", border: "3px groove navy" }}>
        <div className="container" style={{ border: "1px solid black", borderStyle: "dotted", padding: "5%", backgroundColor: "navy", color: "white" }}>
          <h1 className="display-3">My Reports</h1>
          <p className="lead">Your personalized financial reports</p>
          <hr className="my-2" style={{border: "1px dotted white"}} />
          <p className="lead" style={{ paddingTop: "6px" }}>
            <a className="btn btn-primary btn-lg" href="/view01.html" role="button" >Jump to My 'Budget'</a>
          </p>
        </div>
      </div>
    )
  }
}
class Data extends React.Component {
  render() {
    return (
      <div>
        <table className="bordered-table" style={{ border: "1px white dotted", margin: "3% auto"}}>
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


class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ float: "center", marginLeft: "12%", marginRight: "12%" }}>
        <Nav />
        <div className="container" style={{marginTop: "2%", }}>
          <div className="row">
            <div className="col-md-6">
              <div className="card" style={{border: "2px groove black"}}>
                <div className="card-body" style={{ marginBottom: "5%"}}>
                  <Graph name="Income" />
                  <h4 className="card-title" style={{margin: "0 auto", textAlign: "center"}}>Graph #1</h4>
                  <p className="card-text" style={{margin: "0 auto", textAlign: "center"}}>Graph of Income</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{border: "2px groove black"}}>
                <div className="card-body" style={{ marginBottom: "5%"}}>
                  <Graph name="Expenses" />
                  <h4 className="card-title" style={{ margin: "0 auto", textAlign: "center" }}>Graph #2</h4>
                <p className="card-text" style={{ margin: "0 auto", textAlign: "center" }}>Graph of Expenses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop: "2%"}}>
          <div className="container" style={{marginBottom: "2%"}}>
            <div className="row" style={{backgroundColor: "royalBlue", color: "white", borderRadius: "1rem", border: "2px solid white"}}>
              <div className="col-md-6">
                <div> <Data /></div>
              </div>
              <div className="col-md-6">
                <div style={{marginTop: "15%"}}><Stats /></div>
              </div>
            </div>
          </div>
          <Jumbo/>
        </div>

      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
