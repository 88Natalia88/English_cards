import React from "react";
import './CanselButton.scss';

function CanselButton(props){
        return (
        <button className="cansel" onClick={props.onClick}>&#10060;</button>
        ) 
    }
    export default CanselButton;