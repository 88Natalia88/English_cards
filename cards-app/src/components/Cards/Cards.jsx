import React, {useState} from 'react';
import './Cards.scss';

function Cards(props) {
    //const { english, transcription, russian } = props.word;
    const [pressed, setPressed] = useState(false);
    const handleCheck = () => {
        setPressed(!pressed);
    }
    return (
        <div className='card'>
        {pressed ? '' : <p className='cardTitle'>{props.english}</p>}
        {pressed ? '' : <p className='cardTranscription'>{props.transcription}</p>}
        {pressed ? <p className='cardTranslate'>{props.russian}</p> : <button onClick={handleCheck}>Проверить</button>}
    </div>
    );
    }
export default Cards;