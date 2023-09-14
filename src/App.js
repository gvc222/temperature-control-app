import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      temperature: 68
    }
  }
increment = () => {
  (this.state.temperature < 80) ? this.setState({temperature: this.state.temperature + 1}) : this.setState({temperature: this.state.temperature})
}

decrement = () => {
  (this.state.temperature > 60) ? this.setState({temperature: this.state.temperature - 1}) : this.setState({temperature: this.state.temperature})
}

temperatureCheck = () => {
  return (this.state.temperature >= 69) ? "hot" : (this.state.temperature <= 64) ? "cold" :  "neutral";
}

displayReader = () => {
  return (this.state.temperature >= 69) ? "Heater ON" : (this.state.temperature <= 64) ? "AC ON" :  "Fan mode";
}

  render(){
    return (
      <div className="app-container">
        {/* <div className="display">{this.displayReader()}</div> */}
          <div className="temperature-display-container">
            <div className={`temperature-display ${this.temperatureCheck()}`}>{this.state.temperature}°F</div>
            <div className="button-container">
              <button onClick={this.decrement}>-</button>
              <button onClick={this.increment}>+</button>
            </div>          
          </div>
      </div>
    )
  }

}


export default App;
