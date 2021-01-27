import React from "react";
import "../../App.css";

class Square extends React.Component {
  state = {
    colorNumber: Math.random(),
    squareClassName: "squares",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ colorNumber: Math.random() });
    }, 500);
  }

  render() {
    return (
      <div>
        {this.state.colorNumber < 0.2 ? (
          <div className={"squares purple"}></div>
        ) : this.state.colorNumber < 0.4 ? (
          <div className="squares blue"></div>
        ) : this.state.colorNumber < 0.6 ? (
          <div className="squares red"></div>
        ) : this.state.colorNumber < 0.8 ? (
          <div className="squares yellow"></div>
        ) : (
          <div className="squares green"></div>
        )}
      </div>
    );
  }
}

export default Square;
