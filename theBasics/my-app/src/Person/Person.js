import React from 'react';
import './person.css';


//Writing a Function Based Component.
//Imagine this to be like Java Classes Paradigms.

const Person = (props) => {
    return (
        <div className="cardo"><p onClick={props.switcher}>I am {props.name} and my age is {props.age}.</p>
        <p>Position: {props.children}</p>
        <input type="text" value={props.name} onChange={props.changeTheName}></input>
        </div>
    )
}

export default Person;