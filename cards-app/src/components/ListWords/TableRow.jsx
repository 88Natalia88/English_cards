import React, {useState} from 'react';
import './List.scss';
import EditButton from "../EditButton/EditButton";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import SaveButton from '../SaveButton/SaveButton';
import CanselButton from '../CanselButton/CanselButton';
import FavoriteButton from '../ButtonFavorite/ButtonFavotite';

function TableRow(props) {
    TableRow.defaultProps = {
        word: {english: 'loading', transcription: '[ˈləʊdɪŋ]', russian: 'загрузка'}
    };
    const { english, transcription, russian } = props.word || {english: 'loading', transcription: '[ˈləʊdɪŋ]', russian: 'загрузка'};
    const [dataEnglish, setDataEnglish] = useState(props.word);
    const [dataTranscription, setDataTranscription] = useState(props.word);
    const [dataRussia, setDataRussia] = useState(props.word);
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
            <td>{pressed ? <input type="text" value={dataEnglish.english} onChange={e => setDataEnglish(e.target.value)} /> : english}</td>
            <td>{pressed ? <input type="text" value={dataTranscription.transcription} onChange={e => setDataTranscription(e.target.value)} /> : transcription}</td>
            <td>{pressed ? <input type="text" value={dataRussia.russian} onChange={e => setDataRussia(e.target.value)} /> : russian}</td>
            <td>
            {pressed ? (<SaveButton onClick={handleSave}/>) : (<EditButton onClick={handleEdit}/>)}
            <FavoriteButton/>
            {pressed ? (<CanselButton onClick={handleCansel}/>) : ( <ButtonRemove/>)}
            
            </td>
        </tr>
    );
    }
export default TableRow;