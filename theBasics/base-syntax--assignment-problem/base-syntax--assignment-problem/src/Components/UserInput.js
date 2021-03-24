import React, {Component} from 'react';

const UserInput = props => {

    const styles = {
        display: 'inline',
        margin: 'auto',
        borderRadius: '20px',
        textAlign: 'center',
        focus: true,
    }

    return(
            <input style={styles} type="text" onChange={props.changeText} value={props.value}></input>
    );
}

export default UserInput;