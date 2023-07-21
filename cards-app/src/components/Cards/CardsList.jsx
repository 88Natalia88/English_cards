import React, {useCallback, useState} from "react";
import './Cards.scss';
import Card from './Card';

function CardsList(props){
    const {cardIndex} = props;
    const [index, setIndex] = useState (cardIndex ? cardIndex : 0); 
    const [count, setCount] = useState (0);
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

    const changeCount = () =>{
        setCount(count + 1);
    }

    const word = props.words[index];
    //console.log(word)

    return (
            <div className="card-container">
                <p>Вы подсмотрели {count} карточек</p>
                <Card
                    english={word.english}
                    transcription={word.transcription}
                    russian={word.russian} 
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    changeCount={changeCount}
                />

        </div>
    );
}
export default CardsList;