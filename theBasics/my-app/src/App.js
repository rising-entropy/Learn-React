import './App.css';
import Person from './Person/Person';
import React from 'react';
import {Component} from 'react';
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
      {id: 1,namee: 'Erling Haaland', age: 20, pos: 'ST'},
      {id: 2,namee: 'Kylian Mbappe', age: 23, pos: 'ST'},
      {id: 3,namee: 'Phil Foden', age: 21, pos: 'CAM'},
      {id: 4,namee: 'Timo Werner', age: 23, pos: 'CF'},
    ],
  }

  changeTheName = (event, id) => {
    let person = this.state.players.findIndex(p => {
      return p.id === id;
    });
    let personIndex = person;
    person = this.state.players[person];
    //make this a new copied object of the state

    person = {
      ...person
    }

    person.namee = event.target.value;

    let persons = [...this.state.players]
    persons[personIndex] = person;

    this.setState({players: persons});

  }

  styleButton = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  togglePlayers = () => {
    this.setState({showPlayers: !this.state.showPlayers});
  }

  deleteMe = (index) => {
    //makes a copy of state part
    let persons = [...this.state.players];
    persons.splice(index, 1);  //removes 1 element from index = index
    this.setState({players: persons});
  }

  render()
  {
    let persons = null;
    if(this.state.showPlayers) {
    persons = (
      <div>
        {this.state.players.map((person, index) => {
          return <Person name={person.namee} age={person.age} click={() => this.deleteMe(index)} key={person.id} changeTheName={(event) => this.changeTheName(event, person.id)} >{person.pos}</Person>
        })}
      </div>
    );
  }
// check how we declared changeTheName. event is taken as a arrow function parameter, event and id sent.
    return (
    <div className="App">
      <h1>High Potential Players!</h1>
      <br/>
      <button onClick={this.togglePlayers} style={this.styleButton}>Toggle Players</button>
      <br/>

      {persons}

    </div>
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello There!'))
  );
}
}

export default App;
