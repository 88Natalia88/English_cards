import React, {useState} from 'react';
import './Cards.scss';

function Card(props) {
    const [pressed, setPressed] = useState(false);
    const handleCheck = () => {  
        setPressed(!pressed);
        setTimeout(() => {
            setPressed(false);
        }, 4000);  
    } 
    return (
        <div className='cards'>
        <div className='btn'><button onClick={props.handlePrev}>prev</button></div>
                <div className='card'>
                    {pressed ? '' : <p className='cardTitle'>{props.english}</p>}
                    {pressed ? '' : <p className='cardTranscription'>{props.transcription}</p>}
                    {pressed ? <p className='cardTranslate'>{props.russian}</p> : <button onClick={handleCheck}>Проверить</button>}
                </div>
        <div className='btn'><button onClick={props.handleNext}>next</button></div>    
        </div>
    );
    }
export default Card;