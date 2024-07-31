import {Timer} from "./Timer";
import React from "react";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      timerOn : false
    }
  }

  handleTimerOn = () => {
    this.setState((prevState) =>({timerOn: !prevState.timerOn}));
  }

  render() {
    return (
      <>
      {/* {this.state.timerOn? < Timer/> : null} */}
       < Timer timerOn={this.state.timerOn}/>

      <button onClick={this.handleTimerOn}>{this.state.timerOn? "STOP" : "START"}</button>
      
      
      </>
    );
  }
  
}

export default App;
