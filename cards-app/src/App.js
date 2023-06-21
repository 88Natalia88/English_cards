import React, { useState, useEffect } from 'react';
import List from './components/List_cards/List';
import './App.css';
import { apiWords } from './components/Api';
import Cards from './components/Cards/Cards';

function App() {
  const [words, setWords] = useState([]);
  useEffect(() => {
    fetch(apiWords)
      .then(response => response.json())
      .then(data => setWords(data));
  }, []);
  return (
    <div className="App">
    {
        words.map((card) => 
        <Cards key={card.id} english={card.english} transcription={card.transcription} russian={card.russian}/>
        )
      }
      <List words={words} />
</div>
  );
}

export default App;
