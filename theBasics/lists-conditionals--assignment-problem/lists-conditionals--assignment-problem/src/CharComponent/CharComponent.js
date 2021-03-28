import React from 'react';

let CharComponent = props => {

    const styles = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return(
        <div style={styles} onClick={props.deleteChar}>
            {props.character}
        </div>
    )

}

export default CharComponent;