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

    
    const addWord = async (newWord) => {
        try {
            const response = await fetch("/api/words", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newWord),
            });
            if (response.ok) {
                const data = await response.json();
                setWords((words) => [...words, data]);
            } else {
                throw new Error("Something went wrong...");
            }
        } catch (error) {
            setError(error);
        }
    };
    
    const deleteWord = async (wordId) => {
        try {
            const response = await fetch(`/api/words/${wordId}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setWords((words) => words.filter((word) => word.id !== wordId));
            } else {
                throw new Error("Something went wrong...");
            }
        } catch (error) {
            setError(error);
        }
    };
    
    const updateWord = async (updatedWord) => {
        try {
            const response = await fetch(`/api/words/${updatedWord.id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedWord),
            });
            if (response.ok) {
                const data = await response.json();
                setWords((words) =>
                    words.map((word) => (word.id === data.id ? data : word))
                );
            } else {
                throw new Error("Something went wrong...");
            }
        } catch (error) {
            setError(error);
        }
    };
    
    return (
        <WordContext.Provider value={{ words, isLoading, error, addWord, updateWord, deleteWord }}>
            { children }
        </WordContext.Provider>
    );
    
    

}
export {WordContextProvider, WordContext};
