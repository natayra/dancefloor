import React from "react";
import "./App.css";
import Square from "./Components/Square";

class App extends React.Component {
  state = {
    columns: [1, 2, 3, 4, 5],
  };

  render() {
    return (
      <div id="container">
        {this.state.columns.map((column) => (
          <div>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
