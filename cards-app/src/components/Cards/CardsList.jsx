import React, {useState} from "react";
import './Cards.scss';
import Card from './Card';

function CardsList(props){
    const {cardIndex} = props;
    const [index, setIndex] = useState (cardIndex ? cardIndex : 0);
    const [pressedIndexes, setPressedIndexes] = useState([]);
   // const [pressed, setPressed] = useState(false);
    const handleNext = () => {
        if (index < props.words.length - 1) {
            setIndex(index + 1);
            //setPressed(false);
        }
    };
    
    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
            //setPressed(false);
        }
    };
    const word = props.words[index];
    console.log(word)
    /*const handleCheck = () => {
        if (!pressedIndexes.includes(index)) {
            setPressedIndexes([...pressedIndexes, index]);
        }      
    }*/
    return (
        <div>
            <Card
                english={word.english}
                transcription={word.transcription}
                russian={word.russian}
                handleNext={handleNext}
                handlePrev={handlePrev}
                //pressed={pressedIndexes.includes(index)}
                //handleCheck={handleCheck}
            />
        </div>
        );
}
export default CardsList;