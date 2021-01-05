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
      milesCount: 747,
      distanceUnits: "miles",
    }
    this.hundredClicked = this.hundredClicked.bind(this);
  }

  hundredClicked() {
    this.setState({
      milesCount: 777,
    });
  }

  render() {
    return(
      <>
        <h1> {this.state.milesCount} {this.state.distanceUnits}</h1>
        <button onClick={this.hundredClicked}>+100</button>
      </>
    )};
}

export default App;
