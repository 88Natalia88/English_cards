import React, {useState} from 'react';
import './List.scss';
import EditButton from "../EditButton/EditButton";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import SaveButton from '../SaveButton/SaveButton';
import CanselButton from '../CanselButton/CanselButton';
import FavoriteButton from '../ButtonFavorite/ButtonFavotite';

function TableRow(props) {
    const { english, transcription, russian } = props.word;
    const [pressed, setPressed] = useState(false);
    const handleEdit = () => {
    setPressed(!pressed);
}
const handleSave = () => {
    setPressed(!pressed);
}
const handleCansel = () => {
    setPressed(!pressed);
}
    return (
        <tr>
            <td>{pressed ? <input type="text" value={english} /> : english}</td>
            <td>{pressed ? <input type="text" value={transcription} /> : transcription}</td>
            <td>{pressed ? <input type="text" value={russian} /> : russian}</td>
            <td>
            {pressed ? (<SaveButton onClick={handleSave}/>) : (<EditButton onClick={handleEdit}/>)}
            <FavoriteButton/>
            {pressed ? (<CanselButton onClick={handleCansel}/>) : ( <ButtonRemove/>)}
            
            </td>
        </tr>
    );
    }
export default TableRow;