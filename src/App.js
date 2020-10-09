import React from "react";
import "./App.css";
import Watch from "./componenet/watch";

class App extends React.Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    etat: false,
    reset: "reset",
  };
  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };
  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };
  myTimer = () => {
    var timerStart = new Date();
    var timerTime = timerStart.toLocaleTimeString();
    document.getElementById("settime").innerHTML =timerTime;
  };

  handelchange = () => {
    this.setState({
      etat: !this.state.etat,
    });
  };

  componentDidMount = () => {
    var myVar = setInterval(this.myTimer, 1000);
    return myVar;
  };

  render() {
    return (
      <div>
        <button onClick={this.handelchange}>
          {this.state.etat === false ? <div>pause</div> : "start"}
        </button>
        <span id="settime"></span>
        <Watch
          props={this.state}
          myTimer={this.myTimer}
          componentDidMount={this.componentDidMount}
        />

        <button onClick>{this.state.reset}
        </button>
      </div>
    );
  }
}
export default App;
