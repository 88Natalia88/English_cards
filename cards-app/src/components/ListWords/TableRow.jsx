import React, {useState, useContext} from 'react';
import './List.scss';
import EditButton from "../EditButton/EditButton";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import SaveButton from '../SaveButton/SaveButton';
import CanselButton from '../CanselButton/CanselButton';
import FavoriteButton from '../ButtonFavorite/ButtonFavotite';
import Modal from '../Modal/Modal';
import { WordContext } from '../Context/Context';


function TableRow(props) {
    const { updateWord, deleteWord } = useContext(WordContext);
    TableRow.defaultProps = {
        word: {english: 'loading', transcription: '[ˈləʊdɪŋ]', russian: 'загрузка'}
    };
    const { english, transcription, russian } = props.word || {english: 'loading', transcription: '[ˈləʊdɪŋ]', russian: 'загрузка'};
    const [data, setData] = useState({
        english: english,
        transcription: transcription,
        russian: russian
    });
    const [pressed, setPressed] = useState(false);
    const [isValid, setIsValid] = useState({
        english: true,
        transcription: true,
        russian: true
    });
    const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
        setIsValid(prevIsValid => ({
            ...prevIsValid,
            [name]: value.trim() !== ''
        }));
        setIsSaveButtonDisabled(Object.values({...data, [name]: value}).some(value => value.trim() === ''));

        setIsModalOpen(Object.values(isValid).every((valid) => valid));
        setModalMessage(Object.values(isValid).every((valid) => valid) ? 'Все успешно сохранено' : 'Произошла ошибка, что-то введено некорректно');
    };

    const handleEdit = () => {
        setPressed(!pressed);
    };

    const handleSave = () => {
        setPressed(!pressed);

        console.log('Измененные данные:', data);
        
        updateWord(data);

        setIsModalOpen(true);
        setModalMessage(Object.values(isValid).every((valid) => valid) ? 'Все успешно сохранено' : 'Произошла ошибка, что-то введено некорректно');
    };

    const handleCancel = () => {
        setPressed(!pressed);
    };

    const handleRemove = () => {
        deleteWord(props.word.id);
    };

    return (
        <tr>
            <td>{pressed ? <input type="text" name="english" value={data.english} onChange={handleInputChange} className={isValid.english ? '' : 'error'}/> : english}</td>
            <td>{pressed ? <input type="text" name="transcription" value={data.transcription} onChange={handleInputChange} className={isValid.transcription ? '' : 'error'}/> : transcription}</td>
            <td>{pressed ? <input type="text" name="russian" value={data.russian} onChange={handleInputChange} className={isValid.russian ? '' : 'error'}/> : russian}</td>
            <td>
                {pressed ? <SaveButton onClick={handleSave} disabled={isSaveButtonDisabled}/> : <EditButton onClick={handleEdit}/>}
                <FavoriteButton />
                {pressed ? <CanselButton onClick={handleCancel}/> : <ButtonRemove onClick={handleRemove} />}
            </td>
            <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleModalClose} />
        </tr>
    );
}

export default TableRow;

