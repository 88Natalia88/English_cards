import React from "react";
import './ButtonRemove.scss';

function ButtonRemove(props){
    return <button className="remove" onClick={props.onClick}>&#129530;</button>;
}
export default ButtonRemove;