import React, {useState, useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import './Cards.scss';

function Card(props) {
    const [pressed, setPressed] = useState(false);
    const [showContent, setShowContent] = useState(true);

    const handleCheck = () => {  
        setPressed(!pressed);
        if(pressed){
            props.changeCount();
        }
        //setTimeout(() => {
            //setPressed(false);
        //}, 4000);  
    } 
    const handleAnimation = useSpring({
        opacity: showContent ? 1 : 1,
        transform: showContent ? 'scale(1)' : 'scale(1)',
        translateY: showContent ? 0 : 20,
        config: { duration: 400 }
    });
    
    useEffect(() => {
        setShowContent(!pressed);
    }, [pressed]);

    return (
        <div className="cards">
            <div className="btn">
                <button onClick={() => {
                    if (pressed) {
                        handleCheck();
                        props.handlePrev();
                    } else {
                        props.handlePrev();
                    }
                }}>prev</button>
            </div>
            <div className="card">
            <animated.div style={handleAnimation}>
                {pressed ? (
                    <p className="cardTranslate">{props.russian}</p>) : (
                    <>
                    <p className="cardTitle">{props.english}</p>
                    <p className="cardTranscription">{props.transcription}</p>
                    <button onClick={handleCheck} ref={props.myRef}>Проверить</button>
                    </>
                )}
            </animated.div>
            </div>
            <div className="btn">
                <button onClick={() => {
                    if (pressed) {
                        handleCheck();
                        props.handleNext();
                    } else {
                        props.handleNext();
                    }
                }}>next</button>
            </div>
        </div>
        );
    }
export default Card;