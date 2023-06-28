import React, {useState} from "react";
//import { useTrail, animated } from 'react-spring';
import './Cards.scss';
import Card from './Card';

function CardsList(props){
    const {cardIndex} = props;
    const [index, setIndex] = useState (cardIndex ? cardIndex : 0); 
    const handleNext = () => {
        if (index < props.words.length - 1) {
            setIndex(index + 1);
        }
    };
    
    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };
/*
        const [open] = useState(true);
        const trail = useTrail(props.words.length, {

        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { tension: 120, friction: 14 },
        reset: open,

    });*/
    const word = props.words[index];
    //console.log(word)

    return (
            <div className="card-container">

                <Card
                    english={word.english}
                    transcription={word.transcription}
                    russian={word.russian} 
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />

        </div>
    );
}
export default CardsList;