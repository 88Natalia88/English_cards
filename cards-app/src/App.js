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
import WordsStore from './stores/WordsStore';
//import stores from './stores'

function App() {

  return (
    <div className="App">
      <Provider {...WordsStore}>
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