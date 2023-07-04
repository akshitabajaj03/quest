import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  return (
   
      <Router>
      <div className="App">
      <Routes>
          <Route exact path="/search" element={<SearchPage/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
      </Router>
  );
}

export default App;
