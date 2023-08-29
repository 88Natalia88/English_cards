import './List.scss';
import React, { useContext, useState } from 'react';
import SaveButton from '../SaveButton/SaveButton';
import { WordContext } from '../Context/Context';

function NewWordRow() {
    const { addWord } = useContext(WordContext);

    const [data, setData] = useState({
        english: "",
        transcription: "",
        russian: ""
    });

    const [isValid, setIsValid] = useState({
        english: true,
        transcription: true,
        russian: true
    });

    const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

    const validations = {
        english: /^[a-zA-Z\s-]+$/,
        transcription: /^\[[',-\sa-zA-Z0-9]+\]$/,
        russian: /^[а-яА-ЯёЁ\s-]+$/
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));

        setIsValid(prevIsValid => ({
            ...prevIsValid,
            [name]: validations[name].test(value)
        }));

        const isAnyFieldEmpty = Object.values(data).some(value => value.trim() === '');
        const isAnyFieldInvalid = Object.values(isValid).some(valid => !valid);
        setIsSaveButtonDisabled(isAnyFieldEmpty || isAnyFieldInvalid);
    };

    const handleAdd = () => {
        if (!isSaveButtonDisabled) {
            addWord(data);
            setData({
                english: "",
                transcription: "",
                russian: ""
            });
        }
    };

    return (
        <tr>
            <td><input type="text" name="english" value={data.english} onChange={handleInputChange} className={isValid.english ? '' : 'error'} /></td>
            <td><input type="text" name="transcription" value={data.transcription} onChange={handleInputChange} className={isValid.transcription ? '' : 'error'} /></td>
            <td><input type="text" name="russian" value={data.russian} onChange={handleInputChange} className={isValid.russian ? '' : 'error'} /></td>
            <td>
                <SaveButton onClick={handleAdd} disabled={isSaveButtonDisabled} />
            </td>
        </tr>
    );
}

export default NewWordRow;

