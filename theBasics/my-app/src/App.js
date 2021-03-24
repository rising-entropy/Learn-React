import './App.css';
import Person from './Person/Person';
import React from 'react';
import {Component} from 'react';
import {useState} from 'react';
//JSX has some restrictions over what words to use, so class --> className.
//Only 1 Element can be returned (Typically a div).

/*
let App = props => {

  let [currentState, settingState] = useState({
    players : [
      {namee: 'Erling Haaland', age: 20, pos: 'ST'},
      {namee: 'Kylian Mbappe', age: 23, pos: 'ST'},
      {namee: 'Phil Foden', age: 21, pos: 'CAM'},
    ],
  });

  let switchNameHandler = () => {
    //console.log('Fuck You MUFC');
    settingState({
      players : [
        {namee: 'Erling Haaland', age: 20, pos: 'CF'},
        {namee: 'Kylian Mbappe', age: 23, pos: 'LW'},
        {namee: 'Phil Foden', age: 21, pos: 'LM'},
      ],
    })
  }

  return (
    <div className="App">
      <h1>High Potential Players!</h1>
      <br/>
      <button onClick={switchNameHandler}>Switch Positions</button>
      <br/>
      <Person name={currentState.players[0].namee} age={currentState.players[0].age}>{currentState.players[0].pos}</Person>
      <Person name={currentState.players[1].namee} age={currentState.players[1].age}>{currentState.players[1].pos}</Person>
      <Person name={currentState.players[2].namee} age={currentState.players[2].age}>{currentState.players[2].pos}</Person>
    </div>
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello There!'))
  );

}

export default App;
*/

/*
class App extends Component {
  
  state = {
    players : [
      {namee: 'Erling Haaland', age: 20, pos: 'ST'},
      {namee: 'Kylian Mbappe', age: 23, pos: 'ST'},
      {namee: 'Phil Foden', age: 21, pos: 'CAM'},
    ],
  }

  switchNameHandler = () => {
    //console.log('Fuck You MUFC');
    this.setState({
      players : [
        {namee: 'Erling Haaland', age: 20, pos: 'CF'},
        {namee: 'Kylian Mbappe', age: 23, pos: 'LW'},
        {namee: 'Phil Foden', age: 21, pos: 'LM'},
      ],
    })
  }

  render()
  {
    return (
    <div className="App">
      <h1>High Potential Players!</h1>
      <br/>
      <button onClick={this.switchNameHandler}>Switch Positions</button>
      <br/>
      <Person name={this.state.players[0].namee} age={this.state.players[0].age}>{this.state.players[0].pos}</Person>
      <Person name={this.state.players[1].namee} age={this.state.players[1].age}>{this.state.players[1].pos}</Person>
      <Person name={this.state.players[2].namee} age={this.state.players[2].age}>{this.state.players[2].pos}</Person>
    </div>
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello There!'))
  );
}
}

export default App;
*/

class App extends Component {
  
  state = {
    players : [
      {namee: 'Erling Haaland', age: 20, pos: 'ST'},
      {namee: 'Kylian Mbappe', age: 23, pos: 'ST'},
      {namee: 'Phil Foden', age: 21, pos: 'CAM'},
      {namee: 'Timo Werner', age: 23, pos: 'CF'},
    ],
  }

  switchNameHandler = (name) => {
    this.setState({
      players : [
        {namee: name, age: 20, pos: 'CF'},
        {namee: 'Kylian Mbappe', age: 23, pos: 'LW'},
        {namee: 'Phil Foden', age: 21, pos: 'LM'},
        {namee: 'Timo Werner', age: 23, pos: 'ST'},
      ],
    })
  }

  changeTheName = (event) => {
    this.setState({
      players : [
        {namee: 'Erling Haaland', age: 20, pos: 'CF'},
        {namee: 'Kylian Mbappe', age: 23, pos: 'LW'},
        {namee: 'Phil Foden', age: 21, pos: 'LM'},
        {namee: event.target.value, age: 23, pos: 'ST'},
      ],
    })
  }

  styleButton = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  render()
  {
    return (
    <div className="App">
      <h1>High Potential Players!</h1>
      <br/>
      <button onClick={this.switchNameHandler.bind(this, 'Roberto Firmino')} style={this.styleButton}>Switch Positions</button>
      <br/>
      <Person name={this.state.players[0].namee} age={this.state.players[0].age}>{this.state.players[0].pos}</Person>
      <Person name={this.state.players[1].namee} age={this.state.players[1].age} switcher={this.switchNameHandler.bind(this, 'Gabriel Jesus')} changeTheName={this.changeTheName}>{this.state.players[1].pos}</Person>
      <Person name={this.state.players[2].namee} age={this.state.players[2].age} switcher={() => this.switchNameHandler('Sergio Aguero')} changeTheName={this.changeTheName}>{this.state.players[2].pos}</Person>
      <Person name={this.state.players[3].namee} age={this.state.players[3].age} switcher={() => this.switchNameHandler('Jaao Felix')} changeTheName={this.changeTheName}>{this.state.players[3].pos}</Person>
    </div>
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello There!'))
  );
}
}

export default App;
