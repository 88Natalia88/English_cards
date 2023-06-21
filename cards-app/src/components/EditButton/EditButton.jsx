import React from "react";
import './EditButton.scss';

function EditButton(props){
/*const [pressed, setPressed] = useState(false);
const handleEdit = () => {
    setPressed(!pressed);
}*/
    return (
    <button className="edit" onClick={props.onClick}>&#9999;&#65039;</button>
    ) 
}
export default EditButton;