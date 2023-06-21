import React from 'react';
import './SaveButton.scss';

function SaveButton(props){
        return (
        <button className="save" onClick={props.onClick}>Save</button>
        ) 
    }
    export default SaveButton;