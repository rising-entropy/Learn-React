import React from 'react';

let ValidationComponent = (props) => {

    let checkValidation = ["Text Too Short", "Text Long Enough"];

    let whatToDisplay;

    if(props.textLength < 5)
    {
        whatToDisplay = checkValidation[0];    
    }
    else
    {
        whatToDisplay = checkValidation[1];
    }

    return (
        <div><p>{whatToDisplay}</p></div>
    )

}

export default ValidationComponent;