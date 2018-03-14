import React from 'react';

const userInput = (props) => {
    // Inline Styles
    const inputStyle = {
        border: '2px solid red'
    };

    return <input
        type="text"
        // Reference To Inline Styles
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName} />
};

export default userInput;