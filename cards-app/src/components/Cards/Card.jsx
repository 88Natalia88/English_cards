import React, {useState} from 'react';
import { useTrail, animated } from 'react-spring';
import './Cards.scss';

function Card(props) {
    const [pressed, setPressed] = useState(false);

    const handleCheck = () => {  
        setPressed(!pressed);
        if(pressed){
            props.changeCount();
        }
        //setTimeout(() => {
            //setPressed(false);
        //}, 4000);  
    } 

    const trail = useTrail(1, {
        from: { opacity: 0, transform: 'scale(0)', translateY: -20 },
        to: { opacity: 1, transform: 'scale(1)', translateY: 0 },
        reset: true
    });

    return (
        <div className='cards'>
            <div className='btn'><button onClick={()=>{
            if (pressed){
                handleCheck();
                props.handlePrev();
            } else {
                props.handlePrev();
            }
            
            }}>prev</button></div>
                <div className='card'>
                    {trail.map((style, index) => (    
            <animated.div key={index} style={style}>    
                {pressed ? (    
                <p className="cardTranslate">{props.russian}</p>    
                ) : (    
                <>    
                    <p className="cardTitle">{props.english}</p>    
                    <p className="cardTranscription">{props.transcription}</p>    
                    <button onClick={handleCheck} ref={props.myRef}>Проверить</button>    
                </>    
                )}    
            </animated.div>    
            ))}    

                </div>
        <div className='btn'><button onClick={()=>{
            if (pressed){
                handleCheck();
                props.handleNext();
            } else {
                props.handleNext();
            }
            }}>next</button></div>    
        </div>
    );
    }
export default Card;