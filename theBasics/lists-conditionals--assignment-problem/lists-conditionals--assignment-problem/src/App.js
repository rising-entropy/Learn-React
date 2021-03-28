import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'


class App extends Component {

  state = {
    textLength: 0, 
    whatText: "",
  }

  textChange = (event) => {
    let myState = {...this.state}
    myState.textLength = event.target.value.length;
    myState.whatText = event.target.value;

    this.setState(myState)
  }

  deleteChar = index => {
    let myState = {...this.state}
    let charArrs = this.state.whatText.split('');
    charArrs.splice(index, 1)
    charArrs = charArrs.join('')
    myState.whatText = charArrs
    myState.textLength -= 1
    this.setState(myState)
  }

  render() {

    let allChars = this.state.whatText.split('').map((ch, index) => {
      return <CharComponent  character={ch} key={index} deleteChar={() => this.deleteChar(index)} />
    })

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <br/>
        <br/>
        <input type="text" onChange={this.textChange} value={this.state.whatText} />
        <br/><br/>
        <h5>{this.state.textLength}</h5>
        <br/>
        <ValidationComponent textLength={this.state.textLength} />
        <br />
        {allChars}
      </div>
    );
  }
}

export default App;
