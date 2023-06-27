import React, {useState} from 'react';
import './List.scss';
import EditButton from "../EditButton/EditButton";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import SaveButton from '../SaveButton/SaveButton';
import CanselButton from '../CanselButton/CanselButton';
import FavoriteButton from '../ButtonFavorite/ButtonFavotite';

function TableRow(props) {
    const { english, transcription, russian } = props.word;
    const [dataValue, setDataValue] = useState(props.word);
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
            <td>{pressed ? <input type="text" value={dataValue.english} onChange={e => setDataValue(e.target.value)} /> : english}</td>
            <td>{pressed ? <input type="text" value={dataValue.transcription} onChange={e => setDataValue(e.target.value)} /> : transcription}</td>
            <td>{pressed ? <input type="text" value={dataValue.russian} onChange={e => setDataValue(e.target.value)} /> : russian}</td>
            <td>
            {pressed ? (<SaveButton onClick={handleSave}/>) : (<EditButton onClick={handleEdit}/>)}
            <FavoriteButton/>
            {pressed ? (<CanselButton onClick={handleCansel}/>) : ( <ButtonRemove/>)}
            
            </td>
        </tr>
    );
    }
export default TableRow;