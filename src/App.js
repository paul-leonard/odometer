import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1> Hello, Traveler! </h1>
      <Header description="This is a simple fake odometer to demonstrate use of React."/>
      <Odometer />
      <Footer trademark="Rolling odometer brought to you by Paul Leonard" />
    </div>
  );
}

function Header(props) {
  return(
    <div>
      <h2>Wow!!! That's a lot of miles!</h2>
      <h2>Let's roll them back (by wrapping)!</h2>
      <p>{props.description}</p>
    </div>
  )
}

function Footer(props) {
  return(
    <p>{props.trademark}</p>
  )
}

class Odometer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      milesCount: 0,
      distanceUnits: "miles",
    }
    this.oneClicked = this.oneClicked.bind(this);
    this.tenClicked = this.tenClicked.bind(this);
    this.hundredClicked = this.hundredClicked.bind(this);
    this.thousandClicked = this.thousandClicked.bind(this);
  }

  calculateNewValue(numberToAdd) {
    let newValue = this.state.milesCount + numberToAdd
    if (newValue > 9999) {
      newValue -= 9999
    }
    return newValue
  }

  oneClicked() {
    this.setState({
      milesCount: this.calculateNewValue(1)
    });
  }

  tenClicked() {
    this.setState({
      milesCount: this.calculateNewValue(10)
    });
  }

  hundredClicked() {
    this.setState({
      milesCount: this.calculateNewValue(100)
    });
  }

  thousandClicked() {
    this.setState({
      milesCount: this.calculateNewValue(1000)
    });
  }

  render() {
    return(
      <>
        <h1> {this.state.milesCount.toString().padStart(4,0)} {this.state.distanceUnits}</h1>
        <button onClick={this.oneClicked}>+1</button>
        <button onClick={this.tenClicked}>+10</button>
        <button onClick={this.hundredClicked}>+100</button>
        <button onClick={this.thousandClicked}>+1000</button>
      </>
    )};
}

export default App;
