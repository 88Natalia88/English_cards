import React, { useState, useEffect } from "react";
import Loader from '../Loader/Loader';

const apiState = {
    words: [],
    isLoading: false,
    error: null
}
const WordContext = React.createContext(apiState);

function WordContextProvider({children}){
    const [words, setWords] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
    
        try {
            const response = await fetch('/api/words');
    
        if (!response.ok) {
            throw new Error('Something went wrong...');
        }
    
            const data = await response.json();
            setWords(data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
        };
    
            fetchData();
        }, []);
    
    if(error){
        return <p>{error.message}</p>
    }

    if (isLoading) {
        return <Loader/>;
    }
    const addWord = (newWord) => {
        setWords([...words, newWord]);
    };
    
    const updateWord = (updatedWord) => {
        setWords(words.map(word => word.id === updatedWord.id ? updatedWord : word));
    };
    
    const deleteWord = (wordId) => {
        setWords(words.filter(word => word.id !== wordId));
    };
    
    return (
        <WordContext.Provider value={{ words, isLoading, error, addWord, updateWord, deleteWord }}>
            { children }
        </WordContext.Provider>
    );
    
    

}
export {WordContextProvider, WordContext};
