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

/*class App extends Component {
  
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
      <div>
      <Person name={this.state.players[0].namee} age={this.state.players[0].age}>{this.state.players[0].pos}</Person>
      <Person name={this.state.players[1].namee} age={this.state.players[1].age} switcher={this.switchNameHandler.bind(this, 'Gabriel Jesus')} changeTheName={this.changeTheName}>{this.state.players[1].pos}</Person>
      <Person name={this.state.players[2].namee} age={this.state.players[2].age} switcher={() => this.switchNameHandler('Sergio Aguero')} changeTheName={this.changeTheName}>{this.state.players[2].pos}</Person>
      <Person name={this.state.players[3].namee} age={this.state.players[3].age} switcher={() => this.switchNameHandler('Jaao Felix')} changeTheName={this.changeTheName}>{this.state.players[3].pos}</Person>
      </div>
    </div>
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello There!'))
  );
}
}

export default App;
*/

class App extends Component {

  state = {
    person: [
      {namee: 'Chris', country: 'United States'},
      {namee: 'Kevin', country: 'Belgium'},
      {namee: 'Virgil', country: 'Netherlands'},
      {namee: 'Pierre', country: 'Gabon'},
    ]
  }

  changeNameHandler = (newName, id) => {

    if(id===0)
    {this.setState({
      person: [
        {namee: newName, country: 'United States'},
        {namee: 'Kevin', country: 'Belgium'},
        {namee: 'Virgil', country: 'Netherlands'},
        {namee: 'Pierre', country: 'Gabon'},
      ]
    });}
    if(id===1)
    {this.setState({
      person: [
        {namee: 'Chris', country: 'United States'},
        {namee: newName, country: 'Belgium'},
        {namee: 'Virgil', country: 'Netherlands'},
        {namee: 'Pierre', country: 'Gabon'},
      ]
    });}
    if(id===2)
    {this.setState({
      person: [
        {namee: 'Chris', country: 'United States'},
        {namee: 'Kevin', country: 'Belgium'},
        {namee: newName, country: 'Netherlands'},
        {namee: 'Pierre', country: 'Gabon'},
      ]
    });}
    if(id===3)
    {this.setState({
      person: [
        {namee: 'Chris', country: 'United States'},
        {namee: 'Kevin', country: 'Belgium'},
        {namee: 'Virgil', country: 'Netherlands'},
        {namee: newName, country: 'Gabon'},
      ]
    });}
  }

  changeCountryHandler = (event) => {

    this.setState({
      person: [
        {namee: 'Chris', country: event.target.value},
        {namee: 'Kevin', country: 'Belgium'},
        {namee: 'Virgil', country: 'Netherlands'},
        {namee: 'Pierre', country: 'Gabon'},
      ]
    });
    console.log(event.target.value);
  } 



  render() {

    return(
      <div>
      <Person name={this.state.person[0].namee} country={this.state.person[0].country} switchName={this.changeNameHandler.bind(this, 'Christian Pulisic', 0)} changeCountry={this.changeCountryHandler} />
      <Person name={this.state.person[1].namee} country={this.state.person[1].country} switchName={this.changeNameHandler.bind(this, 'Kevin de Bruyne', 1)} changeCountry={this.changeCountryHandler} />
      <Person name={this.state.person[2].namee} country={this.state.person[2].country} switchName={this.changeNameHandler.bind(this, 'Virgil Van Djik', 2)} changeCountry={this.changeCountryHandler} />
      <Person name={this.state.person[3].namee} country={this.state.person[3].country} switchName={() => this.changeNameHandler('Pierre-Emerick Aubameyang', 3)} changeCountry={this.changeCountryHandler} />
      </div>
    )

  }
}

export default App;

//There are 2 ways to go about sending parameters to other functions
// switcher={this.switchNameHandler.bind(this, 'Gabriel Jesus')}
// switcher={() => this.switchNameHandler('Sergio Aguero')}

//if there are no params ->  changeCountry={this.changeCountryHandler} works.