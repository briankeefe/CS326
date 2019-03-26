// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
function Graph(props) {
  let name = props.name;
  return (
    <span>
      <table style={{ float: "left" }} >
        <tbody>
          <tr>
            <td>Graph of {name}</td>
          </tr>
          <tr>
            <td><img src="https://via.placeholder.com/300" alt="" /></td>
          </tr>
        </tbody>
      </table>
      
    </span>   
  ) 
}

class GraphGrid extends React.Component {
  render() {
    return (
      <span>
        <Graph name="Income"/>
        <Graph name="Outflows"/>
      </span>
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

class Data extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <table className="bordered-table" style={{border: "1px black solid"}}>
            <thead>
              <tr>
                 <i><b>Placeholder for reports</b></i>
                 <hr/>
              </tr>
            </thead>
            <tbody>
              <tr><img src="https://via.placeholder.com/200" alt="" /></tr>
            </tbody>
          </table>
        </h3>
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
      <div>
        <GraphGrid/>
        <Stats />
        <Data />
        <div style={{"clear": "both"}}/>
        <hr/>
        <Results />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
