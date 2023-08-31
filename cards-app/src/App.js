import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';  
import List from './components/ListWords/List';
import './App.css';
import { Provider } from 'mobx-react';
import CardsList from './components/Cards/CardsList';
//import Training from './components/Training/Training';
import ErrorPage from './components/ErrorPage/ErrorPage';
import WordsStore from './components/MobX/WordsStore';

function App() {
  const words = {
    wordStore: new WordsStore()
  }
  return (
    <div className="App">
      <Provider {...words}>
    <Router>
      <Header/>
      <Routes>
        <Route path="/English_cards" element={<List />}/>
        <Route path="/English_cards/game" element={<CardsList />}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router> 
    </Provider>
    </div> 
  );
}

export default App;