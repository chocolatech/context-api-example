import React, { Component } from 'react';
import './App.css';

const MyContext = React.createContext();

const Inner = (props) => {
  return <div>
    <h3>This is </h3>
    <Last />
  </div>
}

const Yolo = (props) => {
  return <div>Yolo {props.pet}</div>
}
const Last = (props) => {

  return <div>
    Lol
    <MyContext.Consumer >
      {value => <Yolo {...props} pet={value.name} />}
    </MyContext.Consumer>
  </div>
}

class App extends Component {

  render() {
    const data = {
      name: 'Puszek',
      type: 'cat'
    };

    return (
      <MyContext.Provider value={data}>
        <h1>App</h1>
        <Inner />
      </MyContext.Provider>
    );
  }
}

export default App;
