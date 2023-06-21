import React from "react";
import './ButtonFavorite.scss';

function FavoriteButton(props){
    return (
    <button className="favorite" onClick={props.onClick}>&#10084;</button>
    ) 
}
export default FavoriteButton;