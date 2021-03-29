import React from 'react';
import styled from 'styled-components'

//Writing a Function Based Component.
//Imagine this to be like Java Classes Paradigms.

const Person = (props) => {

    const StyledDiv = styled.div`
    width: 40%;
    margin: 4% auto;
    border: 1px solid #eee;
    box-shadow: 0 5px 7px #ccc;
    padding: 3%;
    transition: 0.3s;
    text-align: center;
    `;

    const style={
        '@media(min-width: 500px)': {
            width: '500px'
        }
    }

    return (
        <StyledDiv><p onClick={props.click} style={style}>I am {props.name} and my age is {props.age}.</p>
        <p>Position: {props.children}</p>
        <input type="text" value={props.name} onChange={props.changeTheName}></input>
        </StyledDiv>
    )
}

export default Person;