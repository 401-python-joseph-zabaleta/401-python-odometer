import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Header title="Home page" />
      <hr />
      <Odometer />
      <hr />
      <Footer author="Joseph Zabaleta" />
    </div>
  );
}

function Header(props) {
  return (
  <header>
    <h1>{props.title}</h1>
  </header>
  )
}

function Footer(props) {
  return (
    <footer>
      <h4>
        React App by: {props.author}
      </h4>
    </footer>
  )
}

class Odometer extends React.Component {

  constructor() {
    super();
    this.state = {
      count : "0".padStart(4, 0),
    }
  }

  increaseCount(value) {

    let current = parseInt(this.state.count);
    let tempState = 0;

    if ((current + value) > 9999) {
      tempState = ((current + value) - 9999)
    } else {
      tempState = (current + value)
    }

    
    this.setState({
      count : String(tempState).padStart(4, 0),
    })
  }

  render() {
    return (
      <>
      <button onClick={() => this.increaseCount(1)}>Add 1</button>
      <button onClick={() => this.increaseCount(10)}>Add 10</button>
      <button onClick={() => this.increaseCount(100)}>Add 100</button>
      <button onClick={() => this.increaseCount(1000)}>Add 1000</button>
      <h1>Odometer: {this.state.count}</h1>
      </>
    )
  }
}


export default App;
