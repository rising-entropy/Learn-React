import React from 'react';
import './person.css';
import Radium, {StyleRoot} from 'radium';

//Writing a Function Based Component.
//Imagine this to be like Java Classes Paradigms.

const Person = (props) => {

    const style={
        '@media(min-width: 500px)': {
            width: '500px'
        }
    }

    return (
        <StyleRoot>
        <div className="cardo"><p onClick={props.click} style={style}>I am {props.name} and my age is {props.age}.</p>
        <p>Position: {props.children}</p>
        <input type="text" value={props.name} onChange={props.changeTheName}></input>
        </div>
        </StyleRoot>
    )
}

export default Radium(Person);