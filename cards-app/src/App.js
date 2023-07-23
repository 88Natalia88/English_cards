import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';  
import List from './components/ListWords/List';
import './App.css';
import { apiWords } from './components/Api';
import CardsList from './components/Cards/CardsList';
//import Training from './components/Training/Training';
import ErrorPage from './components/ErrorPage/ErrorPage';

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
    <Router>
      <Header/>
      <Routes>
        <Route path="/English_cards" element={<List words={words}/>}/>
        <Route path="/English_cards/game" element={<CardsList words={words}/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router> 
    </div> 
  );
}

export default App;
