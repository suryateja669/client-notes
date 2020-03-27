import React from 'react';


const Input=(props)=> {
    
        return(
        <textarea id="textInput" placeholder="Enter notes here!" rows="10" columns="200" onChange={props.changed} />
        )
    
}


export default Input;