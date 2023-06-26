import React, { useState, useEffect } from 'react';
import List from './components/ListCards/List';
import './App.css';
import { apiWords } from './components/Api';
//import Card from './components/Cards/Card';
import CardsList from './components/Cards/CardsList';

function App() {
  const [words, setWords] = useState([]);
  useEffect(() => {
    fetch(apiWords)
      .then(response => response.json())
      .then(data => setWords(data));
  }, []);
  if (words.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <CardsList words={words}/>
      <List words={words} />
</div>
  );
}

export default App;
