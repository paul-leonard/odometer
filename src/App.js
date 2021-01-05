import './App.css';
import React from 'react';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <h1> Hello, Paul! </h1>
      <Header description="This is a simple fake odometer to demonstrate use of React."/>
      <Odometer />
      <Footer trademark="Rolling odometer brought to you by Paul Leonard" />
    </div>
  );
}

function Header(props) {
  return(
    <div>
      <h2>Wow!!! That's a lot of miles!  Let's roll them back (by wrapping)!</h2>
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

  render() {
    return(
      <h1> Odometer from class </h1>
    )};
}

export default App;
