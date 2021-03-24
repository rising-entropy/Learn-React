import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';


class App extends Component {

  state = {
    username: 'Mesut_Ozil',
  }

  updateUsernameHandler = (event) =>{
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <UserInput changeText={this.updateUsernameHandler} value={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
